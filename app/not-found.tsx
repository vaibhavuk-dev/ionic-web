"use client" 
import React from 'react';
import { Home, ArrowLeft } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="min-h-[80vh] bg-gradient-to-br from-blueb-50 to-blueb-200 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center space-y-8">
        {/* Animated 404 Text */}
        <div className="relative">
          <h1 className="text-9xl font-bold text-blueb-900 opacity-5">404</h1>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
            <h2 className="text-3xl md:text-4xl font-bold text-blueb-900">
              Page Not Found
            </h2>
          </div>
        </div>

        {/* Message */}
        <div className="space-y-4 px-4">
          <p className="text-lg text-gray-600">
            Oops! It seems like the page you're looking for has taken an unexpected journey into the digital void.
          </p>
          <p className="text-gray-500">
            Don't worry, even the best ionic solutions have their quirks sometimes.
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
          <button 
            onClick={() => window.history.back()} 
            className="flex items-center px-6 py-3 bg-white text-blueb-600 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 space-x-2"
          >
            <ArrowLeft size={20} />
            <span>Go Back</span>
          </button>

          <button 
            onClick={() => window.location.href = '/'} 
            className="flex items-center px-6 py-3 bg-blueb-600 text-white rounded-lg shadow-md hover:shadow-lg hover:bg-blueb-700 transition-all duration-300 space-x-2"
          >
            <Home size={20} />
            <span>Back to Home</span>
          </button>
        </div>

        {/* Footer */}
        <div className="mt-12 text-gray-500 w-full">
          <p className='text-center'>Need help? <a href="/contact" className="text-blueb-600 hover:underline">Contact Support</a></p>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;