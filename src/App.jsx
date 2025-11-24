import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";

import Service from "./pages/ServicesSection.jsx";
import ToolsSection from "./tools/ToolsSection.jsx";

import About from "./about/About.jsx";

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
import Contact from "./contact/Contact.jsx";

const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/tools" element={<ToolsSection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />


        {/* Tool Routes */}
        <Route path="/tools/smart-compressor" element={<SmartCompressor />} />
        <Route path="/tools/brand-watermark" element={<BrandWatermark />} />
        <Route path="/tools/precision-resizer" element={<PrecisionResizer />} />
        <Route path="/tools/text-extractor" element={<TextExtractor />} />
        <Route path="/tools/qr-studio" element={<QRStudio />} />
        <Route path="/tools/background-remover" element={<BackgroundRemover />} />
        <Route path="/tools/color-key-remover" element={<ColorKeyRemover />} />
        <Route path="/tools/image-enhancer" element={<ImageEnhancer />} />
        <Route path="/tools/file-converter" element={<FileConverter />} />
        <Route path="/tools/pdf-compressor" element={<PDFCompressor />} />
        <Route path="/tools/pdf-to-image" element={<PDFToImage />} />
        <Route path="/tools/image-to-pdf" element={<ImageToPDF />} />
        <Route path="/tools/video-compressor" element={<VideoCompressor />} />
        <Route path="/tools/video-to-audio" element={<VideoToAudio />} />
        <Route path="/tools/audio-noise-remover" element={<AudioNoiseRemover />} />
      </Routes>

    </Router>
  );
};

export default App;
