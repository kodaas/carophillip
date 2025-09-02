import React, { useState, useEffect } from 'react';
import { X, Shield, CreditCard, Smartphone, Bitcoin, Wallet } from 'lucide-react';

const PaymentModal = ({ isOpen, onClose, service, amount = 2500, currency = 'NGN' }) => {
  const [paymentMethod, setPaymentMethod] = useState('paystack');
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState('');

  // Service pricing configuration
  const servicePricing = {
    'Academic Writing': { price: 2500, currency: 'NGN' },
    'Business Writing': { price: 3500, currency: 'NGN' },
    'Editing & Proofreading': { price: 1500, currency: 'NGN' },
    'Custom Research': { price: 4000, currency: 'NGN' },
    'Content Strategy': { price: 5000, currency: 'NGN' },
    'Technical Writing': { price: 4500, currency: 'NGN' },
    'Website Development': { price: 15000, currency: 'NGN' },
    'Digital Marketing': { price: 8000, currency: 'NGN' },
  };

  const currentService = servicePricing[service] || { price: amount, currency: currency };

  // Modal management
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Form validation
  const validateForm = () => {
    if (!customerInfo.name.trim()) {
      alert('Please enter your full name');
      return false;
    }
    if (!customerInfo.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customerInfo.email)) {
      alert('Please enter a valid email address');
      return false;
    }
    return true;
  };

  // Initialize Paystack payment
  const initializePaystack = async () => {
    if (!validateForm()) return;

    setIsProcessing(true);
    setPaymentStatus('Initializing payment...');

    try {
      // Check if Paystack is loaded
      if (!window.PaystackPop) {
        throw new Error('Payment service not available. Please refresh the page.');
      }

      // Generate unique reference
      const reference = `rwp_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

      const handler = window.PaystackPop.setup({
        key: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY || 'pk_test_0123456789abcdef0123456789abcdef01234567',
        email: customerInfo.email,
        amount: currentService.price * 100, // Convert to kobo
        currency: currentService.currency,
        ref: reference,
        metadata: {
          service: service,
          customer_name: customerInfo.name,
          customer_phone: customerInfo.phone,
          custom_fields: [
            {
              display_name: "Service",
              variable_name: "service",
              value: service
            },
            {
              display_name: "Customer Name",
              variable_name: "customer_name",
              value: customerInfo.name
            }
          ]
        },
        callback: function(response) {
          handlePaymentSuccess(response, 'paystack');
        },
        onClose: function() {
          setIsProcessing(false);
          setPaymentStatus('');
        }
      });

      handler.openIframe();
    } catch (error) {
      console.error('Paystack initialization error:', error);
      alert(error.message || 'Payment initialization failed. Please try again.');
      setIsProcessing(false);
      setPaymentStatus('');
    }
  };

  // Initialize crypto payment
  const initializeCryptoPayment = async (walletType) => {
    if (!validateForm()) return;

    setIsProcessing(true);
    setPaymentStatus('Connecting to wallet...');

    try {
      if (walletType === 'metamask') {
        // Check if MetaMask is installed
        if (typeof window.ethereum === 'undefined') {
          throw new Error('MetaMask is not installed. Please install MetaMask to continue.');
        }

        // Request account access
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts'
        });

        if (accounts.length === 0) {
          throw new Error('No accounts found. Please connect your MetaMask wallet.');
        }

        setPaymentStatus('Preparing transaction...');

        // Get network info
        const chainId = await window.ethereum.request({ method: 'eth_chainId' });
        const networkName = getNetworkName(chainId);

        // Convert NGN to ETH (approximate conversion)
        const usdAmount = (currentService.price / 1600).toFixed(2); // NGN to USD
        const ethAmount = (parseFloat(usdAmount) / 3500).toFixed(6); // USD to ETH

        // Prepare transaction
        const transactionParameters = {
          to: import.meta.env.VITE_CRYPTO_WALLET_ADDRESS || '0x742d35Cc6634C0532925a3b8D8e6db6FF7e5b4e2',
          from: accounts[0],
          value: `0x${(parseFloat(ethAmount) * Math.pow(10, 18)).toString(16)}`,
          gasLimit: '0x5208', // 21000 gas limit
          gasPrice: '0x09184e72a000', // 10 gwei
          data: '0x', // Empty data
        };

        setPaymentStatus('Confirm transaction in MetaMask...');

        // Send transaction
        const txHash = await window.ethereum.request({
          method: 'eth_sendTransaction',
          params: [transactionParameters],
        });

        setPaymentStatus('Transaction sent. Waiting for confirmation...');

        // Wait for transaction confirmation
        const receipt = await waitForTransaction(txHash);

        handlePaymentSuccess({
          transaction: txHash,
          receipt: receipt,
          account: accounts[0],
          network: networkName,
          amount: ethAmount
        }, 'crypto');

      } else if (walletType === 'walletconnect') {
        // WalletConnect implementation would go here
        throw new Error('WalletConnect integration coming soon!');
      }
    } catch (error) {
      console.error('Crypto payment error:', error);
      alert(error.message || 'Crypto payment failed. Please try again.');
      setIsProcessing(false);
      setPaymentStatus('');
    }
  };

  // Helper function to get network name
  const getNetworkName = (chainId) => {
    const networks = {
      '0x1': 'Ethereum Mainnet',
      '0x3': 'Ropsten Testnet',
      '0x4': 'Rinkeby Testnet',
      '0x5': 'Goerli Testnet',
      '0x89': 'Polygon Mainnet',
      '0x13881': 'Polygon Mumbai',
    };
    return networks[chainId] || 'Unknown Network';
  };

  // Wait for transaction confirmation
  const waitForTransaction = async (txHash) => {
    return new Promise((resolve, reject) => {
      const checkTransaction = async () => {
        try {
          const receipt = await window.ethereum.request({
            method: 'eth_getTransactionReceipt',
            params: [txHash],
          });

          if (receipt) {
            resolve(receipt);
          } else {
            setTimeout(checkTransaction, 2000);
          }
        } catch (error) {
          reject(error);
        }
      };
      checkTransaction();
    });
  };

  // Handle payment success
  const handlePaymentSuccess = async (response, method) => {
    setPaymentStatus('Processing payment confirmation...');

    try {
      const paymentData = {
        service: service,
        customer: customerInfo,
        payment_method: method,
        payment_response: response,
        amount: currentService.price,
        currency: currentService.currency,
        timestamp: new Date().toISOString(),
      };

      // Send to backend
      const apiUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001';
      const result = await fetch(`${apiUrl}/api/payment/success`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(paymentData),
      });

      if (result.ok) {
        const responseData = await result.json();
        setPaymentStatus('success');

        // Show success message
        setTimeout(() => {
          alert(`Payment successful! Order ID: ${responseData.order_id}\n\nWe will contact you within 24 hours to discuss your project details.`);
          onClose();
        }, 1000);
      } else {
        throw new Error('Failed to process payment confirmation');
      }
    } catch (error) {
      console.error('Payment confirmation error:', error);
      setPaymentStatus('warning');
      alert('Payment was processed but confirmation failed. Please contact support with your transaction details.');
    } finally {
      setIsProcessing(false);
    }
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    setCustomerInfo({
      ...customerInfo,
      [e.target.name]: e.target.value,
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-3xl w-full max-w-md max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="text-2xl font-semibold text-gray-900">
            Payment for {service}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Service Details */}
          <div className="bg-gray-50 rounded-2xl p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Service Details</h3>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">{service}</span>
              <span className="text-2xl font-bold text-gray-900">
                {currentService.currency === 'NGN' ? '₦' : '$'}
                {currentService.price.toLocaleString()}
              </span>
            </div>
          </div>

          {/* Customer Information */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Customer Information</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={customerInfo.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={customerInfo.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={customerInfo.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>
          </div>

          {/* Payment Method Selection */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Payment Method</h3>
            <div className="space-y-3">
              {/* Paystack Option */}
              <div
                className={`p-4 border-2 rounded-xl cursor-pointer transition-all ${
                  paymentMethod === 'paystack'
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => setPaymentMethod('paystack')}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                      <CreditCard className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Paystack</h4>
                      <p className="text-sm text-gray-600">Card, Bank Transfer, USSD</p>
                    </div>
                  </div>
                  <div className={`w-5 h-5 rounded-full border-2 ${
                    paymentMethod === 'paystack'
                      ? 'border-blue-500 bg-blue-500'
                      : 'border-gray-300'
                  }`}>
                    {paymentMethod === 'paystack' && (
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Crypto Option */}
              <div
                className={`p-4 border-2 rounded-xl cursor-pointer transition-all ${
                  paymentMethod === 'crypto'
                    ? 'border-orange-500 bg-orange-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => setPaymentMethod('crypto')}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                      <Bitcoin className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Cryptocurrency</h4>
                      <p className="text-sm text-gray-600">ETH, BTC, USDT</p>
                    </div>
                  </div>
                  <div className={`w-5 h-5 rounded-full border-2 ${
                    paymentMethod === 'crypto'
                      ? 'border-orange-500 bg-orange-500'
                      : 'border-gray-300'
                  }`}>
                    {paymentMethod === 'crypto' && (
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Crypto Wallet Options */}
          {paymentMethod === 'crypto' && (
            <div>
              <h4 className="font-medium text-gray-900 mb-3">Select Wallet</h4>
              <div className="space-y-3">
                <button
                  onClick={() => initializeCryptoPayment('metamask')}
                  disabled={isProcessing}
                  className="w-full p-3 border border-gray-200 rounded-xl hover:border-gray-300 transition-colors flex items-center justify-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Wallet className="w-5 h-5 text-orange-500" />
                  <span className="font-medium">MetaMask</span>
                </button>

                <button
                  onClick={() => initializeCryptoPayment('walletconnect')}
                  disabled={isProcessing}
                  className="w-full p-3 border border-gray-200 rounded-xl hover:border-gray-300 transition-colors flex items-center justify-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Smartphone className="w-5 h-5 text-blue-500" />
                  <span className="font-medium">WalletConnect</span>
                </button>
              </div>
            </div>
          )}

          {/* Payment Status */}
          {paymentStatus && (
            <div className={`p-4 rounded-xl ${
              paymentStatus === 'success' ? 'bg-green-50 text-green-800' :
              paymentStatus === 'warning' ? 'bg-yellow-50 text-yellow-800' :
              'bg-blue-50 text-blue-800'
            }`}>
              <div className="flex items-center space-x-2">
                {isProcessing && (
                  <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                )}
                <span className="text-sm font-medium">{paymentStatus}</span>
              </div>
            </div>
          )}

          {/* Payment Button */}
          {paymentMethod === 'paystack' && (
            <button
              onClick={initializePaystack}
              disabled={isProcessing}
              className={`w-full py-4 px-6 rounded-xl font-medium transition-all ${
                isProcessing
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl'
              } text-white`}
            >
              {isProcessing ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Processing...</span>
                </div>
              ) : (
                `Pay ₦${currentService.price.toLocaleString()}`
              )}
            </button>
          )}

          {/* Security Notice */}
          <div className="bg-green-50 rounded-xl p-4">
            <div className="flex items-start space-x-3">
              <Shield className="w-5 h-5 text-green-500 mt-0.5" />
              <div>
                <h4 className="font-medium text-green-900 mb-1">Secure Payment</h4>
                <p className="text-sm text-green-700">
                  Your payment is protected by industry-standard encryption and security measures.
                  All transactions are processed securely through trusted payment providers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
