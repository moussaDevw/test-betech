"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";

export default function RevenueCharts() {
  const [percentage, setPercentage] = useState(50);

  const getActiveDots = (totalDots: number) => {
    return Math.round((percentage / 100) * totalDots);
  };

  return (
    <div className="grid gap-8 p-6">
      <div className="flex items-center gap-4 w-full max-w-xs">
        <Input
          type="number"
          min="0"
          max="100"
          value={percentage}
          onChange={(e) => setPercentage(Number(e.target.value))}
          className="bg-[#1C3851] text-white border-none"
        />
        <span className="text-white">%</span>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        
        <div className="w-full max-w-[344px] h-[250px] px-0 rounded-3xl bg-[#001933] overflow-hidden relative">
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#001933] to-transparent z-10" />
          <div className="relative h-[220px] p-6 rounded-3xl bg-[#001933]">
            <div className="flex items-center gap-2 mb-8">
              <h2 className="text-white opacity-70 text-[16px] font-medium">
                Revenue
              </h2>
              <span className="w-[50px] text-center py-1 text-sm font-medium bg-[#1C3851] text-[#31DECF] text-[11px] rounded-full">
                +{percentage}%
              </span>
            </div>

            <div className="relative flex items-center justify-center h-[120px]">
              
              <div className="absolute w-full h-full flex items-center justify-center mt-32">
                {Array.from({ length: 24 }).map((_, i) => (
                  <div
                    key={`outer-${i}`}
                    className={`absolute w-[18px] h-[18px] rounded-full transition-colors duration-500
                      ${
                        i < getActiveDots(24)
                          ? "bg-[#60A5FA] shadow-[0_0_25px_rgba(96,165,250,0.9),0_0_40px_rgba(96,165,250,0.6),inset_0_0_10px_rgba(255,255,255,0.7)]"
                          : "bg-[#2AA19C] shadow-[0_0_25px_rgba(42,161,156,0.9),0_0_40px_rgba(42,161,156,0.6),inset_0_0_10px_rgba(255,255,255,0.7)]"
                      }`}
                    style={{
                      transform: `rotate(${
                        i * 12 + 226
                      }deg) translateY(-120px) rotate(-${i * 12 + 226}deg)`,
                    }}
                  />
                ))}
              </div>

              <div className="text-center z-10 mt-16">
                <p className="text-[#FFFFFF] text-lg mb-1 opacity-70">Total</p>
                <p className="text-[32px] font-bold text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                  66.79$
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
