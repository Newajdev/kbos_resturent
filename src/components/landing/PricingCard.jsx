import React from 'react';
import { Check } from 'lucide-react';
import { cn } from '@/app/lib/utils';

export default function PricingCard({ title, price, features, period, isPopular }) {
  return (
    <div 
      className={cn(
        "bg-white rounded-2xl p-8 flex flex-col h-full transition-all duration-300",
        isPopular ? "shadow-2xl scale-105 z-10 border-2 border-transparent" : "shadow-sm border border-gray-100 hover:shadow-md"
      )}
    >
      <div className="mb-6">
        <h3 className="text-xl font-medium text-gray-800 mb-4">{title}</h3>
        <div className="flex items-baseline gap-1">
            <span className="text-5xl font-bold text-[#080A47]">${price}</span>
            <span className="text-sm font-bold text-[#080A47]">/{period}</span>
        </div>
      </div>

      <div className="flex-grow mb-8">
        <ul className="space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3 text-sm font-medium text-gray-700">
              <Check className="w-5 h-5 text-purple-600 shrink-0" strokeWidth={2.5} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <button 
        className={cn(
          "w-full py-3 rounded-lg font-semibold transition-colors mt-auto",
          "border border-[#A5B4FC] text-[#1E1B4B] hover:bg-blue-50"
        )}
      >
        Upgrade Plan
      </button>
    </div>
  );
}
