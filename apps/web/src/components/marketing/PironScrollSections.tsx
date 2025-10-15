"use client";

import React, { useEffect, useRef, useState } from "react";
import { PoolsIcon } from "../icons/PoolsIcon";
import { ManagedIcon } from "../icons/ManagedIcon";
import { LendingIcon } from "../icons/LendingIcon";

type SectionKey = "pools" | "managed" | "lending";

const SECTIONS: { key: SectionKey; title: string; subtitle?: string }[] = [
  { key: "pools", title: "POOLS", subtitle: "LIVE NOW" },
  { key: "managed", title: "MANAGED POOLS", subtitle: "LOCKED" },
  { key: "lending", title: "LENDING", subtitle: "BORROW" },
];

const COPY: Record<SectionKey, { tagline: string; bullets: string[] }> = {
  pools: {
    tagline: "Flexible Onchain Liquidity",
    bullets: [
      "Earn yield without borders\nPiron Pools make it easy to participate in tokenized yield opportunities around the world. No gated access or manual steps — just connect your wallet and start earning.",
      "Move funds when you need to\nYour deposits stay liquid. You can add, withdraw, or re-allocate at any time, with every action tracked onchain for full transparency.",
      "See how your yield works\nEvery pool shows live performance, asset exposure, and historical returns. You always know what's driving your earnings.",
    ],
  },
  managed: {
    tagline: "Structured Yield Products",
    bullets: [
      "Designed for consistency\nManaged Pools are curated by professional partners who deploy capital into fixed-income and credit-based strategies.",
      "Lock in and earn more\nCommit your funds for 30 or 90 days and earn higher returns than flexible pools — perfect if you prefer predictable yield.",
      "Hands-off payouts\nRewards are distributed automatically to your wallet. No claiming, no compounding — Piron handles it behind the scenes.",
    ],
  },
  lending: {
    tagline: "Borrow Against Real Yield",
    bullets: [
      "Liquidity without selling\nUse your active pool positions as collateral to borrow instantly, keeping your yield position intact.",
      "Transparent and fair\nBorrowing terms, rates, and collateral ratios are fully visible and enforced by Piron's smart contracts.",
      "Built-in safety net\nGet real-time margin alerts and automated repayment options that protect your positions from liquidation.",
    ],
  },
};

export default function PironScrollSections() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const sectionRefs = useRef<Record<SectionKey, HTMLElement | null>>({
    pools: null,
    managed: null,
    lending: null,
  });
  const [active, setActive] = useState<SectionKey>("pools");
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            const key = entry.target.getAttribute("data-key") as SectionKey;
            if (key) setActive(key);
          }
        });
      },
      { threshold: [0.5], rootMargin: "-20% 0px" }
    );

    const containerObserver = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setShowNav(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    Object.values(sectionRefs.current).forEach((el) => {
      if (el) sectionObserver.observe(el);
    });

    if (containerRef.current) {
      containerObserver.observe(containerRef.current);
    }

    return () => {
      sectionObserver.disconnect();
      containerObserver.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} className="relative bg-black text-white py-20">
      <aside
        className={`fixed left-0 top-0 bottom-0 w-20 flex flex-col items-center justify-center z-50 transition-opacity duration-300 ${
          showNav ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="space-y-8">
          {SECTIONS.map((s) => (
            <div key={s.key} className="flex flex-col items-center">
              <button
                onClick={() =>
                  sectionRefs.current[s.key]?.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  })
                }
                className="focus:outline-none"
                style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
              >
                <span
                  className={`text-xs tracking-widest transition-colors ${
                    active === s.key ? "text-white" : "text-gray-500"
                  }`}
                >
                  {s.title}
                </span>
              </button>
              <div className="mt-2 h-3 w-1">
                <div
                  className={`mx-auto w-1 h-1 rounded-sm transition-all ${
                    active === s.key
                      ? "bg-white scale-100"
                      : "bg-gray-700 scale-75"
                  }`}
                />
              </div>
            </div>
          ))}
        </nav>
      </aside>

      <div className="space-y-32">
        {SECTIONS.map((s) => (
          <section
            key={s.key}
            ref={(el) => {
              sectionRefs.current[s.key] = el;
            }}
            data-key={s.key}
            className="min-h-screen flex items-center"
          >
            <SectionContent
              sectionKey={s.key}
              subtitle={s.subtitle}
              isActive={active === s.key}
              RightGraphic={
                s.key === "pools" ? (
                  <PoolsIcon />
                ) : s.key === "managed" ? (
                  <ManagedIcon />
                ) : (
                  <LendingIcon />
                )
              }
            />
          </section>
        ))}
      </div>
    </div>
  );
}

function SectionContent({
  sectionKey,
  subtitle,
  isActive,
  RightGraphic,
}: {
  sectionKey: SectionKey;
  subtitle?: string;
  isActive: boolean;
  RightGraphic: React.ReactNode;
}) {
  const copy = COPY[sectionKey];

  return (
    <div className="w-full max-w-7xl mx-auto px-8 flex items-center gap-12">
      <div className="w-1/2">
        <div className="mb-4 inline-flex items-center gap-3">
          <div className="text-sm font-medium px-2 py-1 border border-white/10 rounded-sm text-white/80">
            {sectionKey.toUpperCase()}
          </div>
          {subtitle && <div className="text-sm text-gray-400">{subtitle}</div>}
        </div>

        <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-white">
          {sectionKey === "pools"
            ? "Pools"
            : sectionKey === "managed"
              ? "Managed Pools"
              : "Lending"}
        </h2>

        <div className="space-y-8">
          {copy.bullets.map((text, i) => {
            const [titleLine, bodyLine] = text.split("\n", 2);
            return (
              <div key={i}>
                <div className="text-sm text-gray-400 mb-3">[{i + 1}]</div>
                <p className="text-gray-300 leading-relaxed">
                  <strong className="block text-white/90 mb-2">
                    {titleLine}
                  </strong>
                  <span className="block text-gray-400">{bodyLine}</span>
                </p>
                {i < copy.bullets.length - 1 && (
                  <div className="mt-6 h-px bg-white/6 w-full" />
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="w-1/2 flex justify-center">
        {sectionKey === "pools" ? (
          <PoolCard isActive={isActive} />
        ) : sectionKey === "managed" ? (
          <ManagedCard isActive={isActive} />
        ) : (
          <LendingCard isActive={isActive} />
        )}
      </div>
    </div>
  );
}

function PoolCard({ isActive }: { isActive: boolean }) {
  return (
    <div
      className={`bg-[#070707] border border-white/10 rounded-2xl p-6 w-full max-w-lg transition-all duration-300 ${
        isActive ? "opacity-100" : "opacity-50"
      }`}
    >
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gray-700 flex-shrink-0" />
          <div>
            <h3 className="text-lg font-semibold text-white">
              Piron Flexible Stable Yield Pool
            </h3>
            <p className="text-sm text-gray-400">USDC</p>
          </div>
        </div>
        <span className="text-sm text-[#00c48c]">Open</span>
      </div>

      <div className="grid grid-cols-3 gap-3 mb-6">
        <div className="bg-black/40 border border-white/5 rounded-lg p-4">
          <div className="text-xs text-gray-400 mb-1">Current APY</div>
          <div className="text-2xl font-bold text-white">5.2%</div>
        </div>
        <div className="bg-black/40 border border-white/5 rounded-lg p-4">
          <div className="text-xs text-gray-400 mb-1">TVL</div>
          <div className="text-2xl font-bold text-white">$48.3M</div>
        </div>
        <div className="bg-black/40 border border-white/5 rounded-lg p-4">
          <div className="text-xs text-gray-400 mb-1">Duration</div>
          <div className="text-2xl font-bold text-white">Flexible</div>
        </div>
      </div>

      <div className="flex items-center gap-4 mb-6 text-sm text-gray-400">
        <span>USDC</span>
        <span>SPV-managed</span>
        <span>Attestations</span>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-400">NAV updates daily</span>
        <div className="flex items-center gap-3">
          <button className="px-5 py-2.5 bg-transparent border border-white/10 text-white rounded-lg text-sm font-medium hover:bg-white/5 transition-colors">
            View details
          </button>
          <button className="px-5 py-2.5 bg-[#00c48c] text-black rounded-lg text-sm font-semibold hover:bg-[#00d49a] transition-colors">
            Deposit
          </button>
        </div>
      </div>
    </div>
  );
}

function ManagedCard({ isActive }: { isActive: boolean }) {
  return (
    <div
      className={`bg-[#070707] border border-white/10 rounded-2xl p-6 w-full max-w-lg transition-all duration-300 ${
        isActive ? "opacity-100" : "opacity-50"
      }`}
    >
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gray-700 flex-shrink-0" />
          <div>
            <h3 className="text-lg font-semibold text-white">
              Piron Managed Pool
            </h3>
            <p className="text-sm text-gray-400">
              Short-duration USTs • <span className="px-1">Term exits</span>
            </p>
          </div>
        </div>
        <span className="text-sm text-[#00c48c]">Open</span>
      </div>

      <div className="grid grid-cols-3 gap-3 mb-6">
        <div className="bg-black/40 border border-white/5 rounded-lg p-4">
          <div className="text-xs text-gray-400 mb-1">Projected APY</div>
          <div className="text-2xl font-bold text-white">5.6%</div>
        </div>
        <div className="bg-black/40 border border-white/5 rounded-lg p-4">
          <div className="text-xs text-gray-400 mb-1">TVL</div>
          <div className="text-2xl font-bold text-white">$22.1M</div>
        </div>
        <div className="bg-black/40 border border-white/5 rounded-lg p-4">
          <div className="text-xs text-gray-400 mb-1">Maturity</div>
          <div className="text-2xl font-bold text-white">30-90d</div>
        </div>
      </div>

      <div className="flex items-center gap-4 mb-6 text-sm text-gray-400">
        <span>Ethereum</span>
        <span>KYC route</span>
        <span>Audited</span>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-400">Redemptions at term</span>
        <div className="flex items-center gap-3">
          <button className="px-5 py-2.5 bg-transparent border border-white/10 text-white rounded-lg text-sm font-medium hover:bg-white/5 transition-colors">
            View details
          </button>
          <button className="px-5 py-2.5 bg-[#00c48c] text-black rounded-lg text-sm font-semibold hover:bg-[#00d49a] transition-colors">
            Deposit
          </button>
        </div>
      </div>
    </div>
  );
}

function LendingCard({ isActive }: { isActive: boolean }) {
  return (
    <div
      className={`bg-[#070707] border border-white/10 rounded-2xl p-6 w-full max-w-lg transition-all duration-300 ${
        isActive ? "opacity-100" : "opacity-50"
      }`}
    >
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gray-700 flex-shrink-0" />
          <div>
            <h3 className="text-lg font-semibold text-white">Piron Lending</h3>
            <p className="text-sm text-gray-400">
              Borrow against your pool positions
            </p>
          </div>
        </div>
        <span className="text-sm text-gray-400">Coming Soon</span>
      </div>

      <div className="grid grid-cols-3 gap-3 mb-6">
        <div className="bg-black/40 border border-white/5 rounded-lg p-4">
          <div className="text-xs text-gray-400 mb-1">Borrow Rate</div>
          <div className="text-2xl font-bold text-white">—</div>
        </div>
        <div className="bg-black/40 border border-white/5 rounded-lg p-4">
          <div className="text-xs text-gray-400 mb-1">Available</div>
          <div className="text-2xl font-bold text-white">—</div>
        </div>
        <div className="bg-black/40 border border-white/5 rounded-lg p-4">
          <div className="text-xs text-gray-400 mb-1">LTV</div>
          <div className="text-2xl font-bold text-white">—</div>
        </div>
      </div>

      <div className="flex items-center gap-4 mb-6 text-sm text-gray-400">
        <span>Instant</span>
        <span>Smart contract</span>
        <span>Flexible</span>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-400">Launch Q2 2025</span>
        <div className="flex items-center gap-3">
          <button className="px-5 py-2.5 bg-transparent border border-white/10 text-white rounded-lg text-sm font-medium hover:bg-white/5 transition-colors">
            View details
          </button>
          <button
            className="px-5 py-2.5 bg-gray-600 text-gray-400 rounded-lg text-sm font-semibold cursor-not-allowed"
            disabled
          >
            Coming Soon
          </button>
        </div>
      </div>
    </div>
  );
}
