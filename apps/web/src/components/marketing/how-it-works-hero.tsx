"use client";

import React from "react";

export function HowItWorksHero() {
  return (
    <div className="py-40 pb-16">
      <div className="flex flex-col items-center px-8 max-w-7xl mx-auto">
        <div className="space-y-6 text-center">
          <div className="space-y-6">
            <span className="text-sm  bg-gray-900/65 rounded-xl px-4 py-2 text-gray-500  tracking-wider">
              How Piron Works
            </span>
            <h1 className="text-4xl  lg:text-6xl font-bold text-white leading-tight">
              Earn real-world yield on your stablecoins
            </h1>
          </div>

          <div className="flex justify-center">
            <p className="text-center text-xl text-gray-500 leading-relaxed max-w-3xl">
              Connect your wallet, deposit USDC or USDT, and start earning
              transparent yield from short-term Treasury bills and money market
              instruments. Choose flexible or term pools.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
