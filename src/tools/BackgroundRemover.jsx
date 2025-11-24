import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Layers, Upload, Download, ArrowLeft,
  Image as ImageIcon, RefreshCw, Sparkles, CheckCircle2
} from "lucide-react";

const BackgroundRemover = () => {
  // --- State ---
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [processedImage, setProcessedImage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  // --- Handlers ---
  const handleUpload = (e) => {
    const selected = e.target.files?.[0];
    if (selected) {
      setFile(selected);
      setPreview(URL.createObjectURL(selected));
      setProcessedImage(null);
      processImage(selected);
    }
  };

  // --- AI Simulation Logic ---
  const processImage = (inputFile) => {
    setIsProcessing(true);

    // --- REAL IMPLEMENTATION NOTE ---
    // In a real production app, you would send 'inputFile' to a backend API here.
    // Example: const formData = new FormData(); formData.append('image', inputFile);
    // const response = await fetch('/api/remove-bg', { method: 'POST', body: formData });
    // const blob = await response.blob();

    // --- SIMULATION ---
    // For this UI demo, we simulate a 3-second delay and then
    // pretend the original image is the processed one.
    setTimeout(() => {
      // In reality, this URL would come from your API response
      setProcessedImage(URL.createObjectURL(inputFile));
      setIsProcessing(false);
    }, 3000);
  };

  const resetTool = () => {
    setFile(null);
    setPreview(null);
    setProcessedImage(null);
  };

  const handleDownload = () => {
    if (!processedImage) return;
    const link = document.createElement("a");
    link.href = processedImage;
    // Ensure download is PNG for transparency support
    link.download = `transparent_${file.name.split('.')[0]}.png`;
    link.click();
  };

  // Cleanup URLs to prevent memory leaks
  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
      if (processedImage) URL.revokeObjectURL(processedImage);
    };
  }, [preview, processedImage]);


  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-indigo-500/30 pb-24">

      {/* --- Header --- */}
      <div className="relative pt-32 pb-12 px-6">
        <div className="absolute inset-0 opacity-20 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(#333 1px, transparent 1px)", backgroundSize: "32px 32px" }}>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <Link to="/tools" className="inline-flex items-center gap-2 text-gray-400 hover:text-indigo-400 mb-6 transition-colors text-sm">
            <ArrowLeft size={16} /> Back to Tools
          </Link>

          <div className="flex items-center gap-6 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center border border-indigo-500/20 shadow-[0_0_30px_rgba(99,102,241,0.15)]">
              <Layers size={32} />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-2">BG <span className="text-indigo-400">Remover</span></h1>
              <p className="text-gray-400 max-w-xl text-lg">Instantly isolate subjects and create transparent backgrounds using AI.</p>
            </div>
          </div>
        </div>
      </div>

      {/* --- Main Tool Area --- */}
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-12 gap-8">

        {/* Left: Upload & Status */}
        <div className="lg:col-span-4 space-y-6">

          {!file ? (
            // Upload State
            <div className="relative group h-[300px]">
              <input type="file" accept="image/png, image/jpeg, image/webp" onChange={handleUpload} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20" />
              <div className="h-full border-2 border-dashed border-white/10 hover:border-indigo-400 hover:bg-zinc-900 rounded-[2rem] flex flex-col items-center justify-center text-center transition-all duration-300">
                <div className="w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center mb-6 text-gray-400 group-hover:text-indigo-400 group-hover:scale-110 transition-all relative">
                  <ImageIcon size={28} />
                  <Sparkles size={16} className="absolute top-3 right-3 text-indigo-500 animate-pulse" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Upload Image</h3>
                <p className="text-sm text-gray-500 max-w-xs">JPG, PNG, or WEBP. <br />Clear subjects work best.</p>
              </div>
            </div>
          ) : (
            // File Selected State
            <div className="bg-zinc-900/50 border border-white/10 rounded-[2rem] p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 overflow-hidden">
                  <img src={preview} alt="Original" className="w-12 h-12 rounded-xl object-cover border border-white/10" />
                  <div>
                    <p className="text-sm font-bold text-white truncate max-w-[120px]">{file.name}</p>
                    <p className="text-xs text-gray-500">Original File</p>
                  </div>
                </div>
                <button onClick={resetTool} disabled={isProcessing} className="text-xs text-gray-500 hover:text-white underline disabled:opacity-50">
                  Change
                </button>
              </div>

              {isProcessing && (
                <div className="bg-indigo-900/20 border border-indigo-500/20 rounded-xl p-4 flex items-center gap-3 animate-pulse">
                  <RefreshCw size={20} className="text-indigo-400 animate-spin" />
                  <p className="text-indigo-300 text-sm font-medium">AI is processing image...</p>
                </div>
              )}

              {processedImage && !isProcessing && (
                <div className="bg-emerald-900/20 border border-emerald-500/20 rounded-xl p-4 flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-emerald-400" />
                  <p className="text-emerald-300 text-sm font-medium">Background Removed!</p>
                </div>
              )}
            </div>
          )}

          {/* Info Note */}
          <div className="bg-zinc-900/50 p-4 rounded-2xl border border-white/5 text-xs text-gray-400">
            <p><span className="text-indigo-400 font-bold">Note:</span> High-resolution images with complex hair or fur may take longer to process.</p>
          </div>
        </div>

        {/* Right: Result Viewer */}
        <div className="lg:col-span-8">
          <div className="bg-zinc-900 border border-white/10 rounded-[2rem] h-full min-h-[500px] flex flex-col relative overflow-hidden">

            {/* Header */}
            <div className="p-6 border-b border-white/5 flex justify-between items-center bg-black/20">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Result Preview</span>
              <div className="flex gap-2">
                {/* Circles indicating transparency */}
                <div className="w-4 h-4 rounded-full bg-white border border-gray-300"></div>
                <div className="w-4 h-4 rounded-full bg-gray-300 border border-gray-300"></div>
              </div>
            </div>

            {/* Canvas Container - Checkerboard Background */}
            <div className="flex-1 p-8 flex items-center justify-center bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-fixed overflow-hidden relative">

              {!file && (
                <div className="text-center opacity-30">
                  <Layers size={64} className="mx-auto mb-4" />
                  <p className="text-xl font-bold">Ready to process</p>
                </div>
              )}

              {/* Processing State Overlay */}
              {isProcessing && preview && (
                <div className="relative max-w-full max-h-[500px] rounded-xl overflow-hidden">
                  <img src={preview} alt="Processing" className="max-w-full max-h-[500px] object-contain opacity-50 blur-sm" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                    <Sparkles size={48} className="text-indigo-400 animate-bounce mb-4" />
                    <p className="text-indigo-200 font-bold text-lg shadow-sm">Detecting Subjects...</p>
                  </div>
                  {/* Scanning Line */}
                  <div className="absolute top-0 left-0 w-full h-2 bg-indigo-500/50 shadow-[0_0_20px_#6366f1] animate-[scanDown_3s_linear_infinite]"></div>
                </div>
              )}

              {/* Final Result */}
              {processedImage && !isProcessing && (
                <div className="relative animate-in fade-in zoom-in duration-500">
                  <img
                    src={processedImage}
                    alt="Processed"
                    className="max-w-full max-h-[500px] object-contain rounded-xl border-2 border-indigo-500/30 shadow-[0_0_50px_rgba(99,102,241,0.2)]"
                  />
                  {/* Simulation Note Overlay (Remove this in production) */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full text-[10px] text-gray-300 border border-white/10">
                    UI Simulation Data
                  </div>
                </div>
              )}
            </div>

            {/* Footer Actions */}
            <div className="p-6 border-t border-white/5 bg-black/40 flex justify-between items-center">
              <span className="text-xs text-gray-500">Output format: PNG (Transparent)</span>
              <button
                onClick={handleDownload}
                disabled={!processedImage || isProcessing}
                className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 px-8 rounded-xl flex items-center gap-2 transition-transform hover:scale-105 shadow-lg shadow-indigo-900/20 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <Download size={18} /> Download Result
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default BackgroundRemover;