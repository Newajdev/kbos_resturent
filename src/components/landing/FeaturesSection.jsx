import React from 'react';
import LandingContainer from './LandingContainer';
import FeatureCard from './FeatureCard';
import { Brain, TrendingUp, WifiOff, Store, Smartphone, ShieldCheck } from 'lucide-react';

const features = [
  {
    title: "AI That Learns Your Kitchen",
    description: "Smart predictions based on your actual usage patterns, not generic data.",
    icon: Brain,
    iconBgColor: "bg-[#F04438]", // Reddish/Pink
    iconColor: "white"
  },
  {
    title: "Predict Demand Accurately",
    description: "Know what you'll need before you run out. Reduce waste, increase profit.",
    icon: TrendingUp,
    iconBgColor: "bg-[#007AFF]", // Blue
    iconColor: "white"
  },
  {
    title: "Works 100% Offline",
    description: "No internet? No problem. Your operations never stop.",
    icon: WifiOff,
    iconBgColor: "bg-[#10B981]", // Green
    iconColor: "white"
  },
  {
    title: "Multi-Branch Control",
    description: "Manage all locations from one dashboard. Real-time sync when online.",
    icon: Store,
    iconBgColor: "bg-[#F97316]", // Orange
    iconColor: "white"
  },
  {
    title: "Mobile-First Design",
    description: "Built for phones. Your staff can use it without training.",
    icon: Smartphone,
    iconBgColor: "bg-[#8B5CF6]", // Purple
    iconColor: "white"
  },
  {
    title: "Your Data, Your Control",
    description: "Private AI. No sharing with cloud services. Enterprise-grade security.",
    icon: ShieldCheck,
    iconBgColor: "bg-[#374151]", // Dark Gray/Black
    iconColor: "white"
  }
];

export default function FeaturesSection() {
  return (
    <section className="lg:py-24 bg-linear-to-b from-purple-50 to-pink-50">
      <LandingContainer>
        <div className="flex flex-col items-center justify-center text-center">
          <div className="bg-blue-100 text-blue-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 inline-block">
            Features
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#080A47] mb-4">
            Powerful Features, Simple to Use
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl">
            Built for real restaurants, designed to make your life easier.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              {...feature}
            />
          ))}
        </div>
      </LandingContainer>
    </section>
  );
}
