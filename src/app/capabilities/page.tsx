import Footer from "@/components/ui/Footer";
import BackgroundShell from "@/components/ui/BackgroundShell";
import QuickContactPanel from "@/components/ui/QuickContactPanel";
import SectionHeader from "@/components/ui/SectionHeader";
import TopNav from "@/components/navigation/TopNav";
import { capabilities, capabilityTracks, caseBlocks, monetizationBlocks } from "@/data/site";

export default function CapabilitiesPage() {
  return (
    <BackgroundShell>
      <TopNav />
      <main className="mx-auto max-w-7xl space-y-16 px-4 pb-24 pt-28 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="capabilities"
          title="Operator-facing capabilities for direct deals, performance governance, and cleaner private scale."
          text="This page defines the real working surface of PAN: how counterparties are sourced, how offers are evaluated, how communication is structured, and how weak routes are prevented from consuming serious attention."
        />

        <section className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
          {capabilities.map((item) => (
            <div key={item.label} className="panel p-7">
              <div className="flex items-center justify-between gap-4">
                <div className="text-2xl font-medium text-white">{item.title}</div>
                <div className="text-sm text-white/35">{item.label}</div>
              </div>
              <div className="mt-5 grid gap-3">
                {item.points.map((point) => (
                  <div key={point} className="rounded-2xl border border-white/8 bg-black/15 px-4 py-3 text-sm text-white/62">
                    {point}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section className="grid gap-5 lg:grid-cols-4">
          {capabilityTracks.map((item) => (
            <div key={item.title} className="panel p-6">
              <div className="eyebrow">track</div>
              <div className="mt-3 text-lg font-medium text-white">{item.title}</div>
              <p className="mt-3 text-sm leading-7 text-white/63">{item.text}</p>
            </div>
          ))}
        </section>

        <section className="space-y-8">
          <SectionHeader
            eyebrow="commercial use"
            title="Capabilities should be framed around revenue, not just presentation."
            text="These are the surfaces that help PAN convert from brand impression into partner conversations, tests, and long-term private deal flow."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {monetizationBlocks.map((item) => (
              <div key={item.title} className="panel p-6">
                <div className="text-lg font-medium text-white">{item.title}</div>
                <p className="mt-3 text-sm leading-7 text-white/63">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <SectionHeader
            eyebrow="application surfaces"
            title="Where PAN creates leverage in real affiliate operations."
            text="The point is not to look broad. The point is to be useful at the exact places where trust, economics, and execution quality determine whether a route deserves scale."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {caseBlocks.map((item) => (
              <div key={item.title} className="panel p-6">
                <div className="text-lg font-medium text-white">{item.title}</div>
                <p className="mt-3 text-sm leading-7 text-white/63">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <QuickContactPanel compact />
      </main>
      <Footer />
    </BackgroundShell>
  );
}
