import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Pill,
  Heart,
  Stethoscope,
  Shield,
  Truck,
  Clock,
  Phone,
  CheckCircle,
  ArrowRight,
  MapPin,
  Users,
  Award,
} from "lucide-react";

const ServicesDemo = () => {
  const [selectedService, setSelectedService] = useState(0);

  const pharmacyServices = [
    {
      title: "Prescription Services",
      description:
        "Professional prescription filling and medication management with expert consultation.",
      features: [
        "Fast prescription filling",
        "Medication counseling",
        "Drug interaction checks",
        "Insurance processing",
        "Refill reminders",
        "Generic alternatives",
      ],
      icon: Pill,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      title: "Health Consultations",
      description:
        "Professional health monitoring and consultation services with licensed pharmacists.",
      features: [
        "Blood pressure monitoring",
        "Blood sugar testing",
        "Medication reviews",
        "Health screenings",
        "Vaccination services",
        "Wellness counseling",
      ],
      icon: Stethoscope,
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      textColor: "text-green-600",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      title: "Over-the-Counter Products",
      description:
        "Wide selection of quality OTC medications and health products for everyday wellness.",
      features: [
        "Pain relief medications",
        "Cold & flu remedies",
        "Vitamins & supplements",
        "First aid supplies",
        "Personal care items",
        "Medical devices",
      ],
      icon: Heart,
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50",
      textColor: "text-red-600",
      image:
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      title: "Emergency Services",
      description:
        "24/7 emergency pharmaceutical services for urgent medication needs.",
      features: [
        "24/7 emergency hotline",
        "Urgent prescriptions",
        "Emergency refills",
        "After-hours consultations",
        "Critical medication access",
        "Emergency delivery",
      ],
      icon: Shield,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
      image:
        "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
  ];

  const stats = [
    { number: "500+", label: "Happy Customers", icon: Users },
    { number: "24/7", label: "Emergency Support", icon: Clock },
    { number: "100%", label: "Quality Assured", icon: Award },
    { number: "3+", label: "Years Experience", icon: Shield },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Pharmacy Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience professional healthcare with our full range of
            pharmaceutical services, designed to meet all your health and
            wellness needs.
          </p>
        </motion.div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                <stat.icon className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Services Tabs */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-4">
            {pharmacyServices.map((service, index) => (
              <button
                key={index}
                onClick={() => setSelectedService(index)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  selectedService === index
                    ? `${service.bgColor} ${service.textColor} shadow-md`
                    : "bg-white text-gray-600 hover:bg-gray-50"
                }`}
              >
                {React.createElement(service.icon, {
                  className: "w-5 h-5 inline mr-2",
                })}
                {service.title}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Service Detail */}
        <motion.div
          key={selectedService}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden"
        >
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Content */}
            <div className="p-8 lg:p-12">
              <div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${pharmacyServices[selectedService].color} mb-6`}
              >
                {React.createElement(pharmacyServices[selectedService].icon, {
                  className: "w-8 h-8 text-white",
                })}
              </div>

              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                {pharmacyServices[selectedService].title}
              </h3>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {pharmacyServices[selectedService].description}
              </p>

              <div className="space-y-4 mb-8">
                {pharmacyServices[selectedService].features.map(
                  (feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <CheckCircle
                        className={`w-5 h-5 ${pharmacyServices[selectedService].textColor} flex-shrink-0`}
                      />
                      <span className="text-gray-700">{feature}</span>
                    </motion.div>
                  ),
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  className={`px-6 py-3 bg-gradient-to-r ${pharmacyServices[selectedService].color} text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300 inline-flex items-center justify-center`}
                >
                  Learn More
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-medium hover:border-gray-400 transition-colors inline-flex items-center justify-center">
                  <Phone className="w-5 h-5 mr-2" />
                  Contact Us
                </button>
              </div>
            </div>

            {/* Image */}
            <div className="relative h-64 lg:h-full">
              <img
                src={pharmacyServices[selectedService].image}
                alt={pharmacyServices[selectedService].title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold mb-4">
            Ready to Experience Professional Pharmacy Care?
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Visit us today or call our pharmacy for personalized healthcare
            solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center">
              <MapPin className="w-5 h-5 mr-2" />
              Visit Our Store
            </button>
            <button className="px-8 py-3 border-2 border-white text-white rounded-xl font-semibold hover:bg-white/10 transition-colors inline-flex items-center justify-center">
              <Phone className="w-5 h-5 mr-2" />
              Call: +234 806 080 1022
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesDemo;
