import Footer from "@/components/ui/Footer";
import BackgroundShell from "@/components/ui/BackgroundShell";
import QuickContactPanel from "@/components/ui/QuickContactPanel";
import SectionHeader from "@/components/ui/SectionHeader";
import TopNav from "@/components/navigation/TopNav";
import { infraCards, operatingPrinciples, outboundProof, stackRows } from "@/data/site";

export default function InfrastructurePage() {
  return (
    <BackgroundShell>
      <TopNav />
      <main className="mx-auto max-w-7xl space-y-16 px-4 pb-24 pt-28 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="infrastructure"
          title="The operating system behind the brand: vetting, governance, reporting, and controlled scale."
          text="PAN is framed as a premium network, but the underlying model is infrastructure. This page explains the systems that keep growth private, disciplined, and commercially useful."
        />

        <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {infraCards.map((item) => (
            <div key={item.title} className="panel p-6">
              <div className="text-lg font-medium text-white">{item.title}</div>
              <p className="mt-3 text-sm leading-7 text-white/63">{item.text}</p>
            </div>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.15fr_.85fr]">
          <div className="panel overflow-hidden p-7">
            <div className="eyebrow">stack map</div>
            <div className="mt-4 overflow-hidden rounded-[1.8rem] border border-white/8 bg-black/15">
              <div className="grid divide-y divide-white/8">
                {stackRows.map(([label, detail]) => (
                  <div key={label} className="grid gap-3 px-5 py-4 md:grid-cols-[0.28fr_0.72fr] md:gap-5">
                    <div className="text-sm font-medium text-white">{label}</div>
                    <div className="text-sm leading-7 text-white/62">{detail}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="panel p-7">
            <div className="eyebrow">operating principles</div>
            <div className="mt-5 space-y-3">
              {operatingPrinciples.map((item) => (
                <div key={item} className="rounded-[1.45rem] border border-white/8 bg-white/[0.035] px-4 py-4 text-sm leading-7 text-white/66">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.05fr_.95fr]">
          <div className="panel p-7">
            <div className="eyebrow">how this page converts</div>
            <h2 className="mt-3 text-3xl font-semibold text-white">Infrastructure closes objections before the first live call.</h2>
            <p className="mt-4 text-sm leading-7 text-white/66">
              Serious partners want to know whether the brand is disciplined, selective, and commercially literate. This page answers that before they ask.
            </p>
          </div>
          <div className="panel p-7">
            <div className="eyebrow">deployment use</div>
            <div className="mt-5 space-y-3">
              {outboundProof.map((item) => (
                <div key={item} className="rounded-[1.45rem] border border-white/8 bg-white/[0.035] px-4 py-4 text-sm leading-7 text-white/66">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <QuickContactPanel compact />
      </main>
      <Footer />
    </BackgroundShell>
  );
}
