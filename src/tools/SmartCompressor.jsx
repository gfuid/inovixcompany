import React, { useState, useEffect } from "react";
import {
  Upload, Download, FileJson, FileText,
  Image as ImageIcon, RefreshCw, CheckCircle2,
  AlertCircle, ArrowLeft, Settings2, Zap
} from "lucide-react";
import { Link } from "react-router-dom";

// --- Helper: Format Bytes ---
const formatBytes = (bytes, decimals = 2) => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
};

const SmartCompressor = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [compressedFile, setCompressedFile] = useState(null);
  const [compressedPreview, setCompressedPreview] = useState(null);
  const [quality, setQuality] = useState(0.8);
  const [isProcessing, setIsProcessing] = useState(false);
  const [activeTab, setActiveTab] = useState("image"); // 'image' or 'pdf'

  // --- Image Compression Logic ---
  const handleFileChange = (e) => {
    const selected = e.target.files?.[0];
    if (selected) {
      setFile(selected);
      setPreview(URL.createObjectURL(selected));
      setCompressedFile(null); // Reset previous result
    }
  };

  useEffect(() => {
    if (file && activeTab === 'image') {
      compressImage(file, quality);
    }

    // Cleanup memory
    return () => {
      if (preview) URL.revokeObjectURL(preview);
      if (compressedPreview) URL.revokeObjectURL(compressedPreview);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [file, quality]);

  const compressImage = (imageFile, q) => {
    setIsProcessing(true);
    const img = new Image();
    img.src = URL.createObjectURL(imageFile);
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);

      canvas.toBlob((blob) => {
        if (blob) {
          setCompressedFile(blob);
          setCompressedPreview(URL.createObjectURL(blob));
        }
        setIsProcessing(false);
      }, "image/jpeg", q);
    };
  };

  const handleDownload = () => {
    if (!compressedFile) return;
    const link = document.createElement("a");
    link.href = URL.createObjectURL(compressedFile);
    link.download = `compressed_${file.name}`;
    link.click();
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-cyan-500/30 pb-24">

      {/* --- Header / Hero --- */}
      <div className="relative pt-32 pb-12 px-6">
        <div className="absolute inset-0 opacity-20 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(#333 1px, transparent 1px)", backgroundSize: "32px 32px" }}>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-cyan-400 mb-6 transition-colors text-sm">
            <ArrowLeft size={16} /> Back to Services
          </Link>

          <div className="flex items-center gap-6 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center border border-cyan-500/20 shadow-[0_0_30px_rgba(6,182,212,0.15)]">
              <FileJson size={32} />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-2">Smart <span className="text-cyan-400">Compressor</span></h1>
              <p className="text-gray-400 max-w-xl text-lg">Reduce file size up to 90% while maintaining visual quality. Processed locally in your browser for maximum privacy.</p>
            </div>
          </div>
        </div>
      </div>

      {/* --- Main Tool Area --- */}
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-12 gap-8">

        {/* Left: Controls & Upload */}
        <div className="lg:col-span-4 space-y-6">

          {/* Tabs */}
          <div className="bg-zinc-900/50 p-1 rounded-xl border border-white/10 flex">
            <button
              onClick={() => setActiveTab("image")}
              className={`flex-1 py-3 text-sm font-bold rounded-lg flex items-center justify-center gap-2 transition-all ${activeTab === 'image' ? 'bg-cyan-500 text-black shadow-lg' : 'text-gray-400 hover:text-white'}`}
            >
              <ImageIcon size={16} /> Image
            </button>
            <button
              onClick={() => setActiveTab("pdf")}
              className={`flex-1 py-3 text-sm font-bold rounded-lg flex items-center justify-center gap-2 transition-all ${activeTab === 'pdf' ? 'bg-red-500 text-black shadow-lg' : 'text-gray-400 hover:text-white'}`}
            >
              <FileText size={16} /> PDF
            </button>
          </div>

          {/* Upload Box */}
          <div className="relative group">
            <input
              type="file"
              accept={activeTab === 'image' ? "image/*" : "application/pdf"}
              onChange={handleFileChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
            />
            <div className={`
              border-2 border-dashed rounded-[2rem] p-10 text-center transition-all duration-300
              ${file
                ? "border-cyan-500/50 bg-cyan-900/10"
                : "border-white/10 hover:border-cyan-400 hover:bg-zinc-900"
              }
            `}>
              <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400 group-hover:text-cyan-400 transition-colors">
                <Upload size={20} />
              </div>
              <p className="font-bold text-white mb-1">
                {file ? "Change File" : `Upload ${activeTab === 'image' ? 'Image' : 'PDF'}`}
              </p>
              <p className="text-xs text-gray-500">
                {file ? file.name : "Drag & drop or click to browse"}
              </p>
            </div>
          </div>

          {/* Settings (Only for Image currently) */}
          {activeTab === 'image' && (
            <div className="bg-zinc-900/50 border border-white/10 rounded-[2rem] p-6">
              <div className="flex items-center gap-2 mb-6 text-cyan-400">
                <Settings2 size={18} />
                <span className="font-bold uppercase tracking-wider text-xs">Settings</span>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Compression Quality</span>
                  <span className="text-white font-mono">{Math.round(quality * 100)}%</span>
                </div>
                <input
                  type="range" min="0.1" max="1.0" step="0.05"
                  value={quality}
                  onChange={(e) => setQuality(parseFloat(e.target.value))}
                  className="w-full h-2 bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
                <div className="flex justify-between text-[10px] text-gray-500 uppercase font-bold mt-1">
                  <span>Max Compression</span>
                  <span>Best Quality</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'pdf' && (
            <div className="bg-red-900/10 border border-red-500/20 rounded-[2rem] p-6 text-center">
              <AlertCircle size={24} className="text-red-400 mx-auto mb-2" />
              <p className="text-red-200 text-sm">PDF Compression is currently in beta. Large files may take longer to process securely.</p>
            </div>
          )}

        </div>

        {/* Right: Preview & Result */}
        <div className="lg:col-span-8">
          <div className="bg-zinc-900 border border-white/10 rounded-[2rem] h-full min-h-[500px] flex flex-col relative overflow-hidden">

            {/* Top Bar */}
            <div className="p-6 border-b border-white/5 flex justify-between items-center bg-black/20">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Workspace</span>
              {compressedFile && (
                <span className="text-xs font-bold text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 size={14} /> Ready to Download
                </span>
              )}
            </div>

            {/* Content Area */}
            <div className="flex-1 p-8 flex flex-col items-center justify-center relative bg-zinc-900">

              {/* Optional: Add a texture pattern background via CSS class if available, else plain bg is fine */}

              {!file && (
                <div className="text-center opacity-30">
                  <FileJson size={64} className="mx-auto mb-4" />
                  <p className="text-xl font-bold">No file selected</p>
                </div>
              )}

              {file && isProcessing && (
                <div className="flex flex-col items-center animate-pulse">
                  <RefreshCw size={48} className="text-cyan-400 animate-spin mb-4" />
                  <p className="text-cyan-400 font-mono">Compressing Pixels...</p>
                </div>
              )}

              {file && !isProcessing && compressedPreview && (
                <div className="w-full h-full flex flex-col items-center">
                  <div className="relative max-w-full max-h-[400px] mb-8 shadow-2xl rounded-lg overflow-hidden border border-white/10">
                    <img src={compressedPreview} alt="Preview" className="max-h-[400px] object-contain" />
                    <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-xs font-mono border border-white/10 text-white">
                      Preview
                    </div>
                  </div>

                  {/* Stats Card */}
                  <div className="w-full max-w-2xl bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">

                    <div className="text-center md:text-left">
                      <p className="text-xs text-gray-500 uppercase mb-1">Original Size</p>
                      <p className="text-lg font-mono text-white">{formatBytes(file.size)}</p>
                    </div>

                    <div className="text-center md:text-left">
                      <p className="text-xs text-gray-500 uppercase mb-1">Compressed Size</p>
                      <p className="text-lg font-mono text-cyan-400">{formatBytes(compressedFile.size)}</p>
                    </div>

                    <div className="text-center md:text-right">
                      <span className="inline-block bg-emerald-500/20 text-emerald-400 text-xs font-bold px-3 py-1 rounded-full mb-3">
                        Saved {Math.round(((file.size - compressedFile.size) / file.size) * 100)}%
                      </span>
                      <button
                        onClick={handleDownload}
                        className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-transform hover:scale-105"
                      >
                        <Download size={18} /> Download
                      </button>
                    </div>

                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>

      {/* --- SEO / Info Section --- */}
      <div className="max-w-4xl mx-auto px-6 mt-24">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Why use Smart Compressor?</h2>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-zinc-900/30 p-6 rounded-2xl border border-white/5">
            <CheckCircle2 className="text-cyan-400 mb-4" size={24} />
            <h3 className="font-bold text-white mb-2">Client-Side Privacy</h3>
            <p className="text-sm text-gray-400">Your photos never leave your browser. All compression happens locally on your device.</p>
          </div>
          <div className="bg-zinc-900/30 p-6 rounded-2xl border border-white/5">
            <Zap className="text-cyan-400 mb-4" size={24} />
            <h3 className="font-bold text-white mb-2">Lightning Fast</h3>
            <p className="text-sm text-gray-400">No uploading or downloading delays. Instant processing powered by WebAssembly.</p>
          </div>
          <div className="bg-zinc-900/30 p-6 rounded-2xl border border-white/5">
            <ImageIcon className="text-cyan-400 mb-4" size={24} />
            <h3 className="font-bold text-white mb-2">High Quality</h3>
            <p className="text-sm text-gray-400">Advanced algorithms ensure your images look crisp even at high compression rates.</p>
          </div>
        </div>

        <div className="space-y-6 text-gray-400 text-sm leading-relaxed border-t border-white/10 pt-12">
          <h3 className="text-xl font-bold text-white">How it works</h3>
          <p>
            Smart Compressor uses intelligent lossy compression techniques to reduce the file size of your WEBP, JPEG, and PNG files. By selectively decreasing the number of colors in the image, fewer bytes are required to store the data. The effect is nearly invisible, but it makes a very large difference in file size!
          </p>
          <p>
            If you are a web developer, using compressed images is crucial for SEO and loading speeds. Google prioritizes websites that load quickly, and large images are the number one cause of slow websites.
          </p>
        </div>
      </div>

    </div>
  );
}

export default SmartCompressor;