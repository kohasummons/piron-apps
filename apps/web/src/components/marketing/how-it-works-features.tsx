"use client";

import React from "react";
import { motion } from "framer-motion";

export function HowItWorksFeatures() {
  const features = [
    {
      title: "Structured Finance Layer",
      description:
        "Offchain custodians source,  manage real-world assets and issue onchain receipts, with smart contracts enforcing rules and accounting.",
      tags: ["SPV", "Receivables", "T-bills"],
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
    },
    {
      title: "Compliance first",
      description:
        "KYC/AML-ready flows, jurisdiction-aware access, and institution-only routes via custodial partners.",
      tags: ["KYC", "AML", "Custody"],
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
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      title: "Transparent accounting",
      description:
        "Onchain NAV updates and attestations map 1:1 to offchain statements, viewable in pool detail pages.",
      tags: ["NAV", "Attest", "Proofs"],
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
    {
      title: "Interoperable",
      description:
        "Deploy across multiple chains with bridge support. Access pools on any chain via unified liquidity.",
      tags: ["Multi-chain", "Bridge", "Liquidity"],
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
            d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
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
      className="py-8 px-8 max-w-7xl mx-auto bg-[#030a07] backdrop-blur-md border border-white/10 rounded-3xl"
    >
      <div className="my-12">
        <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
          What powers Piron
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="bg-[#070707] border border-white/10 rounded-2xl p-8 space-y-6 hover:border-white/20 transition-colors"
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-[#00c48c]/20 rounded-xl flex items-center justify-center text-[#00c48c]">
                  {feature.icon}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
