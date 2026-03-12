"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { heroStats, siteConfig } from "@/data/site";

export default function HeroScene() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-[-10rem] h-[26rem] bg-[radial-gradient(circle_at_top,rgba(222,18,2,0.18),transparent_62%)]" />
      <div className="pointer-events-none absolute left-[-10%] top-[20%] h-52 w-52 rounded-full bg-[radial-gradient(circle_at_center,rgba(222,18,2,0.14),transparent_70%)] blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-[2] max-w-5xl"
      >
        <div className="text-[10px] uppercase tracking-[0.24em] text-white/44 sm:text-[11px] sm:tracking-[0.34em]">
          {siteConfig.tagline}
        </div>

        <h1 className="mt-5 max-w-5xl text-[2.6rem] font-semibold leading-[0.92] text-white sm:text-5xl lg:text-7xl xl:text-[5.4rem]">
          Direct affiliate access
          <br />
          for serious iGaming
          <br />
          and crypto deals.
        </h1>

        <p className="mt-6 max-w-2xl text-sm leading-7 text-white/66 sm:text-base">
          Private-entry network for affiliates, advertisers, and managers who
          want faster qualification, cleaner conversations, and direct Telegram
          routing without marketplace noise.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={`https://t.me/${siteConfig.telegramAccount.replace("@", "")}`}
            target="_blank"
            rel="noreferrer"
            className="button-primary w-full sm:w-auto"
          >
            Open {siteConfig.telegramAccount}
          </a>

          <Link href="/access" className="button-secondary w-full sm:w-auto">
            View Access Desk
          </Link>
        </div>

        <div className="mt-6 flex flex-wrap gap-2 text-[10px] uppercase tracking-[0.14em] text-white/48 sm:text-[11px] sm:tracking-[0.22em]">
          <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2">
            Direct routing
          </span>
          <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2">
            Selective entry
          </span>
          <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2">
            Owner escalation
          </span>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 xl:grid-cols-4">
          {heroStats.map((item, index) => (
            <motion.div
              key={item.label}
              className="panel p-4"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.18 + index * 0.06 }}
            >
              <div className="text-lg font-semibold text-white sm:text-2xl">
                {item.value}
              </div>
              <div className="mt-1 text-[10px] uppercase tracking-[0.14em] text-white/46 sm:text-[11px] sm:tracking-[0.22em]">
                {item.label}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
