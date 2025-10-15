"use client";

import React from "react";
import { motion } from "framer-motion";

export function HowItWorksRetailInstitutional() {
  const sections = [
    {
      title: "Retail",
      description:
        "Simple deposits and withdrawals, clear fees, and transparent performance. No repetitive KYC for small tickets.",
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
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
      steps: [
        "Connect wallet and select a pool",
        "Deposit USDC/USDT",
        "Track and withdraw on demand",
      ],
    },
    {
      title: "Institutional",
      description:
        "Higher limits, whitelisting, and custody integrations (e.g., Fireblocks) with role-based controls.",
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
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
      steps: [
        "Request access and complete KYC",
        "Connect via custodian or smart contract",
        "Operate via desk or API",
      ],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="py-20 px-8 max-w-7xl mx-auto"
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
          Retail vs Institutional
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {sections.map((section) => (
          <div
            key={section.title}
            className="bg-[#000] border border-white/10 rounded-2xl p-8 space-y-6 hover:border-white/20 transition-colors"
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-[#00c48c]/20 rounded-xl flex items-center justify-center text-[#00c48c]">
                {section.icon}
              </div>
              <h3 className="text-xl font-semibold text-white">
                {section.title}
              </h3>
            </div>

            <p className="text-gray-400 leading-relaxed">
              {section.description}
            </p>

            {section.steps && (
              <ul className="space-y-3">
                {section.steps.map((step, stepIndex) => (
                  <li key={stepIndex} className="flex items-start space-x-3">
                    <span className="text-[#00c48c] font-bold text-sm mt-0.5">
                      {stepIndex + 1}
                    </span>
                    <span className="text-gray-400 text-sm">{step}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
