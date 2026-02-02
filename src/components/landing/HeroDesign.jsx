import React from "react";
import PremaryBTN from "./PremaryBTN";
import { Play } from "lucide-react";

export default function HeroDesign() {
  return (
    <div className="mt-6">
      <h1 className="font-semibold text-2xl text-center text-[#080A47]">
        Point of sale & inventory management software
      </h1>
      <p className="text-sm text-center text-[#080A47] px-6 my-2">
        Turn your smartphone or tablet into a powerful POS. Manage sales,
        inventory with ease; engage customers & increase your revenue.
      </p>

      <div className="flex justify-center mt-4 gap-x-2">
        <PremaryBTN style={"rounded-full"} title="Get Started" icon={true} />

        <div className="flex items-center gap-x-2 ">
          <button className="bg-[#3A30BA] p-3 rounded-full text-white">
            <Play fill="white" size={14} />
          </button>
          <button className="rounded-md text-sm text-[#3A30BA] transition">
            Watch Demo
          </button>
        </div>
      </div>
    </div>
  );
}
