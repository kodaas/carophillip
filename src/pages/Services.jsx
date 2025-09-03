import { useState } from "react";
import { motion } from "framer-motion";
import {
  Pill,
  Stethoscope,
  Shield,
  Heart,
  Calendar,
  Truck,
  Phone,
  CheckCircle,
  Clock,
  User,
  FileText,
  AlertCircle,
  ArrowRight,
  Syringe,
  Activity,
  Clipboard,
  CreditCard,
  MessageSquare,
} from "lucide-react";

const Services = () => {
  const [activeService, setActiveService] = useState(null);

  const mainServices = [
    {
      icon: Pill,
      title: "Prescription Services",
      description:
        "Complete prescription filling and management with expert care",
      features: [
        "Fast prescription filling",
        "Generic substitution counseling",
        "Medication synchronization",
        "Prescription transfers",
        "Refill reminders",
        "Insurance processing",
      ],
      image: "/api/placeholder/600/400",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: Stethoscope,
      title: "Clinical Services",
      description:
        "Professional health consultations and medication therapy management",
      features: [
        "Medication therapy management",
        "Drug interaction screening",
        "Adherence counseling",
        "Clinical consultations",
        "Health outcome monitoring",
        "Chronic disease management",
      ],
      image: "/api/placeholder/600/400",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: Syringe,
      title: "Immunizations",
      description:
        "Comprehensive vaccination services by certified pharmacists",
      features: [
        "Flu shots",
        "COVID-19 vaccines",
        "Travel vaccines",
        "Childhood immunizations",
        "Adult vaccines",
        "Vaccine counseling",
      ],
      image: "/api/placeholder/600/400",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: Activity,
      title: "Health Screenings",
      description: "Preventive health assessments and monitoring services",
      features: [
        "Blood pressure monitoring",
        "Cholesterol screening",
        "Blood glucose testing",
        "BMI assessment",
        "Medication reviews",
        "Health risk assessments",
      ],
      image: "/api/placeholder/600/400",
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
    {
      icon: Truck,
      title: "Delivery Services",
      description: "Convenient medication delivery to your doorstep",
      features: [
        "Free local delivery",
        "Same-day delivery",
        "Scheduled deliveries",
        "Contactless delivery",
        "Prescription pickup reminders",
        "Delivery tracking",
      ],
      image: "/api/placeholder/600/400",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      icon: Shield,
      title: "Specialty Pharmacy",
      description: "Specialized care for complex and rare conditions",
      features: [
        "Specialty medications",
        "Patient assistance programs",
        "Prior authorization support",
        "Specialized counseling",
        "Adherence monitoring",
        "Side effect management",
      ],
      image: "/api/placeholder/600/400",
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
    },
  ];

  const additionalServices = [
    {
      icon: CreditCard,
      title: "Insurance Services",
      description: "Complete insurance processing and assistance",
      features: [
        "Claims processing",
        "Prior authorizations",
        "Coverage verification",
        "Appeals assistance",
      ],
    },
    {
      icon: Clipboard,
      title: "Medication Reviews",
      description: "Comprehensive medication assessments",
      features: [
        "Annual medication reviews",
        "Drug interaction checks",
        "Dosage optimization",
        "Cost-saving recommendations",
      ],
    },
    {
      icon: MessageSquare,
      title: "Telehealth Consultations",
      description: "Remote healthcare consultations and support",
      features: [
        "Video consultations",
        "Phone consultations",
        "Medication counseling",
        "Follow-up care",
      ],
    },
    {
      icon: FileText,
      title: "Prescription Management",
      description: "Advanced prescription organization and tracking",
      features: [
        "Medication synchronization",
        "Refill coordination",
        "Adherence tracking",
        "Progress monitoring",
      ],
    },
  ];

  const emergencyServices = [
    {
      title: "24/7 Emergency Line",
      description: "Round-the-clock pharmaceutical support for urgent needs",
      phone: "+1 (555) 911-HELP",
    },
    {
      title: "Emergency Refills",
      description: "Urgent prescription refills when you need them most",
      phone: "+1 (555) 123-4568",
    },
    {
      title: "After-Hours Consultations",
      description: "Professional guidance outside regular business hours",
      phone: "+1 (555) 123-4569",
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
              Our Services
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed mb-8">
              Comprehensive pharmaceutical care and health services designed to
              improve your quality of life and wellbeing.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-lg">
              <div className="flex items-center">
                <CheckCircle className="w-6 h-6 mr-2" />
                <span>Expert Care</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-6 h-6 mr-2" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center">
                <Shield className="w-6 h-6 mr-2" />
                <span>Quality Guaranteed</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="section-padding">
        <div className="container-apple">
          <motion.div
            className="text-center mb-16"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our comprehensive range of pharmaceutical and healthcare services
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {mainServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-apple hover:shadow-apple-xl transition-all duration-300 overflow-hidden"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8">
                    <div
                      className={`w-16 h-16 ${service.bgColor} rounded-full flex items-center justify-center mb-6`}
                    >
                      <service.icon className={`w-8 h-8 ${service.color}`} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                      {service.features.length > 4 && (
                        <button
                          onClick={() =>
                            setActiveService(
                              activeService === index ? null : index,
                            )
                          }
                          className="text-primary font-medium text-sm hover:text-primary-700 transition-colors"
                        >
                          {activeService === index
                            ? "Show Less"
                            : `+${service.features.length - 4} More Features`}
                        </button>
                      )}
                    </div>

                    {activeService === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-2 mb-6"
                      >
                        {service.features.slice(4).map((feature, idx) => (
                          <div
                            key={idx}
                            className="flex items-center text-sm text-gray-600"
                          >
                            <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </motion.div>
                    )}

                    <button className="text-primary font-semibold hover:text-primary-700 inline-flex items-center">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-apple">
          <motion.div
            className="text-center mb-12"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Extended healthcare services to support your complete wellness
              journey
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-apple hover:shadow-apple-lg transition-all duration-300"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-1">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="text-xs text-gray-500 flex items-center"
                    >
                      <div className="w-1 h-1 bg-primary rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="section-padding bg-red-600 text-white">
        <div className="container-apple">
          <motion.div
            className="text-center mb-12"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <AlertCircle className="w-16 h-16 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Emergency Services</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Available 24/7 for urgent pharmaceutical needs and medical
              emergencies
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {emergencyServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="opacity-90 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <a
                  href={`tel:${service.phone}`}
                  className="bg-white text-red-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  {service.phone}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="section-padding">
        <div className="container-apple">
          <motion.div
            className="text-center mb-16"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              How We Serve You
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our streamlined process ensures you receive the best
              pharmaceutical care
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description:
                  "Initial assessment of your healthcare needs and medication requirements",
                icon: User,
              },
              {
                step: "02",
                title: "Personalized Plan",
                description:
                  "Customized treatment plan developed by our expert pharmacists",
                icon: FileText,
              },
              {
                step: "03",
                title: "Service Delivery",
                description:
                  "Professional execution of pharmaceutical services with ongoing monitoring",
                icon: Truck,
              },
              {
                step: "04",
                title: "Follow-up Care",
                description:
                  "Continuous support and adjustments to optimize your health outcomes",
                icon: Heart,
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                className="text-center relative"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                  <step.icon className="w-8 h-8 text-primary" />
                  <div className="absolute -top-2 -right-2 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute left-full top-1/2 transform -translate-y-1/2 w-20 h-0.5 bg-primary/30 ml-8"></div>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing/Insurance */}
      <section className="section-padding bg-gray-50">
        <div className="container-apple">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Insurance & Payment Options
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We work with most major insurance providers to ensure you get
                the coverage you deserve. Our team handles all the paperwork and
                helps maximize your benefits.
              </p>

              <div className="space-y-4">
                {[
                  "Most major insurance plans accepted",
                  "Medicare and Medicaid processing",
                  "Flexible payment plans available",
                  "Generic substitution to save costs",
                  "Patient assistance program enrollment",
                  "Prior authorization support",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-3" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <button className="btn-primary mr-4">
                  Check Insurance Coverage
                </button>
                <button className="btn-secondary">View Payment Options</button>
              </div>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="/api/placeholder/600/400"
                alt="Insurance and payment"
                className="rounded-2xl shadow-apple-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-apple-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">95%</div>
                  <div className="text-sm text-gray-600">
                    Insurance Plans Accepted
                  </div>
                </div>
              </div>
            </motion.div>
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
              Ready to Experience Our Services?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Contact us today to learn more about our comprehensive
              pharmaceutical services and how we can support your health
              journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-primary px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                Schedule Consultation
                <Calendar className="w-5 h-5 ml-2" />
              </a>
              <a
                href="tel:+2348060801022"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-primary transition-colors inline-flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
