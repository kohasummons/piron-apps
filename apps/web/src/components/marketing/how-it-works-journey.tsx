"use client";

import React from "react";
import { motion } from "framer-motion";

export function HowItWorksJourney() {
  const journeySteps = [
    {
      title: "Explore pools",
      description:
        "Compare live APY, liquidity profile, and assets. Click into a pool for in-depth metrics.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      ),
    },
    {
      title: "Connect & deposit",
      description:
        "Use the Connect Wallet button, pick your wallet, confirm the deposit, and receive Pool Tokens.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
    {
      title: "Monitor & manage",
      description:
        "Use dashboards for allocations, returns, and statements. Withdraw any time per pool rules.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
    },
    {
      title: "Exit",
      description:
        "Redeem your Pool Tokens for stablecoins. Funds settle onchain in your wallet.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
          />
        </svg>
      ),
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="py-20 px-8 max-w-7xl mx-auto "
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
          Your journey, step-by-step
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {journeySteps.map((step, index) => (
          <div
            key={step.title}
            className="bg-[#070707] border border-white/10 rounded-2xl p-6 space-y-4 hover:border-white/20 transition-colors"
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-[#00c48c]/20 rounded-lg flex items-center justify-center text-[#00c48c]">
                {step.icon}
              </div>
              <h3 className="text-lg font-semibold text-white">{step.title}</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
