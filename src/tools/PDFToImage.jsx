import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ImagePlus, Upload, Download, ArrowLeft,
  FileText, Layers, CheckCircle2, Image as ImageIcon
} from "lucide-react";

const PDFToImage = () => {
  // --- State ---
  const [file, setFile] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [pages, setPages] = useState([]); // Simulated extracted pages
  const [progress, setProgress] = useState(0);

  // --- Handlers ---
  const handleUpload = (e) => {
    const selected = e.target.files?.[0];
    if (selected && selected.type === "application/pdf") {
      setFile(selected);
      setPages([]);
      setProgress(0);
    } else if (selected) {
      alert("Please upload a valid PDF file.");
    }
  };

  const startExtraction = () => {
    if (!file) return;
    setIsProcessing(true);
    setProgress(0);

    // --- SIMULATION LOGIC ---
    // Mimics reading a PDF page by page
    const totalSimulatedPages = 4; // Let's pretend the PDF has 4 pages
    let current = 0;

    const interval = setInterval(() => {
      current++;
      const percent = (current / totalSimulatedPages) * 100;
      setProgress(percent);

      // Add a mock page result
      setPages(prev => [...prev, {
        id: current,
        name: `page_${current}.png`,
        // We use a placeholder image to simulate the extracted page content
        url: `https://via.placeholder.com/600x800/101010/84cc16?text=PDF+Page+${current}`
      }]);

      if (current >= totalSimulatedPages) {
        clearInterval(interval);
        setIsProcessing(false);
      }
    }, 800); // Delay between pages
  };

  const handleDownload = (pageUrl, pageName) => {
    // In a real app, this downloads the specific blob
    const link = document.createElement("a");
    link.href = pageUrl;
    link.download = pageName;
    link.click();
  };

  const handleDownloadAll = () => {
    alert("In a real app, this would download a ZIP file containing all images.");
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-lime-500/30 pb-24">

      {/* --- Header --- */}
      <div className="relative pt-32 pb-12 px-6">
        <div className="absolute inset-0 opacity-20 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(#333 1px, transparent 1px)", backgroundSize: "32px 32px" }}>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <Link to="/tools" className="inline-flex items-center gap-2 text-gray-400 hover:text-lime-400 mb-6 transition-colors text-sm">
            <ArrowLeft size={16} /> Back to Tools
          </Link>

          <div className="flex items-center gap-6 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-lime-500/10 text-lime-400 flex items-center justify-center border border-lime-500/20 shadow-[0_0_30px_rgba(132,204,22,0.15)]">
              <ImagePlus size={32} />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-2">PDF to <span className="text-lime-400">Image</span></h1>
              <p className="text-gray-400 max-w-xl text-lg">Extract every page of your PDF into high-quality PNG or JPG images.</p>
            </div>
          </div>
        </div>
      </div>

      {/* --- Main Tool Area --- */}
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-12 gap-8">

        {/* Left: Controls */}
        <div className="lg:col-span-4 space-y-6">

          {/* Upload */}
          <div className="relative group h-[250px]">
            <input type="file" accept="application/pdf" onChange={handleUpload} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20" />
            <div className={`
              h-full border-2 border-dashed rounded-[2rem] flex flex-col items-center justify-center text-center transition-all duration-300
              ${file ? 'border-lime-500/50 bg-lime-900/10' : 'border-white/10 hover:border-lime-400 hover:bg-zinc-900'}
            `}>
              <div className="w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center mb-4 text-gray-400 group-hover:text-lime-400 transition-colors">
                {file ? <FileText size={28} className="text-lime-400" /> : <Upload size={28} />}
              </div>
              <p className="font-bold text-white mb-1">{file ? file.name : "Upload PDF"}</p>
              <p className="text-xs text-gray-500">{file ? `${(file.size / 1024 / 1024).toFixed(2)} MB` : "Multi-page documents supported"}</p>
            </div>
          </div>

          {/* Action Panel */}
          {file && (
            <div className="bg-zinc-900/50 border border-white/10 rounded-[2rem] p-6 space-y-6 animate-in slide-in-from-left-4 fade-in">
              <div className="flex items-center gap-2 text-lime-400 font-bold uppercase tracking-wider text-xs">
                <Layers size={14} /> Extraction Settings
              </div>

              <div className="p-4 bg-black/40 rounded-xl border border-white/5">
                <p className="text-sm text-gray-300 mb-1">Output Format</p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-lime-500/20 text-lime-400 border border-lime-500/50 rounded-lg text-xs font-bold">PNG (High Quality)</span>
                </div>
              </div>

              <button
                onClick={startExtraction}
                disabled={isProcessing || pages.length > 0}
                className={`
                   w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all
                   ${isProcessing || pages.length > 0
                    ? "bg-zinc-800 text-gray-500 cursor-not-allowed"
                    : "bg-lime-600 hover:bg-lime-500 text-black shadow-lg shadow-lime-900/20 hover:scale-[1.02]"}
                 `}
              >
                {isProcessing ? "Extracting Pages..." : pages.length > 0 ? "Extraction Done" : "Convert Entire PDF"}
              </button>
            </div>
          )}
        </div>

        {/* Right: Results Grid */}
        <div className="lg:col-span-8">
          <div className="bg-zinc-900 border border-white/10 rounded-[2rem] h-full min-h-[500px] flex flex-col relative overflow-hidden">

            {/* Header */}
            <div className="p-6 border-b border-white/5 flex justify-between items-center bg-black/20">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Extracted Pages</span>
              {pages.length > 0 && (
                <button onClick={handleDownloadAll} className="text-xs font-bold text-lime-400 hover:text-white underline">
                  Download All (ZIP)
                </button>
              )}
            </div>

            {/* Content Area */}
            <div className="flex-1 p-8 bg-zinc-900/50 overflow-y-auto max-h-[600px] custom-scrollbar">

              {!file && (
                <div className="h-full flex flex-col items-center justify-center text-center opacity-30">
                  <Layers size={64} className="mx-auto mb-4" />
                  <p className="text-xl font-bold">Waiting for PDF...</p>
                </div>
              )}

              {/* Progress Bar */}
              {isProcessing && (
                <div className="absolute top-0 left-0 w-full h-1 bg-zinc-800 z-10">
                  <div className="h-full bg-lime-500 transition-all duration-300 ease-out" style={{ width: `${progress}%` }}></div>
                </div>
              )}

              {/* Grid of Pages */}
              {pages.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {pages.map((page) => (
                    <div key={page.id} className="group relative animate-in zoom-in duration-300">
                      {/* Page Preview Card */}
                      <div className="aspect-[3/4] bg-white rounded-lg overflow-hidden border-2 border-transparent group-hover:border-lime-500 transition-colors shadow-lg relative">
                        <img src={page.url} alt={page.name} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <button
                            onClick={() => handleDownload(page.url, page.name)}
                            className="w-10 h-10 bg-lime-500 rounded-full flex items-center justify-center text-black hover:scale-110 transition-transform"
                          >
                            <Download size={20} />
                          </button>
                        </div>
                      </div>

                      {/* Page Label */}
                      <div className="mt-2 flex justify-between items-center">
                        <span className="text-xs font-mono text-gray-400">Page {page.id}</span>
                        <CheckCircle2 size={12} className="text-lime-500" />
                      </div>
                    </div>
                  ))}
                </div>
              )}

            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default PDFToImage;