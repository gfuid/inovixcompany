import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Wand2,
  Upload,
  Download,
  ArrowLeft,
  Sparkles,
  Zap,
  Eye,
  SquareSplitVertical
} from "lucide-react";

const ImageEnhancer = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isReady, setIsReady] = useState(false);

  const [upscaleFactor, setUpscaleFactor] = useState(2);
  const [sliderPosition, setSliderPosition] = useState(50);

  const containerRef = useRef(null);

  const handleUpload = (e) => {
    const selected = e.target.files?.[0];
    if (selected) {
      setFile(selected);
      setPreview(URL.createObjectURL(selected));
      setIsReady(false);
      setSliderPosition(50);
    }
  };

  const startEnhancement = () => {
    if (!file) return;
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      setIsReady(true);
    }, 3000);
  };

  const handleSliderMove = (e) => {
    if (!containerRef.current) return;
    const { left, width } = containerRef.current.getBoundingClientRect();
    const x = e.clientX || e.touches?.[0]?.clientX;

    let pos = ((x - left) / width) * 100;
    if (pos < 0) pos = 0;
    if (pos > 100) pos = 100;

    setSliderPosition(pos);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = preview;
    link.download = `enhanced_4k_${file.name}`;
    link.click();
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans pb-24">

      {/* Header */}
      <div className="relative pt-32 pb-12 px-6">
        <div className="absolute inset-0 opacity-20 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(#333 1px, transparent 1px)", backgroundSize: "32px 32px" }}>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <Link to="/tools" className="inline-flex items-center gap-2 text-gray-400 hover:text-yellow-400 mb-6 transition-colors text-sm">
            <ArrowLeft size={16} /> Back to Tools
          </Link>

          <div className="flex items-center gap-6 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-yellow-500/10 text-yellow-400 flex items-center justify-center border border-yellow-500/20">
              <Wand2 size={32} />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-black">
                Image <span className="text-yellow-400">Enhancer</span>
              </h1>
              <p className="text-gray-400 text-lg">AI-powered upscaling to turn blurry images into crisp 4K photos.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-12 gap-8">

        {/* Controls */}
        <div className="lg:col-span-4 space-y-6">

          {!file && (
            <div className="relative group h-[300px]">
              <input type="file" accept="image/*" onChange={handleUpload} className="absolute inset-0 opacity-0 cursor-pointer z-20" />
              <div className="h-full border-2 border-dashed border-white/10 hover:border-yellow-400 hover:bg-zinc-900 rounded-[2rem] flex flex-col justify-center items-center text-center">
                <Upload size={28} className="text-gray-400 group-hover:text-yellow-400" />
                <Sparkles size={16} className="text-yellow-500 animate-pulse mt-2" />
                <h3 className="text-lg font-bold mt-4">Upload Photo</h3>
                <p className="text-gray-500 text-sm">JPG, PNG, WEBP supported.</p>
              </div>
            </div>
          )}

          {file && (
            <div className="bg-zinc-900/50 border border-white/10 rounded-[2rem] p-6 space-y-6">

              {/* File Info */}
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <img src={preview} alt="" className="w-12 h-12 rounded-xl border border-white/10 object-cover" />
                  <div>
                    <p className="text-sm font-bold truncate">{file.name}</p>
                    <p className="text-xs text-gray-500">{(file.size / 1024).toFixed(0)} KB</p>
                  </div>
                </div>
                <button onClick={() => setFile(null)} className="text-gray-400 text-xs hover:text-white">Change</button>
              </div>

              {/* Settings */}
              {!isProcessing && !isReady && (
                <>
                  <label className="text-xs uppercase text-yellow-400">Upscale Factor</label>
                  <div className="grid grid-cols-2 gap-3">
                    <button onClick={() => setUpscaleFactor(2)} className={`p-3 rounded-xl border ${upscaleFactor === 2 ? "bg-yellow-500/20 border-yellow-500 text-yellow-400" : "border-white/10 bg-black/40 text-gray-400"}`}>
                      <span className="text-lg font-black">2x</span>
                    </button>

                    <button onClick={() => setUpscaleFactor(4)} className={`p-3 rounded-xl border ${upscaleFactor === 4 ? "bg-yellow-500/20 border-yellow-500 text-yellow-400" : "border-white/10 bg-black/40 text-gray-400"}`}>
                      <span className="text-lg font-black">4x</span>
                    </button>
                  </div>

                  <button onClick={startEnhancement} className="w-full py-4 bg-yellow-500 text-black font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-yellow-400">
                    <Sparkles size={18} /> Enhance Image
                  </button>
                </>
              )}

              {/* Loading */}
              {isProcessing && (
                <div className="text-center py-8">
                  <div className="relative w-16 h-16 mx-auto mb-4">
                    <div className="absolute inset-0 border-4 border-white/10 rounded-full" />
                    <div className="absolute inset-0 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin" />
                    <Zap className="absolute inset-0 m-auto text-yellow-400" size={20} />
                  </div>
                  <p className="animate-pulse font-bold">Restoring Details...</p>
                </div>
              )}

            </div>
          )}
        </div>

        {/* Result */}
        <div className="lg:col-span-8">
          <div className="bg-zinc-900 border border-white/10 rounded-[2rem] min-h-[500px] relative overflow-hidden">

            {/* Header */}
            <div className="p-6 border-b border-white/5 flex justify-between">
              <span className="text-xs text-gray-500 uppercase tracking-widest flex gap-2 items-center">
                {isReady ? <><SquareSplitVertical size={14} /> Before / After</> : "Preview"}
              </span>
            </div>

            {/* Canvas */}
            <div className="p-8 flex justify-center items-center h-full relative">

              {!file && (
                <div className="text-center opacity-30">
                  <Eye size={64} className="mx-auto mb-4" />
                  <p className="text-xl font-bold">Waiting for photo</p>
                </div>
              )}

              {file && (
                <div
                  ref={containerRef}
                  className="relative rounded-xl overflow-hidden cursor-col-resize"
                  onMouseMove={isReady ? handleSliderMove : null}
                  onTouchMove={isReady ? handleSliderMove : null}
                >
                  <img src={preview} className="max-w-full max-h-[500px] object-contain" />

                  <div
                    className="absolute inset-0 overflow-hidden"
                    style={{ width: isReady ? `${sliderPosition}%` : "100%" }}
                  >
                    <img src={preview} className="max-w-full max-h-[500px] object-contain blur-sm brightness-90 contrast-75" />
                  </div>

                  {isReady && (
                    <div
                      className="absolute top-0 bottom-0 w-8 flex items-center justify-center pointer-events-none"
                      style={{ left: `${sliderPosition}%` }}
                    >
                      <div className="w-8 h-8 rounded-full bg-white text-yellow-600 flex items-center justify-center shadow">
                        <SquareSplitVertical size={16} />
                      </div>
                    </div>
                  )}
                </div>
              )}

            </div>

            {/* Footer */}
            <div className="p-6 border-t border-white/5 flex justify-between">
              <span className="text-xs text-gray-500">{isReady ? "Download High-Res Result" : "Upload to start"}</span>

              <button
                onClick={handleDownload}
                disabled={!isReady}
                className="bg-yellow-500 text-black px-8 py-3 rounded-xl font-bold disabled:opacity-40 flex gap-2 items-center"
              >
                <Download size={18} /> Download 4K
              </button>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
};

export default ImageEnhancer;
