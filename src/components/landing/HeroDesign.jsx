import React from "react";
import PremaryBTN from "./PremaryBTN";
import { Play } from "lucide-react";
import Image from "next/image";

export default function HeroDesign() {
  return (
    <div className="mt-6 lg:mt-20 ">
      <h1 className="font-semibold text-2xl lg:text-6xl lg:w-192.75 lg:mx-auto  text-center text-[#080A47]">
        Point of sale & inventory management software
      </h1>
      <p className="text-sm lg:text-2xl lg:w-4xl lg:mx-auto text-center text-[#080A47] px-8 my-2 lg:my-6">
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

      <div className="mt-4 lg:mt-12 w-full">
        <div className="w-full h-41 lg:w-290 lg:h-130 rounded-t-xl lg:rounded-t-2xl bg-amber-300 mx-auto flex justify-center items-center bg-cover bg-center">

          <div className="w-full h-full bg-[url('/dashboard.png')] bg-cover bg-top rounded-t-xl lg:rounded-t-2xl">
          </div>
        </div>
      </div>
    </div>
  );
}
