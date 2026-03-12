import { siteConfig } from "@/data/site";

export default function StickyDealBar() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 hidden px-4 pb-4 xl:block xl:px-6 xl:pb-5">
      <div className="mx-auto max-w-6xl">
        <div className="pointer-events-auto flex items-center justify-between gap-5 rounded-[1.35rem] border border-white/10 bg-[rgba(8,10,16,0.78)] px-5 py-3.5 shadow-[0_18px_80px_rgba(0,0,0,0.34)] backdrop-blur-2xl">
          <div className="min-w-0">
            <div className="text-[10px] uppercase tracking-[0.22em] text-white/38">
              Direct deal routing
            </div>

            <div className="mt-1 text-sm text-white/68">
              Start with{" "}
              <span className="font-medium text-white">{siteConfig.telegramAccount}</span>
              {" "}and escalate strategic conversations to{" "}
              <span className="font-medium text-white">{siteConfig.ownerTelegram}</span>.
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-3">
            <a
              href={`https://t.me/${siteConfig.telegramAccount.replace("@", "")}`}
              target="_blank"
              rel="noreferrer"
              className="button-primary whitespace-nowrap justify-center"
            >
              Open {siteConfig.telegramAccount}
            </a>

            <a
              href={`https://t.me/${siteConfig.ownerTelegram.replace("@", "")}`}
              target="_blank"
              rel="noreferrer"
              className="button-secondary whitespace-nowrap justify-center"
            >
              Owner {siteConfig.ownerTelegram}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
