"use client";
import React, { useState } from 'react';
import LandingContainer from './LandingContainer';
import PricingCard from './PricingCard';
import { cn } from '@/app/lib/utils';

const pricingData = {
  monthly: [
    {
      title: "Starter",
      price: 15,
      features: ["1 Restaurant", "1 Branch", "Basic Inventory", "Manual Stock Entry", "Sales Entry", "Daily Report (basic)"],
      isPopular: false
    },
    {
      title: "Grow",
      price: 30,
      features: ["1 Business", "Up to 3 Branch", "Inventory + Waste tracking", "AI demand prediction", "AI daily insight", "Alert (low,stock,delay)", "Offline mode (limited sync"],
      isPopular: true
    },
    {
      title: "Business",
      price: 60,
      features: ["Unlimited Branch", "Inventory Intelligence", "Image upload support", "AI prep & waste optimization", "Full Offline mode", "Local server sync", "Priority support", "Alert (low,stock,delay)"],
      isPopular: false
    }
  ],
  annually: [
    {
      title: "Starter",
      price: 25, // Based on image
      features: ["1 Restaurant", "1 Branch", "Basic Inventory", "Manual Stock Entry", "Sales Entry", "Daily Report (basic)"],
      isPopular: false
    },
    {
      title: "Grow",
      price: 45, // Based on image
      features: ["1 Business", "Up to 3 Branch", "Inventory + Waste tracking", "AI demand prediction", "AI daily insight", "Alert (low,stock,delay)", "Offline mode (limited sync"],
      isPopular: true
    },
    {
      title: "Business",
      price: 89, // Based on image
      features: ["Unlimited Branch", "Inventory Intelligence", "Image upload support", "AI prep & waste optimization", "Full Offline mode", "Local server sync", "Priority support", "Alert (low,stock,delay)"],
      isPopular: false
    }
  ]
};

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = isAnnual ? pricingData.annually : pricingData.monthly;
  const period = isAnnual ? "Year" : "Month";

  return (
    <section className="py-20 md:py-32 bg-[#FFF5F7]"> 
      {/* Background is an approximation of the soft pink in the image */}
      <LandingContainer>
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Pricing Plans
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Pick an account plan that fits your workflow
          </p>

          {/* Toggle */}
          <div className="flex items-center gap-4 text-base font-bold text-gray-900">
            <span className={cn(!isAnnual && "opacity-100", isAnnual && "opacity-60")}>Monthly</span>
            <button 
              onClick={() => setIsAnnual(!isAnnual)}
              className="w-14 h-7 bg-[#0F172A] rounded-full p-1 transition-colors relative"
              aria-label="Toggle pricing period"
            >
               <div 
                className={cn(
                    "w-5 h-5 bg-[#60A5FA] rounded-full shadow-sm transition-transform duration-200",
                    isAnnual ? "translate-x-7" : "translate-x-0"
                )}
               />
            </button>
            <span className={cn(isAnnual && "opacity-100", !isAnnual && "opacity-60")}>Annually</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start max-w-6xl mx-auto px-4">
          {plans.map((plan, index) => (
            <PricingCard 
              key={index} 
              {...plan} 
              period={period}
            />
          ))}
        </div>
      </LandingContainer>
    </section>
  );
}
