import React from 'react';
import LandingContainer from './LandingContainer';
import { Twitter, Facebook, Instagram, Linkedin, Github, MoveRight } from 'lucide-react';
import Image from 'next/image';

export default function FooterSection() {
  return (
    <footer 
      className="relative bg-cover bg-center pt-24 pb-8"
      style={{ backgroundImage: "url('/FooterSection.png')" }}
    >
      <LandingContainer>
        {/* CTA Section */}
        <div className="flex flex-col items-center text-center mb-32 max-w-3xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Ready to Stop Wasting <br className="hidden md:block"/> Food & Money?
          </h2>
          <p className="text-gray-600 text-lg mb-10 max-w-2xl">
            KB-OS provides the best POS services and there are many benefits if you join us. Join 500+ restaurants using AI to run smarter operations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-lg">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-grow px-6 py-3.5 rounded-lg border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500 bg-[#FFF5F7] text-gray-800 placeholder-gray-500"
            />
            <button className="bg-linear-to-r from-[#155DFC] to-[#8200DB] text-white px-8 py-3.5 rounded-lg font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity whitespace-nowrap">
              Get started <MoveRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Footer Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 border-t border-gray-200/50 pt-16 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="font-bold text-xl flex items-center gap-2">
                <span className="bg-white p-1 rounded-sm border border-gray-200 w-8 h-8 flex items-center justify-center text-sm">K</span>
                KB-OS
              </span>
            </div>
            <p className="text-gray-600 text-sm mb-6">
              Kitchen Brain Operating System
            </p>
            <div className="flex gap-4">
               <Twitter className="w-5 h-5 text-gray-600 hover:text-blue-400 cursor-pointer" />
               <Facebook className="w-5 h-5 text-gray-600 hover:text-blue-600 cursor-pointer" />
               <Instagram className="w-5 h-5 text-gray-600 hover:text-pink-600 cursor-pointer" />
               <Linkedin className="w-5 h-5 text-gray-600 hover:text-blue-700 cursor-pointer" />
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-bold text-gray-900 mb-6">Product</h4>
            <ul className="space-y-4 text-sm text-gray-600">
              <li><a href="#" className="hover:text-purple-600">Daily Morning Report</a></li>
              <li><a href="#" className="hover:text-purple-600">Pricing</a></li>
              <li><a href="#" className="hover:text-purple-600">How It Works</a></li>
              <li><a href="#" className="hover:text-purple-600">Offline Architecture</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6">Company</h4>
             <ul className="space-y-4 text-sm text-gray-600">
              <li><a href="#" className="hover:text-purple-600">About Us</a></li>
              <li><a href="#" className="hover:text-purple-600">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6">Legal</h4>
             <ul className="space-y-4 text-sm text-gray-600">
              <li><a href="#" className="hover:text-purple-600">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-purple-600">Terms of Service</a></li>
              <li><a href="#" className="hover:text-purple-600">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200/50 text-sm text-gray-500">
          <p>© Copyright 2022, All Rights Reserved by Mixland</p>
          <div className="flex gap-4 mt-4 md:mt-0">
               <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 cursor-pointer">
                 <Twitter className="w-4 h-4 text-[#3A30BA]" />
               </div>
                <div className="w-8 h-8 rounded-full bg-[#3A30BA] flex items-center justify-center cursor-pointer">
                 <Facebook className="w-4 h-4 text-white" />
               </div>
                <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 cursor-pointer">
                 <Instagram className="w-4 h-4 text-[#3A30BA]" />
               </div>
                <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 cursor-pointer">
                 <Github className="w-4 h-4 text-[#3A30BA]" />
               </div>
          </div>
        </div>
      </LandingContainer>
    </footer>
  );
}
