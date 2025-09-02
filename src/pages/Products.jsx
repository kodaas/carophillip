import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Pill,
  Heart,
  Shield,
  Search,
  Filter,
  Star,
  ShoppingCart,
  CheckCircle,
  ArrowRight,
  Stethoscope,
  Thermometer,
  Activity,
  Zap,
  Leaf,
  Baby,
  User,
  Eye,
  Bone,
  Brain,
} from "lucide-react";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [sortBy, setSortBy] = useState("name");

  const categories = [
    { id: "all", name: "All Products", icon: Pill },
    { id: "prescription", name: "Prescription", icon: Shield },
    { id: "otc", name: "Over-the-Counter", icon: Heart },
    { id: "vitamins", name: "Vitamins & Supplements", icon: Leaf },
    { id: "medical-devices", name: "Medical Devices", icon: Stethoscope },
    { id: "personal-care", name: "Personal Care", icon: User },
    { id: "baby-care", name: "Baby & Child Care", icon: Baby },
  ];

  const products = [
    {
      id: 1,
      name: "Amoxicillin 500mg",
      category: "prescription",
      description: "Antibiotic for bacterial infections",
      price: "$12.99",
      image: "/api/placeholder/300/300",
      rating: 4.8,
      inStock: true,
      prescriptionRequired: true,
      benefits: [
        "Treats bacterial infections",
        "Fast-acting",
        "Well-tolerated",
      ],
    },
    {
      id: 2,
      name: "Ibuprofen 200mg",
      category: "otc",
      description: "Pain reliever and fever reducer",
      price: "$8.99",
      image: "/api/placeholder/300/300",
      rating: 4.6,
      inStock: true,
      prescriptionRequired: false,
      benefits: ["Reduces pain", "Lowers fever", "Anti-inflammatory"],
    },
    {
      id: 3,
      name: "Vitamin D3 1000 IU",
      category: "vitamins",
      description: "Essential vitamin for bone health",
      price: "$15.99",
      image: "/api/placeholder/300/300",
      rating: 4.9,
      inStock: true,
      prescriptionRequired: false,
      benefits: [
        "Supports bone health",
        "Immune system support",
        "High potency",
      ],
    },
    {
      id: 4,
      name: "Blood Pressure Monitor",
      category: "medical-devices",
      description: "Digital automatic blood pressure monitor",
      price: "$89.99",
      image: "/api/placeholder/300/300",
      rating: 4.7,
      inStock: true,
      prescriptionRequired: false,
      benefits: ["Accurate readings", "Easy to use", "Memory storage"],
    },
    {
      id: 5,
      name: "Multivitamin Complex",
      category: "vitamins",
      description: "Complete daily vitamin supplement",
      price: "$24.99",
      image: "/api/placeholder/300/300",
      rating: 4.5,
      inStock: true,
      prescriptionRequired: false,
      benefits: ["Complete nutrition", "Energy support", "Immune boost"],
    },
    {
      id: 6,
      name: "Digital Thermometer",
      category: "medical-devices",
      description: "Fast-reading digital thermometer",
      price: "$19.99",
      image: "/api/placeholder/300/300",
      rating: 4.4,
      inStock: true,
      prescriptionRequired: false,
      benefits: ["Fast 10-second reading", "Fever alarm", "Memory recall"],
    },
    {
      id: 7,
      name: "Omega-3 Fish Oil",
      category: "vitamins",
      description: "High-quality fish oil supplement",
      price: "$29.99",
      image: "/api/placeholder/300/300",
      rating: 4.8,
      inStock: true,
      prescriptionRequired: false,
      benefits: ["Heart health", "Brain function", "Anti-inflammatory"],
    },
    {
      id: 8,
      name: "Hand Sanitizer",
      category: "personal-care",
      description: "70% alcohol hand sanitizer",
      price: "$4.99",
      image: "/api/placeholder/300/300",
      rating: 4.3,
      inStock: true,
      prescriptionRequired: false,
      benefits: ["Kills 99.9% germs", "Quick-drying", "Moisturizing formula"],
    },
    {
      id: 9,
      name: "Baby Formula",
      category: "baby-care",
      description: "Infant formula with iron",
      price: "$34.99",
      image: "/api/placeholder/300/300",
      rating: 4.7,
      inStock: true,
      prescriptionRequired: false,
      benefits: ["Complete nutrition", "Easy digestion", "Iron-fortified"],
    },
    {
      id: 10,
      name: "Calcium + Magnesium",
      category: "vitamins",
      description: "Bone health supplement",
      price: "$19.99",
      image: "/api/placeholder/300/300",
      rating: 4.6,
      inStock: true,
      prescriptionRequired: false,
      benefits: ["Bone strength", "Muscle function", "Heart health"],
    },
    {
      id: 11,
      name: "Glucose Test Strips",
      category: "medical-devices",
      description: "Blood glucose test strips",
      price: "$45.99",
      image: "/api/placeholder/300/300",
      rating: 4.8,
      inStock: true,
      prescriptionRequired: false,
      benefits: [
        "Accurate results",
        "Fast testing",
        "Compatible with most meters",
      ],
    },
    {
      id: 12,
      name: "Probiotic Complex",
      category: "vitamins",
      description: "Multi-strain probiotic supplement",
      price: "$39.99",
      image: "/api/placeholder/300/300",
      rating: 4.9,
      inStock: false,
      prescriptionRequired: false,
      benefits: ["Digestive health", "Immune support", "10 billion CFU"],
    },
  ];

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      activeCategory === "all" || product.category === activeCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return (
          parseFloat(a.price.replace("$", "")) -
          parseFloat(b.price.replace("$", ""))
        );
      case "price-high":
        return (
          parseFloat(b.price.replace("$", "")) -
          parseFloat(a.price.replace("$", ""))
        );
      case "rating":
        return b.rating - a.rating;
      default:
        return a.name.localeCompare(b.name);
    }
  });

  const featuredProducts = products
    .filter((product) => product.rating >= 4.7)
    .slice(0, 3);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-800 text-white py-20">
        <div className="container-apple">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Products
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed mb-8">
              Quality pharmaceuticals, health products, and medical devices to
              support your wellness journey.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-lg">
              <div className="flex items-center">
                <Shield className="w-6 h-6 mr-2" />
                <span>FDA Approved</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-6 h-6 mr-2" />
                <span>Quality Guaranteed</span>
              </div>
              <div className="flex items-center">
                <Star className="w-6 h-6 mr-2" />
                <span>Top Rated</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-gray-50">
        <div className="container-apple">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary"
              />
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center space-x-4">
              <Filter className="text-gray-600 w-5 h-5" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary"
              >
                <option value="name">Sort by Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="py-8">
        <div className="container-apple">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all ${
                  activeCategory === category.id
                    ? "bg-primary text-white shadow-apple"
                    : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
                }`}
              >
                <category.icon className="w-5 h-5 mr-2" />
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      {activeCategory === "all" && (
        <section className="py-16 bg-gray-50">
          <div className="container-apple">
            <motion.div
              className="text-center mb-12"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Featured Products
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Our top-rated products trusted by thousands of customers
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {featuredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  className="bg-white rounded-2xl shadow-apple overflow-hidden hover:shadow-apple-xl transition-all duration-300"
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </div>
                    {product.prescriptionRequired && (
                      <div className="absolute top-4 left-4 bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-medium">
                        Rx Required
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>

                    <div className="flex items-center mb-4">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${i < Math.floor(product.rating) ? "fill-current" : ""}`}
                          />
                        ))}
                      </div>
                      <span className="text-gray-600 text-sm ml-2">
                        ({product.rating})
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-primary">
                        {product.price}
                      </div>
                      <button className="bg-primary text-white px-4 py-2 rounded-xl hover:bg-primary-700 transition-colors inline-flex items-center">
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Products Grid */}
      <section className="py-16">
        <div className="container-apple">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800">
              {activeCategory === "all"
                ? "All Products"
                : categories.find((cat) => cat.id === activeCategory)?.name}
            </h2>
            <p className="text-gray-600">
              {sortedProducts.length} products found
            </p>
          </div>

          {sortedProducts.length === 0 ? (
            <div className="text-center py-12">
              <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                No products found
              </h3>
              <p className="text-gray-500">
                Try adjusting your search or filter criteria
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {sortedProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  className="bg-white rounded-2xl shadow-apple overflow-hidden hover:shadow-apple-xl transition-all duration-300"
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: (index % 8) * 0.1 }}
                >
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover"
                    />
                    {!product.inStock && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <div className="bg-white text-gray-800 px-4 py-2 rounded-xl font-semibold">
                          Out of Stock
                        </div>
                      </div>
                    )}
                    {product.prescriptionRequired && (
                      <div className="absolute top-3 left-3 bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-medium">
                        Rx Required
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">
                      {product.description}
                    </p>

                    <div className="flex items-center mb-3">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 ${i < Math.floor(product.rating) ? "fill-current" : ""}`}
                          />
                        ))}
                      </div>
                      <span className="text-gray-500 text-xs ml-2">
                        ({product.rating})
                      </span>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-xs font-semibold text-gray-700 mb-2">
                        Benefits:
                      </h4>
                      <div className="space-y-1">
                        {product.benefits.slice(0, 2).map((benefit, idx) => (
                          <div
                            key={idx}
                            className="flex items-center text-xs text-gray-600"
                          >
                            <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-xl font-bold text-primary">
                        {product.price}
                      </div>
                      <button
                        className={`px-4 py-2 rounded-xl transition-colors inline-flex items-center text-sm ${
                          product.inStock
                            ? "bg-primary text-white hover:bg-primary-700"
                            : "bg-gray-200 text-gray-500 cursor-not-allowed"
                        }`}
                        disabled={!product.inStock}
                      >
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        {product.inStock ? "Add to Cart" : "Out of Stock"}
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Product Categories Info */}
      <section className="py-16 bg-gray-50">
        <div className="container-apple">
          <motion.div
            className="text-center mb-12"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Product Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive healthcare products for all your medical and
              wellness needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Prescription Medications",
                description:
                  "FDA-approved prescription drugs dispensed by licensed pharmacists",
                items: [
                  "Antibiotics",
                  "Pain Management",
                  "Chronic Disease Medications",
                  "Specialty Drugs",
                ],
              },
              {
                icon: Heart,
                title: "Over-the-Counter",
                description:
                  "Quality OTC medications for common health concerns",
                items: [
                  "Pain Relievers",
                  "Cold & Flu",
                  "Digestive Health",
                  "Allergy Relief",
                ],
              },
              {
                icon: Leaf,
                title: "Vitamins & Supplements",
                description:
                  "High-quality nutritional supplements and vitamins",
                items: [
                  "Multivitamins",
                  "Omega-3",
                  "Probiotics",
                  "Herbal Supplements",
                ],
              },
              {
                icon: Stethoscope,
                title: "Medical Devices",
                description:
                  "Professional-grade medical equipment and monitoring devices",
                items: [
                  "Blood Pressure Monitors",
                  "Thermometers",
                  "Glucose Meters",
                  "Nebulizers",
                ],
              },
              {
                icon: User,
                title: "Personal Care",
                description: "Health and hygiene products for daily wellness",
                items: [
                  "Hand Sanitizers",
                  "Wound Care",
                  "First Aid",
                  "Oral Care",
                ],
              },
              {
                icon: Baby,
                title: "Baby & Child Care",
                description:
                  "Safe and effective products for infants and children",
                items: [
                  "Baby Formula",
                  "Pediatric Medications",
                  "Baby Care Items",
                  "Children's Vitamins",
                ],
              },
            ].map((category, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-apple hover:shadow-apple-lg transition-all duration-300"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <category.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {category.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {category.description}
                </p>
                <ul className="space-y-2">
                  {category.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-primary-800 text-white section-padding">
        <div className="container-apple text-center">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Need Help Finding the Right Product?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Our pharmacists are here to help you choose the best products for
              your health needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-primary px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                Consult a Pharmacist
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="tel:+2348060801022"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-primary transition-colors inline-flex items-center justify-center"
              >
                Call for Advice
                <Stethoscope className="w-5 h-5 ml-2" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Products;
