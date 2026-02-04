import React from 'react';
import LandingContainer from './LandingContainer';
import Image from 'next/image';
import { Sparkle } from 'lucide-react';

const BulletPoint = ({ text, colorClass }) => (
  <div className="flex items-start gap-3 mb-3">
    <Sparkle className={`w-5 h-5 mt-0.5 shrink-0 ${colorClass}`} fill="currentColor" />
    <span className="text-gray-700 font-medium">{text}</span>
  </div>
);

export default function PosGrowSection() {
  return (
    <section className="py-16 md:py-24 overflow-hidden bg-[#FEFBF9]">
      <LandingContainer>
        {/* POS System Block */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-24 lg:mb-32">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <h2 className="text-3xl md:text-5xl font-bold text-[#080A47] mb-6 leading-tight">
              POS system helps to improve your business easily & quickly without any hassle
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              KB-OS POS system helps you improve your operations for your customers. This includes reducing waiting time, faster scanning of items, quicker payments and many options for your business.
            </p>
            
            <div className="space-y-2">
              <BulletPoint 
                text="Save time and money with your all-in-one POS system" 
                colorClass="text-[#2ED3B7]" 
              />
              <BulletPoint 
                text="Better online purchasing & supplier order management" 
                colorClass="text-[#2ED3B7]" 
              />
              <BulletPoint 
                text="Create reports automatically and multi-store functions" 
                colorClass="text-[#2ED3B7]" 
              />
            </div>
          </div>

          {/* Image Content */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2 relative">
             {/* Pink Blob Background */}
             <div className="absolute -top-10 -right-10 w-96 h-96 bg-pink-100 rounded-full blur-3xl -z-10 opacity-70"></div>
             
             <div className="relative z-10">
                <Image 
                  src="/pos.png" 
                  alt="POS System Dashboard" 
                  width={600} 
                  height={450}
                  className="w-full h-auto drop-shadow-xl"
                />
             </div>
          </div>
        </div>


        {/* Grow Business Block */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Image Content */}
          <div className="w-full lg:w-1/2 relative">
             {/* Blue Blob Background */}
             <div className="absolute top-10 -left-10 w-96 h-96 bg-blue-100 rounded-full blur-3xl -z-10 opacity-70"></div>

             <div className="relative z-10">
                <Image 
                  src="/grow.png" 
                  alt="Growth and Multi-store Management" 
                  width={600} 
                  height={450}
                  className="w-full h-auto drop-shadow-xl"
                />
             </div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold text-[#080A47] mb-6 leading-tight">
              Grow your business from one to a hundred stores through multi-store management
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              With multi-store management you can easily grow your business. Easily keep track of all transactions & keep inventory management with POS. Save all your data sources together securely.
            </p>
            
            <div className="space-y-2">
              <BulletPoint 
                text="Use the same rewarding system across all chain stores" 
                colorClass="text-[#F472B6]" 
              />
              <BulletPoint 
                text="Check the employee performance & reward accordingly" 
                colorClass="text-[#F472B6]" 
              />
              <BulletPoint 
                text="See purchase history of customers to know them better" 
                colorClass="text-[#F472B6]" 
              />
            </div>
          </div>
        </div>

      </LandingContainer>
    </section>
  );
}
