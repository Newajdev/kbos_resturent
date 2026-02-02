import React from "react";

export default function PremaryBTN({ title }) {
  return (
    <button className="bg-linear-to-r from-[#155DFC] to-[#8200DB] text-white px-6 py-2 rounded-md font-bold text-sm hover:bg-blue-600 transition">
      {title}
    </button>
  );
}
