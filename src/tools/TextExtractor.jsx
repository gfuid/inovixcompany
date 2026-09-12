import React, { useState } from "react";
import { Link } from "react-router-dom";
import Tesseract from "tesseract.js";
import {
  Upload, FileText, ScanLine, ArrowLeft,
  Copy, Check, RefreshCw, Loader2, FileImage
} from "lucide-react";

const TextExtractor = () => {
  // --- State ---
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [isScanning, setIsScanning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [extractedText, setExtractedText] = useState("");
  const [copied, setCopied] = useState(false);

  // --- Handlers ---
  const handleUpload = (e) => {
    const selected = e.target.files?.[0];
    if (selected) {
      setFile(selected);
      setPreview(URL.createObjectURL(selected));
      setExtractedText(""); // Reset text
      setProgress(0);
    }
  };

  const startScan = async () => {
    if (!file) return;
    setIsScanning(true);
    setProgress(0);
    setExtractedText("");

    try {
      const result = await Tesseract.recognize(
        file,
        'eng',
        {
          logger: (m) => {
            if (m.status === 'recognizing text' && m.progress) {
              setProgress(Math.round(m.progress * 100));
            }
          }
        }
      );
      const text = result?.data?.text?.trim();
      setExtractedText(text || "No readable text detected in this image. Please ensure the image is clear and well-lit.");
      setProgress(100);
    } catch (err) {
      console.error("Tesseract OCR Error:", err);
      alert("Failed to extract text. Please upload a clear image (PNG or JPG).");
    } finally {
      setIsScanning(false);
    }
  };

  const handleCopy = () => {
    if (!extractedText) return;
    navigator.clipboard.writeText(extractedText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const resetTool = () => {
    setFile(null);
    setPreview(null);
    setExtractedText("");
    setProgress(0);
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-emerald-500/30 pb-24">

      {/* --- Header --- */}
      <div className="relative pt-32 pb-12 px-6">
        <div className="absolute inset-0 opacity-20 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(#333 1px, transparent 1px)", backgroundSize: "32px 32px" }}>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <Link to="/tools" className="inline-flex items-center gap-2 text-gray-400 hover:text-emerald-400 mb-6 transition-colors text-sm">
            <ArrowLeft size={16} /> Back to Tools
          </Link>

          <div className="flex items-center gap-6 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/20 shadow-[0_0_30px_rgba(16,185,129,0.15)]">
              <ScanLine size={32} />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-2">Text <span className="text-emerald-400">Extractor</span></h1>
              <p className="text-gray-400 max-w-xl text-lg">Turn images and scanned PDFs into editable text using AI optical character recognition.</p>
            </div>
          </div>
        </div>
      </div>

      {/* --- Main Tool Area --- */}
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-12 gap-8">

        {/* Left: Upload & Preview */}
        <div className="lg:col-span-5 space-y-6">

          {/* Upload Box */}
          {!file ? (
            <div className="relative group h-[400px]">
              <input type="file" accept="image/*" onChange={handleUpload} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20" />
              <div className="h-full border-2 border-dashed border-white/10 hover:border-emerald-400 hover:bg-zinc-900 rounded-[2rem] flex flex-col items-center justify-center text-center transition-all duration-300">
                <div className="w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center mb-6 text-gray-400 group-hover:text-emerald-400 group-hover:scale-110 transition-all">
                  <Upload size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Upload Document</h3>
                <p className="text-sm text-gray-500 max-w-xs">Supports JPG, PNG, Scanned PDF. <br />High contrast works best.</p>
              </div>
            </div>
          ) : (
            <div className="bg-zinc-900 border border-white/10 rounded-[2rem] p-4 relative h-[400px] flex flex-col">

              <div className="flex justify-between items-center mb-4 px-2">
                <div className="flex items-center gap-2 text-sm font-bold text-gray-300">
                  <FileImage size={16} className="text-emerald-400" />
                  <span className="truncate max-w-[150px]">{file.name}</span>
                </div>
                <button onClick={resetTool} className="text-xs text-gray-500 hover:text-white underline">Change File</button>
              </div>

              {/* Image Preview Container */}
              <div className="relative flex-1 bg-black/50 rounded-xl overflow-hidden flex items-center justify-center border border-white/5">
                <img src={preview} alt="Document" className="max-w-full max-h-full object-contain opacity-80" />

                {/* Scanning Overlay Animation */}
                {isScanning && (
                  <div className="absolute inset-0 z-10 bg-emerald-500/10">
                    <div className="absolute top-0 left-0 w-full h-1 bg-emerald-400 shadow-[0_0_20px_#10b981] animate-[scan_2s_linear_infinite]" />
                  </div>
                )}
              </div>

              {/* Action Button */}
              <div className="mt-4">
                <button
                  onClick={startScan}
                  disabled={isScanning || extractedText}
                  className={`
                    w-full py-4 rounded-xl font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all
                    ${isScanning
                      ? "bg-zinc-800 text-gray-400 cursor-not-allowed"
                      : extractedText
                        ? "bg-emerald-900/50 text-emerald-400 cursor-default border border-emerald-500/30"
                        : "bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-900/20 hover:scale-[1.02]"
                    }
                  `}
                >
                  {isScanning ? (
                    <><Loader2 size={18} className="animate-spin" /> Processing...</>
                  ) : extractedText ? (
                    <><Check size={18} /> Extraction Complete</>
                  ) : (
                    <><ScanLine size={18} /> Start Extraction</>
                  )}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Right: Results Area */}
        <div className="lg:col-span-7">
          <div className="bg-zinc-900 border border-white/10 rounded-[2rem] h-full min-h-[500px] flex flex-col overflow-hidden">

            {/* Header */}
            <div className="p-6 border-b border-white/5 flex justify-between items-center bg-black/20">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-widest flex items-center gap-2">
                <FileText size={14} /> Extracted Content
              </span>

              {extractedText && (
                <button
                  onClick={handleCopy}
                  className={`
                    text-xs font-bold px-3 py-1.5 rounded-lg border transition-all flex items-center gap-2
                    ${copied
                      ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/50"
                      : "bg-white/5 text-gray-400 border-white/10 hover:bg-white/10 hover:text-white"
                    }
                  `}
                >
                  {copied ? <Check size={12} /> : <Copy size={12} />}
                  {copied ? "Copied!" : "Copy Text"}
                </button>
              )}
            </div>

            {/* Output Area */}
            <div className="flex-1 relative">

              {/* Progress Bar (During Scan) */}
              {isScanning && (
                <div className="absolute top-0 left-0 w-full h-1 bg-zinc-800">
                  <div
                    className="h-full bg-emerald-500 shadow-[0_0_10px_#10b981] transition-all duration-75 ease-out"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              )}

              <textarea
                value={extractedText}
                readOnly
                placeholder="Text will appear here after scanning..."
                className="w-full h-full bg-transparent p-8 text-sm md:text-base font-mono text-gray-300 leading-relaxed resize-none focus:outline-none"
              />

              {/* Placeholder Empty State */}
              {!extractedText && !isScanning && (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-600 pointer-events-none">
                  <ScanLine size={48} className="mb-4 opacity-20" />
                  <p className="text-sm font-bold opacity-50">Waiting for document scan</p>
                </div>
              )}
            </div>

            {/* Footer Note */}
            <div className="p-4 bg-emerald-900/10 border-t border-emerald-500/10 text-center">
              <p className="text-[10px] text-emerald-400/60">
                <span className="font-bold">Privacy Note:</span> Images are processed locally. No data is sent to external servers.
              </p>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default TextExtractor;