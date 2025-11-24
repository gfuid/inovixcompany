import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Palette, Upload, Download, ArrowLeft,
  Pipette, RefreshCw, Layers, Sliders
} from "lucide-react";

const ColorKeyRemover = () => {
  // --- State ---
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  // Chroma Settings
  const [keyColor, setKeyColor] = useState("#00ff00"); // Default Green
  const [tolerance, setTolerance] = useState(100); // Sensitivity
  const [smoothness, setSmoothness] = useState(20); // Edge Feathering
  const [isProcessing, setIsProcessing] = useState(false);

  const canvasRef = useRef(null);

  // --- Handlers ---
  const handleUpload = (e) => {
    const selected = e.target.files?.[0];
    if (selected) {
      setFile(selected);
      setPreview(URL.createObjectURL(selected));
    }
  };

  // --- Chroma Key Logic ---
  useEffect(() => {
    if (!preview || !canvasRef.current) return;
    processChromaKey();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [preview, keyColor, tolerance, smoothness]);

  const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : { r: 0, g: 255, b: 0 };
  };

  const processChromaKey = () => {
    setIsProcessing(true);
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.src = preview;

    img.onload = () => {
      // 1. Setup Canvas
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);

      // 2. Get Pixel Data
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      const target = hexToRgb(keyColor);
      const tol = tolerance;
      // const smooth = smoothness; // Simple implementation skips complex smoothing for performance

      // 3. Loop through pixels
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];

        // Calculate Euclidean distance between current pixel and key color
        // Distance range is 0 to ~441
        const dist = Math.sqrt(
          (r - target.r) ** 2 +
          (g - target.g) ** 2 +
          (b - target.b) ** 2
        );

        if (dist < tol) {
          // If within tolerance, make transparent
          // Simple transparency:
          data[i + 3] = 0;

          // Optional: For smoother edges, you can modulate alpha based on distance
          // but for basic green screen, hard cut is often cleaner in JS.
        }
      }

      // 4. Put data back
      ctx.putImageData(imageData, 0, 0);
      setIsProcessing(false);
    };
  };

  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const link = document.createElement("a");
      link.download = `chroma_key_${file.name.split('.')[0]}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-rose-500/30 pb-24">

      {/* --- Header --- */}
      <div className="relative pt-32 pb-12 px-6">
        <div className="absolute inset-0 opacity-20 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(#333 1px, transparent 1px)", backgroundSize: "32px 32px" }}>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <Link to="/tools" className="inline-flex items-center gap-2 text-gray-400 hover:text-rose-400 mb-6 transition-colors text-sm">
            <ArrowLeft size={16} /> Back to Tools
          </Link>

          <div className="flex items-center gap-6 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-rose-500/10 text-rose-400 flex items-center justify-center border border-rose-500/20 shadow-[0_0_30px_rgba(244,63,94,0.15)]">
              <Palette size={32} />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-2">Color Key <span className="text-rose-400">Remove</span></h1>
              <p className="text-gray-400 max-w-xl text-lg">Professional Green Screen removal. Pick a color and vanish it instantly.</p>
            </div>
          </div>
        </div>
      </div>

      {/* --- Main Tool Area --- */}
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-12 gap-8">

        {/* Left: Controls */}
        <div className="lg:col-span-4 space-y-6">

          {/* Upload */}
          {!file && (
            <div className="relative group h-[200px]">
              <input type="file" accept="image/*" onChange={handleUpload} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20" />
              <div className="h-full border-2 border-dashed border-white/10 hover:border-rose-400 hover:bg-zinc-900 rounded-[2rem] flex flex-col items-center justify-center text-center transition-all duration-300">
                <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center mb-4 text-gray-400 group-hover:text-rose-400">
                  <Upload size={20} />
                </div>
                <p className="font-bold text-white mb-1">Upload Image</p>
                <p className="text-xs text-gray-500">Green/Blue Screen Images</p>
              </div>
            </div>
          )}

          {file && (
            <div className="bg-zinc-900/50 border border-white/10 rounded-[2rem] p-6 space-y-6">

              <div className="flex items-center justify-between">
                <h3 className="text-rose-400 font-bold uppercase tracking-wider text-xs flex items-center gap-2">
                  <Sliders size={16} /> Adjustments
                </h3>
                <button onClick={() => { setFile(null); setPreview(null); }} className="text-xs text-gray-500 hover:text-white underline">Change Image</button>
              </div>

              {/* Key Color Picker */}
              <div>
                <label className="text-xs text-gray-500 uppercase font-bold mb-2 flex items-center gap-2">
                  <Pipette size={14} /> Key Color (To Remove)
                </label>
                <div className="flex gap-3 items-center">
                  <input
                    type="color"
                    value={keyColor}
                    onChange={(e) => setKeyColor(e.target.value)}
                    className="w-12 h-12 rounded-xl bg-transparent cursor-pointer border-0 p-0"
                  />
                  <div className="flex gap-2">
                    <button onClick={() => setKeyColor("#00ff00")} className="px-3 py-1 bg-green-500/20 text-green-400 border border-green-500/50 rounded-lg text-xs font-bold hover:bg-green-500 hover:text-black transition-colors">Green</button>
                    <button onClick={() => setKeyColor("#0000ff")} className="px-3 py-1 bg-blue-500/20 text-blue-400 border border-blue-500/50 rounded-lg text-xs font-bold hover:bg-blue-500 hover:text-black transition-colors">Blue</button>
                    <button onClick={() => setKeyColor("#ffffff")} className="px-3 py-1 bg-white/10 text-white border border-white/30 rounded-lg text-xs font-bold hover:bg-white hover:text-black transition-colors">White</button>
                  </div>
                </div>
              </div>

              <div className="w-full h-px bg-white/10" />

              {/* Sliders */}
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-xs mb-2">
                    <span className="text-gray-400 font-bold">Similarity / Tolerance</span>
                    <span className="text-white font-mono">{Math.round((tolerance / 200) * 100)}%</span>
                  </div>
                  <input
                    type="range"
                    min="1" max="250"
                    value={tolerance}
                    onChange={(e) => setTolerance(Number(e.target.value))}
                    className="w-full h-2 bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-rose-500"
                  />
                  <p className="text-[10px] text-gray-600 mt-1">Increase if parts of background remain.</p>
                </div>
              </div>

            </div>
          )}
        </div>

        {/* Right: Preview Area */}
        <div className="lg:col-span-8">
          <div className="bg-zinc-900 border border-white/10 rounded-[2rem] h-full min-h-[500px] flex flex-col relative overflow-hidden">

            {/* Header */}
            <div className="p-6 border-b border-white/5 flex justify-between items-center bg-black/20">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Live Result</span>
              <div className="flex gap-2">
                <div className="w-4 h-4 rounded-full bg-white border border-gray-300"></div>
                <div className="w-4 h-4 rounded-full bg-gray-300 border border-gray-300"></div>
              </div>
            </div>

            {/* Canvas Container */}
            <div className="flex-1 p-8 flex items-center justify-center bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-fixed overflow-auto">
              {!file ? (
                <div className="text-center opacity-30">
                  <Layers size={64} className="mx-auto mb-4" />
                  <p className="text-xl font-bold">Waiting for image...</p>
                </div>
              ) : (
                <div className="relative shadow-2xl rounded-lg overflow-hidden border border-white/10 max-w-full">
                  {/* The Canvas does the real work */}
                  <canvas ref={canvasRef} className="max-w-full h-auto max-h-[600px] block" />

                  {isProcessing && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <RefreshCw className="animate-spin text-rose-400" />
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Footer Actions */}
            {file && (
              <div className="p-6 border-t border-white/5 bg-black/40 flex justify-between items-center">
                <div className="text-xs text-gray-500">Output: PNG with Transparency</div>
                <button
                  onClick={handleDownload}
                  className="bg-rose-600 hover:bg-rose-500 text-white font-bold py-3 px-8 rounded-xl flex items-center gap-2 transition-transform hover:scale-105 shadow-lg shadow-rose-900/20"
                >
                  <Download size={18} /> Download
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

    </div>
  );
};

export default ColorKeyRemover;