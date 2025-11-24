import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  QrCode, Download, Upload, ArrowLeft,
  Palette, Link as LinkIcon, RefreshCw, Image as ImageIcon
} from "lucide-react";

const QRStudio = () => {
  // --- State ---
  const [text, setText] = useState("https://example.com");
  const [color, setColor] = useState("#000000");
  const [bgColor, setBgColor] = useState("#ffffff");
  const [logo, setLogo] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const canvasRef = useRef(null);

  // --- Handlers ---
  const handleLogoUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => setLogo(ev.target.result);
      reader.readAsDataURL(file);
    }
  };

  // --- QR Generation Logic ---
  useEffect(() => {
    generateQR();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, color, bgColor, logo]);

  const generateQR = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    setIsGenerating(true);
    const ctx = canvas.getContext("2d");

    // 1. Prepare QR URL (Using qrserver API)
    // We strip the '#' from hex colors for the API
    const qrColor = color.replace("#", "");
    const qrBg = bgColor.replace("#", "");
    const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=1000x1000&data=${encodeURIComponent(text)}&color=${qrColor}&bgcolor=${qrBg}&margin=2&format=png`;

    // 2. Load and Draw QR
    const img = new Image();
    img.crossOrigin = "Anonymous"; // Crucial for canvas export
    img.src = apiUrl;

    img.onload = () => {
      // Set Canvas Size
      canvas.width = 1000;
      canvas.height = 1000;

      // Draw QR
      ctx.drawImage(img, 0, 0, 1000, 1000);

      // 3. Draw Logo (if exists)
      if (logo) {
        const logoImg = new Image();
        logoImg.src = logo;
        logoImg.onload = () => {
          const size = 220; // Logo size
          const x = (1000 - size) / 2;
          const y = (1000 - size) / 2;

          // Draw Logo Background (Circle or Square cut-out effect)
          ctx.fillStyle = bgColor;
          // Simple square background for logo legibility
          const pad = 20;
          ctx.fillRect(x - pad, y - pad, size + (pad * 2), size + (pad * 2));

          // Draw Logo
          ctx.drawImage(logoImg, x, y, size, size);
          setIsGenerating(false);
        };
      } else {
        setIsGenerating(false);
      }
    };
  };

  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const link = document.createElement("a");
      link.download = "custom-qr-code.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-orange-500/30 pb-24">

      {/* --- Header --- */}
      <div className="relative pt-32 pb-12 px-6">
        <div className="absolute inset-0 opacity-20 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(#333 1px, transparent 1px)", backgroundSize: "32px 32px" }}>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <Link to="/tools" className="inline-flex items-center gap-2 text-gray-400 hover:text-orange-400 mb-6 transition-colors text-sm">
            <ArrowLeft size={16} /> Back to Tools
          </Link>

          <div className="flex items-center gap-6 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-orange-500/10 text-orange-400 flex items-center justify-center border border-orange-500/20 shadow-[0_0_30px_rgba(249,115,22,0.15)]">
              <QrCode size={32} />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-2">QR <span className="text-orange-400">Studio</span></h1>
              <p className="text-gray-400 max-w-xl text-lg">Create scannable art. Customize colors, add logos, and generate high-res QR codes.</p>
            </div>
          </div>
        </div>
      </div>

      {/* --- Main Tool Area --- */}
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-12 gap-8">

        {/* Left: Configuration */}
        <div className="lg:col-span-5 space-y-6">

          <div className="bg-zinc-900/50 border border-white/10 rounded-[2rem] p-6 space-y-6">

            {/* Input Field */}
            <div>
              <label className="text-xs text-orange-400 uppercase font-bold mb-2 flex items-center gap-2">
                <LinkIcon size={14} /> Destination Content
              </label>
              <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="https://yourwebsite.com"
                className="w-full bg-black/50 border border-white/10 rounded-xl p-4 text-white focus:border-orange-500 outline-none transition-colors"
              />
            </div>

            <div className="w-full h-px bg-white/10" />

            {/* Colors */}
            <div>
              <label className="text-xs text-orange-400 uppercase font-bold mb-3 flex items-center gap-2">
                <Palette size={14} /> Appearance
              </label>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-[10px] text-gray-500 uppercase font-bold block mb-2">QR Color</span>
                  <div className="flex items-center bg-black/50 rounded-xl p-2 border border-white/10">
                    <input type="color" value={color} onChange={(e) => setColor(e.target.value)} className="bg-transparent w-8 h-8 rounded cursor-pointer mr-2 border-none" />
                    <span className="text-gray-400 text-xs font-mono">{color}</span>
                  </div>
                </div>
                <div>
                  <span className="text-[10px] text-gray-500 uppercase font-bold block mb-2">Background</span>
                  <div className="flex items-center bg-black/50 rounded-xl p-2 border border-white/10">
                    <input type="color" value={bgColor} onChange={(e) => setBgColor(e.target.value)} className="bg-transparent w-8 h-8 rounded cursor-pointer mr-2 border-none" />
                    <span className="text-gray-400 text-xs font-mono">{bgColor}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full h-px bg-white/10" />

            {/* Logo Upload */}
            <div>
              <label className="text-xs text-orange-400 uppercase font-bold mb-3 flex items-center gap-2">
                <ImageIcon size={14} /> Brand Logo
              </label>

              {logo ? (
                <div className="flex items-center justify-between bg-black/50 border border-orange-500/30 rounded-xl p-3">
                  <div className="flex items-center gap-3">
                    <img src={logo} alt="Logo" className="w-10 h-10 object-contain rounded bg-white/10" />
                    <span className="text-sm text-gray-300">Logo Applied</span>
                  </div>
                  <button onClick={() => setLogo(null)} className="text-xs text-red-400 hover:text-red-300 px-3 py-1">Remove</button>
                </div>
              ) : (
                <div className="relative group">
                  <input type="file" accept="image/*" onChange={handleLogoUpload} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20" />
                  <div className="border-2 border-dashed border-white/10 hover:border-orange-400 rounded-xl p-6 text-center transition-all">
                    <p className="text-sm text-gray-400 group-hover:text-white transition-colors">
                      Drop logo here to center overlay
                    </p>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>

        {/* Right: Preview */}
        <div className="lg:col-span-7">
          <div className="bg-zinc-900 border border-white/10 rounded-[2rem] h-full min-h-[500px] flex flex-col relative overflow-hidden">

            {/* Header */}
            <div className="p-6 border-b border-white/5 flex justify-between items-center bg-black/20">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Live Preview</span>
              {isGenerating && <span className="text-xs text-orange-400 animate-pulse flex items-center gap-1"><RefreshCw size={12} className="animate-spin" /> Generating...</span>}
            </div>

            {/* Canvas Container */}
            <div className="flex-1 p-8 flex items-center justify-center bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-fixed">
              <div className="relative shadow-2xl shadow-orange-900/10 rounded-xl overflow-hidden bg-white max-w-[350px] w-full aspect-square border-4 border-white">
                {/* The actual canvas used for generation and download */}
                <canvas
                  ref={canvasRef}
                  className="w-full h-full object-contain"
                  style={{ imageRendering: "pixelated" }} // Keeps QR sharp
                />
              </div>
            </div>

            {/* Footer Actions */}
            <div className="p-6 border-t border-white/5 bg-black/40 flex justify-end">
              <button
                onClick={handleDownload}
                disabled={isGenerating}
                className="
  bg-gradient-to-r from-orange-500 to-yellow-400
  hover:from-orange-400 hover:to-yellow-300
  text-black
  font-bold py-3 px-8
  rounded-xl flex items-center gap-2
  transition-transform hover:scale-105
  shadow-lg shadow-orange-600/30
  bg-red-100
"
              >
                <Download size={18} /> Download QR
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default QRStudio;