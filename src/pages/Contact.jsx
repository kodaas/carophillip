import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  MessageSquare,
  Calendar,
  Stethoscope,
  Truck,
  Shield,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    serviceType: "",
    preferredContact: "email",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        serviceType: "",
        preferredContact: "email",
      });
    }, 2000);
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+1 (555) 123-4567", "Emergency: +1 (555) 123-4568"],
      description: "Call us for immediate assistance",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@carophillip.com", "emergency@carophillip.com"],
      description: "Send us your questions anytime",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: MapPin,
      title: "Location",
      details: ["123 Health Street", "Medical City, MC 12345"],
      description: "Visit our pharmacy location",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      details: ["Available 24/7", "Instant responses"],
      description: "Chat with our support team",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
  ];

  const services = [
    { value: "prescription", label: "Prescription Services" },
    { value: "consultation", label: "Medication Consultation" },
    { value: "immunization", label: "Immunizations" },
    { value: "screening", label: "Health Screening" },
    { value: "delivery", label: "Delivery Service" },
    { value: "insurance", label: "Insurance Questions" },
    { value: "emergency", label: "Emergency Support" },
    { value: "other", label: "Other Services" },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-800 text-white py-20">
        <div className="container-apple">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              Get in touch with our healthcare professionals. We&apos;re here to
              help with all your pharmaceutical needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="py-16 bg-gray-50">
        <div className="container-apple">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-apple hover:shadow-apple-lg transition-all duration-300"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div
                  className={`w-16 h-16 ${method.bgColor} rounded-full flex items-center justify-center mb-4`}
                >
                  <method.icon className={`w-8 h-8 ${method.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {method.title}
                </h3>
                <div className="space-y-1 mb-3">
                  {method.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 font-medium">
                      {detail}
                    </p>
                  ))}
                </div>
                <p className="text-sm text-gray-500">{method.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20">
        <div className="container-apple">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-8">
                  Send Us a Message
                </h2>

                {submitStatus === "success" && (
                  <div className="bg-green-50 border border-green-200 rounded-apple p-4 mb-6">
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                      <p className="text-green-800 font-medium">
                        Thank you! Your message has been sent successfully.
                        We&apos;ll get back to you soon.
                      </p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="input-apple"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="input-apple"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="input-apple"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="serviceType"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Service Needed
                      </label>
                      <select
                        id="serviceType"
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleInputChange}
                        className="input-apple"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service.value} value={service.value}>
                            {service.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="input-apple"
                      placeholder="Brief description of your inquiry"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="textarea-custom"
                      placeholder="Please provide details about your inquiry..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Contact Method
                    </label>
                    <div className="flex space-x-4">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="preferredContact"
                          value="email"
                          checked={formData.preferredContact === "email"}
                          onChange={handleInputChange}
                          className="text-primary focus:ring-primary"
                        />
                        <span className="ml-2 text-gray-700">Email</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="preferredContact"
                          value="phone"
                          checked={formData.preferredContact === "phone"}
                          onChange={handleInputChange}
                          className="text-primary focus:ring-primary"
                        />
                        <span className="ml-2 text-gray-700">Phone</span>
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        Send Message
                        <Send className="w-5 h-5 ml-2" />
                      </span>
                    )}
                  </button>
                </form>
              </motion.div>
            </div>

            {/* Contact Information Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                {/* Store Hours */}
                <div className="bg-white p-6 rounded-2xl shadow-apple">
                  <div className="flex items-center mb-4">
                    <Clock className="w-6 h-6 text-primary mr-3" />
                    <h3 className="text-lg font-semibold text-gray-800">
                      Store Hours
                    </h3>
                  </div>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span className="font-medium">8:00 AM - 9:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span className="font-medium">8:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span className="font-medium">9:00 AM - 7:00 PM</span>
                    </div>
                    <div className="border-t pt-2 mt-3">
                      <div className="flex items-center text-red-600 font-medium">
                        <AlertCircle className="w-4 h-4 mr-2" />
                        Emergency: 24/7 Available
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Services */}
                <div className="bg-white p-6 rounded-2xl shadow-apple">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    Quick Services
                  </h3>
                  <div className="space-y-3">
                    {[
                      { icon: Stethoscope, text: "Free Health Consultations" },
                      { icon: Truck, text: "Free Local Delivery" },
                      { icon: Shield, text: "Insurance Processing" },
                      { icon: Calendar, text: "Online Appointment Booking" },
                    ].map((service, index) => (
                      <div
                        key={index}
                        className="flex items-center text-gray-600"
                      >
                        <service.icon className="w-5 h-5 text-primary mr-3" />
                        <span>{service.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Emergency Contact */}
                <div className="bg-red-50 border border-red-200 p-6 rounded-2xl">
                  <div className="flex items-center mb-3">
                    <AlertCircle className="w-6 h-6 text-red-600 mr-3" />
                    <h3 className="text-lg font-semibold text-red-800">
                      Emergency Contact
                    </h3>
                  </div>
                  <p className="text-red-700 mb-3">
                    For urgent pharmaceutical needs outside regular hours:
                  </p>
                  <a
                    href="tel:+2348060801022"
                    className="bg-red-600 text-white px-4 py-2 rounded-apple font-medium hover:bg-red-700 transition-colors inline-flex items-center"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Emergency Line
                  </a>
                </div>

                {/* Location Card */}
                <div className="bg-white p-6 rounded-2xl shadow-apple">
                  <div className="flex items-center mb-4">
                    <MapPin className="w-6 h-6 text-primary mr-3" />
                    <h3 className="text-lg font-semibold text-gray-800">
                      Visit Our Store
                    </h3>
                  </div>
                  <address className="text-gray-600 not-italic mb-4">
                    123 Health Street
                    <br />
                    Medical City, MC 12345
                    <br />
                    United States
                  </address>
                  <button className="text-primary font-medium hover:text-primary-700 transition-colors">
                    Get Directions →
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-apple">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
              Find Our Location
            </h2>
            <div className="bg-white rounded-2xl shadow-apple overflow-hidden">
              <div className="h-96 bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">
                    Interactive map would be embedded here
                  </p>
                  <p className="text-sm text-gray-400 mt-2">
                    123 Health Street, Medical City, MC 12345
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container-apple">
          <motion.div
            className="text-center mb-12"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "Do you accept insurance?",
                answer:
                  "Yes, we accept most major insurance plans including Medicare and Medicaid. Our team can help verify your coverage and process claims.",
              },
              {
                question: "Do you offer prescription delivery?",
                answer:
                  "We provide free local delivery within 10 miles of our pharmacy. Same-day delivery is available for orders placed before 2 PM.",
              },
              {
                question: "Can I refill prescriptions online?",
                answer:
                  "Yes, you can request prescription refills through our online portal or mobile app. We'll notify you when your medication is ready for pickup.",
              },
              {
                question: "Do you provide immunizations?",
                answer:
                  "Our certified pharmacists provide various immunizations including flu shots, COVID-19 vaccines, and travel vaccines. No appointment necessary.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-apple"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
