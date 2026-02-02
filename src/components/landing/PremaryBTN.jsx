import { cn } from "@/app/lib/utils";
import { MoveRight } from "lucide-react";
import React from "react";

export default function PremaryBTN({ title, style, icon }) {
  return (
    <button
      className={cn(
        "bg-linear-to-r from-[#155DFC] to-[#8200DB] text-white px-6 py-2 rounded-md font-bold text-sm",
        icon && "flex items-center gap-x-2 hover:gap-x-3 transition-all",
        style,
      )}
    >
      {title}
      {icon && <MoveRight className="w-4 h-4" />}
    </button>
  );
}
