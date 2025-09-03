import { useState } from "react";
import { CreditCard, Wallet, Shield, Check } from "lucide-react";
import PaymentModal from "./PaymentModal";

const PaymentDemo = () => {
  const [paymentModal, setPaymentModal] = useState({
    isOpen: false,
    service: null,
    amount: null,
    currency: "NGN",
  });

  const demoServices = [
    {
      title: "Website Development",
      description: "Professional website design and development",
      price: 150000,
      currency: "NGN",
      features: [
        "Responsive Design",
        "SEO Optimized",
        "Mobile Friendly",
        "Admin Panel",
      ],
    },
    {
      title: "Mobile App Development",
      description: "Cross-platform mobile application development",
      price: 250000,
      currency: "NGN",
      features: [
        "iOS & Android",
        "Push Notifications",
        "API Integration",
        "App Store Deployment",
      ],
    },
    {
      title: "Digital Marketing",
      description: "Complete digital marketing strategy and implementation",
      price: 75000,
      currency: "NGN",
      features: [
        "Social Media Management",
        "SEO",
        "Content Creation",
        "Analytics",
      ],
    },
  ];

  const openPaymentModal = (service) => {
    setPaymentModal({
      isOpen: true,
      service: service.title,
      amount: service.price,
      currency: service.currency,
    });
  };

  const closePaymentModal = () => {
    setPaymentModal({
      isOpen: false,
      service: null,
      amount: null,
      currency: "NGN",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Payment Integration Demo
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience seamless payments with Paystack and cryptocurrency
            integration. Choose a service below to test the payment flow.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {demoServices.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-500 hover:scale-105"
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">
                    Features:
                  </h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <Check className="w-4 h-4 text-green-500 mr-2" />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="text-3xl font-bold text-gray-900">
                    ₦{service.price.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-500">One-time payment</div>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => openPaymentModal(service)}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                >
                  <CreditCard className="w-5 h-5" />
                  <span>Pay Now</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Payment Methods Info */}
        <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Secure Payment Methods
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Paystack */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                  <CreditCard className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 ml-4">
                  Paystack
                </h3>
              </div>
              <p className="text-gray-700 mb-4">
                Pay securely with your debit/credit card, bank transfer, or USSD
                code. Powered by Paystack&apos;s industry-leading security
                infrastructure.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Shield className="w-4 h-4 text-green-500 mr-2" />
                  <span className="text-sm text-gray-600">
                    PCI DSS Compliant
                  </span>
                </div>
                <div className="flex items-center">
                  <Shield className="w-4 h-4 text-green-500 mr-2" />
                  <span className="text-sm text-gray-600">
                    Bank-level Security
                  </span>
                </div>
                <div className="flex items-center">
                  <Shield className="w-4 h-4 text-green-500 mr-2" />
                  <span className="text-sm text-gray-600">
                    Real-time Fraud Detection
                  </span>
                </div>
              </div>
            </div>

            {/* Cryptocurrency */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center">
                  <Wallet className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 ml-4">
                  Cryptocurrency
                </h3>
              </div>
              <p className="text-gray-700 mb-4">
                Pay with popular cryptocurrencies like Bitcoin, Ethereum, and
                USDT. Connect your MetaMask or other compatible wallets for
                instant payments.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Shield className="w-4 h-4 text-green-500 mr-2" />
                  <span className="text-sm text-gray-600">
                    Blockchain Security
                  </span>
                </div>
                <div className="flex items-center">
                  <Shield className="w-4 h-4 text-green-500 mr-2" />
                  <span className="text-sm text-gray-600">
                    Decentralized Payments
                  </span>
                </div>
                <div className="flex items-center">
                  <Shield className="w-4 h-4 text-green-500 mr-2" />
                  <span className="text-sm text-gray-600">
                    No Intermediaries
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Security Notice */}
        <div className="mt-8 bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-6 border border-green-200">
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <div>
              <h4 className="font-bold text-green-900 mb-2 text-lg">
                Enterprise-Grade Security
              </h4>
              <p className="text-green-800 leading-relaxed">
                All transactions are encrypted with 256-bit SSL encryption and
                processed through secure, PCI DSS compliant payment gateways.
                Your financial information is never stored on our servers and
                all payments are processed in real-time with advanced fraud
                detection.
              </p>
            </div>
          </div>
        </div>

        {/* Demo Notice */}
        <div className="mt-8 bg-gradient-to-r from-purple-50 to-purple-100 rounded-2xl p-6 border border-purple-200">
          <div className="text-center">
            <h4 className="font-bold text-purple-900 mb-2 text-lg">
              Demo Environment
            </h4>
            <p className="text-purple-800">
              This is a demonstration of the payment integration. In the demo,
              you can test the payment flow with test credentials. No actual
              charges will be made.
            </p>
          </div>
        </div>
      </div>

      {/* Payment Modal */}
      <PaymentModal
        isOpen={paymentModal.isOpen}
        onClose={closePaymentModal}
        service={paymentModal.service}
        amount={paymentModal.amount}
        currency={paymentModal.currency}
      />
    </div>
  );
};

export default PaymentDemo;
