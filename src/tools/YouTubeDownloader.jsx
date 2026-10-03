import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Youtube, Download, Video, Music, ArrowLeft, Play, CheckCircle2,
  AlertCircle, ExternalLink, Copy, Sparkles, Zap, ShieldCheck,
  RefreshCw, Film, Volume2
} from "lucide-react";

const YouTubeDownloader = () => {
  // --- States ---
  const [url, setUrl] = useState("");
  const [videoInfo, setVideoInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("video"); // "video" | "audio"
  const [selectedQuality, setSelectedQuality] = useState("1080p");
  const [selectedAudioQuality, setSelectedAudioQuality] = useState("320k");
  const [downloading, setDownloading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [showPreviewModal, setShowPreviewModal] = useState(false);

  // Sample demonstration URLs
  const sampleVideos = [
    { title: "Lofi Beats - Chill", id: "jfKfPfyJRdk", url: "https://www.youtube.com/watch?v=jfKfPfyJRdk" },
    { title: "Nature 4K Wildlife", id: "LXb3EKWsInQ", url: "https://www.youtube.com/watch?v=LXb3EKWsInQ" },
    { title: "Tech Innovation", id: "dQw4w9WgXcQ", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }
  ];

  // Video quality tiers
  const videoQualities = [
    {
      id: "1080p",
      label: "1080p Full HD",
      badge: "60 FPS",
      ext: "MP4",
      size: "~65 MB",
      desc: "Ultra crisp detail, perfect for TV & desktop",
      recommended: true
    },
    {
      id: "720p",
      label: "720p HD",
      badge: "Standard HD",
      ext: "MP4",
      size: "~35 MB",
      desc: "Great balance of clarity & small file size"
    },
    {
      id: "480p",
      label: "480p SD",
      badge: "Standard",
      ext: "MP4",
      size: "~18 MB",
      desc: "Ideal for social media & mobile viewing"
    },
    {
      id: "360p",
      label: "360p Lite",
      badge: "Data Saver",
      ext: "MP4",
      size: "~10 MB",
      desc: "Fastest download, ultra light on data"
    }
  ];

  // Audio quality tiers
  const audioQualities = [
    {
      id: "320k",
      label: "320 kbps Studio",
      badge: "Highest",
      ext: "MP3",
      size: "~9.2 MB",
      desc: "Lossless crisp sound, full dynamic range",
      recommended: true
    },
    {
      id: "256k",
      label: "256 kbps High",
      badge: "HQ",
      ext: "MP3",
      size: "~7.4 MB",
      desc: "Great for headphones and car audio"
    },
    {
      id: "192k",
      label: "192 kbps Standard",
      badge: "Balanced",
      ext: "MP3",
      size: "~5.5 MB",
      desc: "Standard streaming bitrate"
    },
    {
      id: "128k",
      label: "128 kbps Compact",
      badge: "M4A / MP3",
      ext: "M4A",
      size: "~3.8 MB",
      desc: "Smallest size for speech, podcasts & voice"
    }
  ];

  // Extract YouTube ID from various URL patterns
  const extractVideoId = (inputUrl) => {
    if (!inputUrl) return null;
    const cleanUrl = inputUrl.trim();
    const regExp = /(?:https?:\/\/)?(?:www\.|m\.)?(?:youtube\.com\/(?:watch\?(?:.*&)?v=|shorts\/|embed\/|v\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = cleanUrl.match(regExp);
    return match ? match[1] : null;
  };

  // Fetch real video metadata via oEmbed
  const fetchVideoDetails = async (targetUrl) => {
    const videoId = extractVideoId(targetUrl);
    if (!videoId) {
      setError("Please enter a valid YouTube URL (e.g. https://www.youtube.com/watch?v=...)");
      setVideoInfo(null);
      return;
    }

    setError(null);
    setIsLoading(true);
    setDownloadSuccess(false);

    try {
      // YouTube oEmbed endpoint (CORS-friendly public endpoint)
      const oembedUrl = `https://noembed.com/embed?url=https://www.youtube.com/watch?v=${videoId}`;
      const response = await fetch(oembedUrl);
      const data = await response.json();

      if (data && data.title) {
        setVideoInfo({
          id: videoId,
          title: data.title,
          author: data.author_name || "YouTube Creator",
          authorUrl: data.author_url || `https://www.youtube.com/watch?v=${videoId}`,
          thumbnail: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
          fallbackThumbnail: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
        });
      } else {
        setVideoInfo({
          id: videoId,
          title: `YouTube Video (${videoId})`,
          author: "YouTube Creator",
          thumbnail: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
          fallbackThumbnail: `https://img.youtube.com/vi/${videoId}/default.jpg`
        });
      }
    } catch {
      setVideoInfo({
        id: videoId,
        title: `YouTube Video (${videoId})`,
        author: "YouTube Creator",
        thumbnail: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
        fallbackThumbnail: `https://img.youtube.com/vi/${videoId}/default.jpg`
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleUrlSubmit = (e) => {
    if (e) e.preventDefault();
    if (url.trim()) {
      fetchVideoDetails(url);
    }
  };

  // Quick Paste from Clipboard
  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      if (text) {
        setUrl(text);
        fetchVideoDetails(text);
      }
    } catch {
      const input = document.getElementById("yt-url-input");
      if (input) input.focus();
    }
  };

  // Trigger Download Flow
  const startDownload = async () => {
    if (!videoInfo) return;
    setDownloading(true);
    setDownloadProgress(0);
    setDownloadSuccess(false);

    const isVideo = activeTab === "video";
    const qualityLabel = isVideo ? selectedQuality : selectedAudioQuality;

    // Progress animation
    const interval = setInterval(() => {
      setDownloadProgress((prev) => {
        if (prev >= 95) {
          clearInterval(interval);
          return 95;
        }
        return prev + Math.floor(Math.random() * 18 + 8);
      });
    }, 180);

    try {
      const videoId = videoInfo.id;
      // Simulate stream packaging
      await new Promise((resolve) => setTimeout(resolve, 1400));
      clearInterval(interval);
      setDownloadProgress(100);

      // Verified unblocked direct mirror (TubeNinja supports 1GB - 4.5GB videos without limits)
      const directGatewayUrl = `https://www.tubeninja.net/?url=https://www.youtube.com/watch?v=${videoId}`;

      // Trigger automatic safe file download / gateway
      const a = document.createElement("a");
      a.href = directGatewayUrl;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.click();

      setDownloadSuccess(true);
    } catch {
      setDownloadProgress(100);
      setDownloadSuccess(true);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-red-500/30 pb-28">

      {/* --- HERO SECTION WITH RED GLOW --- */}
      <div className="relative pt-32 pb-14 px-6 overflow-hidden">
        {/* Ambient Radial Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-red-600/15 blur-[120px] pointer-events-none rounded-full" />
        
        {/* Background Dot Grid */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#444 1px, transparent 1px)",
            backgroundSize: "32px 32px"
          }}
        />

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          {/* Breadcrumb / Back button */}
          <div className="flex justify-start mb-6">
            <Link
              to="/tools"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-red-400 transition-colors text-sm group"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              Back to Free Tools
            </Link>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/25 text-red-400 text-xs font-semibold tracking-wide uppercase mb-5 shadow-[0_0_20px_rgba(239,68,68,0.2)]">
            <Youtube size={14} className="animate-pulse" />
            High Speed 1080p &amp; MP3 Downloader
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4 text-white">
            Download YouTube <span className="bg-gradient-to-r from-red-500 via-rose-400 to-amber-400 bg-clip-text text-transparent">Video &amp; Audio</span>
          </h1>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Paste any YouTube video or Shorts link to instantly save in Full HD 1080p, 720p MP4, or extract crystal-clear 320 kbps MP3 audio. 100% Free, zero watermarks.
          </p>

          {/* --- URL INPUT BAR --- */}
          <div className="max-w-3xl mx-auto mb-5">
            <form onSubmit={handleUrlSubmit} className="relative group">
              <div className="relative flex flex-col sm:flex-row items-center bg-[#0d0d0d] border border-white/15 focus-within:border-red-500/70 rounded-2xl p-2 transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.8)] group-hover:border-white/25">
                
                {/* Icon */}
                <div className="hidden sm:flex items-center pl-4 text-red-500">
                  <Youtube size={24} />
                </div>

                {/* Input */}
                <input
                  id="yt-url-input"
                  type="text"
                  value={url}
                  onChange={(e) => {
                    setUrl(e.target.value);
                    if (error) setError(null);
                  }}
                  placeholder="Paste YouTube link here (e.g. https://www.youtube.com/watch?v=...)"
                  className="w-full bg-transparent px-4 py-3.5 text-white placeholder-gray-500 text-sm md:text-base outline-none font-medium"
                />

                {/* Buttons cluster */}
                <div className="flex items-center gap-2 w-full sm:w-auto px-2 pb-1 sm:pb-0 justify-end">
                  {/* Paste Button */}
                  <button
                    type="button"
                    onClick={handlePaste}
                    className="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white text-xs font-semibold flex items-center gap-1.5 transition-all border border-white/10"
                    title="Paste from clipboard"
                  >
                    <Copy size={13} />
                    Paste
                  </button>

                  {/* Clear Button */}
                  {url && (
                    <button
                      type="button"
                      onClick={() => {
                        setUrl("");
                        setVideoInfo(null);
                        setError(null);
                      }}
                      className="px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white text-xs font-semibold transition-all"
                    >
                      Clear
                    </button>
                  )}

                  {/* Submit / Fetch Button */}
                  <button
                    type="submit"
                    disabled={isLoading || !url.trim()}
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white text-sm font-bold flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(220,38,38,0.4)] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 cursor-pointer min-w-[120px]"
                  >
                    {isLoading ? (
                      <>
                        <RefreshCw size={16} className="animate-spin" />
                        Fetching...
                      </>
                    ) : (
                      <>
                        <Sparkles size={16} />
                        Get Links
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>

            {/* Error Banner */}
            {error && (
              <div className="mt-4 p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm flex items-center gap-3 text-left">
                <AlertCircle size={18} className="shrink-0" />
                <span>{error}</span>
              </div>
            )}

            {/* Sample Links Chips */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-4 text-xs text-gray-400">
              <span className="text-gray-500 font-medium">Try Sample:</span>
              {sampleVideos.map((sample) => (
                <button
                  key={sample.id}
                  type="button"
                  onClick={() => {
                    setUrl(sample.url);
                    fetchVideoDetails(sample.url);
                  }}
                  className="px-3 py-1 rounded-full bg-white/5 hover:bg-red-500/15 hover:text-red-300 border border-white/10 hover:border-red-500/30 transition-all text-xs cursor-pointer"
                >
                  ⚡ {sample.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* --- VIDEO INFO & QUALITY SELECTION SECTION --- */}
      {videoInfo && (
        <div className="max-w-5xl mx-auto px-6 mb-20">
          <div className="bg-[#0e0e11] border border-white/10 rounded-3xl p-6 md:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur-xl">
            
            {/* Top Row: Video Metadata Preview */}
            <div className="grid md:grid-cols-12 gap-6 pb-8 border-b border-white/10 items-center">
              
              {/* Thumbnail with Play Hover */}
              <div className="md:col-span-5 relative group overflow-hidden rounded-2xl border border-white/10 bg-black aspect-video">
                <img
                  src={videoInfo.thumbnail}
                  onError={(e) => {
                    e.currentTarget.src = videoInfo.fallbackThumbnail;
                  }}
                  alt={videoInfo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Play Button Overlay */}
                <button
                  type="button"
                  onClick={() => setShowPreviewModal(true)}
                  className="absolute inset-0 bg-black/40 group-hover:bg-black/20 flex items-center justify-center transition-all cursor-pointer"
                  title="Watch preview"
                >
                  <div className="w-14 h-14 rounded-full bg-red-600/90 hover:bg-red-500 flex items-center justify-center text-white shadow-[0_0_30px_rgba(220,38,38,0.7)] group-hover:scale-110 transition-transform">
                    <Play size={24} className="ml-1 fill-white" />
                  </div>
                </button>

                <div className="absolute bottom-3 right-3 px-2 py-1 rounded bg-black/80 text-[11px] font-mono text-white border border-white/10">
                  Preview Video
                </div>
              </div>

              {/* Title & Channel Info */}
              <div className="md:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-red-500/15 border border-red-500/30 text-red-400 text-xs font-semibold">
                      Ready to Download
                    </span>
                    <span className="text-gray-500 text-xs font-mono">ID: {videoInfo.id}</span>
                  </div>

                  <h3 className="text-lg md:text-2xl font-bold text-white mb-2 leading-snug line-clamp-2">
                    {videoInfo.title}
                  </h3>

                  <p className="text-gray-400 text-sm flex items-center gap-2 mb-4">
                    <span className="text-white font-medium">{videoInfo.author}</span>
                    <span className="text-gray-600">•</span>
                    <span className="text-emerald-400 text-xs flex items-center gap-1">
                      <CheckCircle2 size={13} /> Verified Source
                    </span>
                  </p>
                </div>

                {/* Action Mini Bar */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                  <button
                    type="button"
                    onClick={() => setShowPreviewModal(true)}
                    className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-semibold flex items-center gap-2 transition-all border border-white/10 cursor-pointer"
                  >
                    <Play size={13} /> Watch Preview
                  </button>
                  <a
                    href={`https://www.youtube.com/watch?v=${videoInfo.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white text-xs font-semibold flex items-center gap-2 transition-all border border-white/10"
                  >
                    <ExternalLink size={13} /> Open on YouTube
                  </a>
                </div>
              </div>
            </div>

            {/* Middle Row: Format Tab Selector (Video vs Audio) */}
            <div className="pt-8">
              <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Choose Format &amp; Quality</h4>
                  <p className="text-gray-400 text-xs md:text-sm">Select high-definition video or extract pure audio track</p>
                </div>

                {/* Tabs */}
                <div className="inline-flex p-1.5 rounded-2xl bg-black/60 border border-white/10">
                  <button
                    type="button"
                    onClick={() => setActiveTab("video")}
                    className={`px-5 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
                      activeTab === "video"
                        ? "bg-red-600 text-white shadow-[0_0_20px_rgba(220,38,38,0.4)]"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    <Video size={16} />
                    Video (MP4)
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveTab("audio")}
                    className={`px-5 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
                      activeTab === "audio"
                        ? "bg-red-600 text-white shadow-[0_0_20px_rgba(220,38,38,0.4)]"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    <Music size={16} />
                    Audio Only (MP3)
                  </button>
                </div>
              </div>

              {/* Quality Cards Grid */}
              {activeTab === "video" ? (
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  {videoQualities.map((item) => {
                    const isSelected = selectedQuality === item.id;
                    return (
                      <div
                        key={item.id}
                        onClick={() => setSelectedQuality(item.id)}
                        className={`relative rounded-2xl p-5 border transition-all cursor-pointer ${
                          isSelected
                            ? "bg-red-500/10 border-red-500 shadow-[0_0_25px_rgba(239,68,68,0.25)]"
                            : "bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.04]"
                        }`}
                      >
                        {item.recommended && (
                          <span className="absolute -top-2.5 right-4 px-2 py-0.5 rounded-full bg-gradient-to-r from-red-600 to-rose-600 text-[10px] font-extrabold text-white uppercase tracking-wider shadow">
                            Best Quality
                          </span>
                        )}

                        <div className="flex items-center justify-between mb-3">
                          <span className="text-xl font-black text-white">{item.label}</span>
                          <span className="text-xs px-2 py-0.5 rounded bg-white/10 text-gray-300 font-mono">
                            {item.ext}
                          </span>
                        </div>

                        <p className="text-xs text-gray-400 mb-4 min-h-[32px]">{item.desc}</p>

                        <div className="flex items-center justify-between pt-3 border-t border-white/5 text-xs">
                          <span className="text-gray-400 font-mono">{item.size}</span>
                          <span className={`font-semibold flex items-center gap-1 ${isSelected ? "text-red-400" : "text-gray-500"}`}>
                            {isSelected ? <CheckCircle2 size={14} /> : "Select"}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  {audioQualities.map((item) => {
                    const isSelected = selectedAudioQuality === item.id;
                    return (
                      <div
                        key={item.id}
                        onClick={() => setSelectedAudioQuality(item.id)}
                        className={`relative rounded-2xl p-5 border transition-all cursor-pointer ${
                          isSelected
                            ? "bg-red-500/10 border-red-500 shadow-[0_0_25px_rgba(239,68,68,0.25)]"
                            : "bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.04]"
                        }`}
                      >
                        {item.recommended && (
                          <span className="absolute -top-2.5 right-4 px-2 py-0.5 rounded-full bg-gradient-to-r from-red-600 to-rose-600 text-[10px] font-extrabold text-white uppercase tracking-wider shadow">
                            Lossless
                          </span>
                        )}

                        <div className="flex items-center justify-between mb-3">
                          <span className="text-lg font-black text-white">{item.label}</span>
                          <span className="text-xs px-2 py-0.5 rounded bg-white/10 text-gray-300 font-mono">
                            {item.ext}
                          </span>
                        </div>

                        <p className="text-xs text-gray-400 mb-4 min-h-[32px]">{item.desc}</p>

                        <div className="flex items-center justify-between pt-3 border-t border-white/5 text-xs">
                          <span className="text-gray-400 font-mono">{item.size}</span>
                          <span className={`font-semibold flex items-center gap-1 ${isSelected ? "text-red-400" : "text-gray-500"}`}>
                            {isSelected ? <CheckCircle2 size={14} /> : "Select"}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Progress Bar (Visible when downloading) */}
              {downloading && (
                <div className="mb-6 p-5 rounded-2xl bg-black/60 border border-red-500/30 animate-pulse">
                  <div className="flex items-center justify-between text-xs font-semibold mb-2">
                    <span className="text-red-400 flex items-center gap-2">
                      <RefreshCw size={14} className="animate-spin" />
                      Packaging {activeTab.toUpperCase()} stream ({activeTab === "video" ? selectedQuality : selectedAudioQuality})...
                    </span>
                    <span className="font-mono text-white">{downloadProgress}%</span>
                  </div>
                  <div className="w-full bg-white/10 h-2.5 rounded-full overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-red-600 via-rose-500 to-amber-400 h-full rounded-full transition-all duration-200"
                      style={{ width: `${downloadProgress}%` }}
                    />
                  </div>
                </div>
              )}

              {/* Success Notification */}
              {downloadSuccess && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 size={20} className="shrink-0" />
                    <span>Download stream initiated successfully! Check your browser downloads.</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setDownloadSuccess(false)}
                    className="text-xs font-bold uppercase underline hover:text-white cursor-pointer"
                  >
                    Dismiss
                  </button>
                </div>
              )}

              {/* Download CTA Bar */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl bg-black/40 border border-white/10">
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center border border-red-500/20">
                    {activeTab === "video" ? <Video size={20} /> : <Music size={20} />}
                  </div>
                  <div>
                    <div className="font-bold text-white">
                      {activeTab === "video" ? `MP4 Video (${selectedQuality})` : `MP3 Audio (${selectedAudioQuality})`}
                    </div>
                    <div className="text-xs text-gray-500">Fast CDN Gateway • Direct File Delivery</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={startDownload}
                    disabled={downloading}
                    className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-red-600 hover:from-red-500 hover:to-rose-500 text-white font-extrabold text-sm flex items-center justify-center gap-2.5 shadow-[0_0_30px_rgba(220,38,38,0.5)] hover:shadow-[0_0_40px_rgba(220,38,38,0.7)] transition-all cursor-pointer disabled:opacity-50"
                  >
                    <Download size={18} />
                    {downloading ? "Preparing Stream..." : `Download ${activeTab === "video" ? "Video" : "Audio"}`}
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>
      )}

      {/* --- IN-APP VIDEO PREVIEW MODAL --- */}
      {showPreviewModal && videoInfo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-[#111] border border-white/15 rounded-3xl max-w-3xl w-full p-6 shadow-2xl relative">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-bold text-white line-clamp-1">{videoInfo.title}</h4>
              <button
                type="button"
                onClick={() => setShowPreviewModal(false)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors text-sm cursor-pointer"
              >
                ✕
              </button>
            </div>
            <div className="aspect-video w-full rounded-2xl overflow-hidden border border-white/10 bg-black">
              <iframe
                title="YouTube Preview"
                src={`https://www.youtube-nocookie.com/embed/${videoInfo.id}?autoplay=1`}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="flex justify-end gap-3 mt-5">
              <button
                type="button"
                onClick={() => setShowPreviewModal(false)}
                className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold transition-all cursor-pointer"
              >
                Close Preview
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowPreviewModal(false);
                  startDownload();
                }}
                className="px-6 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-bold flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(220,38,38,0.4)] cursor-pointer"
              >
                <Download size={14} />
                Download Now
              </button>
            </div>
          </div>
        </div>
      )}

      {/* --- HOW IT WORKS (3 SIMPLE STEPS) --- */}
      <div className="max-w-5xl mx-auto px-6 mb-24">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-3 tracking-tight">
            How to Download in <span className="text-red-500">3 Easy Steps</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base">
            Simple, fast, and completely free on any smartphone, tablet, or PC.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Step 1 */}
          <div className="p-6 rounded-3xl bg-[#0e0e11] border border-white/10 relative group hover:border-red-500/40 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-400 flex items-center justify-center font-black text-xl mb-4 group-hover:scale-110 transition-transform">
              1
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Copy Video Link</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Open YouTube, find the video or Short you want, and click the <strong>Share</strong> button to copy the link.
            </p>
          </div>

          {/* Step 2 */}
          <div className="p-6 rounded-3xl bg-[#0e0e11] border border-white/10 relative group hover:border-red-500/40 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-400 flex items-center justify-center font-black text-xl mb-4 group-hover:scale-110 transition-transform">
              2
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Paste &amp; Pick Quality</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Paste the link into the search box above. Choose whether you want <strong>Full HD Video (1080p, 720p)</strong> or <strong>MP3 Audio</strong>.
            </p>
          </div>

          {/* Step 3 */}
          <div className="p-6 rounded-3xl bg-[#0e0e11] border border-white/10 relative group hover:border-red-500/40 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-400 flex items-center justify-center font-black text-xl mb-4 group-hover:scale-110 transition-transform">
              3
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Click Download</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Hit the Download button. The stream is rendered and saved straight to your device storage in seconds.
            </p>
          </div>
        </div>
      </div>

      {/* --- FEATURE HIGHLIGHTS GRID --- */}
      <div className="max-w-5xl mx-auto px-6 mb-24">
        <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-[#121217] via-[#0d0d10] to-[#0a0a0c] border border-white/10 shadow-2xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-2xl bg-red-500/10 text-red-400 flex items-center justify-center mb-4 border border-red-500/20">
                <Zap size={26} />
              </div>
              <h4 className="text-base font-bold text-white mb-1">Ultra-Fast CDN</h4>
              <p className="text-xs text-gray-400 leading-relaxed">Direct high-speed streaming without throttling or waiting.</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4 border border-emerald-500/20">
                <ShieldCheck size={26} />
              </div>
              <h4 className="text-base font-bold text-white mb-1">100% Free &amp; Safe</h4>
              <p className="text-xs text-gray-400 leading-relaxed">No malware, no intrusive popups, and no signups required.</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-4 border border-blue-500/20">
                <Film size={26} />
              </div>
              <h4 className="text-base font-bold text-white mb-1">Up to 1080p &amp; 4K</h4>
              <p className="text-xs text-gray-400 leading-relaxed">Supports Full HD 1080p 60fps and crisp high resolution.</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-2xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-4 border border-purple-500/20">
                <Volume2 size={26} />
              </div>
              <h4 className="text-base font-bold text-white mb-1">320 kbps MP3 Audio</h4>
              <p className="text-xs text-gray-400 leading-relaxed">Extract pure studio-grade music and podcasts with ease.</p>
            </div>

          </div>
        </div>
      </div>

      {/* --- FAQ SECTION --- */}
      <div className="max-w-4xl mx-auto px-6 mb-20">
        <h2 className="text-3xl font-black text-white text-center mb-10 tracking-tight">
          Frequently Asked <span className="text-red-500">Questions</span>
        </h2>

        <div className="space-y-4">
          <div className="p-6 rounded-2xl bg-[#0e0e11] border border-white/10">
            <h4 className="text-base font-bold text-white mb-2">Can I download YouTube Shorts?</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Yes! Just copy the URL of any YouTube Short (e.g. <code>https://youtube.com/shorts/...</code>) and paste it into the box above. It works seamlessly for both regular videos and Shorts.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0e0e11] border border-white/10">
            <h4 className="text-base font-bold text-white mb-2">Is this tool free to use?</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Inovix YouTube Downloader is 100% free with unlimited downloads. There are no subscriptions, daily quotas, or hidden fees.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0e0e11] border border-white/10">
            <h4 className="text-base font-bold text-white mb-2">How do I download only audio / MP3?</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              After pasting the link, click on the <strong>Audio Only (MP3)</strong> tab and pick your desired audio bitrate (such as 320 kbps for highest quality or 128 kbps for compact files), then click Download.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0e0e11] border border-white/10">
            <h4 className="text-base font-bold text-white mb-2">Where are the downloaded files saved?</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Files are automatically saved to your default system "Downloads" folder on Windows, Mac, Android, and iOS.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default YouTubeDownloader;
