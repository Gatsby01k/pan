import { primaryContactLinks } from "@/data/site";

type QuickContactPanelProps = {
  compact?: boolean;
};

export default function QuickContactPanel({
  compact = false,
}: QuickContactPanelProps) {
  return (
    <section
      className={[
        "panel overflow-hidden",
        compact ? "p-4 sm:p-5" : "p-4 sm:p-5 lg:p-6",
      ].join(" ")}
    >
      <div className={compact ? "flex flex-col gap-4 sm:gap-5" : "flex flex-col gap-5 sm:gap-6"}>
        <div
          className={
            compact
              ? "flex flex-col gap-3"
              : "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"
          }
        >
          <div className={compact ? "max-w-xl" : "max-w-2xl"}>
            <div className="text-[10px] uppercase tracking-[0.16em] text-white/42 sm:text-[11px] sm:tracking-[0.28em]">
              Quick contact
            </div>

            <h3
              className={
                compact
                  ? "mt-2 text-base font-semibold text-white sm:text-lg"
                  : "mt-2 text-[1.1rem] font-semibold text-white sm:text-[1.35rem]"
              }
            >
              Direct access points
            </h3>

            <p className="mt-2 text-sm leading-6 text-white/62 sm:text-[15px]">
              Primary routing for affiliate, advertiser, operator, and strategic
              outreach. Use the main Telegram account for standard deal flow,
              owner contact for serious direct opportunities, and email for
              structured briefs.
            </p>
          </div>

          {!compact ? (
            <div className="rounded-full border border-[rgba(222,18,2,0.22)] bg-[rgba(222,18,2,0.12)] px-3 py-2 text-[10px] uppercase tracking-[0.14em] text-white/72 sm:self-start sm:text-[11px] sm:tracking-[0.22em]">
              Telegram-first routing
            </div>
          ) : null}
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {primaryContactLinks.map((item, index) => {
            const isPrimary = index === 0;
            const isOwner = item.label === "Owner";

            return (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                className={[
                  "group relative overflow-hidden rounded-[1.15rem] border transition duration-200 sm:rounded-[1.3rem]",
                  compact ? "p-4" : "p-4 sm:p-5",
                  isPrimary
                    ? "border-[rgba(222,18,2,0.28)] bg-[linear-gradient(135deg,rgba(222,18,2,0.16),rgba(255,255,255,0.03))] hover:border-[rgba(222,18,2,0.44)] hover:bg-[linear-gradient(135deg,rgba(222,18,2,0.22),rgba(255,255,255,0.05))]"
                    : isOwner
                      ? "border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.03))] hover:border-[rgba(255,255,255,0.18)] hover:bg-[rgba(255,255,255,0.05)]"
                      : "border-white/10 bg-white/[0.03] hover:border-[rgba(222,18,2,0.22)] hover:bg-[rgba(255,255,255,0.05)]",
                ].join(" ")}
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.18),transparent)] opacity-60" />

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.16em] text-white/42 sm:text-[11px] sm:tracking-[0.24em]">
                      {item.label}
                    </div>

                    <div className="mt-2 text-sm font-medium text-white/88 transition group-hover:text-white sm:text-[15px]">
                      {item.value}
                    </div>
                  </div>

                  <div className="shrink-0 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[9px] uppercase tracking-[0.14em] text-white/46 sm:text-[10px]">
                    {isPrimary ? "Primary" : isOwner ? "Direct" : "Open"}
                  </div>
                </div>

                {!compact ? (
                  <div className="mt-4 text-xs leading-5 text-white/50 sm:text-[13px]">
                    {item.label === "Telegram Account" &&
                      "Main route for affiliate deal flow, qualification, and fast business communication."}
                    {item.label === "Owner" &&
                      "Use for high-value direct opportunities, strategic conversations, and escalation."}
                    {item.label === "Email" &&
                      "Best for structured intros, written briefs, and commercial details that need context."}
                    {item.label === "Telegram Chat" &&
                      "Community layer with themes and discussion flow around the PAN surface."}
                  </div>
                ) : null}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
