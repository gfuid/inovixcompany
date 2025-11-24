import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FileText, Upload, Download, ArrowLeft,
  Settings2, Zap, CheckCircle2, AlertCircle, File
} from "lucide-react";

const PDFCompressor = () => {
  // --- State ---
  const [file, setFile] = useState(null);
  const [compressionLevel, setCompressionLevel] = useState("standard"); // extreme, standard, low
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState(""); // analyzing, compressing, finalizing
  const [result, setResult] = useState(null);

  // --- Handlers ---
  const handleUpload = (e) => {
    const selected = e.target.files?.[0];
    if (selected && selected.type === "application/pdf") {
      setFile(selected);
      setResult(null);
      setProgress(0);
    } else if (selected) {
      alert("Please upload a valid PDF file.");
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

    // --- SIMULATION SEQUENCE ---
    // 1. Analyzing
    setStatus("Analyzing PDF Structure...");
    setProgress(10);

    setTimeout(() => {
      // 2. Compressing Images
      setStatus("Compressing embedded images...");
      setProgress(45);

      setTimeout(() => {
        // 3. Subsetting Fonts
        setStatus("Subsetting fonts & removing metadata...");
        setProgress(80);

        setTimeout(() => {
          // 4. Done
          setProgress(100);
          setStatus("Finalizing...");

          // Calculate fake savings based on level
          let ratio = 0.7; // Standard
          if (compressionLevel === 'extreme') ratio = 0.4;
          if (compressionLevel === 'low') ratio = 0.9;

          const newSize = Math.floor(file.size * ratio);

          setResult({
            originalSize: file.size,
            compressedSize: newSize,
            saved: file.size - newSize
          });
          setIsProcessing(false);
        }, 800);
      }, 1500);
    }, 1000);
  };

  const handleDownload = () => {
    // In a real app, this would be the URL from the server
    // Here we just download the original file renamed for the demo
    const url = URL.createObjectURL(file);
    const link = document.createElement("a");
    link.href = url;
    link.download = `compressed_${file.name}`;
    link.click();
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-red-500/30 pb-24">

      {/* --- Header --- */}
      <div className="relative pt-32 pb-12 px-6">
        <div className="absolute inset-0 opacity-20 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(#333 1px, transparent 1px)", backgroundSize: "32px 32px" }}>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <Link to="/tools" className="inline-flex items-center gap-2 text-gray-400 hover:text-red-400 mb-6 transition-colors text-sm">
            <ArrowLeft size={16} /> Back to Tools
          </Link>

          <div className="flex items-center gap-6 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-red-500/10 text-red-400 flex items-center justify-center border border-red-500/20 shadow-[0_0_30px_rgba(239,68,68,0.15)]">
              <FileText size={32} />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-2">PDF <span className="text-red-400">Compressor</span></h1>
              <p className="text-gray-400 max-w-xl text-lg">Intelligent optimization. Shrink documents for email and web without losing readability.</p>
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
            <input type="file" accept="application/pdf" onChange={handleUpload} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20" />
            <div className={`
              border-2 border-dashed rounded-[2rem] p-8 text-center transition-all duration-300
              ${file ? 'border-red-500/50 bg-red-900/10' : 'border-white/10 hover:border-red-400 hover:bg-zinc-900'}
            `}>
              <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400 group-hover:text-red-400 transition-colors">
                {file ? <FileText size={24} className="text-red-400" /> : <Upload size={20} />}
              </div>
              <p className="font-bold text-white mb-1">{file ? file.name : "Select PDF"}</p>
              <p className="text-xs text-gray-500">{file ? formatBytes(file.size) : "Up to 100MB"}</p>
            </div>
          </div>

          {/* Configuration */}
          <div className="bg-zinc-900/50 border border-white/10 rounded-[2rem] p-6 space-y-6">
            <div className="flex items-center gap-2 text-red-400 font-bold uppercase tracking-wider text-xs mb-2">
              <Settings2 size={14} /> Optimization Level
            </div>

            <div className="space-y-3">
              <button
                onClick={() => setCompressionLevel('extreme')}
                className={`w-full p-4 rounded-xl border text-left transition-all ${compressionLevel === 'extreme' ? 'bg-red-500/20 border-red-500' : 'bg-black/40 border-white/10 hover:bg-white/5'}`}
              >
                <div className="flex justify-between items-center mb-1">
                  <span className={`font-bold ${compressionLevel === 'extreme' ? 'text-red-400' : 'text-white'}`}>Extreme Compression</span>
                  <span className="text-xs font-mono bg-white/10 px-2 py-1 rounded text-gray-300">-60%</span>
                </div>
                <p className="text-xs text-gray-500">Low quality, perfect for archiving.</p>
              </button>

              <button
                onClick={() => setCompressionLevel('standard')}
                className={`w-full p-4 rounded-xl border text-left transition-all ${compressionLevel === 'standard' ? 'bg-red-500/20 border-red-500' : 'bg-black/40 border-white/10 hover:bg-white/5'}`}
              >
                <div className="flex justify-between items-center mb-1">
                  <span className={`font-bold ${compressionLevel === 'standard' ? 'text-red-400' : 'text-white'}`}>Recommended Compression</span>
                  <span className="text-xs font-mono bg-white/10 px-2 py-1 rounded text-gray-300">-30%</span>
                </div>
                <p className="text-xs text-gray-500">Good quality, standard for email.</p>
              </button>

              <button
                onClick={() => setCompressionLevel('low')}
                className={`w-full p-4 rounded-xl border text-left transition-all ${compressionLevel === 'low' ? 'bg-red-500/20 border-red-500' : 'bg-black/40 border-white/10 hover:bg-white/5'}`}
              >
                <div className="flex justify-between items-center mb-1">
                  <span className={`font-bold ${compressionLevel === 'low' ? 'text-red-400' : 'text-white'}`}>Low Compression</span>
                  <span className="text-xs font-mono bg-white/10 px-2 py-1 rounded text-gray-300">-10%</span>
                </div>
                <p className="text-xs text-gray-500">High quality, almost original.</p>
              </button>
            </div>

            <button
              onClick={startCompression}
              disabled={!file || isProcessing}
              className={`
                 w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all
                 ${!file || isProcessing
                  ? "bg-zinc-800 text-gray-500 cursor-not-allowed"
                  : "bg-red-600 hover:bg-red-500 text-white shadow-lg shadow-red-900/20 hover:scale-[1.02]"}
               `}
            >
              {isProcessing ? "Processing..." : "Compress PDF"}
            </button>
          </div>
        </div>

        {/* Right: Status & Download */}
        <div className="lg:col-span-7">
          <div className="bg-zinc-900 border border-white/10 rounded-[2rem] h-full min-h-[500px] flex flex-col relative overflow-hidden">

            {/* Header */}
            <div className="p-6 border-b border-white/5 flex justify-between items-center bg-black/20">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Job Status</span>
            </div>

            {/* Workspace */}
            <div className="flex-1 p-8 flex flex-col items-center justify-center bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-fixed relative">

              {!file && (
                <div className="text-center opacity-30">
                  <Zap size={64} className="mx-auto mb-4" />
                  <p className="text-xl font-bold">Waiting for PDF...</p>
                </div>
              )}

              {/* Processing View */}
              {isProcessing && (
                <div className="w-full max-w-sm text-center">
                  <div className="w-16 h-16 mx-auto mb-6 relative">
                    <div className="absolute inset-0 border-4 border-zinc-700 rounded-full"></div>
                    <div className="absolute inset-0 border-4 border-red-500 rounded-full border-t-transparent animate-spin"></div>
                    <FileText className="absolute inset-0 m-auto text-red-500" size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{status}</h3>
                  <div className="h-2 bg-zinc-800 rounded-full overflow-hidden mt-4">
                    <div className="h-full bg-red-500 transition-all duration-300 ease-out" style={{ width: `${progress}%` }}></div>
                  </div>
                </div>
              )}

              {/* Result View */}
              {result && !isProcessing && (
                <div className="w-full max-w-sm animate-in zoom-in duration-300">
                  <div className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center">
                    <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-400">
                      <CheckCircle2 size={40} />
                    </div>

                    <h2 className="text-2xl font-black text-white mb-2">Success!</h2>
                    <p className="text-gray-400 text-sm mb-6">Your PDF is ready for download.</p>

                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className="bg-zinc-800/50 p-4 rounded-xl border border-white/5">
                        <p className="text-[10px] text-gray-500 uppercase">Original</p>
                        <p className="text-sm font-bold text-gray-300">{formatBytes(result.originalSize)}</p>
                      </div>
                      <div className="bg-emerald-900/10 p-4 rounded-xl border border-emerald-500/20">
                        <p className="text-[10px] text-emerald-500 uppercase">Compressed</p>
                        <p className="text-lg font-bold text-emerald-400">{formatBytes(result.compressedSize)}</p>
                      </div>
                    </div>

                    <button
                      onClick={handleDownload}
                      className="w-full bg-red-600 hover:bg-red-500 text-white font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-transform hover:scale-105 shadow-lg shadow-red-900/20"
                    >
                      <Download size={18} /> Download PDF
                    </button>
                  </div>

                  <div className="mt-6 flex items-start gap-2 bg-zinc-900/80 p-3 rounded-lg border border-white/5">
                    <AlertCircle size={14} className="text-gray-500 mt-0.5 shrink-0" />
                    <p className="text-[10px] text-gray-500 text-left">
                      This is a client-side simulation. Real PDF compression requires server-side processing which is not available in this demo mode.
                    </p>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default PDFCompressor;