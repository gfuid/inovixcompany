import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async";

// --- COMPONENTS ---
import Preloader from "./components/Preloader"; // Import the Preloader we made
import ScrollToTop from "./components/ScrollToTop.jsx";
import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Service from "./pages/ServicesSection.jsx";
import ToolsSection from "./tools/ToolsSection.jsx";
import About from "./about/About.jsx";
import Contact from "./contact/Contact.jsx";
import BlogPost from "./pages/BlogPost.jsx";
import CheapWebsiteBlog from "./pages/CheapWebsiteBlog.jsx";
import BlogIndex from "./pages/BlogIndex.jsx";
import DynamicBlogPost from "./pages/DynamicBlogPost.jsx";

// --- TOOL IMPORTS ---
import SmartCompressor from "./tools/SmartCompressor.jsx";
import BrandWatermark from "./tools/BrandWatermark.jsx";
import PrecisionResizer from "./tools/PrecisionResizer.jsx";
import TextExtractor from "./tools/TextExtractor.jsx";
import QRStudio from "./tools/QRStudio.jsx";
import BackgroundRemover from "./tools/BackgroundRemover.jsx";
import ColorKeyRemover from "./tools/ColorKeyRemover.jsx";
import ImageEnhancer from "./tools/ImageEnhancer.jsx";
import FileConverter from "./tools/FileConverter.jsx";
import PDFCompressor from "./tools/PDFCompressor.jsx";
import PDFToImage from "./tools/PDFToImage.jsx";
import ImageToPDF from "./tools/ImageToPDF.jsx";
import VideoCompressor from "./tools/VideoCompressor.jsx";
import VideoToAudio from "./tools/VideoToAudio.jsx";
import AudioNoiseRemover from "./tools/AudioNoiseRemover.jsx";

// --- SEO WRAPPER COMPONENT ---
const PageSEO = ({ title, description, canonical, element }) => (
  <>
    <Helmet>
      <title>{title} | Inovix</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="Digital Marketing Panipat, Web Design Haryana, SEO Services, Inovix Tools" />
      {canonical && <link rel="canonical" href={canonical} />}
    </Helmet>
    {element}
  </>
);

const App = () => {
  // Check if crawler/bot to render content immediately for SEO & fast indexing
  const isBot = typeof navigator !== "undefined" && /bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent);
  const [isLoaded, setIsLoaded] = useState(isBot);

  return (
    <>
      {/* 1. The Preloader (Bypassed for search engine bots) */}
      {!isBot && <Preloader onComplete={() => setIsLoaded(true)} />}

      {/* 2. The Main App Content */}
      <div
        style={{
          opacity: isLoaded || isBot ? 1 : 0,
          transition: "opacity 1s ease-in-out",
          filter: isLoaded || isBot ? "none" : "blur(10px)"
        }}
      >
        <Router>
          <ScrollToTop />
          <Navbar />

          <Routes>
            {/* --- MAIN PAGES --- */}
            <Route path="/" element={
              <PageSEO
                title="Best Digital Marketing Agency in Panipat"
                description="Inovix is Panipat's top Digital Marketing & SEO Agency. We provide Web Design, Social Media Marketing, and AI Tools."
                canonical="https://www.inovix.co.in/"
                element={<Home />}
              />
            } />

            <Route path="/services" element={
              <PageSEO
                title="SEO & Web Development Services in Panipat"
                description="Looking for Web Design or SEO in Panipat? Inovix offers affordable digital marketing services."
                canonical="https://www.inovix.co.in/services"
                element={<Service />}
              />
            } />

            <Route path="/about" element={
              <PageSEO
                title="About Inovix - Digital Agency Haryana"
                description="We are a team of developers and marketers in Panipat helping brands go global."
                canonical="https://www.inovix.co.in/about"
                element={<About />}
              />
            } />

            <Route path="/contact" element={
              <PageSEO
                title="Contact Us - Web Design Company Panipat"
                description="Get a free quote for digital marketing services in Panipat. Call Inovix."
                canonical="https://www.inovix.co.in/contact"
                element={<Contact />}
              />
            } />

            <Route path="/blog" element={
              <PageSEO
                title="Web Engineering & Business Growth Blog"
                description="Expert articles and guides on modern web development, SEO, and lead generation in Panipat & Haryana."
                canonical="https://www.inovix.co.in/blog"
                element={<BlogIndex />}
              />
            } />

            <Route path="/blog/best-web-development-company-panipat" element={
              <BlogPost />
            } />

            <Route path="/blog/500-rs-website-design-truth" element={
              <CheapWebsiteBlog />
            } />

            <Route path="/blog/:slug" element={
              <DynamicBlogPost />
            } />

            <Route path="/tools" element={
              <PageSEO
                title="Free Online AI Tools for Creators"
                description="Use our free AI tools: Background Remover, PDF Compressor, Video Converter and more."
                canonical="https://www.inovix.co.in/tools"
                element={<ToolsSection />}
              />
            } />

            {/* --- TOOL ROUTES --- */}
            <Route path="/tools/smart-compressor" element={<PageSEO title="Free Image Compressor" description="Compress images online." element={<SmartCompressor />} />} />
            <Route path="/tools/brand-watermark" element={<PageSEO title="Add Watermark Online" description="Protect your brand." element={<BrandWatermark />} />} />
            <Route path="/tools/precision-resizer" element={<PageSEO title="Online Image Resizer" description="Resize images free." element={<PrecisionResizer />} />} />
            <Route path="/tools/text-extractor" element={<PageSEO title="Image to Text (OCR)" description="Extract text from images." element={<TextExtractor />} />} />
            <Route path="/tools/qr-studio" element={<PageSEO title="QR Code Generator" description="Create custom QR codes." element={<QRStudio />} />} />
            <Route path="/tools/background-remover" element={<PageSEO title="Remove Background" description="Free AI background remover." element={<BackgroundRemover />} />} />
            <Route path="/tools/color-key-remover" element={<PageSEO title="Chroma Key Remover" description="Remove green screen." element={<ColorKeyRemover />} />} />
            <Route path="/tools/image-enhancer" element={<PageSEO title="AI Image Enhancer" description="Upscale photos to HD." element={<ImageEnhancer />} />} />
            <Route path="/tools/file-converter" element={<PageSEO title="File Converter" description="Convert files online." element={<FileConverter />} />} />
            <Route path="/tools/pdf-compressor" element={<PageSEO title="Compress PDF" description="Reduce PDF size." element={<PDFCompressor />} />} />
            <Route path="/tools/pdf-to-image" element={<PageSEO title="PDF to Image" description="Convert PDF to JPG." element={<PDFToImage />} />} />
            <Route path="/tools/image-to-pdf" element={<PageSEO title="Images to PDF" description="Merge photos to PDF." element={<ImageToPDF />} />} />
            <Route path="/tools/video-compressor" element={<PageSEO title="Video Compressor" description="Compress MP4 files." element={<VideoCompressor />} />} />
            <Route path="/tools/video-to-audio" element={<PageSEO title="Video to MP3" description="Extract audio from video." element={<VideoToAudio />} />} />
            <Route path="/tools/audio-noise-remover" element={<PageSEO title="Noise Remover" description="Clean audio recording." element={<AudioNoiseRemover />} />} />

          </Routes>
        </Router>
      </div>
    </>
  );
};

export default App;