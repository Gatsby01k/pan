"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { navItems, siteConfig } from "@/data/site";

export default function TopNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 pt-3 sm:px-6 sm:pt-4 lg:px-8">
        <div className="flex items-center justify-between rounded-[1.35rem] border border-white/10 bg-[rgba(10,10,12,0.56)] px-4 py-3 shadow-[0_18px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:rounded-[1.7rem] sm:px-5 sm:py-3.5">
          <div className="flex min-w-0 items-center gap-4 sm:gap-5 lg:gap-8">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="flex min-w-0 shrink-0 items-center gap-3"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-[1rem] border border-white/10 bg-white/[0.04] sm:h-11 sm:w-11">
                <Image
                  src="/vladdos-crown.png"
                  alt="Vladdos crown"
                  width={42}
                  height={42}
                  className="h-auto w-5 brightness-[1.45] contrast-[1.12] sm:w-5.5"
                  priority
                />
              </div>
            </Link>

            <nav className="hidden items-center gap-6 xl:flex">
              {navItems.map((item) => {
                const active =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname?.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={clsx(
                      "relative text-[11px] uppercase tracking-[0.22em] text-white/54 transition hover:text-white",
                      active && "text-white"
                    )}
                  >
                    <span>{item.label}</span>
                    {active ? (
                      <span className="absolute inset-x-0 -bottom-2 mx-auto h-px w-7 bg-[linear-gradient(90deg,transparent,rgba(222,18,2,0.92),transparent)]" />
                    ) : null}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="hidden items-center gap-3 xl:flex">
            <a
              href={`https://t.me/${siteConfig.telegramAccount.replace("@", "")}`}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5 text-[11px] uppercase tracking-[0.18em] text-white/62 transition hover:border-white/16 hover:bg-white/[0.05] hover:text-white"
            >
              {siteConfig.telegramAccount}
            </a>

            <Link href="/access" className="button-secondary px-5 py-3 text-[11px]">
              Access desk
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="grid h-10 w-10 place-items-center rounded-[0.95rem] border border-white/12 bg-white/[0.04] lg:hidden"
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            <span className="relative block h-4 w-4">
              <span
                className={clsx(
                  "absolute left-0 top-[2px] h-px w-4 bg-white transition duration-200",
                  open && "top-[7px] rotate-45"
                )}
              />
              <span
                className={clsx(
                  "absolute left-0 top-[7px] h-px w-4 bg-white transition duration-200",
                  open && "opacity-0"
                )}
              />
              <span
                className={clsx(
                  "absolute left-0 top-[12px] h-px w-4 bg-white transition duration-200",
                  open && "top-[7px] -rotate-45"
                )}
              />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <div className="mx-4 mt-3 rounded-[1.35rem] border border-white/10 bg-[rgba(8,8,10,0.94)] p-4 shadow-[0_20px_60px_rgba(0,0,0,0.36)] backdrop-blur-2xl sm:mx-6 sm:rounded-[1.6rem] lg:hidden">
          <div className="mb-4 flex items-center justify-between gap-3 border-b border-white/8 pb-4">
            <div className="flex min-w-0 items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-[1rem] border border-white/10 bg-white/[0.04]">
                <Image
                  src="/vladdos-crown.png"
                  alt="Vladdos crown"
                  width={36}
                  height={36}
                  className="h-auto w-5 brightness-[1.45] contrast-[1.12]"
                />
              </div>

              <div className="min-w-0">
                <div className="truncate text-[10px] uppercase tracking-[0.18em] text-white/40">
                  Private Affiliate Network
                </div>
                <div className="truncate text-sm font-medium text-white/86">
                  VlaDDoS PAN
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setOpen(false)}
              className="grid h-9 w-9 place-items-center rounded-[0.95rem] border border-white/10 bg-white/[0.04] text-white/72"
              aria-label="Close navigation"
            >
              ×
            </button>
          </div>

          <div className="grid gap-2.5">
            {navItems.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={clsx(
                    "rounded-[1rem] border border-white/8 px-4 py-3 text-[11px] uppercase tracking-[0.2em] text-white/65 transition hover:bg-white/[0.05] hover:text-white",
                    active && "border-[rgba(222,18,2,0.2)] bg-[rgba(222,18,2,0.08)] text-white"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="mt-4 grid gap-3 border-t border-white/8 pt-4">
            <a
              href={`https://t.me/${siteConfig.telegramAccount.replace("@", "")}`}
              target="_blank"
              rel="noreferrer"
              className="button-primary justify-center"
            >
              Open {siteConfig.telegramAccount}
            </a>

            <a
              href={`https://t.me/${siteConfig.ownerTelegram.replace("@", "")}`}
              target="_blank"
              rel="noreferrer"
              className="button-secondary justify-center"
            >
              Owner {siteConfig.ownerTelegram}
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
