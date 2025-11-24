import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FileOutput, Upload, Download, ArrowLeft,
  MoveUp, MoveDown, Trash2, FileImage, Settings2, CheckCircle2
} from "lucide-react";

const ImageToPDF = () => {
  // --- State ---
  const [images, setImages] = useState([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);

  // Settings
  const [orientation, setOrientation] = useState("portrait"); // portrait, landscape
  const [pageSize, setPageSize] = useState("a4"); // a4, letter
  const [margin, setMargin] = useState("small"); // none, small, large

  // --- Handlers ---
  const handleUpload = (e) => {
    const files = Array.from(e.target.files || []);
    const newImages = files
      .filter(file => file.type.startsWith("image/"))
      .map(file => ({
        id: Math.random().toString(36).substr(2, 9),
        file,
        url: URL.createObjectURL(file),
        name: file.name
      }));

    if (newImages.length > 0) {
      setImages(prev => [...prev, ...newImages]);
      setIsReady(false);
    }
  };

  const removeImage = (id) => {
    setImages(prev => prev.filter(img => img.id !== id));
  };

  const moveImage = (index, direction) => {
    const newImages = [...images];
    if (direction === 'up' && index > 0) {
      [newImages[index], newImages[index - 1]] = [newImages[index - 1], newImages[index]];
    } else if (direction === 'down' && index < newImages.length - 1) {
      [newImages[index], newImages[index + 1]] = [newImages[index + 1], newImages[index]];
    }
    setImages(newImages);
  };

  const startGeneration = () => {
    if (images.length === 0) return;
    setIsGenerating(true);
    setIsReady(false);
    setProgress(0);

    // --- SIMULATION LOGIC ---
    // Mimics adding pages to a PDF document
    let current = 0;
    const interval = setInterval(() => {
      current += 10;
      setProgress(current);

      if (current >= 100) {
        clearInterval(interval);
        setIsGenerating(false);
        setIsReady(true);
      }
    }, 200);
  };

  const handleDownload = () => {
    alert("Simulation: PDF file downloaded successfully!");
  };

  // Cleanup memory
  useEffect(() => {
    return () => {
      images.forEach(img => URL.revokeObjectURL(img.url));
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-amber-500/30 pb-24">

      {/* --- Header --- */}
      <div className="relative pt-32 pb-12 px-6">
        <div className="absolute inset-0 opacity-20 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(#333 1px, transparent 1px)", backgroundSize: "32px 32px" }}>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <Link to="/tools" className="inline-flex items-center gap-2 text-gray-400 hover:text-amber-400 mb-6 transition-colors text-sm">
            <ArrowLeft size={16} /> Back to Tools
          </Link>

          <div className="flex items-center gap-6 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center border border-amber-500/20 shadow-[0_0_30px_rgba(251,191,36,0.15)]">
              <FileOutput size={32} />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-2">Image to <span className="text-amber-400">PDF</span></h1>
              <p className="text-gray-400 max-w-xl text-lg">Combine JPGs, PNGs, and Screenshots into a single, professional PDF document.</p>
            </div>
          </div>
        </div>
      </div>

      {/* --- Main Tool Area --- */}
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-12 gap-8">

        {/* Left: Configuration */}
        <div className="lg:col-span-4 space-y-6">

          {/* Upload */}
          <div className="relative group">
            <input type="file" accept="image/*" multiple onChange={handleUpload} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20" />
            <div className={`
              border-2 border-dashed rounded-[2rem] p-8 text-center transition-all duration-300
              ${images.length > 0 ? 'border-amber-500/50 bg-amber-900/10' : 'border-white/10 hover:border-amber-400 hover:bg-zinc-900'}
            `}>
              <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400 group-hover:text-amber-400 transition-colors">
                <Upload size={20} />
              </div>
              <p className="font-bold text-white mb-1">Add Images</p>
              <p className="text-xs text-gray-500">{images.length} images selected</p>
            </div>
          </div>

          {/* Settings */}
          <div className="bg-zinc-900/50 border border-white/10 rounded-[2rem] p-6 space-y-6">
            <div className="flex items-center gap-2 text-amber-400 font-bold uppercase tracking-wider text-xs mb-2">
              <Settings2 size={14} /> PDF Settings
            </div>

            <div className="space-y-4">
              {/* Orientation */}
              <div>
                <label className="text-xs text-gray-500 uppercase font-bold mb-2 block">Orientation</label>
                <div className="flex bg-black/40 p-1 rounded-xl border border-white/5">
                  <button
                    onClick={() => setOrientation('portrait')}
                    className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${orientation === 'portrait' ? 'bg-amber-600 text-black' : 'text-gray-400 hover:text-white'}`}
                  >
                    Portrait
                  </button>
                  <button
                    onClick={() => setOrientation('landscape')}
                    className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${orientation === 'landscape' ? 'bg-amber-600 text-black' : 'text-gray-400 hover:text-white'}`}
                  >
                    Landscape
                  </button>
                </div>
              </div>

              {/* Page Size */}
              <div>
                <label className="text-xs text-gray-500 uppercase font-bold mb-2 block">Page Size</label>
                <select
                  value={pageSize}
                  onChange={(e) => setPageSize(e.target.value)}
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-amber-500"
                >
                  <option value="a4">A4 (Standard)</option>
                  <option value="letter">US Letter</option>
                  <option value="fit">Fit to Image</option>
                </select>
              </div>

              {/* Margin */}
              <div>
                <label className="text-xs text-gray-500 uppercase font-bold mb-2 block">Margin</label>
                <div className="flex justify-between text-xs text-gray-400 mb-2">
                  <span>None</span>
                  <span>Standard</span>
                </div>
                <input
                  type="range"
                  min="0" max="2"
                  step="1"
                  value={margin === 'none' ? 0 : margin === 'small' ? 1 : 2}
                  onChange={(e) => {
                    const val = Number(e.target.value);
                    setMargin(val === 0 ? 'none' : val === 1 ? 'small' : 'large');
                  }}
                  className="w-full h-2 bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-amber-400"
                />
              </div>
            </div>

            <button
              onClick={startGeneration}
              disabled={images.length === 0 || isGenerating}
              className={`
                 w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all
                 ${images.length === 0 || isGenerating
                  ? "bg-zinc-800 text-gray-500 cursor-not-allowed"
                  : "bg-amber-500 hover:bg-amber-400 text-black shadow-lg shadow-amber-900/20 hover:scale-[1.02]"}
               `}
            >
              {isGenerating ? "Compiling Pages..." : "Create PDF"}
            </button>
          </div>
        </div>

        {/* Right: Workspace & Preview */}
        <div className="lg:col-span-8">
          <div className="bg-zinc-900 border border-white/10 rounded-[2rem] h-full min-h-[600px] flex flex-col relative overflow-hidden">

            {/* Header */}
            <div className="p-6 border-b border-white/5 flex justify-between items-center bg-black/20">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Document Preview</span>
              {isReady && <span className="text-xs font-bold text-amber-400 flex items-center gap-1"><CheckCircle2 size={14} /> PDF Ready</span>}
            </div>

            {/* Workspace */}
            <div className="flex-1 p-6 bg-zinc-950/50 overflow-y-auto custom-scrollbar relative">

              {images.length === 0 && (
                <div className="h-full flex flex-col items-center justify-center text-center opacity-30">
                  <FileImage size={64} className="mx-auto mb-4" />
                  <p className="text-xl font-bold">No images added</p>
                </div>
              )}

              {isGenerating && (
                <div className="absolute inset-0 bg-black/80 z-20 flex flex-col items-center justify-center">
                  <div className="w-64">
                    <div className="flex justify-between text-xs text-amber-400 mb-2 font-bold">
                      <span>Generating PDF...</span>
                      <span>{progress}%</span>
                    </div>
                    <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                      <div className="h-full bg-amber-500 transition-all duration-100" style={{ width: `${progress}%` }}></div>
                    </div>
                  </div>
                </div>
              )}

              {/* Image List */}
              <div className="grid grid-cols-1 gap-4 max-w-2xl mx-auto">
                {images.map((img, index) => (
                  <div key={img.id} className="bg-black border border-white/10 rounded-xl p-4 flex items-center gap-4 group hover:border-amber-500/30 transition-colors">
                    {/* Page Number */}
                    <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-bold text-gray-400">
                      {index + 1}
                    </div>

                    {/* Thumbnail */}
                    <div className="w-16 h-20 bg-white rounded-md overflow-hidden border border-zinc-700 relative">
                      <img src={img.url} alt="Page" className="w-full h-full object-contain" />
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold text-white truncate">{img.name}</p>
                      <p className="text-xs text-gray-500">{(img.file.size / 1024).toFixed(0)} KB</p>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2">
                      <button onClick={() => moveImage(index, 'up')} disabled={index === 0} className="p-2 hover:bg-zinc-800 rounded-lg text-gray-500 hover:text-white disabled:opacity-30">
                        <MoveUp size={16} />
                      </button>
                      <button onClick={() => moveImage(index, 'down')} disabled={index === images.length - 1} className="p-2 hover:bg-zinc-800 rounded-lg text-gray-500 hover:text-white disabled:opacity-30">
                        <MoveDown size={16} />
                      </button>
                      <div className="w-px h-6 bg-white/10 mx-1"></div>
                      <button onClick={() => removeImage(img.id)} className="p-2 hover:bg-red-900/20 rounded-lg text-gray-500 hover:text-red-400">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

            </div>

            {/* Footer Actions */}
            {isReady && (
              <div className="p-6 border-t border-white/5 bg-black/40 flex justify-between items-center animate-in slide-in-from-bottom-4">
                <div className="text-xs text-gray-500">
                  Total Pages: {images.length}
                </div>
                <button
                  onClick={handleDownload}
                  className="bg-amber-500 hover:bg-amber-400 text-black font-bold py-3 px-8 rounded-xl flex items-center gap-2 transition-transform hover:scale-105 shadow-lg shadow-amber-900/20"
                >
                  <Download size={18} /> Download PDF
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

    </div>
  );
};

export default ImageToPDF;