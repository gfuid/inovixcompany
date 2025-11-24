import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Mic2, Upload, Download, ArrowLeft,
  Music, FileAudio, Settings, Play
} from "lucide-react";

const VideoToAudio = () => {
  // --- State ---
  const [file, setFile] = useState(null);
  const [isExtracting, setIsExtracting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState(null);

  // Settings
  const [format, setFormat] = useState("mp3");
  const [bitrate, setBitrate] = useState("192");

  // --- Handlers ---
  const handleUpload = (e) => {
    const selected = e.target.files?.[0];
    if (selected && selected.type.startsWith("video/")) {
      setFile(selected);
      setResult(null);
      setProgress(0);
    } else if (selected) {
      alert("Please upload a valid video file.");
    }
  };

  const startExtraction = () => {
    if (!file) return;
    setIsExtracting(true);
    setProgress(0);

    // --- SIMULATION LOGIC ---
    // Mimics reading the stream and encoding audio
    let current = 0;
    const interval = setInterval(() => {
      current += Math.random() * 5; // Random speed bumps
      if (current >= 100) {
        current = 100;
        clearInterval(interval);

        setResult({
          fileName: file.name.replace(/\.[^/.]+$/, "") + `.${format}`,
          size: Math.floor(file.size * 0.1), // Audio is roughly 10% of video size
          format: format.toUpperCase()
        });
        setIsExtracting(false);
      }
      setProgress(current);
    }, 150);
  };

  const handleDownload = () => {
    // Simulation: In a real app, this would download the processed Blob
    alert("Download started! (Simulation)");
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-fuchsia-500/30 pb-24">

      {/* --- Header --- */}
      <div className="relative pt-32 pb-12 px-6">
        <div className="absolute inset-0 opacity-20 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(#333 1px, transparent 1px)", backgroundSize: "32px 32px" }}>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <Link to="/tools" className="inline-flex items-center gap-2 text-gray-400 hover:text-fuchsia-400 mb-6 transition-colors text-sm">
            <ArrowLeft size={16} /> Back to Tools
          </Link>

          <div className="flex items-center gap-6 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-fuchsia-500/10 text-fuchsia-400 flex items-center justify-center border border-fuchsia-500/20 shadow-[0_0_30px_rgba(217,70,239,0.15)]">
              <Mic2 size={32} />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-2">Video to <span className="text-fuchsia-400">Audio</span></h1>
              <p className="text-gray-400 max-w-xl text-lg">Extract crystal clear audio tracks from any video file (MP4, MOV, AVI).</p>
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
              ${file ? 'border-fuchsia-500/50 bg-fuchsia-900/10' : 'border-white/10 hover:border-fuchsia-400 hover:bg-zinc-900'}
            `}>
              <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400 group-hover:text-fuchsia-400 transition-colors">
                {file ? <FileAudio size={24} className="text-fuchsia-400" /> : <Upload size={20} />}
              </div>
              <p className="font-bold text-white mb-1">{file ? file.name : "Select Video File"}</p>
              <p className="text-xs text-gray-500">{file ? `${(file.size / 1024 / 1024).toFixed(2)} MB` : "MP4, MOV, WEBM"}</p>
            </div>
          </div>

          {/* Settings */}
          <div className="bg-zinc-900/50 border border-white/10 rounded-[2rem] p-6 space-y-6">
            <div className="flex items-center gap-2 text-fuchsia-400 font-bold uppercase tracking-wider text-xs mb-2">
              <Settings size={14} /> Output Settings
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-xs text-gray-500 uppercase font-bold mb-2 block">Format</label>
                <div className="grid grid-cols-3 gap-2">
                  {['mp3', 'wav', 'aac'].map((fmt) => (
                    <button
                      key={fmt}
                      onClick={() => setFormat(fmt)}
                      className={`py-2 rounded-lg text-sm font-bold border transition-all uppercase ${format === fmt ? 'bg-fuchsia-500 text-white border-fuchsia-500' : 'bg-black/50 border-white/10 text-gray-400'}`}
                    >
                      {fmt}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs text-gray-500 uppercase font-bold mb-2 block">Bitrate Quality</label>
                <select
                  value={bitrate}
                  onChange={(e) => setBitrate(e.target.value)}
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-fuchsia-500"
                >
                  <option value="128">128 kbps (Standard)</option>
                  <option value="192">192 kbps (High)</option>
                  <option value="320">320 kbps (Ultra)</option>
                </select>
              </div>
            </div>

            <button
              onClick={startExtraction}
              disabled={!file || isExtracting}
              className={`
                 w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all
                 ${!file || isExtracting
                  ? "bg-zinc-800 text-gray-500 cursor-not-allowed"
                  : "bg-fuchsia-600 hover:bg-fuchsia-500 text-white shadow-lg shadow-fuchsia-900/20 hover:scale-[1.02]"}
               `}
            >
              {isExtracting ? "Extracting Audio..." : "Convert Now"}
            </button>
          </div>
        </div>

        {/* Right: Visualization & Result */}
        <div className="lg:col-span-7">
          <div className="bg-zinc-900 border border-white/10 rounded-[2rem] h-full min-h-[500px] flex flex-col relative overflow-hidden">

            {/* Header */}
            <div className="p-6 border-b border-white/5 flex justify-between items-center bg-black/20">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Audio Visualizer</span>
              {result && <span className="text-xs font-bold text-fuchsia-400">Complete</span>}
            </div>

            {/* Workspace */}
            <div className="flex-1 p-8 flex flex-col items-center justify-center bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-fixed relative">

              {!file && (
                <div className="text-center opacity-30">
                  <Music size={64} className="mx-auto mb-4" />
                  <p className="text-xl font-bold">Waiting for media...</p>
                </div>
              )}

              {/* Animated Visualizer (During Extraction) */}
              {isExtracting && (
                <div className="w-full flex flex-col items-center">
                  {/* Fake Equalizer Bars */}
                  <div className="flex items-end gap-1 h-32 mb-8">
                    {[...Array(12)].map((_, i) => (
                      <div
                        key={i}
                        className="w-4 bg-fuchsia-500 rounded-t-sm animate-pulse"
                        style={{
                          height: `${Math.random() * 100}%`,
                          animationDuration: `${0.4 + Math.random() * 0.5}s`
                        }}
                      />
                    ))}
                  </div>

                  <div className="w-full max-w-xs">
                    <div className="flex justify-between text-xs text-fuchsia-300 mb-2 font-bold">
                      <span>Encoding {format.toUpperCase()}...</span>
                      <span>{Math.round(progress)}%</span>
                    </div>
                    <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                      <div className="h-full bg-fuchsia-500 transition-all duration-100 ease-linear" style={{ width: `${progress}%` }}></div>
                    </div>
                  </div>
                </div>
              )}

              {/* Result Card */}
              {result && !isExtracting && (
                <div className="w-full max-w-sm animate-in zoom-in duration-300">
                  <div className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center relative overflow-hidden">
                    {/* Glow Effect */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-fuchsia-500/20 blur-[50px] pointer-events-none" />

                    <div className="w-20 h-20 bg-fuchsia-500/20 rounded-full flex items-center justify-center mx-auto mb-4 text-fuchsia-400 relative z-10 border border-fuchsia-500/30">
                      <Play size={32} fill="currentColor" />
                    </div>

                    <h2 className="text-xl font-bold text-white mb-1 truncate px-2">{result.fileName}</h2>
                    <p className="text-gray-500 text-sm mb-6 uppercase tracking-wider">{result.format} • {(result.size / 1024 / 1024).toFixed(2)} MB</p>

                    <button
                      onClick={handleDownload}
                      className="w-full bg-fuchsia-600 hover:bg-fuchsia-500 text-white font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-transform hover:scale-105 shadow-lg shadow-fuchsia-900/20"
                    >
                      <Download size={18} /> Download Audio
                    </button>
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

export default VideoToAudio;