"use client";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import PremaryBTN from "./PremaryBTN";

export default function Navbar() {
  const [viewMenu, setViewMenu] = useState(false);

  const Nablinks = [
    { name: "Home", href: "#pricing" },
    { name: "Featured", href: "#contact" },
    { name: "Pricing", href: "#contact" },
    { name: "About us", href: "#contact" },
  ];
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-x-2">
        <div className="w-6 md:w-12 h-6 md:h-12 relative">

        <Image src={"/logo.png"} alt="KB-OS Logo" width={100} height={100} />
        </div>
        <h2 className="font-bold text-2xl">KB-OS</h2>
      </div>

      {/* Mobile */}
      <div className="md:hidden">
        <button onClick={() => setViewMenu(!viewMenu)} className="transition">
          {viewMenu ? <X /> : <Menu />}
        </button>
        {viewMenu && (
          <div className="absolute top-12 right-4 bg-white shadow-lg rounded-md p-4 flex flex-col gap-y-4">
            {Nablinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-blue-500 transition"
                onClick={() => setViewMenu(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>

      <div className="hidden md:flex items-center gap-x-8">
        {Nablinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="hover:text-blue-500 transition"
          >
            {link.name}
          </Link>
        ))}
      </div>
      <div className="hidden md:block">
        <PremaryBTN title="Login for business" />
      </div>    
    </div>
  );
}
