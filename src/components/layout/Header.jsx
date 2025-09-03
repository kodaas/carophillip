import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Heart,
  Menu,
  X,
  Phone,
  MapPin,
  Clock,
  ShoppingCart,
  User,
  Search,
} from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  const handleNavigationClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Home", href: "/", current: location.pathname === "/" },
    { name: "About", href: "/about", current: location.pathname === "/about" },
    {
      name: "Services",
      href: "/services",
      current: location.pathname === "/services",
    },
    {
      name: "Products",
      href: "/products",
      current: location.pathname === "/products",
    },
    {
      name: "Health Tips",
      href: "/health-tips",
      current: location.pathname === "/health-tips",
    },
    {
      name: "Contact",
      href: "/contact",
      current: location.pathname === "/contact",
    },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-white text-sm py-2">
        <div className="container-apple">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+234 806 080 1022</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>Mon-Sat: 8AM-9PM, Sun: 12PM-7PM</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Abayagani line 3, Ife 220112, Osun State, Nigeria.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-apple border-b border-gray-200"
            : "bg-white"
        }`}
      >
        <nav className="container-apple">
          <div className="flex items-center justify-between h-30">
            {/* Logo */}
            <div className="flex items-center">
              <Link
                to="/"
                onClick={handleNavigationClick}
                className="flex items-center space-x-6"
              >
                <div className="bg-primary p-2 rounded-apple">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-800">
                    Carophillip Heritage
                  </h1>
                  <p className="text-sm text-primary font-medium">
                    Pharmacy Ltd
                  </p>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={handleNavigationClick}
                  className={`nav-link font-medium transition-colors ${
                    item.current
                      ? "text-primary border-b-2 border-primary pb-1"
                      : "text-gray-700 hover:text-primary"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 text-gray-600 hover:text-primary transition-colors"
              >
                <Search className="w-5 h-5" />
              </button>

              <button className="p-2 text-gray-600 hover:text-primary transition-colors">
                <User className="w-5 h-5" />
              </button>

              <button className="relative p-2 text-gray-600 hover:text-primary transition-colors">
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-primary text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  0
                </span>
              </button>

              <Link
                to="/contact"
                onClick={handleNavigationClick}
                className="hidden md:inline-flex button-primary"
              >
                Get Quote
              </Link>

              {/* Mobile menu button */}
              <button
                className="lg:hidden p-2 rounded-md text-gray-600 hover:text-primary"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Search Bar */}
          {isSearchOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t border-gray-200 py-4"
            >
              <div className="flex">
                <input
                  type="text"
                  placeholder="Search for medicines, health products..."
                  className="flex-1 input-apple"
                />
                <button className="ml-3 button-primary">Search</button>
              </div>
            </motion.div>
          )}
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-gray-200 bg-white"
          >
            <div className="container-apple py-4">
              <div className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => {
                      setIsMenuOpen(false);
                      handleNavigationClick();
                    }}
                    className={`text-base font-medium transition-colors ${
                      item.current
                        ? "text-primary"
                        : "text-gray-700 hover:text-primary"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  to="/contact"
                  onClick={() => {
                    setIsMenuOpen(false);
                    handleNavigationClick();
                  }}
                  className="button-primary w-fit"
                >
                  Get Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </header>
    </>
  );
};

export default Header;
