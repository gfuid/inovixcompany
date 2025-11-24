import React, { useState } from "react";
import { Download } from "lucide-react";

// Reusable Drag & Drop Zone
export const DropZone = ({ onFile, accept = "image/*", text = "Upload Image", className = "" }) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files?.[0]) onFile(e.dataTransfer.files[0]);
  };

  const handleChange = (e) => {
    if (e.target.files?.[0]) onFile(e.target.files[0]);
  };

  return (
    <div
      onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
      onDragLeave={() => setIsDragging(false)}
      onDrop={handleDrop}
      className={`
        relative border-2 border-dashed rounded-2xl p-8 transition-all text-center cursor-pointer group
        ${isDragging
          ? "border-cyan-400 bg-cyan-400/10"
          : "border-white/10 hover:border-white/20 hover:bg-white/5"
        } ${className}
      `}
    >
      <input type="file" accept={accept} onChange={handleChange} className="absolute inset-0 opacity-0 cursor-pointer" />
      <div className="flex flex-col items-center gap-3">
        <div className={`p-4 rounded-full transition-colors ${isDragging ? "bg-cyan-400/20 text-cyan-400" : "bg-zinc-800 text-gray-400 group-hover:text-white"}`}>
          <Download size={24} />
        </div>
        <div>
          <p className="font-medium text-white">{text}</p>
          <p className="text-xs text-gray-500 mt-1">or drag and drop</p>
        </div>
      </div>
    </div>
  );
};

// Neon Button
export const NeonButton = ({ children, onClick, disabled, className = "", icon: Icon }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`
      relative group overflow-hidden rounded-xl p-[1px] focus:outline-none 
      disabled:opacity-50 disabled:cursor-not-allowed ${className}
    `}
  >
    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-600 opacity-80 transition-opacity group-hover:opacity-100" />
    <div className="relative flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 h-full px-6 py-3 rounded-xl transition-colors text-white font-medium">
      {Icon && <Icon size={18} />}
      {children}
    </div>
  </button>
);