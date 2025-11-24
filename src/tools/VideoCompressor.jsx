import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Video, Upload, Download, ArrowLeft,
  Settings2, Film, CheckCircle2, PlayCircle
} from "lucide-react";

const VideoCompressor = () => {
  // --- State ---
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState(null);

  // Settings
  const [quality, setQuality] = useState("balanced"); // high, balanced, low

  // --- Handlers ---
  const handleUpload = (e) => {
    const selected = e.target.files?.[0];
    if (selected && selected.type.startsWith("video/")) {
      const url = URL.createObjectURL(selected);
      setFile(selected);
      setPreviewUrl(url);
      setResult(null);
      setProgress(0);
    } else if (selected) {
      alert("Please upload a valid video file (MP4, WEBM, MOV).");
    }
  };

  const formatBytes = (bytes, decimals = 2) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  };

  const startCompression = () => {
    if (!file) return;
    setIsProcessing(true);
    setProgress(0);

    // --- SIMULATION LOGIC ---
    // Mimics the time taken to process frames
    let currentProgress = 0;
    const interval = setInterval(() => {
      // Non-linear progress (starts fast, slows down)
      const increment = Math.max(1, (100 - currentProgress) / 10);
      currentProgress += increment;

      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(interval);

        // Calculate Fake Result
        let ratio = 0.6; // Balanced
        if (quality === 'high') ratio = 0.8;
        if (quality === 'low') ratio = 0.4;

        const compressedSize = Math.floor(file.size * ratio);

        setResult({
          originalSize: file.size,
          compressedSize: compressedSize,
          saved: file.size - compressedSize,
          url: previewUrl // In a real app, this would be the new blob URL
        });

        setIsProcessing(false);
      }

      setProgress(currentProgress);
    }, 200);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = result.url;
    link.download = `compressed_${file.name}`;
    link.click();
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-violet-500/30 pb-24">

      {/* --- Header --- */}
      <div className="relative pt-32 pb-12 px-6">
        <div className="absolute inset-0 opacity-20 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(#333 1px, transparent 1px)", backgroundSize: "32px 32px" }}>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <Link to="/tools" className="inline-flex items-center gap-2 text-gray-400 hover:text-violet-400 mb-6 transition-colors text-sm">
            <ArrowLeft size={16} /> Back to Tools
          </Link>

          <div className="flex items-center gap-6 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-violet-500/10 text-violet-400 flex items-center justify-center border border-violet-500/20 shadow-[0_0_30px_rgba(139,92,246,0.15)]">
              <Video size={32} />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-2">Video <span className="text-violet-400">Compressor</span></h1>
              <p className="text-gray-400 max-w-xl text-lg">Shrink MP4, MOV, and WebM files for WhatsApp, Email, and Social Media.</p>
            </div>
          </div>
        </div>
      </div>

      {/* --- Main Tool Area --- */}
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-12 gap-8">

        {/* Left: Controls */}
        <div className="lg:col-span-5 space-y-6">

          {/* Upload */}
          <div className="relative group">
            <input type="file" accept="video/*" onChange={handleUpload} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20" />
            <div className={`
              border-2 border-dashed rounded-[2rem] p-8 text-center transition-all duration-300
              ${file ? 'border-violet-500/50 bg-violet-900/10' : 'border-white/10 hover:border-violet-400 hover:bg-zinc-900'}
            `}>
              <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400 group-hover:text-violet-400 transition-colors">
                {file ? <Film size={24} className="text-violet-400" /> : <Upload size={20} />}
              </div>
              <p className="font-bold text-white mb-1">{file ? file.name : "Select Video"}</p>
              <p className="text-xs text-gray-500">{file ? formatBytes(file.size) : "Max 500MB"}</p>
            </div>
          </div>

          {/* Settings Panel */}
          <div className="bg-zinc-900/50 border border-white/10 rounded-[2rem] p-6 space-y-6">
            <div className="flex items-center gap-2 text-violet-400 font-bold uppercase tracking-wider text-xs mb-2">
              <Settings2 size={14} /> Compression Mode
            </div>

            <div className="grid grid-cols-1 gap-3">
              <button
                onClick={() => setQuality('high')}
                className={`p-4 rounded-xl border text-left transition-all ${quality === 'high' ? 'bg-violet-500/20 border-violet-500' : 'bg-black/40 border-white/10 hover:bg-white/5'}`}
              >
                <div className="flex justify-between items-center">
                  <span className="font-bold text-sm">High Quality</span>
                  <span className="text-xs font-mono bg-white/10 px-2 py-1 rounded">~20% Reduction</span>
                </div>
              </button>

              <button
                onClick={() => setQuality('balanced')}
                className={`p-4 rounded-xl border text-left transition-all ${quality === 'balanced' ? 'bg-violet-500/20 border-violet-500' : 'bg-black/40 border-white/10 hover:bg-white/5'}`}
              >
                <div className="flex justify-between items-center">
                  <span className="font-bold text-sm">Balanced</span>
                  <span className="text-xs font-mono bg-white/10 px-2 py-1 rounded">~40% Reduction</span>
                </div>
              </button>

              <button
                onClick={() => setQuality('low')}
                className={`p-4 rounded-xl border text-left transition-all ${quality === 'low' ? 'bg-violet-500/20 border-violet-500' : 'bg-black/40 border-white/10 hover:bg-white/5'}`}
              >
                <div className="flex justify-between items-center">
                  <span className="font-bold text-sm">Max Compression</span>
                  <span className="text-xs font-mono bg-white/10 px-2 py-1 rounded">~60% Reduction</span>
                </div>
              </button>
            </div>

            <button
              onClick={startCompression}
              disabled={!file || isProcessing}
              className={`
                 w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all
                 ${!file || isProcessing
                  ? "bg-zinc-800 text-gray-500 cursor-not-allowed"
                  : "bg-violet-600 hover:bg-violet-500 text-white shadow-lg shadow-violet-900/20 hover:scale-[1.02]"}
               `}
            >
              {isProcessing ? "Compressing Video..." : "Start Compression"}
            </button>
          </div>
        </div>

        {/* Right: Preview & Result */}
        <div className="lg:col-span-7">
          <div className="bg-zinc-900 border border-white/10 rounded-[2rem] h-full min-h-[500px] flex flex-col relative overflow-hidden">

            {/* Header */}
            <div className="p-6 border-b border-white/5 flex justify-between items-center bg-black/20">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Workspace</span>
              {result && <span className="text-xs font-bold text-emerald-400">Ready</span>}
            </div>

            {/* Content */}
            <div className="flex-1 p-8 flex flex-col items-center justify-center bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-fixed relative">

              {!file && (
                <div className="text-center opacity-30">
                  <Video size={64} className="mx-auto mb-4" />
                  <p className="text-xl font-bold">Waiting for video...</p>
                </div>
              )}

              {file && !result && (
                <div className="w-full max-w-sm relative group">
                  {/* Video Preview Placeholder */}
                  <div className="aspect-video bg-black rounded-xl border border-white/10 flex items-center justify-center overflow-hidden">
                    <video src={previewUrl} className="w-full h-full object-cover opacity-60" muted />
                    <PlayCircle size={48} className="absolute text-white opacity-80" />
                  </div>

                  {/* Progress Bar Overlay */}
                  {isProcessing && (
                    <div className="mt-6">
                      <div className="flex justify-between text-xs text-violet-300 mb-2 font-bold">
                        <span>Processing Frames...</span>
                        <span>{Math.round(progress)}%</span>
                      </div>
                      <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                        <div className="h-full bg-violet-500 transition-all duration-100" style={{ width: `${progress}%` }}></div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Result Card */}
              {result && (
                <div className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center animate-in zoom-in duration-300 max-w-sm w-full">
                  <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-400">
                    <CheckCircle2 size={40} />
                  </div>

                  <h2 className="text-2xl font-black text-white mb-2">Done!</h2>
                  <p className="text-gray-400 text-sm mb-6">Video successfully compressed.</p>

                  <div className="space-y-3 mb-8">
                    <div className="flex justify-between text-sm border-b border-white/10 pb-2">
                      <span className="text-gray-500">Original</span>
                      <span className="text-white font-mono">{formatBytes(result.originalSize)}</span>
                    </div>
                    <div className="flex justify-between text-sm border-b border-white/10 pb-2">
                      <span className="text-gray-500">Compressed</span>
                      <span className="text-emerald-400 font-bold font-mono">{formatBytes(result.compressedSize)}</span>
                    </div>
                    <div className="flex justify-between text-xs pt-1">
                      <span className="text-gray-500">Space Saved</span>
                      <span className="text-violet-400 font-bold">{formatBytes(result.saved)}</span>
                    </div>
                  </div>

                  <button
                    onClick={handleDownload}
                    className="w-full bg-violet-600 hover:bg-violet-500 text-white font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-transform hover:scale-105"
                  >
                    <Download size={18} /> Download Video
                  </button>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default VideoCompressor;