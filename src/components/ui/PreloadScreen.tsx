"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

function easeOutExpo(t: number) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

export default function PreloadScreen() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [fastMode, setFastMode] = useState(false);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const seen = sessionStorage.getItem("vladdos_preload_seen") === "1";
    setFastMode(seen);
    sessionStorage.setItem("vladdos_preload_seen", "1");

    const totalDuration = seen ? 1550 : 3200;
    const finishDelay = seen ? 180 : 320;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const raw = Math.min(elapsed / totalDuration, 1);
      const eased = easeOutExpo(raw);

      let value = Math.round(eased * 100);

      if (raw < 0.82) value = Math.min(value, 97);
      if (raw < 0.93) value = Math.min(value, 99);

      setProgress(value);

      if (raw < 1) {
        frameRef.current = requestAnimationFrame(tick);
      } else {
        setProgress(100);
        window.setTimeout(() => {
          setVisible(false);
        }, finishDelay);
      }
    };

    frameRef.current = requestAnimationFrame(tick);

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.div
          key="preload"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: fastMode ? 0.72 : 0.95,
              ease: [0.22, 1, 0.36, 1],
            },
          }}
          className="fixed inset-0 z-[300] overflow-hidden bg-[#030303]"
        >
          {/* Fullscreen cinematic fill */}
          <motion.div
            initial={{ scale: 1.08, opacity: 0.2, filter: "blur(24px)" }}
            animate={{ scale: 1.02, opacity: 0.72, filter: "blur(14px)" }}
            transition={{
              duration: fastMode ? 0.9 : 1.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute inset-0"
          >
            <Image
              src="/bg.png"
              alt="VlaDDoS preload backdrop"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </motion.div>

          {/* Dark cinematic overlays */}
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.72)_0%,rgba(0,0,0,0.24)_30%,rgba(0,0,0,0.76)_100%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.04)_0%,rgba(0,0,0,0.28)_48%,rgba(0,0,0,0.9)_100%)]" />

          {/* Red atmosphere */}
          <motion.div
            initial={{ opacity: 0.08, scale: 0.94 }}
            animate={{
              opacity: [0.08, 0.18, 0.11],
              scale: [0.94, 1.03, 1],
            }}
            transition={{
              duration: fastMode ? 1.1 : 2.2,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_44%,rgba(222,18,2,0.22),transparent_26%,transparent_100%)]"
          />

          {/* Full artwork visible */}
          <div className="absolute inset-0 flex items-center justify-center px-3 py-4 sm:px-6 sm:py-6">
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: fastMode ? 0.85 : 1.45,
                delay: fastMode ? 0.06 : 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative h-full w-full"
            >
              <Image
                src="/bg.png"
                alt="VlaDDoS preload artwork"
                fill
                priority
                sizes="100vw"
                className="object-contain object-center drop-shadow-[0_30px_80px_rgba(0,0,0,0.5)]"
              />
            </motion.div>
          </div>

          {/* Sweep */}
          <motion.div
            initial={{ x: "-125%", opacity: 0 }}
            animate={{ x: "125%", opacity: [0, 0.28, 0] }}
            transition={{
              duration: fastMode ? 1.05 : 1.9,
              delay: fastMode ? 0.05 : 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="pointer-events-none absolute inset-y-0 w-[24vw] min-w-[170px] bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.05)_44%,rgba(255,255,255,0.16)_50%,rgba(255,255,255,0.05)_56%,transparent_100%)] blur-2xl"
          />

          {/* Bottom loading interface */}
          <div className="absolute inset-x-0 bottom-0 z-[2] px-4 pb-6 sm:px-6 sm:pb-8">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: fastMode ? 0.75 : 1.2,
                delay: fastMode ? 0.08 : 0.18,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mx-auto w-full max-w-[760px] rounded-[1.4rem] border border-white/10 bg-[rgba(7,7,10,0.5)] px-4 py-4 shadow-[0_24px_80px_rgba(0,0,0,0.38)] backdrop-blur-2xl sm:rounded-[1.7rem] sm:px-5 sm:py-5"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="text-[10px] uppercase tracking-[0.24em] text-white/48 sm:text-[11px]">
                  VlaDDoS PAN / loading access surface
                </div>

                <div className="text-sm font-medium tabular-nums text-white/84 sm:text-base">
                  {progress}%
                </div>
              </div>

              <div className="mt-4 h-[8px] overflow-hidden rounded-full bg-white/10">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{
                    duration: 0.22,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="h-full rounded-full bg-[linear-gradient(90deg,rgba(120,10,6,0.92)_0%,rgba(222,18,2,1)_52%,rgba(255,124,80,0.96)_100%)] shadow-[0_0_24px_rgba(222,18,2,0.42)]"
                />
              </div>

              <div className="mt-3 text-sm text-white/58 sm:text-[15px]">
                Preparing private affiliate surface.
              </div>
            </motion.div>
          </div>

          {/* Grain */}
          <motion.div
            initial={{ opacity: 0.03 }}
            animate={{ opacity: [0.03, 0.06, 0.04] }}
            transition={{
              duration: fastMode ? 1.1 : 1.8,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute inset-[-20%] bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22160%22 height=%22160%22 viewBox=%220 0 160 160%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.84%22 numOctaves=%222%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22160%22 height=%22160%22 filter=%22url(%23n)%22 opacity=%220.16%22/%3E%3C/svg%3E')] mix-blend-soft-light"
          />

          {/* Exit veil */}
          <motion.div
            initial={{ opacity: 0.2 }}
            animate={{ opacity: 0 }}
            transition={{
              duration: fastMode ? 0.65 : 1.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="pointer-events-none absolute inset-0 bg-black"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
