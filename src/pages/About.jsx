import { motion } from "framer-motion";
import {
  Heart,
  Shield,
  Award,
  Users,
  Clock,
  Target,
  Eye,
  Star,
  CheckCircle,
  ArrowRight,
  Phone,
} from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description:
        "We treat every patient with empathy, understanding, and genuine concern for their wellbeing.",
      color: "text-red-500",
      bgColor: "bg-red-50",
    },
    {
      icon: Shield,
      title: "Trust & Integrity",
      description:
        "Building lasting relationships through honest communication and reliable pharmaceutical services.",
      color: "text-blue-500",
      bgColor: "bg-blue-50",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "Maintaining the highest standards in pharmaceutical care and customer service.",
      color: "text-green-500",
      bgColor: "bg-green-50",
    },
    {
      icon: Users,
      title: "Community Focus",
      description:
        "Committed to improving the health and wellness of our local community.",
      color: "text-purple-500",
      bgColor: "bg-purple-50",
    },
  ];

  const teamMembers = [
    {
      name: "Dr. Caroline Phillips",
      role: "Chief Pharmacist & Founder",
      image: "/api/placeholder/300/400",
      qualifications: ["PharmD", "RPh", "25+ Years Experience"],
      specialties: [
        "Clinical Pharmacy",
        "Medication Therapy Management",
        "Immunizations",
      ],
    },
    {
      name: "Dr. Michael Chen",
      role: "Senior Clinical Pharmacist",
      image: "/api/placeholder/300/400",
      qualifications: ["PharmD", "RPh", "Certified Diabetes Educator"],
      specialties: ["Diabetes Management", "Pain Management", "Geriatric Care"],
    },
    {
      name: "Sarah Johnson",
      role: "Pharmacy Manager",
      image: "/api/placeholder/300/400",
      qualifications: ["PharmD", "RPh", "MBA Healthcare Management"],
      specialties: [
        "Operations Management",
        "Insurance Processing",
        "Customer Care",
      ],
    },
    {
      name: "Dr. James Martinez",
      role: "Clinical Pharmacist",
      image: "/api/placeholder/300/400",
      qualifications: ["PharmD", "RPh", "Certified Immunizing Pharmacist"],
      specialties: ["Immunizations", "Travel Medicine", "Wellness Programs"],
    },
  ];

  const milestones = [
    {
      year: "1998",
      title: "Foundation",
      description:
        "Carophillip Heritage Pharmacy was founded with a vision to provide personalized pharmaceutical care.",
    },
    {
      year: "2003",
      title: "Expansion",
      description:
        "Expanded services to include immunizations and health screenings.",
    },
    {
      year: "2008",
      title: "Technology Integration",
      description:
        "Implemented electronic prescription systems and online refill services.",
    },
    {
      year: "2015",
      title: "Clinical Services",
      description:
        "Launched comprehensive medication therapy management programs.",
    },
    {
      year: "2020",
      title: "Digital Innovation",
      description:
        "Introduced mobile app and telehealth consultation services.",
    },
    {
      year: "2024",
      title: "Community Recognition",
      description:
        "Awarded &quot;Pharmacy of the Year&quot; by the State Pharmaceutical Association.",
    },
  ];

  const certifications = [
    { name: "FDA Certified Pharmacy", icon: Shield },
    { name: "ISO 9001:2015 Quality Management", icon: Award },
    { name: "NABP Verified Internet Pharmacy Practice", icon: CheckCircle },
    { name: "Joint Commission Accredited", icon: Star },
    { name: "HIPAA Compliant", icon: Shield },
    { name: "DEA Licensed", icon: Award },
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
              About Carophillip Heritage
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed mb-8">
              Over 1 year of trusted pharmaceutical care, serving our community
              with dedication, expertise, and compassion.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-lg">
              <div className="flex items-center">
                <Users className="w-6 h-6 mr-2" />
                <span>100+ Customers Served</span>
              </div>
              <div className="flex items-center">
                <Award className="w-6 h-6 mr-2" />
                <span>Award-Winning Service</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-6 h-6 mr-2" />
                <span>1+ Years of Excellence</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section-padding">
        <div className="container-apple">
          <div className="grid lg:grid-cols-3 gap-12 mb-16">
            {/* Mission */}
            <motion.div
              className="text-center"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-10 h-10 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Our Mission
              </h2>
              <p className="text-gray-600 leading-relaxed">
                To provide exceptional pharmaceutical care and health services
                that improve the quality of life for our patients and community,
                combining professional expertise with personalized attention.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              className="text-center"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="w-10 h-10 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Our Vision
              </h2>
              <p className="text-gray-600 leading-relaxed">
                To be the most trusted and innovative pharmacy in our region,
                setting the standard for patient care, community health
                advocacy, and pharmaceutical excellence.
              </p>
            </motion.div>

            {/* Values */}
            <motion.div
              className="text-center"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Our Values
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Compassion, integrity, excellence, and community commitment
                guide everything we do, ensuring every patient receives the
                highest quality care and attention.
              </p>
            </motion.div>
          </div>

          {/* Core Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="text-center"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div
                  className={`w-16 h-16 ${value.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <value.icon className={`w-8 h-8 ${value.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-gray-50">
        <div className="container-apple">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Founded in 1998 by Dr. Seyi Obayemi Phillips, Carophillip
                  Heritage Pharmacy began as a small community pharmacy with a
                  big vision: to provide personalized, compassionate
                  pharmaceutical care that puts patients first.
                </p>
                <p>
                  What started as a single-location pharmacy has grown into a
                  trusted healthcare institution, serving over 50,000 customers
                  throughout our community. Our success stems from our
                  unwavering commitment to treating each patient as family,
                  understanding their unique needs, and providing solutions that
                  improve their quality of life.
                </p>
                <p>
                  Today, we combine traditional pharmaceutical values with
                  cutting-edge technology and services, offering everything from
                  prescription medications to comprehensive health screenings,
                  immunizations, and medication therapy management.
                </p>
                <p>
                  Our team of licensed pharmacists and healthcare professionals
                  continues to uphold the founding principles of excellence,
                  integrity, and community service that have made us the
                  pharmacy of choice for families across our region.
                </p>
              </div>
              <div className="mt-8 flex items-center space-x-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">50K+</div>
                  <div className="text-sm text-gray-600">
                    Satisfied Customers
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">25+</div>
                  <div className="text-sm text-gray-600">Years of Service</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">100%</div>
                  <div className="text-sm text-gray-600">
                    Quality Guaranteed
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="/api/placeholder/600/500"
                alt="Pharmacy interior"
                className="rounded-2xl shadow-apple-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-apple-lg">
                <div className="flex items-center">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-800">
                      Pharmacy of the Year
                    </div>
                    <div className="text-sm text-gray-600">
                      State Pharmaceutical Association 2024
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="container-apple">
          <motion.div
            className="text-center mb-16"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Key milestones in our commitment to serving the community
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                className="flex items-start mb-12 last:mb-0"
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex-shrink-0 w-24 text-right mr-8">
                  <div className="text-2xl font-bold text-primary">
                    {milestone.year}
                  </div>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-primary rounded-full mt-2 mr-8 relative">
                  {index !== milestones.length - 1 && (
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-primary/30"></div>
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-apple">
          <motion.div
            className="text-center mb-16"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our licensed pharmacists and healthcare professionals are
              dedicated to your wellbeing
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-apple overflow-hidden hover:shadow-apple-xl transition-all duration-300"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary font-semibold mb-4">
                    {member.role}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">
                      Qualifications
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {member.qualifications.map((qual, idx) => (
                        <span
                          key={idx}
                          className="bg-gray-100 text-xs px-2 py-1 rounded-full"
                        >
                          {qual}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">
                      Specialties
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {member.specialties.map((specialty, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircle className="w-3 h-3 text-primary mr-2 flex-shrink-0" />
                          {specialty}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding">
        <div className="container-apple">
          <motion.div
            className="text-center mb-12"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Certifications & Accreditations
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our commitment to quality is validated by industry-leading
              certifications
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-apple text-center hover:shadow-apple-lg transition-all duration-300"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <cert.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-gray-800">{cert.name}</h3>
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
              Experience the Carophillip Difference
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Join our family of satisfied customers and discover why we&apos;ve
              been the trusted choice for pharmaceutical care for over 25 years.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-primary px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                Visit Our Pharmacy
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="tel:+2348060801022"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-primary transition-colors inline-flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Us Today
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
