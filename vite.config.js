import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import path from "path"

function multiPageRewritePlugin() {
  const routes = ['why-inovix', 'work', 'pricing', 'process', 'tools', 'blog', 'faq', 'contact'];
  const blogSlugs = [
    '500-rs-website-design-truth',
    'textile-exporter-website-design-panipat',
    'best-web-development-company-panipat',
    'mobile-app-development-company-panipat',
    'google-my-business-seo-services-panipat',
    'ecommerce-website-development-panipat',
    'digital-marketing-agency-panipat-roi',
    'doctor-clinic-hospital-website-panipat'
  ];
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
            break;
          }
        }
        next();
      });
    },
  };
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
      input: {
        main: path.resolve(__dirname, "index.html"),
        whyInovix: path.resolve(__dirname, "why-inovix/index.html"),
        work: path.resolve(__dirname, "work/index.html"),
        pricing: path.resolve(__dirname, "pricing/index.html"),
        process: path.resolve(__dirname, "process/index.html"),
        tools: path.resolve(__dirname, "tools/index.html"),
        blog: path.resolve(__dirname, "blog/index.html"),
        faq: path.resolve(__dirname, "faq/index.html"),
        contact: path.resolve(__dirname, "contact/index.html"),
        // Dedicated Blog Pages
        blog500Rs: path.resolve(__dirname, "blog/500-rs-website-design-truth/index.html"),
        blogTextile: path.resolve(__dirname, "blog/textile-exporter-website-design-panipat/index.html"),
        blogBestCompany: path.resolve(__dirname, "blog/best-web-development-company-panipat/index.html"),
        blogMobileApp: path.resolve(__dirname, "blog/mobile-app-development-company-panipat/index.html"),
        blogGmbSeo: path.resolve(__dirname, "blog/google-my-business-seo-services-panipat/index.html"),
        blogEcommerce: path.resolve(__dirname, "blog/ecommerce-website-development-panipat/index.html"),
        blogDigitalMarketing: path.resolve(__dirname, "blog/digital-marketing-agency-panipat-roi/index.html"),
        blogDoctorClinic: path.resolve(__dirname, "blog/doctor-clinic-hospital-website-panipat/index.html"),
      },
    },
  },
})
