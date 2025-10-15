"use client";

import React from "react";
import { motion } from "framer-motion";

export function HowItWorksFlow() {
  const steps = [
    {
      number: "1",
      title: "Choose a pool",
      description:
        "Select a Flexible Stable Yield Pool for daily liquidity or a Single-Asset Pool for specific exposure.",
      tags: ["StableYield", "SingleAsset"],
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
      number: "2",
      title: "Connect wallet",
      description:
        "Authenticate with your preferred wallet. No funds move until you confirm a transaction.",
      tags: ["MetaMask", "WalletConnect", "Ledger"],
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
      number: "3",
      title: "Deposit stablecoins",
      description:
        "Send CNGN/USDC/USDT to the pool smart contract. You'll receive Pool Tokens representing your claim.",
      tags: ["CNGN", "USDC", "USDT"],
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
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      ),
    },
    {
      number: "4",
      title: "Earn yield",
      description:
        "Pool assets are allocated into short-term, high-grade RWAs (e.g., T-bills, Bonds, commercial papers). Yield is streamed back onchain.",
      tags: ["Onchain receipts", "Transparency"],
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
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="py-20 px-8 max-w-7xl mx-auto mt-28"
    >
      <div className=" mb-16">
        <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
          The Flow
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {steps.map((step) => (
          <div
            key={step.number}
            className="bg-[#070707] border border-white/10 rounded-2xl p-8 space-y-6 hover:border-white/20 transition-colors"
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-[#00c48c]/20 rounded-xl flex items-center justify-center">
                  <div className="w-8 h-8 bg-[#00c48c] rounded-lg flex items-center justify-center text-black font-bold text-sm">
                    {step.number}
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {step.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-white/5 text-gray-400 rounded-full text-sm border border-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
