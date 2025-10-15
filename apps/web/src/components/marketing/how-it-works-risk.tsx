"use client";

import React from "react";
import { motion } from "framer-motion";

export function HowItWorksRisk() {
  const safeguards = [
    {
      title: "Asset quality",
      description:
        "Short-duration, high-grade instruments with diversification limits and concentration caps.",
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
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 12v-1m-3-6H9m10-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "Controls",
      description:
        "Segregated SPVs, multi-sig operations, and automated policy checks on allocations.",
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
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
    {
      title: "Reporting",
      description:
        "Regular attestations, chain proofs, and downloadable statements in pool pages.",
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
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
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
      className="bg-[#030a07] backdrop-blur-lg border border-[#1f2a2a] rounded-3xl py-20 px-8 max-w-7xl mx-auto"
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
          Risk and safeguards
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {safeguards.map((safeguard) => (
          <div
            key={safeguard.title}
            className="flex flex-col bg-black border border-white/10 rounded-3xl p-6  hover:border-[#1f2a2a] transition-colors"
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-[#00c48c]/10 rounded-xl flex items-center justify-center text-[#00c48c]">
                {safeguard.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {safeguard.title}
              </h3>
            </div>

            <div className="flex-1">
              <p className="text-gray-400 leading-relaxed">
                {safeguard.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#bf6f1a] border border-orange-500/20 rounded-2xl p-6 text-center">
        <p className="text-black font-semibold">
          Yield is variable and not guaranteed. Read the Risk Disclosure before
          investing.
        </p>
      </div>
    </motion.div>
  );
}
