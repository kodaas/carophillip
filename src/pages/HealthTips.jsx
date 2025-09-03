import { useState } from "react";
import { motion } from "framer-motion";
import {
  Heart,
  Brain,
  Shield,
  Activity,
  Sun,
  Moon,
  Droplets,
  Apple,
  Clock,
  ArrowRight,
  BookOpen,
  Search,
  Calendar,
  User,
  CheckCircle,
  AlertCircle,
  Pill,
  Stethoscope,
} from "lucide-react";

const HealthTips = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    { id: "all", name: "All Tips", icon: BookOpen },
    { id: "nutrition", name: "Nutrition", icon: Apple },
    { id: "exercise", name: "Exercise", icon: Activity },
    { id: "mental-health", name: "Mental Health", icon: Brain },
    { id: "medication", name: "Medication", icon: Pill },
    { id: "prevention", name: "Prevention", icon: Shield },
    { id: "wellness", name: "Wellness", icon: Heart },
  ];

  const healthTips = [
    {
      id: 1,
      title: "The Importance of Taking Medications as Prescribed",
      category: "medication",
      excerpt:
        "Learn why medication adherence is crucial for treatment success and how to maintain consistency.",
      content:
        "Taking medications exactly as prescribed by your healthcare provider is one of the most important factors in successful treatment. This means taking the right dose, at the right time, for the right duration.",
      readTime: "3 min read",
      author: "Dr. Caroline Phillips",
      date: "2024-01-15",
      image: "/api/placeholder/600/400",
      tags: ["Medication Safety", "Treatment", "Health Management"],
      featured: true,
    },
    {
      id: 2,
      title: "10 Heart-Healthy Foods to Include in Your Diet",
      category: "nutrition",
      excerpt:
        "Discover nutrient-rich foods that support cardiovascular health and reduce heart disease risk.",
      content:
        "A heart-healthy diet can significantly reduce your risk of cardiovascular disease. Focus on foods rich in omega-3 fatty acids, fiber, and antioxidants.",
      readTime: "5 min read",
      author: "Sarah Johnson, PharmD",
      date: "2024-01-12",
      image: "/api/placeholder/600/400",
      tags: ["Heart Health", "Nutrition", "Diet"],
      featured: true,
    },
    {
      id: 3,
      title: "Managing Stress for Better Health",
      category: "mental-health",
      excerpt:
        "Effective strategies to manage daily stress and improve your overall mental wellbeing.",
      content:
        "Chronic stress can negatively impact your physical and mental health. Learning effective stress management techniques is essential for maintaining overall wellness.",
      readTime: "4 min read",
      author: "Dr. Michael Chen",
      date: "2024-01-10",
      image: "/api/placeholder/600/400",
      tags: ["Stress Management", "Mental Health", "Wellness"],
      featured: false,
    },
    {
      id: 4,
      title: "The Benefits of Regular Exercise",
      category: "exercise",
      excerpt:
        "How regular physical activity can transform your health and increase longevity.",
      content:
        "Regular exercise is one of the most powerful tools for maintaining good health. It benefits your heart, brain, bones, and overall quality of life.",
      readTime: "6 min read",
      author: "Dr. James Martinez",
      date: "2024-01-08",
      image: "/api/placeholder/600/400",
      tags: ["Exercise", "Fitness", "Health Benefits"],
      featured: false,
    },
    {
      id: 5,
      title: "Understanding Drug Interactions",
      category: "medication",
      excerpt:
        "What you need to know about how medications can interact with each other and with food.",
      content:
        "Drug interactions occur when one medication affects how another medication works. Understanding these interactions is crucial for safe medication use.",
      readTime: "4 min read",
      author: "Dr. Caroline Phillips",
      date: "2024-01-05",
      image: "/api/placeholder/600/400",
      tags: ["Drug Interactions", "Medication Safety", "Pharmacy"],
      featured: false,
    },
    {
      id: 6,
      title: "Boosting Your Immune System Naturally",
      category: "prevention",
      excerpt:
        "Natural ways to strengthen your immune system and prevent illness.",
      content:
        "A strong immune system is your best defense against illness. Learn natural strategies to boost your immunity through lifestyle choices.",
      readTime: "5 min read",
      author: "Sarah Johnson, PharmD",
      date: "2024-01-03",
      image: "/api/placeholder/600/400",
      tags: ["Immune System", "Prevention", "Natural Health"],
      featured: false,
    },
    {
      id: 7,
      title: "The Importance of Quality Sleep",
      category: "wellness",
      excerpt:
        "How quality sleep affects your health and tips for better sleep hygiene.",
      content:
        "Quality sleep is essential for physical recovery, mental clarity, and overall health. Poor sleep can lead to numerous health problems.",
      readTime: "4 min read",
      author: "Dr. Michael Chen",
      date: "2024-01-01",
      image: "/api/placeholder/600/400",
      tags: ["Sleep Health", "Wellness", "Recovery"],
      featured: false,
    },
    {
      id: 8,
      title: "Staying Hydrated: More Than Just Water",
      category: "wellness",
      excerpt:
        "Understanding proper hydration and its impact on your health and wellbeing.",
      content:
        "Proper hydration is crucial for virtually every bodily function. Learn how to maintain optimal hydration levels throughout the day.",
      readTime: "3 min read",
      author: "Dr. James Martinez",
      date: "2023-12-28",
      image: "/api/placeholder/600/400",
      tags: ["Hydration", "Health", "Wellness"],
      featured: false,
    },
    {
      id: 9,
      title: "Vitamin D: The Sunshine Vitamin",
      category: "nutrition",
      excerpt:
        "Why vitamin D is essential for your health and how to ensure adequate levels.",
      content:
        "Vitamin D plays a crucial role in bone health, immune function, and overall wellbeing. Many people have insufficient levels without knowing it.",
      readTime: "4 min read",
      author: "Sarah Johnson, PharmD",
      date: "2023-12-25",
      image: "/api/placeholder/600/400",
      tags: ["Vitamin D", "Nutrition", "Bone Health"],
      featured: false,
    },
    {
      id: 10,
      title: "Preventing Common Cold and Flu",
      category: "prevention",
      excerpt:
        "Effective strategies to prevent cold and flu infections during peak seasons.",
      content:
        "Prevention is always better than treatment. Learn proven strategies to reduce your risk of catching cold and flu viruses.",
      readTime: "5 min read",
      author: "Dr. Caroline Phillips",
      date: "2023-12-22",
      image: "/api/placeholder/600/400",
      tags: ["Prevention", "Cold & Flu", "Immunity"],
      featured: false,
    },
  ];

  const filteredTips = healthTips.filter((tip) => {
    const matchesCategory =
      activeCategory === "all" || tip.category === activeCategory;
    const matchesSearch =
      tip.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tip.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tip.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    return matchesCategory && matchesSearch;
  });

  const featuredTips = healthTips.filter((tip) => tip.featured);

  const healthStats = [
    {
      icon: Heart,
      stat: "30min",
      label: "Daily Exercise Recommended",
      color: "text-red-500",
      bgColor: "bg-red-50",
    },
    {
      icon: Droplets,
      stat: "8-10",
      label: "Glasses of Water Daily",
      color: "text-blue-500",
      bgColor: "bg-blue-50",
    },
    {
      icon: Moon,
      stat: "7-9hrs",
      label: "Sleep for Adults",
      color: "text-purple-500",
      bgColor: "bg-purple-50",
    },
    {
      icon: Apple,
      stat: "5+",
      label: "Fruits & Vegetables Daily",
      color: "text-green-500",
      bgColor: "bg-green-50",
    },
  ];

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
              Health Tips & Wellness
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed mb-8">
              Expert advice and practical tips to help you live a healthier,
              happier life from our team of healthcare professionals.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-lg">
              <div className="flex items-center">
                <BookOpen className="w-6 h-6 mr-2" />
                <span>Expert Articles</span>
              </div>
              <div className="flex items-center">
                <Stethoscope className="w-6 h-6 mr-2" />
                <span>Professional Advice</span>
              </div>
              <div className="flex items-center">
                <Heart className="w-6 h-6 mr-2" />
                <span>Wellness Focus</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Health Stats */}
      <section className="py-16 bg-white">
        <div className="container-apple">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {healthStats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div
                  className={`w-20 h-20 ${stat.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <stat.icon className={`w-10 h-10 ${stat.color}`} />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">
                  {stat.stat}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-gray-50">
        <div className="container-apple">
          <div className="flex flex-col lg:flex-row gap-6 items-center mb-8">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search health tips..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary"
              />
            </div>
          </div>

          {/* Category Navigation */}
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

      {/* Featured Tips */}
      {activeCategory === "all" && (
        <section className="py-16">
          <div className="container-apple">
            <motion.div
              className="text-center mb-12"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Featured Health Tips
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Our most popular and impactful health advice
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              {featuredTips.map((tip, index) => (
                <motion.article
                  key={tip.id}
                  className="bg-white rounded-2xl shadow-apple overflow-hidden hover:shadow-apple-xl transition-all duration-300"
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="md:flex">
                    <div className="md:w-1/2">
                      <img
                        src={tip.image}
                        alt={tip.title}
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-1/2 p-8">
                      <div className="flex items-center mb-3">
                        <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                          Featured
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-3">
                        {tip.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {tip.excerpt}
                      </p>

                      <div className="flex items-center text-sm text-gray-500 mb-4">
                        <User className="w-4 h-4 mr-2" />
                        <span className="mr-4">{tip.author}</span>
                        <Clock className="w-4 h-4 mr-2" />
                        <span className="mr-4">{tip.readTime}</span>
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{new Date(tip.date).toLocaleDateString()}</span>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {tip.tags.slice(0, 2).map((tag, idx) => (
                          <span
                            key={idx}
                            className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <button className="text-primary font-semibold hover:text-primary-700 inline-flex items-center">
                        Read Full Article
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Tips Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container-apple">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800">
              {activeCategory === "all"
                ? "All Health Tips"
                : categories.find((cat) => cat.id === activeCategory)?.name +
                  " Tips"}
            </h2>
            <p className="text-gray-600">
              {filteredTips.length} articles found
            </p>
          </div>

          {filteredTips.length === 0 ? (
            <div className="text-center py-12">
              <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                No articles found
              </h3>
              <p className="text-gray-500">
                Try adjusting your search or filter criteria
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTips.map((tip, index) => (
                <motion.article
                  key={tip.id}
                  className="bg-white rounded-2xl shadow-apple overflow-hidden hover:shadow-apple-xl transition-all duration-300"
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: (index % 9) * 0.1 }}
                >
                  <div className="relative">
                    <img
                      src={tip.image}
                      alt={tip.title}
                      className="w-full h-48 object-cover"
                    />
                    {tip.featured && (
                      <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold">
                        Featured
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                      {tip.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                      {tip.excerpt}
                    </p>

                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <User className="w-4 h-4 mr-1" />
                      <span className="mr-3 truncate">{tip.author}</span>
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{tip.readTime}</span>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {tip.tags.slice(0, 2).map((tag, idx) => (
                        <span
                          key={idx}
                          className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                      {tip.tags.length > 2 && (
                        <span className="text-gray-400 text-xs">
                          +{tip.tags.length - 2} more
                        </span>
                      )}
                    </div>

                    <button className="w-full bg-primary text-white py-2 rounded-xl hover:bg-primary-700 transition-colors font-medium">
                      Read Article
                    </button>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Health Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-800 text-white">
        <div className="container-apple">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6">
              Stay Updated with Health Tips
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Subscribe to our newsletter and get the latest health tips,
              medication updates, and wellness advice delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-primary px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-sm opacity-75 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Health Tips */}
      <section className="py-16">
        <div className="container-apple">
          <motion.div
            className="text-center mb-12"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Quick Daily Health Tips
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple habits that can make a big difference in your daily health
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Sun,
                tip: "Get 10-15 minutes of sunlight daily",
                benefit: "Boosts Vitamin D production",
              },
              {
                icon: Droplets,
                tip: "Drink water first thing in the morning",
                benefit: "Kickstarts metabolism and hydration",
              },
              {
                icon: Activity,
                tip: "Take the stairs instead of elevators",
                benefit: "Increases daily physical activity",
              },
              {
                icon: Brain,
                tip: "Practice deep breathing for 5 minutes",
                benefit: "Reduces stress and improves focus",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-apple text-center hover:shadow-apple-lg transition-all duration-300"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">{item.tip}</h3>
                <p className="text-sm text-gray-600">{item.benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Health Tips */}
      <section className="py-16 bg-red-50 border-t border-red-100">
        <div className="container-apple">
          <motion.div
            className="max-w-4xl mx-auto"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center mb-6">
              <AlertCircle className="w-8 h-8 text-red-600 mr-3" />
              <h2 className="text-2xl font-bold text-red-800">
                Important Health Reminders
              </h2>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-apple">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-red-800 mb-3">
                    When to Seek Immediate Medical Attention:
                  </h3>
                  <ul className="space-y-2 text-red-700">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                      Chest pain or difficulty breathing
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                      Severe allergic reactions
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                      High fever with severe symptoms
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                      Suspected medication overdose
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-red-800 mb-3">
                    Emergency Contacts:
                  </h3>
                  <div className="space-y-2 text-red-700">
                    <p>
                      <strong>Emergency Services:</strong> 911
                    </p>
                    <p>
                      <strong>Poison Control:</strong> 1-800-222-1222
                    </p>
                    <p>
                      <strong>Our Emergency Line:</strong> +1 (555) 911-HELP
                    </p>
                    <p className="text-sm text-red-600 mt-4">
                      * This information is not a substitute for professional
                      medical advice.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HealthTips;
