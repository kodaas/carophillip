import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Heart,
  Shield,
  Clock,
  Users,
  Award,
  ArrowRight,
  CheckCircle,
  Star,
  Phone,
  MapPin,
  Truck,
  Stethoscope,
  Pill,
  Calendar,
  AlertCircle,
  Play,
} from "lucide-react";

// Import existing components
import LoadingScreen from "../components/LoadingScreen";
// import ServicesDemo from "../components/ServicesDemo";
import Testimonials from "../components/Testimonials";
import HealthTips from "../components/HealthTips";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Hero slider content
  const heroSlides = [
    {
      title: "Your Health, Our Priority",
      subtitle: "Premium pharmaceutical care and wellness solutions",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      cta: "Explore Services",
    },
    {
      title: "24/7 Emergency Support",
      subtitle:
        "Round-the-clock pharmaceutical assistance when you need it most",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      cta: "Emergency Contact",
    },
    {
      title: "Expert Pharmaceutical Care",
      subtitle: "Professional pharmacists at your service",
      image:
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      cta: "Speak to a Pharmacist",
    },
  ];

  // Auto-advance hero slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  if (isLoading) {
    return <LoadingScreen isLoading={isLoading} />;
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Hero Slides */}
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{
                opacity: currentSlide === index ? 1 : 0,
                scale: currentSlide === index ? 1 : 1.1,
              }}
              transition={{ duration: 1 }}
              className="absolute inset-0 bg-gradient-to-r from-primary-800/90 to-primary-600/80"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30" />
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${slide.image})`,
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container-apple">
            <div className="max-w-3xl">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.h1
                  className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  {heroSlides[currentSlide].title}
                </motion.h1>

                <motion.p
                  className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  {heroSlides[currentSlide].subtitle}
                </motion.p>

                <motion.div
                  className="flex flex-col sm:flex-row gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <Link
                    to="/services"
                    className="btn-primary inline-flex items-center"
                  >
                    {heroSlides[currentSlide].cta}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                  <Link
                    to="/contact"
                    className="btn-secondary inline-flex items-center"
                  >
                    Contact Us
                    <Phone className="ml-2 w-5 h-5" />
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Hero Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex space-x-3">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentSlide === index ? "bg-white scale-125" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 right-8 text-white"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="flex flex-col items-center">
            <span className="text-sm mb-2">Scroll</span>
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2" />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Quick Stats Bar */}
      <section className="bg-white py-12 shadow-apple">
        <div className="container-apple">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              className="text-center"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">500+</h3>
              <p className="text-gray-600">Happy Customers</p>
            </motion.div>

            <motion.div
              className="text-center"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">3+</h3>
              <p className="text-gray-600">Years Experience</p>
            </motion.div>

            <motion.div
              className="text-center"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">100%</h3>
              <p className="text-gray-600">Quality Assured</p>
            </motion.div>

            <motion.div
              className="text-center"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">24/7</h3>
              <p className="text-gray-600">Emergency Support</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-apple">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1586611292717-f828b167408c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Modern Pharmacy Interior"
                  className="rounded-2xl shadow-apple-xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-apple-lg">
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Heart className="w-6 h-6 text-primary fill-primary/20" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">
                        Trusted Care
                      </p>
                      <p className="text-sm text-gray-600">Since 2025</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Your Trusted Pharmacy Partner
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Carophillip Pharmacy has been at the forefront of pharmaceutical
                care, serving our community with dedication, expertise, and
                compassion. We combine traditional pharmacy values with modern
                healthcare solutions.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Licensed pharmacists with advanced training",
                  "Comprehensive medication management",
                  "Personalized health consultations",
                  "Insurance claim processing",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3"
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </motion.div>
                ))}
              </div>

              <Link
                to="/about"
                className="btn-primary inline-flex items-center"
              >
                Learn More About Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Demo Section */}
      {/* <ServicesDemo /> */}

      {/* Emergency Services Banner */}
      <section className="bg-red-600 text-white py-12">
        <div className="container-apple">
          <motion.div
            className="text-center"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
          >
            <AlertCircle className="w-16 h-16 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">
              24/7 Emergency Pharmacy Services
            </h2>
            <p className="text-xl mb-6 max-w-2xl mx-auto">
              Need urgent medication? Our emergency hotline connects you with
              licensed pharmacists around the clock for critical pharmaceutical
              needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+2348060801022"
                className="bg-white text-red-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Emergency Line
              </a>
              <Link
                to="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-red-600 transition-colors inline-flex items-center justify-center shadow-lg"
              >
                View All Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding">
        <div className="container-apple">
          <motion.div
            className="text-center mb-12"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our Pharmacy Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our comprehensive range of pharmaceutical services and
              health products
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Prescription Medications",
                description:
                  "Complete range of prescription drugs with expert dispensing",
                icon: Pill,
                features: [
                  "Brand & Generic Options",
                  "Insurance Coverage",
                  "Refill Reminders",
                ],
              },
              {
                name: "Over-the-Counter Medicine",
                description:
                  "Quality OTC medications for common health conditions",
                icon: Heart,
                features: [
                  "Pain & Fever Relief",
                  "Cold & Flu Remedies",
                  "First Aid Supplies",
                ],
              },
              {
                name: "Health Monitoring",
                description:
                  "Professional health monitoring and consultation services",
                icon: Stethoscope,
                features: [
                  "Blood Pressure Checks",
                  "Blood Sugar Testing",
                  "Health Consultations",
                ],
              },
              {
                name: "Medical Supplies",
                description:
                  "Essential medical equipment and supplies for home care",
                icon: Shield,
                features: [
                  "Medical Devices",
                  "Home Care Supplies",
                  "Mobility Aids",
                ],
              },
              {
                name: "Vaccination Services",
                description: "Professional immunization services for all ages",
                icon: Award,
                features: [
                  "Flu Vaccines",
                  "Travel Immunizations",
                  "Routine Vaccinations",
                ],
              },
              {
                name: "Free Delivery",
                description: "Convenient medication delivery to your doorstep",
                icon: Truck,
                features: [
                  "Same-day Delivery",
                  "Scheduled Refills",
                  "Emergency Delivery",
                ],
              },
            ].map((product, index) => (
              <motion.div
                key={index}
                className="card hover:shadow-apple-xl transition-all duration-300"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <product.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/services"
                  className="text-primary font-semibold hover:text-primary-700 inline-flex items-center"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Health Tips Section */}
      <HealthTips />

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-primary-800 text-white section-padding">
        <div className="container-apple text-center">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Experience Better Healthcare?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Join thousands of satisfied customers who trust us with their
              health and wellness needs. Your health is our priority.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-primary px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-primary transition-colors inline-flex items-center justify-center shadow-lg"
              >
                View Our Services
                <Calendar className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
