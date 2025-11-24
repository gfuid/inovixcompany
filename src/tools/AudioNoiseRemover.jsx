import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Music, Upload, Download, ArrowLeft,
  Sliders, Activity, Play, Pause, CheckCircle2
} from "lucide-react";

const AudioNoiseRemover = () => {
  // --- State ---
  const [file, setFile] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  // Settings
  const [reductionLevel, setReductionLevel] = useState(50); // dB reduction simulation
  const [model, setModel] = useState("speech"); // speech vs music

  // --- Handlers ---
  const handleUpload = (e) => {
    const selected = e.target.files?.[0];
    if (selected && selected.type.startsWith("audio/")) {
      setFile(selected);
      setIsReady(false);
      setIsProcessing(false);
    } else if (selected) {
      alert("Please upload a valid audio file (MP3, WAV).");
    }
  };

  const startProcessing = () => {
    if (!file) return;
    setIsProcessing(true);
    setIsReady(false);

    // --- SIMULATION LOGIC ---
    // Fake the time it takes to analyze frequencies and filter noise
    setTimeout(() => {
      setIsProcessing(false);
      setIsReady(true);
    }, 3500);
  };

  const handleDownload = () => {
    // In a real app, download the processed blob. 
    // Here we simulate by downloading the original file renamed.
    const url = URL.createObjectURL(file);
    const link = document.createElement("a");
    link.href = url;
    link.download = `cleaned_${file.name}`;
    link.click();
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-teal-500/30 pb-24">

      {/* --- Header --- */}
      <div className="relative pt-32 pb-12 px-6">
        <div className="absolute inset-0 opacity-20 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(#333 1px, transparent 1px)", backgroundSize: "32px 32px" }}>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <Link to="/tools" className="inline-flex items-center gap-2 text-gray-400 hover:text-teal-400 mb-6 transition-colors text-sm">
            <ArrowLeft size={16} /> Back to Tools
          </Link>

          <div className="flex items-center gap-6 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-teal-500/10 text-teal-400 flex items-center justify-center border border-teal-500/20 shadow-[0_0_30px_rgba(20,184,166,0.15)]">
              <Music size={32} />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-2">Noise <span className="text-teal-400">Remover</span></h1>
              <p className="text-gray-400 max-w-xl text-lg">AI-powered audio cleaning. Remove static, hum, and background hiss instantly.</p>
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
            <input type="file" accept="audio/*" onChange={handleUpload} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20" />
            <div className={`
              border-2 border-dashed rounded-[2rem] p-8 text-center transition-all duration-300
              ${file ? 'border-teal-500/50 bg-teal-900/10' : 'border-white/10 hover:border-teal-400 hover:bg-zinc-900'}
            `}>
              <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400 group-hover:text-teal-400 transition-colors">
                {file ? <Activity size={24} className="text-teal-400" /> : <Upload size={20} />}
              </div>
              <p className="font-bold text-white mb-1">{file ? file.name : "Select Audio"}</p>
              <p className="text-xs text-gray-500">{file ? `${(file.size / 1024 / 1024).toFixed(2)} MB` : "MP3, WAV, M4A"}</p>
            </div>
          </div>

          {/* Settings */}
          <div className="bg-zinc-900/50 border border-white/10 rounded-[2rem] p-6 space-y-6">
            <div className="flex items-center gap-2 text-teal-400 font-bold uppercase tracking-wider text-xs mb-2">
              <Sliders size={14} /> Audio Settings
            </div>

            <div className="space-y-6">
              {/* Model Select */}
              <div>
                <label className="text-xs text-gray-500 uppercase font-bold mb-2 block">Optimization Model</label>
                <div className="flex bg-black/40 p-1 rounded-xl border border-white/5">
                  <button
                    onClick={() => setModel('speech')}
                    className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${model === 'speech' ? 'bg-teal-600 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
                  >
                    Voice / Speech
                  </button>
                  <button
                    onClick={() => setModel('music')}
                    className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${model === 'music' ? 'bg-teal-600 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
                  >
                    Music
                  </button>
                </div>
              </div>

              {/* Reduction Level */}
              <div>
                <div className="flex justify-between text-xs text-gray-400 mb-2">
                  <span className="uppercase font-bold">Noise Reduction</span>
                  <span className="text-white">{reductionLevel}%</span>
                </div>
                <input
                  type="range"
                  min="0" max="100"
                  value={reductionLevel}
                  onChange={(e) => setReductionLevel(e.target.value)}
                  className="w-full h-2 bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-teal-400"
                />
                <div className="flex justify-between text-[10px] text-gray-600 mt-1 uppercase">
                  <span>Gentle</span>
                  <span>Aggressive</span>
                </div>
              </div>
            </div>

            <button
              onClick={startProcessing}
              disabled={!file || isProcessing}
              className={`
                 w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all
                 ${!file || isProcessing
                  ? "bg-zinc-800 text-gray-500 cursor-not-allowed"
                  : "bg-teal-600 hover:bg-teal-500 text-white shadow-lg shadow-teal-900/20 hover:scale-[1.02]"}
               `}
            >
              {isProcessing ? "Cleaning Audio..." : "Remove Noise"}
            </button>
          </div>
        </div>

        {/* Right: Visualizer & Result */}
        <div className="lg:col-span-7">
          <div className="bg-zinc-900 border border-white/10 rounded-[2rem] h-full min-h-[500px] flex flex-col relative overflow-hidden">

            {/* Header */}
            <div className="p-6 border-b border-white/5 flex justify-between items-center bg-black/20">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Waveform Monitor</span>
              {isReady && <span className="text-xs font-bold text-teal-400 flex items-center gap-1"><CheckCircle2 size={12} /> Cleaned</span>}
            </div>

            {/* Workspace */}
            <div className="flex-1 p-8 flex flex-col items-center justify-center bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-fixed relative">

              {!file && (
                <div className="text-center opacity-30">
                  <Activity size={64} className="mx-auto mb-4" />
                  <p className="text-xl font-bold">Waiting for audio...</p>
                </div>
              )}

              {/* Processing Animation */}
              {isProcessing && (
                <div className="w-full flex flex-col items-center gap-4">
                  <div className="flex items-center gap-1 h-16">
                    {[...Array(20)].map((_, i) => (
                      <div
                        key={i}
                        className="w-2 bg-teal-500 rounded-full animate-[wave_1s_ease-in-out_infinite]"
                        style={{
                          height: `${Math.random() * 100}%`,
                          animationDelay: `${i * 0.05}s`
                        }}
                      />
                    ))}
                  </div>
                  <p className="text-teal-400 font-mono text-sm animate-pulse">Analyzing frequencies...</p>
                </div>
              )}

              {/* Result Player */}
              {isReady && !isProcessing && (
                <div className="w-full max-w-md animate-in zoom-in duration-300">
                  <div className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8">

                    {/* Fake Waveform */}
                    <div className="flex items-center justify-center gap-[2px] h-12 mb-8 opacity-80">
                      {[...Array(40)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-1.5 rounded-full transition-all duration-300 ${isPlaying ? 'bg-teal-400 animate-pulse' : 'bg-zinc-700'}`}
                          style={{ height: `${20 + Math.random() * 80}%` }}
                        />
                      ))}
                    </div>

                    <div className="flex items-center justify-between gap-4 mb-6">
                      <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-black hover:bg-teal-400 transition-colors"
                      >
                        {isPlaying ? <Pause size={24} fill="black" /> : <Play size={24} fill="black" className="ml-1" />}
                      </button>

                      <div className="flex-1">
                        <p className="text-white font-bold text-sm truncate mb-1">{file.name}</p>
                        <p className="text-teal-400 text-xs">Noise Reduced (-{reductionLevel}dB)</p>
                      </div>
                    </div>

                    <button
                      onClick={handleDownload}
                      className="w-full bg-teal-600 hover:bg-teal-500 text-white font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-transform hover:scale-105 shadow-lg shadow-teal-900/20"
                    >
                      <Download size={18} /> Download Clean Audio
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

export default AudioNoiseRemover;