import React from "react";
import { Link } from "react-router-dom";
import {
  FileJson, ImageIcon, Scissors, ScanLine, QrCode,
  Layers, Palette, Wand2, FileType, FileText,
  ImagePlus, FileOutput, Video, Mic2, Music, ArrowUpRight
} from "lucide-react";

// --- All Services Configuration with Links ---
const tools = [
  // 1. Smart Compressor
  {
    id: "compressor",
    title: "Smart Compressor",
    desc: "Intelligent compression for images & PDFs without quality loss.",
    icon: FileJson,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "group-hover:border-cyan-500/50",
    link: "/tools/smart-compressor"
  },
  // 2. Brand Watermark
  {
    id: "watermark",
    title: "Brand Watermark",
    desc: "Secure your creative assets with custom logos and text patterns.",
    icon: ImageIcon,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "group-hover:border-purple-500/50",
    link: "/tools/brand-watermark"
  },
  // 3. Precision Resizer
  {
    id: "resizer",
    title: "Precision Resizer",
    desc: "Crop, scale, and adjust aspect ratios for any social platform.",
    icon: Scissors,
    color: "text-pink-400",
    bg: "bg-pink-500/10",
    border: "group-hover:border-pink-500/50",
    link: "/tools/precision-resizer"
  },
  // 4. Text Extractor (OCR)
  {
    id: "ocr",
    title: "Text Extractor",
    desc: "Convert scanned documents and images into editable text instantly.",
    icon: ScanLine,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "group-hover:border-emerald-500/50",
    link: "/tools/text-extractor"
  },
  // 5. QR Studio
  {
    id: "qr",
    title: "QR Studio",
    desc: "Generate custom, artistic QR codes with logos and brand colors.",
    icon: QrCode,
    color: "text-orange-400",
    bg: "bg-orange-500/10",
    border: "group-hover:border-orange-500/50",
    link: "/tools/qr-studio"
  },
  // 6. Background Remover
  {
    id: "bg-remove",
    title: "BG Remover",
    desc: "AI-powered background removal with a single click.",
    icon: Layers,
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
    border: "group-hover:border-indigo-500/50",
    link: "/tools/background-remover"
  },
  // 7. Color Key Remove
  {
    id: "colorkey",
    title: "Color Key Remove",
    desc: "Remove specific colors (green screen) from images instantly.",
    icon: Palette,
    color: "text-rose-400",
    bg: "bg-rose-500/10",
    border: "group-hover:border-rose-500/50",
    link: "/tools/color-key-remover"
  },
  // 8. Image Enhancer
  {
    id: "enhancer",
    title: "Image Enhancer",
    desc: "Upscale low-res images to 4K quality using AI restoration.",
    icon: Wand2,
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
    border: "group-hover:border-yellow-500/50",
    link: "/tools/image-enhancer"
  },
  // 9. File Converter
  {
    id: "converter",
    title: "Universal Converter",
    desc: "Transform files between 50+ different formats (JPG, PNG, WebP).",
    icon: FileType,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "group-hover:border-blue-500/50",
    link: "/tools/file-converter"
  },
  // 10. PDF Compressor
  {
    id: "pdf-compress",
    title: "PDF Compressor",
    desc: "Shrink PDF file sizes significantly while keeping text sharp.",
    icon: FileText,
    color: "text-red-400",
    bg: "bg-red-500/10",
    border: "group-hover:border-red-500/50",
    link: "/tools/pdf-compressor"
  },
  // 11. PDF to Image
  {
    id: "pdf-to-img",
    title: "PDF to Image",
    desc: "Extract high-quality images from PDF pages.",
    icon: ImagePlus,
    color: "text-lime-400",
    bg: "bg-lime-500/10",
    border: "group-hover:border-lime-500/50",
    link: "/tools/pdf-to-image"
  },
  // 12. Image to PDF
  {
    id: "img-to-pdf",
    title: "Image to PDF",
    desc: "Compile multiple images into a single, organized PDF document.",
    icon: FileOutput,
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "group-hover:border-amber-500/50",
    link: "/tools/image-to-pdf"
  },
  // 13. Video Compressor
  {
    id: "video-compress",
    title: "Video Compressor",
    desc: "Reduce video size for WhatsApp and web sharing.",
    icon: Video,
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "group-hover:border-violet-500/50",
    link: "/tools/video-compressor"
  },
  // 14. Video to Audio
  {
    id: "vid-to-aud",
    title: "Video to Audio",
    desc: "Extract MP3 audio tracks from any video file.",
    icon: Mic2,
    color: "text-fuchsia-400",
    bg: "bg-fuchsia-500/10",
    border: "group-hover:border-fuchsia-500/50",
    link: "/tools/video-to-audio"
  },
  // 15. Audio Noise Remove
  {
    id: "noise-remove",
    title: "Noise Remover",
    desc: "Clean up audio by removing background hiss and noise.",
    icon: Music,
    color: "text-teal-400",
    bg: "bg-teal-500/10",
    border: "group-hover:border-teal-500/50",
    link: "/tools/audio-noise-remover"
  },
];

const ToolsSection = () => {
  return (
    <section className="bg-black py-24 relative overflow-hidden">

      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-20 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(#333 1px, transparent 1px)", backgroundSize: "32px 32px" }}>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="mb-16 md:text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-6">
            All <span className="text-cyan-400">Free Tools</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Explore our complete suite of digital tools. Everything you need to create, convert, and optimize is right here.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {tools.map((tool) => (
            <Link
              key={tool.id}
              to={tool.link}  // <--- CHANGED FROM href TO to
              className={`
                group relative p-8 rounded-[2rem] border bg-zinc-900/50 backdrop-blur-sm 
                border-white/10 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/50
                transition-all duration-300 ${tool.border} block h-full
              `}
            >
              {/* Top Accent Blob (Color Note) */}
              <div className={`absolute top-0 right-0 w-24 h-24 ${tool.bg} rounded-bl-[2rem] rounded-tr-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              {/* Icon Container */}
              <div className={`
                w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-xl shadow-lg
                ${tool.bg} ${tool.color}
              `}>
                <tool.icon size={26} />
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className={`text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors`}>
                  {tool.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-6">
                  {tool.desc}
                </p>

                {/* Footer Action */}
                <div className="flex items-center justify-between pt-6 border-t border-white/5">
                  <span className="text-xs font-semibold text-white uppercase tracking-wider group-hover:text-cyan-400 transition-colors">Launch Tool</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${tool.bg} ${tool.color} group-hover:scale-110 transition-transform`}>
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </div>

            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;