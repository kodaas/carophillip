import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import ScrollToTop from "./components/ScrollToTop";

// Import pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Products from "./pages/Products";
import HealthTips from "./pages/HealthTips";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/health-tips" element={<HealthTips />} />
          <Route path="/contact" element={<Contact />} />

          {/* Additional routes for footer links */}
          <Route
            path="/privacy"
            element={
              <div className="min-h-screen pt-20 flex items-center justify-center">
                <h1 className="text-2xl">Privacy Policy Page</h1>
              </div>
            }
          />
          <Route
            path="/terms"
            element={
              <div className="min-h-screen pt-20 flex items-center justify-center">
                <h1 className="text-2xl">Terms of Service Page</h1>
              </div>
            }
          />
          <Route
            path="/sitemap"
            element={
              <div className="min-h-screen pt-20 flex items-center justify-center">
                <h1 className="text-2xl">Sitemap Page</h1>
              </div>
            }
          />

          {/* 404 Route */}
          <Route
            path="*"
            element={
              <div className="min-h-screen pt-20 flex items-center justify-center text-center">
                <div>
                  <h1 className="text-4xl font-bold text-gray-800 mb-4">
                    404 - Page Not Found
                  </h1>
                  <p className="text-gray-600 mb-8">
                    The page you&apos;re looking for doesn&apos;t exist.
                  </p>
                  <a href="/" className="btn-primary">
                    Return Home
                  </a>
                </div>
              </div>
            }
          />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
