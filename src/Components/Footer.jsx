import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white mb-4">CR Wala</h3>
            <p className="text-sm">
              Your trusted partner in PR marketing, helping founders, individuals, and actors build their public presence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Our Services</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">PR Packages</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Book Appointment</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Success Stories</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Blog</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">Media Relations</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Brand Building</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Crisis Management</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Digital PR</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Influencer Marketing</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Event PR</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="mt-1" />
                <p className="text-sm">
                  123 Business Avenue,<br />
                  Mumbai, Maharashtra 400001
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} />
                <p>+91 98765 43210</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} />
                <a href="mailto:contact@crwala.com" className="hover:text-white transition-colors">
                  contact@crwala.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6">
          <div className="md:flex md:items-center md:justify-between">
            <p className="text-sm text-center md:text-left">
              © {currentYear} CR Wala. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex justify-center md:justify-end space-x-6">
              <a href="#" className="text-sm hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;