import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, Plus, X, Clock, MapPin } from "lucide-react";

const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const actionItems = [
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Call Now",
      action: () => window.open("tel:+234 806 080 1022"),
      color: "bg-green-500 hover:bg-green-600",
      delay: 0.1,
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      label: "WhatsApp",
      action: () => window.open("https://wa.me/+2348060801022"),
      color: "bg-green-600 hover:bg-green-700",
      delay: 0.2,
    },
    {
      icon: <Clock className="w-5 h-5" />,
      label: "Emergency",
      action: () => window.open("tel:+234 806 080 1022"),
      color: "bg-red-500 hover:bg-red-600",
      delay: 0.3,
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Directions",
      action: () =>
        window.open(
          "https://maps.google.com/?q=Atan+Kekere+Ayobo+Lagos+Nigeria",
        ),
      color: "bg-blue-500 hover:bg-blue-600",
      delay: 0.4,
    },
  ];

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute bottom-16 right-0 space-y-3"
          >
            {actionItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0, x: 20 }}
                transition={{ delay: item.delay, duration: 0.2 }}
                className="flex items-center space-x-3"
              >
                <motion.span
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ delay: item.delay + 0.1 }}
                  className="bg-white px-3 py-2 rounded-lg shadow-lg text-sm font-medium text-gray-700 whitespace-nowrap"
                >
                  {item.label}
                </motion.span>
                <motion.button
                  onClick={item.action}
                  className={`w-12 h-12 rounded-full ${item.color} text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {item.icon}
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={toggleMenu}
        className="w-16 h-16 bg-gradient-to-r from-primary-600 to-primary-700 rounded-full shadow-lg hover:shadow-xl text-white flex items-center justify-center transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={{ rotate: isOpen ? 45 : 0 }}
        transition={{ duration: 0.2 }}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
      </motion.button>

      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleMenu}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm -z-10"
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default FloatingActionButton;
