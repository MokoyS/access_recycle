import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, Home } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
      <Helmet>
        <title>Page Not Found | Access Recycle</title>
      </Helmet>
      <div className="text-center">
        <div className="inline-flex items-center justify-center p-4 bg-red-100 rounded-full mb-6">
            <AlertTriangle className="w-12 h-12 text-red-500" />
        </div>
        <h1 className="text-6xl font-bold text-slate-900 mb-4">404</h1>
        <h2 className="text-2xl font-bold text-slate-700 mb-6">Page Not Found</h2>
        <p className="text-slate-500 mb-8 max-w-md mx-auto">
          Oops! The page you are looking for seems to have been recycled or doesn't exist anymore.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 px-8 py-3 bg-brand hover:bg-brand-dark text-white font-bold rounded-full transition-colors"
        >
          <Home className="w-5 h-5" /> Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;