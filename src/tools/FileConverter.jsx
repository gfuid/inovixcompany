import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  FileType, Upload, Download, ArrowLeft,
  RefreshCw, FileText, Image as ImageIcon, CheckCircle2, ChevronDown
} from "lucide-react";

const FileConverter = () => {
  // --- State ---
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [targetFormat, setTargetFormat] = useState("png");
  const [isConverting, setIsConverting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [convertedFile, setConvertedFile] = useState(null);

  // Supported Formats Configuration
  const formats = [
    { label: "PNG Image", value: "png", type: "image/png" },
    { label: "JPG Image", value: "jpeg", type: "image/jpeg" },
    { label: "WEBP Image", value: "webp", type: "image/webp" },
    { label: "PDF Document", value: "pdf", type: "application/pdf" }, // Simulation
    { label: "JSON Data", value: "json", type: "application/json" },  // Simulation
  ];

  // --- Handlers ---
  const handleUpload = (e) => {
    const selected = e.target.files?.[0];
    if (selected) {
      setFile(selected);
      // Create preview if it's an image
      if (selected.type.startsWith("image/")) {
        setPreview(URL.createObjectURL(selected));
      } else {
        setPreview(null);
      }
      setConvertedFile(null);
      setProgress(0);
    }
  };

  const startConversion = () => {
    if (!file) return;
    setIsConverting(true);
    setProgress(0);

    // --- REAL IMAGE CONVERSION ENGINE ---
    if (file.type.startsWith("image/") && ["png", "jpeg", "webp"].includes(targetFormat)) {
      const img = new Image();
      img.src = preview;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext("2d");

        // Fix for JPG transparent backgrounds turning black
        if (targetFormat === "jpeg") {
          ctx.fillStyle = "#FFFFFF";
          ctx.fillRect(0, 0, canvas.width, canvas.height);
        }

        ctx.drawImage(img, 0, 0);

        const mimeType = `image/${targetFormat}`;

        // Simulate progress bar for better UX
        let p = 0;
        const interval = setInterval(() => {
          p += 10;
          setProgress(p);
          if (p >= 100) {
            clearInterval(interval);
            canvas.toBlob((blob) => {
              const url = URL.createObjectURL(blob);
              setConvertedFile({ url, blob, ext: targetFormat });
              setIsConverting(false);
            }, mimeType, 0.9);
          }
        }, 50);
      };
    }
    // --- SIMULATION FOR OTHER FORMATS ---
    else {
      // For PDF/JSON etc, we simulate the process since we lack a backend
      let p = 0;
      const interval = setInterval(() => {
        p += 5;
        setProgress(p);
        if (p >= 100) {
          clearInterval(interval);
          // Just return original file as a mock success
          setConvertedFile({ url: null, blob: file, ext: targetFormat, isMock: true });
          setIsConverting(false);
        }
      }, 50);
    }
  };

  const handleDownload = () => {
    if (!convertedFile) return;

    // For Mock files
    if (convertedFile.isMock) {
      alert("This format requires server-side processing. Using simulation mode.");
      return;
    }

    const link = document.createElement("a");
    link.href = convertedFile.url;
    link.download = `converted_${file.name.split('.')[0]}.${convertedFile.ext}`;
    link.click();
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-blue-500/30 pb-24">

      {/* --- Header --- */}
      <div className="relative pt-32 pb-12 px-6">
        <div className="absolute inset-0 opacity-20 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(#333 1px, transparent 1px)", backgroundSize: "32px 32px" }}>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <Link to="/tools" className="inline-flex items-center gap-2 text-gray-400 hover:text-blue-400 mb-6 transition-colors text-sm">
            <ArrowLeft size={16} /> Back to Tools
          </Link>

          <div className="flex items-center gap-6 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-blue-500/10 text-blue-400 flex items-center justify-center border border-blue-500/20 shadow-[0_0_30px_rgba(59,130,246,0.15)]">
              <FileType size={32} />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-2">Universal <span className="text-blue-400">Converter</span></h1>
              <p className="text-gray-400 max-w-xl text-lg">Convert images and documents seamlessly. Supports JPG, PNG, WEBP, and PDF.</p>
            </div>
          </div>
        </div>
      </div>

      {/* --- Main Tool Area --- */}
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-12 gap-8">

        {/* Left: Configuration */}
        <div className="lg:col-span-5 space-y-6">

          {/* File Upload */}
          <div className="relative group">
            <input type="file" onChange={handleUpload} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20" />
            <div className={`
              border-2 border-dashed rounded-[2rem] p-8 text-center transition-all duration-300
              ${file ? 'border-blue-500/50 bg-blue-900/10' : 'border-white/10 hover:border-blue-400 hover:bg-zinc-900'}
            `}>
              <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400 group-hover:text-blue-400 transition-colors">
                {file ? <CheckCircle2 size={24} className="text-blue-400" /> : <Upload size={20} />}
              </div>
              <p className="font-bold text-white mb-1">{file ? file.name : "Choose File"}</p>
              <p className="text-xs text-gray-500">{file ? `${(file.size / 1024).toFixed(1)} KB` : "Any format supported"}</p>
            </div>
          </div>

          {/* Format Selection */}
          <div className="bg-zinc-900/50 border border-white/10 rounded-[2rem] p-6 space-y-6">
            <div className="flex items-center gap-2 text-blue-400 font-bold uppercase tracking-wider text-xs mb-2">
              <RefreshCw size={14} /> Conversion Settings
            </div>

            <div>
              <label className="text-sm text-gray-300 font-bold mb-2 block">Convert To:</label>
              <div className="grid grid-cols-1 gap-2">
                <div className="relative">
                  <select
                    value={targetFormat}
                    onChange={(e) => setTargetFormat(e.target.value)}
                    className="w-full appearance-none bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-blue-500 outline-none cursor-pointer"
                  >
                    {formats.map(fmt => (
                      <option key={fmt.value} value={fmt.value}>{fmt.label}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-4 top-3.5 text-gray-500 pointer-events-none" size={16} />
                </div>
              </div>
            </div>

            <button
              onClick={startConversion}
              disabled={!file || isConverting}
              className={`
                 w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all
                 ${!file || isConverting
                  ? "bg-zinc-800 text-gray-500 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-900/20 hover:scale-[1.02]"}
               `}
            >
              {isConverting ? "Converting..." : "Convert Now"}
            </button>
          </div>
        </div>

        {/* Right: Preview & Download */}
        <div className="lg:col-span-7">
          <div className="bg-zinc-900 border border-white/10 rounded-[2rem] h-full min-h-[500px] flex flex-col relative overflow-hidden">

            {/* Header */}
            <div className="p-6 border-b border-white/5 flex justify-between items-center bg-black/20">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Output</span>
              {convertedFile && <span className="text-xs text-blue-400 font-bold">Conversion Successful</span>}
            </div>

            {/* Workspace */}
            <div className="flex-1 p-8 flex flex-col items-center justify-center bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-fixed relative">

              {!file && (
                <div className="text-center opacity-30">
                  <RefreshCw size={64} className="mx-auto mb-4" />
                  <p className="text-xl font-bold">Waiting for file...</p>
                </div>
              )}

              {/* Progress Bar */}
              {isConverting && (
                <div className="w-full max-w-xs">
                  <div className="flex justify-between text-xs text-blue-300 mb-2">
                    <span>Processing...</span>
                    <span>{progress}%</span>
                  </div>
                  <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 transition-all duration-100 ease-out" style={{ width: `${progress}%` }}></div>
                  </div>
                </div>
              )}

              {/* Result */}
              {convertedFile && !isConverting && (
                <div className="bg-black/60 backdrop-blur-xl border border-white/10 p-8 rounded-2xl flex flex-col items-center text-center max-w-sm animate-in zoom-in duration-300">

                  <div className="w-20 h-20 bg-blue-500/20 rounded-2xl flex items-center justify-center text-blue-400 mb-4">
                    {convertedFile.ext === 'pdf' ? <FileText size={40} /> : <ImageIcon size={40} />}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1">
                    {file.name.split('.')[0]}.{convertedFile.ext}
                  </h3>
                  <p className="text-sm text-gray-500 mb-6 uppercase tracking-wider">{convertedFile.ext} Format</p>

                  <button
                    onClick={handleDownload}
                    className="w-full bg-blue-500 hover:bg-blue-400 text-white font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-transform hover:scale-105"
                  >
                    <Download size={18} /> Download File
                  </button>

                  {convertedFile.isMock && (
                    <p className="text-[10px] text-orange-400 mt-4 max-w-[200px]">
                      *Demo Mode: Real PDF conversion requires a backend server.
                    </p>
                  )}
                </div>
              )}

            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default FileConverter;