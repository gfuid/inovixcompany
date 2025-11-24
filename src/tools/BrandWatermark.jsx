import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Upload, Download, ImageIcon, Type,
  ArrowLeft, Settings2, Grid3X3, ImagePlus, RefreshCw
} from "lucide-react";

const BrandWatermark = () => {
  // --- State ---
  const [baseImage, setBaseImage] = useState(null);
  const [logoImage, setLogoImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  // Settings
  const [mode, setMode] = useState("text"); // 'text' or 'logo'
  const [text, setText] = useState("© My Brand");
  const [textColor, setTextColor] = useState("#ffffff");
  const [opacity, setOpacity] = useState(0.7);
  const [scale, setScale] = useState(50); // 1-100 scale factor
  const [position, setPosition] = useState("center"); // tl, tc, tr, cl, center, cr, bl, bc, br
  const [isProcessing, setIsProcessing] = useState(false);

  const canvasRef = useRef(null);

  // --- Handlers ---
  const handleBaseUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => setBaseImage(ev.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleLogoUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => setLogoImage(ev.target.result);
      reader.readAsDataURL(file);
    }
  };

  // --- Canvas Rendering Logic ---
  useEffect(() => {
    if (!baseImage || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.src = baseImage;

    img.onload = () => {
      // 1. Set Canvas Dimensions to match Image
      canvas.width = img.width;
      canvas.height = img.height;

      // 2. Draw Base Image
      ctx.globalAlpha = 1.0;
      ctx.drawImage(img, 0, 0);

      // 3. Configure Watermark Settings
      ctx.globalAlpha = opacity;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      let x = canvas.width / 2;
      let y = canvas.height / 2;
      const padding = canvas.width * 0.05;

      // Positioning Logic
      if (position.includes("l")) x = padding;
      if (position.includes("r")) x = canvas.width - padding;
      if (position.includes("c") && !position.includes("center")) x = canvas.width / 2;

      if (position.includes("t")) y = padding;
      if (position.includes("b")) y = canvas.height - padding;
      if (position.includes("center")) { x = canvas.width / 2; y = canvas.height / 2; }

      // 4. Draw Watermark (Text vs Logo)
      if (mode === "text") {
        const fontSize = (canvas.width * 0.05) * (scale / 50); // Responsive font size
        ctx.font = `bold ${fontSize}px sans-serif`;
        ctx.fillStyle = textColor;

        // Add shadow for better visibility
        ctx.shadowColor = "rgba(0,0,0,0.5)";
        ctx.shadowBlur = 4;
        ctx.shadowOffsetX = 2;
        ctx.shadowOffsetY = 2;

        // Adjust text alignment based on position
        if (position.includes("l")) ctx.textAlign = "left";
        if (position.includes("r")) ctx.textAlign = "right";

        ctx.fillText(text, x, y);
      }
      else if (mode === "logo" && logoImage) {
        const logo = new Image();
        logo.src = logoImage;
        logo.onload = () => {
          const logoAspect = logo.width / logo.height;
          const logoWidth = (canvas.width * 0.2) * (scale / 50);
          const logoHeight = logoWidth / logoAspect;

          // Adjust X/Y to be center of the image draw point
          let drawX = x;
          let drawY = y;

          if (position.includes("l")) drawX = x;
          if (position.includes("r")) drawX = x - logoWidth;
          if (position.includes("c") || position === "center") drawX = x - (logoWidth / 2);

          if (position.includes("t")) drawY = y;
          if (position.includes("b")) drawY = y - logoHeight;
          if (position.includes("center")) drawY = y - (logoHeight / 2);

          ctx.shadowColor = "transparent"; // No shadow for images usually
          ctx.drawImage(logo, drawX, drawY, logoWidth, logoHeight);
        };
      }
    };
  }, [baseImage, logoImage, mode, text, textColor, opacity, scale, position]);

  const downloadImage = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const link = document.createElement("a");
      link.download = "watermarked-image.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-purple-500/30 pb-24">

      {/* --- Header --- */}
      <div className="relative pt-32 pb-12 px-6">
        <div className="absolute inset-0 opacity-20 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(#333 1px, transparent 1px)", backgroundSize: "32px 32px" }}>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-purple-400 mb-6 transition-colors text-sm">
            <ArrowLeft size={16} /> Back to Services
          </Link>

          <div className="flex items-center gap-6 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-purple-500/10 text-purple-400 flex items-center justify-center border border-purple-500/20 shadow-[0_0_30px_rgba(168,85,247,0.15)]">
              <ImageIcon size={32} />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-2">Brand <span className="text-purple-400">Watermark</span></h1>
              <p className="text-gray-400 max-w-xl text-lg">Protect your visual assets. Add professional logos or text overlays in seconds.</p>
            </div>
          </div>
        </div>
      </div>

      {/* --- Main Tool Area --- */}
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-12 gap-8">

        {/* Left: Controls */}
        <div className="lg:col-span-4 space-y-6">

          {/* Base Upload */}
          {!baseImage && (
            <div className="relative group">
              <input type="file" accept="image/*" onChange={handleBaseUpload} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20" />
              <div className="border-2 border-dashed border-white/10 hover:border-purple-400 hover:bg-zinc-900 rounded-[2rem] p-10 text-center transition-all duration-300">
                <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400 group-hover:text-purple-400">
                  <Upload size={20} />
                </div>
                <p className="font-bold text-white mb-1">Upload Base Image</p>
                <p className="text-xs text-gray-500">JPG, PNG, WEBP</p>
              </div>
            </div>
          )}

          {baseImage && (
            <div className="bg-zinc-900/50 border border-white/10 rounded-[2rem] p-6 space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-purple-400 font-bold uppercase tracking-wider text-xs flex items-center gap-2">
                  <Settings2 size={16} /> Configuration
                </h3>
                <button onClick={() => setBaseImage(null)} className="text-xs text-gray-500 hover:text-white underline">Change Image</button>
              </div>

              {/* Mode Switcher */}
              <div className="flex bg-black/50 p-1 rounded-xl">
                <button onClick={() => setMode("text")} className={`flex-1 py-2 rounded-lg text-sm font-bold flex items-center justify-center gap-2 transition-colors ${mode === "text" ? "bg-purple-600 text-white" : "text-gray-400 hover:text-white"}`}>
                  <Type size={16} /> Text
                </button>
                <button onClick={() => setMode("logo")} className={`flex-1 py-2 rounded-lg text-sm font-bold flex items-center justify-center gap-2 transition-colors ${mode === "logo" ? "bg-purple-600 text-white" : "text-gray-400 hover:text-white"}`}>
                  <ImagePlus size={16} /> Logo
                </button>
              </div>

              {/* Mode Specific Inputs */}
              {mode === "text" ? (
                <div className="space-y-4">
                  <div>
                    <label className="text-xs text-gray-500 uppercase font-bold">Content</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} className="w-full bg-black/50 border border-white/10 rounded-xl p-3 text-white mt-1 focus:border-purple-500 outline-none" />
                  </div>
                  <div>
                    <label className="text-xs text-gray-500 uppercase font-bold">Color</label>
                    <div className="flex gap-2 mt-1">
                      {['#ffffff', '#000000', '#facc15', '#ef4444', '#3b82f6'].map(c => (
                        <button key={c} onClick={() => setTextColor(c)} style={{ backgroundColor: c }} className={`w-8 h-8 rounded-full border-2 ${textColor === c ? 'border-purple-500 scale-110' : 'border-transparent'}`} />
                      ))}
                      <input type="color" value={textColor} onChange={(e) => setTextColor(e.target.value)} className="w-8 h-8 rounded-full overflow-hidden border-0 p-0" />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="relative group">
                  <input type="file" accept="image/*" onChange={handleLogoUpload} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20" />
                  <div className="bg-black/50 border border-white/10 rounded-xl p-4 flex items-center justify-between hover:border-purple-500 transition-colors">
                    <span className="text-sm text-gray-300 truncate">{logoImage ? "Logo Uploaded" : "Upload Logo File"}</span>
                    <Upload size={16} className="text-gray-500" />
                  </div>
                </div>
              )}

              <div className="w-full h-px bg-white/10" />

              {/* Sliders */}
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-500 uppercase font-bold">Opacity</span>
                    <span className="text-white">{Math.round(opacity * 100)}%</span>
                  </div>
                  <input type="range" min="0.1" max="1" step="0.1" value={opacity} onChange={(e) => setOpacity(Number(e.target.value))} className="w-full h-1.5 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500" />
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-500 uppercase font-bold">Scale</span>
                    <span className="text-white">{scale}%</span>
                  </div>
                  <input type="range" min="10" max="200" value={scale} onChange={(e) => setScale(Number(e.target.value))} className="w-full h-1.5 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500" />
                </div>
              </div>

              {/* Position Grid */}
              <div>
                <label className="text-xs text-gray-500 uppercase font-bold mb-2 block">Position</label>
                <div className="grid grid-cols-3 gap-2 w-32">
                  {["tl", "tc", "tr", "cl", "center", "cr", "bl", "bc", "br"].map((pos) => (
                    <button
                      key={pos}
                      onClick={() => setPosition(pos)}
                      className={`w-full aspect-square rounded border ${position === pos ? 'bg-purple-500 border-purple-400' : 'bg-black/50 border-white/10 hover:bg-white/10'}`}
                    />
                  ))}
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
              <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Live Preview</span>
              {baseImage && (
                <button onClick={() => { setBaseImage(null); setLogoImage(null); }} className="text-gray-500 hover:text-white transition-colors">
                  <RefreshCw size={18} />
                </button>
              )}
            </div>

            {/* Canvas Container */}
            <div className="flex-1 p-8 flex items-center justify-center bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-fixed overflow-auto">
              {!baseImage ? (
                <div className="text-center opacity-30">
                  <ImageIcon size={64} className="mx-auto mb-4" />
                  <p className="text-xl font-bold">Upload an image to start</p>
                </div>
              ) : (
                <div className="relative shadow-2xl rounded-lg overflow-hidden border border-white/10 max-w-full">
                  <canvas ref={canvasRef} className="max-w-full h-auto max-h-[600px] block" />
                </div>
              )}
            </div>

            {/* Footer Actions */}
            {baseImage && (
              <div className="p-6 border-t border-white/5 bg-black/40 flex justify-end">
                <button
                  onClick={downloadImage}
                  className="bg-purple-600 hover:bg-purple-500 text-white font-bold py-3 px-8 rounded-xl flex items-center gap-2 transition-transform hover:scale-105 shadow-lg shadow-purple-900/20"
                >
                  <Download size={18} /> Download Image
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

    </div>
  );
};

export default BrandWatermark;