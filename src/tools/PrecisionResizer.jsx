import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Upload, Download, Scissors, ArrowLeft,
  Lock, Unlock, RefreshCw, Instagram, Twitter,
  Linkedin, Facebook, Smartphone, Monitor
} from "lucide-react";

const PrecisionResizer = () => {
  // --- State ---
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [originalDims, setOriginalDims] = useState({ w: 0, h: 0 });

  // Resizing State
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [locked, setLocked] = useState(true); // Lock Aspect Ratio
  const [aspectRatio, setAspectRatio] = useState(1);

  const canvasRef = useRef(null);

  // --- Handlers ---
  const handleUpload = (e) => {
    const selected = e.target.files?.[0];
    if (selected) {
      const url = URL.createObjectURL(selected);
      setFile(selected);
      setPreview(url);

      // Get Original Dimensions
      const img = new Image();
      img.src = url;
      img.onload = () => {
        setOriginalDims({ w: img.width, h: img.height });
        setWidth(img.width);
        setHeight(img.height);
        setAspectRatio(img.width / img.height);
      };
    }
  };

  // Handle Dimension Changes
  const handleWidthChange = (e) => {
    const val = Number(e.target.value);
    setWidth(val);
    if (locked) {
      setHeight(Math.round(val / aspectRatio));
    }
  };

  const handleHeightChange = (e) => {
    const val = Number(e.target.value);
    setHeight(val);
    if (locked) {
      setWidth(Math.round(val * aspectRatio));
    }
  };

  // Social Presets
  const applyPreset = (w, h) => {
    // If we want to maintain aspect ratio but fit into this box (contain)
    // Or strictly force these dimensions:
    setLocked(false); // Unlock to force preset dimensions
    setWidth(w);
    setHeight(h);
    // Recalculate aspect ratio for future locking
    setAspectRatio(w / h);
  };

  const handleDownload = () => {
    if (!preview || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.src = preview;

    img.onload = () => {
      canvas.width = width;
      canvas.height = height;

      // High quality scaling
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";

      ctx.drawImage(img, 0, 0, width, height);

      const link = document.createElement("a");
      link.download = `resized-${width}x${height}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    };
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-pink-500/30 pb-24">

      {/* --- Header --- */}
      <div className="relative pt-32 pb-12 px-6">
        <div className="absolute inset-0 opacity-20 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(#333 1px, transparent 1px)", backgroundSize: "32px 32px" }}>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <Link to="/tools" className="inline-flex items-center gap-2 text-gray-400 hover:text-pink-400 mb-6 transition-colors text-sm">
            <ArrowLeft size={16} /> Back to Tools
          </Link>

          <div className="flex items-center gap-6 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-pink-500/10 text-pink-400 flex items-center justify-center border border-pink-500/20 shadow-[0_0_30px_rgba(236,72,153,0.15)]">
              <Scissors size={32} />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-2">Precision <span className="text-pink-400">Resizer</span></h1>
              <p className="text-gray-400 max-w-xl text-lg">Pixel-perfect scaling for social media covers, posts, and profile pictures.</p>
            </div>
          </div>
        </div>
      </div>

      {/* --- Main Tool Area --- */}
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-12 gap-8">

        {/* Left: Controls */}
        <div className="lg:col-span-4 space-y-6">

          {/* Upload Area */}
          {!file && (
            <div className="relative group">
              <input type="file" accept="image/*" onChange={handleUpload} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20" />
              <div className="border-2 border-dashed border-white/10 hover:border-pink-400 hover:bg-zinc-900 rounded-[2rem] p-10 text-center transition-all duration-300">
                <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400 group-hover:text-pink-400">
                  <Upload size={20} />
                </div>
                <p className="font-bold text-white mb-1">Upload Image</p>
                <p className="text-xs text-gray-500">JPG, PNG, WEBP</p>
              </div>
            </div>
          )}

          {file && (
            <div className="bg-zinc-900/50 border border-white/10 rounded-[2rem] p-6 space-y-6">

              {/* Header inside controls */}
              <div className="flex items-center justify-between">
                <span className="text-pink-400 font-bold uppercase tracking-wider text-xs">Dimensions</span>
                <button onClick={() => { setFile(null); setPreview(null); }} className="text-xs text-gray-500 hover:text-white underline flex items-center gap-1">
                  <RefreshCw size={12} /> Reset
                </button>
              </div>

              {/* Dimension Inputs */}
              <div className="flex items-end gap-2">
                <div className="flex-1">
                  <label className="text-[10px] text-gray-500 uppercase font-bold mb-1 block">Width (px)</label>
                  <input
                    type="number"
                    value={width}
                    onChange={handleWidthChange}
                    className="w-full bg-black/50 border border-white/10 rounded-xl p-3 text-white focus:border-pink-500 outline-none font-mono"
                  />
                </div>

                {/* Lock Toggle */}
                <button
                  onClick={() => {
                    setLocked(!locked);
                    if (!locked) setAspectRatio(width / height); // Re-sync ratio when locking
                  }}
                  className={`mb-3 p-2 rounded-lg transition-colors ${locked ? "text-pink-400 bg-pink-500/10" : "text-gray-500 hover:text-white"}`}
                  title={locked ? "Unlock Aspect Ratio" : "Lock Aspect Ratio"}
                >
                  {locked ? <Lock size={18} /> : <Unlock size={18} />}
                </button>

                <div className="flex-1">
                  <label className="text-[10px] text-gray-500 uppercase font-bold mb-1 block">Height (px)</label>
                  <input
                    type="number"
                    value={height}
                    onChange={handleHeightChange}
                    className="w-full bg-black/50 border border-white/10 rounded-xl p-3 text-white focus:border-pink-500 outline-none font-mono"
                  />
                </div>
              </div>

              <div className="w-full h-px bg-white/10" />

              {/* Social Presets */}
              <div>
                <label className="text-xs text-gray-500 uppercase font-bold mb-3 block">Quick Presets</label>
                <div className="grid grid-cols-2 gap-2">
                  <button onClick={() => applyPreset(1080, 1080)} className="flex items-center gap-3 p-3 bg-black/30 hover:bg-pink-500/20 border border-white/5 hover:border-pink-500/50 rounded-xl transition-all text-left group">
                    <Instagram size={18} className="text-gray-400 group-hover:text-pink-400" />
                    <div>
                      <p className="text-sm font-bold text-gray-200">Square</p>
                      <p className="text-[10px] text-gray-500">1080 x 1080</p>
                    </div>
                  </button>

                  <button onClick={() => applyPreset(1080, 1920)} className="flex items-center gap-3 p-3 bg-black/30 hover:bg-pink-500/20 border border-white/5 hover:border-pink-500/50 rounded-xl transition-all text-left group">
                    <Smartphone size={18} className="text-gray-400 group-hover:text-pink-400" />
                    <div>
                      <p className="text-sm font-bold text-gray-200">Story</p>
                      <p className="text-[10px] text-gray-500">1080 x 1920</p>
                    </div>
                  </button>

                  <button onClick={() => applyPreset(1200, 628)} className="flex items-center gap-3 p-3 bg-black/30 hover:bg-pink-500/20 border border-white/5 hover:border-pink-500/50 rounded-xl transition-all text-left group">
                    <Twitter size={18} className="text-gray-400 group-hover:text-pink-400" />
                    <div>
                      <p className="text-sm font-bold text-gray-200">Post</p>
                      <p className="text-[10px] text-gray-500">1200 x 628</p>
                    </div>
                  </button>

                  <button onClick={() => applyPreset(1500, 500)} className="flex items-center gap-3 p-3 bg-black/30 hover:bg-pink-500/20 border border-white/5 hover:border-pink-500/50 rounded-xl transition-all text-left group">
                    <Twitter size={18} className="text-gray-400 group-hover:text-pink-400" />
                    <div>
                      <p className="text-sm font-bold text-gray-200">Header</p>
                      <p className="text-[10px] text-gray-500">1500 x 500</p>
                    </div>
                  </button>

                  <button onClick={() => applyPreset(1200, 630)} className="flex items-center gap-3 p-3 bg-black/30 hover:bg-pink-500/20 border border-white/5 hover:border-pink-500/50 rounded-xl transition-all text-left group">
                    <Facebook size={18} className="text-gray-400 group-hover:text-pink-400" />
                    <div>
                      <p className="text-sm font-bold text-gray-200">Shared</p>
                      <p className="text-[10px] text-gray-500">1200 x 630</p>
                    </div>
                  </button>

                  <button onClick={() => applyPreset(1920, 1080)} className="flex items-center gap-3 p-3 bg-black/30 hover:bg-pink-500/20 border border-white/5 hover:border-pink-500/50 rounded-xl transition-all text-left group">
                    <Monitor size={18} className="text-gray-400 group-hover:text-pink-400" />
                    <div>
                      <p className="text-sm font-bold text-gray-200">Full HD</p>
                      <p className="text-[10px] text-gray-500">1920 x 1080</p>
                    </div>
                  </button>
                </div>
              </div>

            </div>
          )}
        </div>

        {/* Right: Preview */}
        <div className="lg:col-span-8">
          <div className="bg-zinc-900 border border-white/10 rounded-[2rem] h-full min-h-[500px] flex flex-col relative overflow-hidden">

            {/* Header */}
            <div className="p-6 border-b border-white/5 flex justify-between items-center bg-black/20">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Resizing Preview</span>
              {file && (
                <span className="text-xs font-mono text-pink-400">
                  {width} x {height} px
                </span>
              )}
            </div>

            {/* Canvas Container */}
            <div className="flex-1 p-8 flex items-center justify-center bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-fixed overflow-auto">
              {!file ? (
                <div className="text-center opacity-30">
                  <Scissors size={64} className="mx-auto mb-4" />
                  <p className="text-xl font-bold">Upload an image to resize</p>
                </div>
              ) : (
                <div
                  className="relative shadow-2xl transition-all duration-300 ease-out"
                  style={{
                    // Visual representation only (CSS resizing)
                    width: width > 600 ? '100%' : `${width}px`,
                    maxWidth: '100%',
                    aspectRatio: `${width} / ${height}`
                  }}
                >
                  <img src={preview} alt="Preview" className="w-full h-full object-fill rounded-lg border border-white/10" />
                </div>
              )}
              {/* Hidden Canvas for Processing */}
              <canvas ref={canvasRef} className="hidden" />
            </div>

            {/* Footer Actions */}
            {file && (
              <div className="p-6 border-t border-white/5 bg-black/40 flex justify-between items-center">
                <div className="text-xs text-gray-500">
                  Original: {originalDims.w} x {originalDims.h}
                </div>
                <button
                  onClick={handleDownload}
                  className="bg-pink-600 hover:bg-pink-500 text-white font-bold py-3 px-8 rounded-xl flex items-center gap-2 transition-transform hover:scale-105 shadow-lg shadow-pink-900/20"
                >
                  <Download size={18} /> Resize & Download
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

    </div>
  );
};

export default PrecisionResizer;