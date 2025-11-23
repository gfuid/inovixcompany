import React, { useRef, useState, useEffect } from "react";

/**
 * RemoveBgColorKey
 * - Upload an image
 * - Pick a background color (click image or enter hex)
 * - Adjust tolerance (0-255)
 * - Outputs a PNG with transparent background via canvas
 */
export default function RemoveBgColorKey() {
  const imgRef = useRef(null);
  const canvasRef = useRef(null);
  const [src, setSrc] = useState(null);
  const [bgColor, setBgColor] = useState("#00ff00"); // default green
  const [tolerance, setTolerance] = useState(60);

  // load file as data URL
  function handleFile(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setSrc(reader.result);
    reader.readAsDataURL(file);
  }

  // set bgColor by clicking the preview image
  function onImageClick(e) {
    const img = imgRef.current;
    if (!img) return;
    const rect = img.getBoundingClientRect();
    const x = Math.floor((e.clientX - rect.left) * (img.naturalWidth / rect.width));
    const y = Math.floor((e.clientY - rect.top) * (img.naturalHeight / rect.height));

    const tmp = document.createElement("canvas");
    tmp.width = img.naturalWidth;
    tmp.height = img.naturalHeight;
    const ctx = tmp.getContext("2d");
    ctx.drawImage(img, 0, 0);
    const p = ctx.getImageData(x, y, 1, 1).data;
    setBgColor(rgbToHex(p[0], p[1], p[2]));
  }

  // convert rgb->hex helper
  function rgbToHex(r, g, b) {
    return "#" + [r, g, b].map((v) => v.toString(16).padStart(2, "0")).join("");
  }

  // remove background by color keying
  function removeBackground() {
    const img = imgRef.current;
    const canvas = canvasRef.current;
    if (!img || !canvas) return;
    const w = img.naturalWidth;
    const h = img.naturalHeight;
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, w, h);
    ctx.drawImage(img, 0, 0, w, h);
    const imageData = ctx.getImageData(0, 0, w, h);
    const data = imageData.data;

    // target color
    const target = hexToRgb(bgColor);
    const tol = Number(tolerance);

    for (let i = 0; i < data.length; i += 4) {
      const dr = data[i] - target.r;
      const dg = data[i + 1] - target.g;
      const db = data[i + 2] - target.b;
      const dist = Math.sqrt(dr * dr + dg * dg + db * db);
      if (dist <= tol) {
        // set alpha to 0 (transparent)
        data[i + 3] = 0;
      }
    }
    ctx.putImageData(imageData, 0, 0);
  }

  // rgb hex helper
  function hexToRgb(hex) {
    const clean = hex.replace("#", "");
    const bigint = parseInt(clean, 16);
    if (clean.length === 6) {
      return {
        r: (bigint >> 16) & 255,
        g: (bigint >> 8) & 255,
        b: bigint & 255,
      };
    } else if (clean.length === 3) {
      return {
        r: parseInt(clean[0] + clean[0], 16),
        g: parseInt(clean[1] + clean[1], 16),
        b: parseInt(clean[2] + clean[2], 16),
      };
    } else {
      return { r: 0, g: 255, b: 0 };
    }
  }

  // auto-run removal when src, bgColor, or tolerance change
  useEffect(() => {
    if (src) {
      // wait image to load
      const img = imgRef.current;
      if (!img) return;
      if (img.complete) removeBackground();
      else {
        img.onload = removeBackground;
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [src, bgColor, tolerance]);

  // download PNG
  function downloadResult() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const url = canvas.toDataURL("image/png");
    const a = document.createElement("a");
    a.href = url;
    a.download = "no-bg.png";
    a.click();
  }

  // clear
  function clearAll() {
    setSrc(null);
    setBgColor("#00ff00");
    setTolerance(60);
  }

  return (
    <div style={{ fontFamily: "system-ui, Arial", maxWidth: 900, margin: "20px auto" }}>
      <h2>Client-side Color-key Background Removal</h2>
      <p>Upload an image with a mostly uniform background (green/white). Click the preview to sample color.</p>

      <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
        <div style={{ flex: 1 }}>
          <input type="file" accept="image/*" onChange={handleFile} />
          <div style={{ marginTop: 10 }}>
            <label>
              Pick color (hex):{" "}
              <input value={bgColor} onChange={(e) => setBgColor(e.target.value)} />
            </label>
          </div>

          <div style={{ marginTop: 10 }}>
            <label>
              Tolerance: {tolerance}
              <input
                style={{ width: 200, marginLeft: 8 }}
                type="range"
                min="0"
                max="255"
                value={tolerance}
                onChange={(e) => setTolerance(Number(e.target.value))}
              />
            </label>
          </div>

          <div style={{ marginTop: 12 }}>
            <button onClick={removeBackground} disabled={!src}>
              Remove Background
            </button>{" "}
            <button onClick={downloadResult} disabled={!src}>
              Download PNG
            </button>{" "}
            <button onClick={clearAll}>Reset</button>
          </div>
        </div>

        <div style={{ width: 400, textAlign: "center" }}>
          <div style={{ marginBottom: 8 }}>
            {src ? (
              <img
                ref={imgRef}
                src={src}
                alt="source"
                onClick={onImageClick}
                style={{ maxWidth: "100%", cursor: "crosshair", border: "1px solid #ddd" }}
              />
            ) : (
              <div style={{ padding: 20, border: "1px dashed #ddd" }}>No image loaded</div>
            )}
          </div>

          <div style={{ marginTop: 8 }}>
            <canvas
              ref={canvasRef}
              style={{
                maxWidth: "100%",
                border: "1px solid #222",
                background: "transparent",
              }}
            />
          </div>
          <div style={{ marginTop: 8 }}>
            <small>Click the source preview to sample the background color.</small>
          </div>
        </div>
      </div>
    </div>
  );
}
