import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async"; // Change to 'react-helmet-async'

import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Service from "./pages/ServicesSection.jsx";
import ToolsSection from "./tools/ToolsSection.jsx";
import About from "./about/About.jsx";
import Contact from "./contact/Contact.jsx";

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

// --- SEO WRAPPER COMPONENT (Ye Magic Hai) ---
// Ye har page par alag title aur description set karega
const PageSEO = ({ title, description, element }) => (
  <>
    <Helmet>
      <title>{title} | Inovix</title>
      <meta name="description" content={description} />
      {/* Panipat Location Keyword Injection */}
      <meta name="keywords" content="Digital Marketing Panipat, Web Design Haryana, SEO Services, Inovix Tools" />
    </Helmet>
    {element}
  </>
);

const App = () => {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          {/* --- MAIN PAGES (Targeting Panipat & Services) --- */}

          <Route path="/" element={
            <PageSEO
              title="Best Digital Marketing Agency in Panipat"
              description="Inovix is Panipat's top Digital Marketing & SEO Agency. We provide Web Design, Social Media Marketing, and AI Tools to grow your business."
              element={<Home />}
            />
          } />

          {/* URL changed to /services (Plural is better for SEO) */}
          <Route path="/services" element={
            <PageSEO
              title="SEO & Web Development Services in Panipat"
              description="Looking for Web Design or SEO in Panipat? Inovix offers affordable digital marketing services for startups and local businesses."
              element={<Service />}
            />
          } />

          <Route path="/about" element={
            <PageSEO
              title="About Inovix - Digital Agency Haryana"
              description="We are a team of developers and marketers in Panipat helping brands go global."
              element={<About />}
            />
          } />

          <Route path="/contact" element={
            <PageSEO
              title="Contact Us - Web Design Company Panipat"
              description="Get a free quote for digital marketing services in Panipat. Call Inovix at +91-8307967782."
              element={<Contact />}
            />
          } />

          <Route path="/tools" element={
            <PageSEO
              title="Free Online AI Tools for Creators"
              description="Use our free AI tools: Background Remover, PDF Compressor, Video Converter and more. No signup required."
              element={<ToolsSection />}
            />
          } />


          {/* --- TOOL ROUTES (Targeting Global Keywords) --- */}

          <Route path="/tools/smart-compressor" element={
            <PageSEO
              title="Free Image Compressor Online"
              description="Compress images without losing quality. Best free online image compressor by Inovix."
              element={<SmartCompressor />}
            />
          } />

          <Route path="/tools/brand-watermark" element={
            <PageSEO
              title="Add Watermark to Images Online Free"
              description="Protect your brand. Add logos and watermarks to your photos instantly."
              element={<BrandWatermark />}
            />
          } />

          <Route path="/tools/precision-resizer" element={
            <PageSEO
              title="Online Image Resizer - Resize Photos Free"
              description="Resize images to exact pixels online. Fast and free tool."
              element={<PrecisionResizer />}
            />
          } />

          <Route path="/tools/text-extractor" element={
            <PageSEO
              title="Image to Text Converter (OCR)"
              description="Extract text from images instantly using AI. Copy text from any photo."
              element={<TextExtractor />}
            />
          } />

          <Route path="/tools/qr-studio" element={
            <PageSEO
              title="Free QR Code Generator"
              description="Create custom QR codes for your business, wifi, or website."
              element={<QRStudio />}
            />
          } />

          <Route path="/tools/background-remover" element={
            <PageSEO
              title="Free Background Remover - AI Magic"
              description="Remove image backgrounds automatically in 5 seconds. Download transparent PNGs."
              element={<BackgroundRemover />}
            />
          } />

          <Route path="/tools/color-key-remover" element={
            <PageSEO
              title="Chroma Key & Green Screen Remover"
              description="Remove specific colors or green screen from images online."
              element={<ColorKeyRemover />}
            />
          } />

          <Route path="/tools/image-enhancer" element={
            <PageSEO
              title="AI Image Enhancer & Upscaler"
              description="Enhance low quality photos to HD using AI technology."
              element={<ImageEnhancer />}
            />
          } />

          <Route path="/tools/file-converter" element={
            <PageSEO
              title="Universal File Converter Online"
              description="Convert files between formats easily. Free online file converter."
              element={<FileConverter />}
            />
          } />

          <Route path="/tools/pdf-compressor" element={
            <PageSEO
              title="Compress PDF Online Free"
              description="Reduce PDF file size without losing quality. Fast PDF compressor."
              element={<PDFCompressor />}
            />
          } />

          <Route path="/tools/pdf-to-image" element={
            <PageSEO
              title="Convert PDF to JPG/PNG"
              description="Turn your PDF pages into high-quality images instantly."
              element={<PDFToImage />}
            />
          } />

          <Route path="/tools/image-to-pdf" element={
            <PageSEO
              title="Convert Images to PDF"
              description="Merge JPG or PNG images into a single PDF document."
              element={<ImageToPDF />}
            />
          } />

          <Route path="/tools/video-compressor" element={
            <PageSEO
              title="Online Video Compressor"
              description="Compress MP4 and video files for WhatsApp and Email."
              element={<VideoCompressor />}
            />
          } />

          <Route path="/tools/video-to-audio" element={
            <PageSEO
              title="Video to MP3 Converter"
              description="Extract audio from video files online for free."
              element={<VideoToAudio />}
            />
          } />

          <Route path="/tools/audio-noise-remover" element={
            <PageSEO
              title="Remove Background Noise from Audio"
              description="Clean your audio recordings using AI noise reduction."
              element={<AudioNoiseRemover />}
            />
          } />

        </Routes>
      </Router>
    </>
  );
};

export default App;