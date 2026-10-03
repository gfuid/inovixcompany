import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import path from "path"
import fs from "fs"

function getBlogSlugs() {
  const blogDir = path.resolve(__dirname, "blog");
  if (!fs.existsSync(blogDir)) return [];
  return fs.readdirSync(blogDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);
}

function multiPageRewritePlugin() {
  const routes = ['why-inovix', 'work', 'pricing', 'process', 'tools/youtube-downloader', 'tools', 'blog', 'faq', 'contact'];
  const blogSlugs = getBlogSlugs();

  return {
    name: 'multi-page-rewrite',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const [pathname, search] = (req.url || '').split('?');
        for (const slug of blogSlugs) {
          if (pathname === `/blog/${slug}` || pathname === `/blog/${slug}/`) {
            req.url = `/blog/${slug}/index.html` + (search ? `?${search}` : '');
            return next();
          }
        }
        for (const route of routes) {
          if (pathname === `/${route}` || pathname === `/${route}/`) {
            req.url = `/${route}/index.html` + (search ? `?${search}` : '');
            return next();
          }
        }
        next();
      });
    },
  };
}

// Build rollup inputs dynamically for all pages & blogs
function getRollupInputs() {
  const inputs = {
    main: path.resolve(__dirname, "index.html"),
    whyInovix: path.resolve(__dirname, "why-inovix/index.html"),
    work: path.resolve(__dirname, "work/index.html"),
    pricing: path.resolve(__dirname, "pricing/index.html"),
    process: path.resolve(__dirname, "process/index.html"),
    tools: path.resolve(__dirname, "tools/index.html"),
    youtubeDownloader: path.resolve(__dirname, "tools/youtube-downloader/index.html"),
    blog: path.resolve(__dirname, "blog/index.html"),
    faq: path.resolve(__dirname, "faq/index.html"),
    contact: path.resolve(__dirname, "contact/index.html"),
  };

  const blogSlugs = getBlogSlugs();
  blogSlugs.forEach(slug => {
    const htmlPath = path.resolve(__dirname, `blog/${slug}/index.html`);
    if (fs.existsSync(htmlPath)) {
      const key = 'blog_' + slug.replace(/[^a-zA-Z0-9]/g, '_');
      inputs[key] = htmlPath;
    }
  });

  return inputs;
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    multiPageRewritePlugin(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      input: getRollupInputs(),
    },
  },
})
