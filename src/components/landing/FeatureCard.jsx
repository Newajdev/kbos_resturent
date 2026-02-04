import React from 'react';

const FeatureCard = ({ title, description, icon: Icon, iconBgColor, iconColor = "white" }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-start h-full">
      <div 
        className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${iconBgColor}`}
      >
        <Icon className="w-6 h-6" color={iconColor} />
      </div>
      <h3 className="text-xl font-bold text-[#080A47] mb-2">
        {title}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
