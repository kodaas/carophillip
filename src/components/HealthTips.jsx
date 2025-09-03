import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  Shield,
  Pill,
  Activity,
  Apple,
  Clock,
  ChevronRight,
  Calendar,
  User,
  BookOpen,
  Filter,
  Search,
} from "lucide-react";

const HealthTips = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    { id: "all", name: "All Tips", icon: <BookOpen className="w-5 h-5" /> },
    {
      id: "medication",
      name: "Medication",
      icon: <Pill className="w-5 h-5" />,
    },
    { id: "wellness", name: "Wellness", icon: <Heart className="w-5 h-5" /> },
    {
      id: "prevention",
      name: "Prevention",
      icon: <Shield className="w-5 h-5" />,
    },
    { id: "nutrition", name: "Nutrition", icon: <Apple className="w-5 h-5" /> },
    {
      id: "lifestyle",
      name: "Lifestyle",
      icon: <Activity className="w-5 h-5" />,
    },
  ];

  const healthTips = [
    {
      id: 1,
      title: "Understanding Your Medication Schedule",
      excerpt:
        "Learn how to properly organize and maintain your daily medication routine for maximum effectiveness.",
      category: "medication",
      author: "Dr. Adebayo Pharmacist",
      date: "2024-01-15",
      readTime: "5 min read",
      image: "💊",
      content:
        "Proper medication timing is crucial for treatment effectiveness. Always take medications at the same time daily, with or without food as prescribed. Use pill organizers and set reminders to maintain consistency.",
      tags: ["medication", "schedule", "adherence"],
    },
    {
      id: 2,
      title: "Staying Hydrated: The Key to Better Health",
      excerpt:
        "Discover why proper hydration is essential for your body's optimal functioning and how to maintain it.",
      category: "wellness",
      author: "Pharm. Sarah Okafor",
      date: "2024-01-12",
      readTime: "4 min read",
      image: "💧",
      content:
        "Adequate hydration supports every bodily function. Aim for 8-10 glasses of water daily, increase intake during hot weather or exercise, and monitor urine color as a hydration indicator.",
      tags: ["hydration", "wellness", "health"],
    },
    {
      id: 3,
      title: "Building Strong Immunity Naturally",
      excerpt:
        "Natural ways to boost your immune system and protect yourself from common illnesses.",
      category: "prevention",
      author: "Pharm. Michael Johnson",
      date: "2024-01-10",
      readTime: "6 min read",
      image: "🛡️",
      content:
        "Strengthen immunity through balanced nutrition, regular exercise, adequate sleep, stress management, and proper hygiene. Consider vitamin C and zinc supplements under professional guidance.",
      tags: ["immunity", "prevention", "natural"],
    },
    {
      id: 4,
      title: "The Power of Fruits and Vegetables",
      excerpt:
        "How incorporating more colorful fruits and vegetables can transform your health and energy levels.",
      category: "nutrition",
      author: "Nutritionist Kemi Adeyemi",
      date: "2024-01-08",
      readTime: "5 min read",
      image: "🍎",
      content:
        "Aim for 5-9 servings of fruits and vegetables daily. Different colors provide different nutrients - eat a rainbow! Fresh, frozen, or dried options all count toward your daily intake.",
      tags: ["nutrition", "fruits", "vegetables", "diet"],
    },
    {
      id: 5,
      title: "Managing Stress for Better Health",
      excerpt:
        "Practical strategies to reduce stress and improve your overall well-being.",
      category: "lifestyle",
      author: "Wellness Coach Folake",
      date: "2024-01-05",
      readTime: "7 min read",
      image: "🧘",
      content:
        "Chronic stress affects physical and mental health. Practice deep breathing, regular exercise, meditation, adequate sleep, and maintain social connections. Don't hesitate to seek professional help when needed.",
      tags: ["stress", "mental health", "wellness"],
    },
    {
      id: 6,
      title: "Safe Storage of Medications at Home",
      excerpt:
        "Essential guidelines for properly storing your medications to maintain their effectiveness.",
      category: "medication",
      author: "Pharm. Ibrahim Suleiman",
      date: "2024-01-03",
      readTime: "4 min read",
      image: "🏠",
      content:
        "Store medications in cool, dry places away from direct sunlight. Avoid bathroom medicine cabinets due to humidity. Keep child-resistant caps on, check expiration dates regularly, and dispose of expired medications properly.",
      tags: ["medication", "storage", "safety"],
    },
    {
      id: 7,
      title: "The Importance of Regular Exercise",
      excerpt:
        "How moderate daily exercise can significantly improve your health and quality of life.",
      category: "lifestyle",
      author: "Fitness Expert Tunde",
      date: "2024-01-01",
      readTime: "6 min read",
      image: "🏃",
      content:
        "30 minutes of moderate exercise daily reduces risk of chronic diseases, improves mood, boosts energy, and enhances sleep quality. Start slowly and gradually increase intensity.",
      tags: ["exercise", "fitness", "health"],
    },
    {
      id: 8,
      title: "Understanding Common Cold vs. Flu",
      excerpt:
        "Learn to differentiate between cold and flu symptoms and when to seek medical attention.",
      category: "prevention",
      author: "Dr. Adebayo Pharmacist",
      date: "2023-12-28",
      readTime: "5 min read",
      image: "🤧",
      content:
        "Cold symptoms develop gradually and include runny nose, sore throat, and mild fever. Flu symptoms are sudden and severe with high fever, body aches, and fatigue. Seek medical care if symptoms worsen or persist.",
      tags: ["cold", "flu", "symptoms", "prevention"],
    },
  ];

  const filteredTips = healthTips.filter((tip) => {
    const matchesCategory =
      selectedCategory === "all" || tip.category === selectedCategory;
    const matchesSearch =
      tip.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tip.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tip.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    return matchesCategory && matchesSearch;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="section-padding bg-gradient-to-br from-secondary-50 to-primary-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Health Tips & Insights
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Expert advice from our pharmaceutical team to help you live
            healthier and make informed decisions about your wellness
          </p>
        </motion.div>

        {/* Search and Filter Section */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search health tips..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-2 overflow-x-auto">
              <Filter className="w-5 h-5 text-secondary-500 mr-2" />
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full whitespace-nowrap transition-all duration-300 ${
                    selectedCategory === category.id
                      ? "bg-primary-600 text-white shadow-lg"
                      : "bg-white text-secondary-700 hover:bg-primary-50 hover:text-primary-600"
                  }`}
                >
                  {category.icon}
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Health Tips Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory + searchTerm}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredTips.map((tip) => (
              <motion.div
                key={tip.id}
                variants={itemVariants}
                className="card group cursor-pointer hover:shadow-2xl"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-gradient-to-r from-primary-100 to-primary-200 rounded-full w-12 h-12 flex items-center justify-center text-2xl">
                    {tip.image}
                  </div>
                  <div
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      tip.category === "medication"
                        ? "bg-blue-100 text-blue-800"
                        : tip.category === "wellness"
                          ? "bg-green-100 text-green-800"
                          : tip.category === "prevention"
                            ? "bg-purple-100 text-purple-800"
                            : tip.category === "nutrition"
                              ? "bg-orange-100 text-orange-800"
                              : "bg-pink-100 text-pink-800"
                    }`}
                  >
                    {tip.category}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 text-secondary-900 group-hover:text-primary-600 transition-colors">
                  {tip.title}
                </h3>
                <p className="text-secondary-600 mb-4 leading-relaxed">
                  {tip.excerpt}
                </p>

                {/* Meta Information */}
                <div className="flex items-center text-sm text-secondary-500 mb-4">
                  <User className="w-4 h-4 mr-1" />
                  <span className="mr-4">{tip.author}</span>
                  <Calendar className="w-4 h-4 mr-1" />
                  <span className="mr-4">
                    {new Date(tip.date).toLocaleDateString()}
                  </span>
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{tip.readTime}</span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {tip.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-secondary-100 text-secondary-600 rounded-md text-xs"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Read More Button */}
                <button className="text-primary-600 font-semibold flex items-center group-hover:text-primary-700 transition-colors">
                  Read Full Article
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </button>

                {/* Decorative Element */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary-600 to-primary-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* No Results Message */}
        {filteredTips.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-12"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-secondary-900 mb-2">
              No tips found
            </h3>
            <p className="text-secondary-600 mb-6">
              Try adjusting your search terms or selecting a different category
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
              }}
              className="btn-primary"
            >
              Clear Filters
            </button>
          </motion.div>
        )}

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="card max-w-2xl mx-auto bg-gradient-to-r from-primary-600 to-primary-700 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Stay Updated with Health Tips
            </h3>
            <p className="text-primary-100 mb-6">
              Subscribe to our newsletter for weekly health tips and wellness
              insights delivered straight to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-secondary-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="btn-secondary bg-white text-primary-600 hover:bg-primary-50">
                Subscribe Now
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HealthTips;
