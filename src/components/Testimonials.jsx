import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Mrs. Adebayo Olumide",
      role: "Regular Customer",
      image: "👩🏾‍💼",
      rating: 5,
      text: "Carophillip Heritage Pharmacy has been my family's trusted pharmacy for over 5 years. Their professional service and quality medications are exceptional. The staff is knowledgeable and always ready to help.",
      location: "Ayobo, Lagos",
    },
    {
      name: "Dr. Michael Johnson",
      role: "Medical Professional",
      image: "👨🏿‍⚕️",
      rating: 5,
      text: "I regularly recommend Carophillip Heritage to my patients. They maintain high standards, have reliable stock, and their pharmaceutical consultation services are top-notch. Truly professional.",
      location: "Ipaja, Lagos",
    },
    {
      name: "Mr. Ibrahim Suleiman",
      role: "Senior Citizen",
      image: "👴🏿",
      rating: 5,
      text: "The home delivery service is a blessing for elderly customers like me. They're always punctual, medications are properly packaged, and the staff treats everyone with respect and care.",
      location: "Alimosho, Lagos",
    },
    {
      name: "Miss Sarah Okafor",
      role: "Young Professional",
      image: "👩🏿‍💻",
      rating: 5,
      text: "Fast, efficient, and convenient! I love their online consultation service. The pharmacists are very helpful in explaining medications and potential side effects. Highly recommended!",
      location: "Egbeda, Lagos",
    },
    {
      name: "Mr. & Mrs. Babatunde",
      role: "Family",
      image: "👨‍👩‍👧‍👦",
      rating: 5,
      text: "From baby care products to adult medications, they have everything our family needs. The prices are fair, and they often have helpful health tips. We won't shop anywhere else!",
      location: "Ayobo, Lagos",
    },
    {
      name: "Rev. Emmanuel Adeyemi",
      role: "Community Leader",
      image: "👨🏿‍🦳",
      rating: 5,
      text: "Carophillip Heritage is a pillar in our community. They've supported various health initiatives and always prioritize customer welfare over profit. A truly ethical business.",
      location: "Atan Kekere, Lagos",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            What Our Customers Say
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Don&apos;t just take our word for it - hear from our satisfied
            customers who trust us with their health and wellness needs
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card relative overflow-hidden group"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <Quote className="w-12 h-12 text-primary-600" />
              </div>

              {/* Customer Info */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-100 to-primary-200 rounded-full flex items-center justify-center text-2xl">
                  {testimonial.image}
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-secondary-900">
                    {testimonial.name}
                  </h3>
                  <p className="text-secondary-600 text-sm">
                    {testimonial.role}
                  </p>
                  <p className="text-primary-600 text-xs font-medium">
                    {testimonial.location}
                  </p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Testimonial Text */}
              <p className="text-secondary-700 leading-relaxed italic">
                &quot;{testimonial.text}&quot;
              </p>

              {/* Decorative Element */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary-600 to-primary-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Overall Rating Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="card max-w-md mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-4">
              {renderStars(5)}
            </div>
            <h3 className="text-2xl font-bold text-secondary-900 mb-2">
              5.0 Customer Rating
            </h3>
            <p className="text-secondary-600 mb-4">
              Based on 500+ verified reviews
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-secondary-500">
              <span>✓ Quality Products</span>
              <span>✓ Professional Service</span>
              <span>✓ Trusted by Community</span>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <button className="btn-primary">Share Your Experience</button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
