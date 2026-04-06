import { useState, useEffect } from "react";
import { SectionCard, Sidebar } from "@/components/Layout";

const sections = [
  { id: "acceptance", label: "Acceptation" },
  { id: "description", label: "Description du service" },
  { id: "usage", label: "Utilisation autorisée" },
  { id: "prohibited", label: "Utilisations interdites" },
  { id: "content", label: "Contenu tiers" },
  { id: "ip", label: "Propriété intellectuelle" },
  { id: "liability", label: "Limitation de responsabilité" },
  { id: "modifications", label: "Modifications" },
  { id: "contact", label: "Contact" },
];

export default function TermsOfUse() {
  const [activeSection, setActiveSection] = useState("acceptance");

  useEffect(() => {
    const handleScroll = () => {
      const sectionEls = sections.map((s) => document.getElementById(s.id));
      for (let i = sectionEls.length - 1; i >= 0; i--) {
        const el = sectionEls[i];
        if (el && el.getBoundingClientRect().top <= 130) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div>
      {/* Hero */}
      <section className="pt-32 sm:pt-36 pb-10 sm:pb-14 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div
            className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.15em] px-4 py-2 rounded-full mb-5 sm:mb-6"
            style={{ background: "hsla(200,100%,55%,0.10)", color: "hsl(200 100% 60%)", border: "1px solid hsla(200,100%,55%,0.22)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: "hsl(200 100% 60%)" }} />
            Avril 2026 — Version 1.0
          </div>
          <h1 className="text-3xl sm:text-5xl font-black mb-4 sm:mb-5 leading-tight tracking-tight">
            Conditions{" "}
            <span style={{ color: "hsl(200 100% 60%)" }}>d'Utilisation</span>
          </h1>
          <p className="text-sm sm:text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: "hsl(220 10% 52%)" }}>
            En utilisant ATOMIC FLIX, vous acceptez les présentes conditions. Veuillez les lire attentivement avant d'utiliser l'application.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-8 sm:mb-10">
        <div style={{ height: "1px", background: "hsl(220 15% 13%)" }} />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-24 sm:pb-28 flex gap-10 lg:gap-14">
        <Sidebar sections={sections} activeSection={activeSection} onScrollTo={scrollTo} />

        <main className="flex-1 min-w-0 max-w-2xl flex flex-col gap-4 sm:gap-6">

          <section id="acceptance">
            <SectionCard
              number="01"
              title="Acceptation des conditions"
              accent="blue"
              description="En téléchargeant, installant ou utilisant l'application ATOMIC FLIX, vous reconnaissez avoir lu, compris et accepté d'être lié par les présentes Conditions d'Utilisation ainsi que par notre Politique de Confidentialité."
            >
              <div
                className="flex gap-3 p-4 rounded-xl text-xs leading-relaxed"
                style={{ background: "hsla(200,100%,55%,0.06)", border: "1px solid hsla(200,100%,55%,0.15)", color: "hsl(220 10% 60%)" }}
              >
                <span className="shrink-0 text-base">⚠️</span>
                <span>
                  Si vous n'acceptez pas ces conditions, veuillez désinstaller l'application et cesser toute utilisation. L'utilisation continue de l'application vaut acceptation de toute mise à jour de ces conditions.
                </span>
              </div>
            </SectionCard>
          </section>

          <section id="description">
            <SectionCard
              number="02"
              title="Description du service"
              accent="blue"
              description="ATOMIC FLIX est une application mobile de streaming dédiée aux séries animées japonaises (anime). Elle permet aux utilisateurs de :"
            >
              <div className="flex flex-col gap-2.5">
                {[
                  { icon: "🎬", text: "Regarder des épisodes d'anime en streaming depuis des sources tierces" },
                  { icon: "📋", text: "Gérer une liste personnelle de suivi d'animes" },
                  { icon: "🔔", text: "Recevoir des notifications pour les nouvelles sorties d'épisodes" },
                  { icon: "🔍", text: "Rechercher et découvrir des contenus anime selon ses préférences" },
                  { icon: "⏱️", text: "Reprendre la lecture là où vous vous êtes arrêté" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl"
                    style={{ background: "hsl(220 22% 7%)", border: "1px solid hsl(220 15% 12%)" }}
                  >
                    <span className="text-base shrink-0">{item.icon}</span>
                    <p className="text-sm" style={{ color: "hsl(220 10% 62%)" }}>{item.text}</p>
                  </div>
                ))}
              </div>
            </SectionCard>
          </section>

          <section id="usage">
            <SectionCard
              number="03"
              title="Utilisation autorisée"
              accent="blue"
              description="L'utilisation de ATOMIC FLIX est soumise aux conditions suivantes. En tant qu'utilisateur, vous vous engagez à :"
            >
              <div className="flex flex-col gap-2.5">
                {[
                  "Utiliser l'application à des fins personnelles et non commerciales uniquement",
                  "Respecter toutes les lois et réglementations applicables dans votre pays de résidence",
                  "Ne pas tenter de perturber, modifier ou compromettre le fonctionnement de l'application",
                  "Utiliser l'application de manière responsable et éthique",
                  "Ne pas contourner les mesures de sécurité ou de protection mises en place",
                ].map((text, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 px-4 py-3 rounded-xl"
                    style={{ background: "hsl(220 22% 7%)", border: "1px solid hsl(220 15% 12%)" }}
                  >
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-[11px] font-black mt-0.5"
                      style={{ background: "hsla(200,100%,55%,0.14)", color: "hsl(200 100% 60%)" }}
                    >
                      ✓
                    </span>
                    <p className="text-xs leading-relaxed" style={{ color: "hsl(220 10% 56%)" }}>{text}</p>
                  </div>
                ))}
              </div>
            </SectionCard>
          </section>

          <section id="prohibited">
            <SectionCard
              number="04"
              title="Utilisations interdites"
              accent="blue"
              description="Les actions suivantes sont strictement interdites lors de l'utilisation de l'application ATOMIC FLIX."
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  { icon: "🚫", text: "Toute tentative de rétro-ingénierie ou décompilation de l'application" },
                  { icon: "🚫", text: "Reproduction, distribution ou revente de l'application ou de son contenu" },
                  { icon: "🚫", text: "Utilisation de scripts automatisés, bots ou outils de scraping" },
                  { icon: "🚫", text: "Contournement des mesures techniques de protection" },
                  { icon: "🚫", text: "Usurpation d'identité ou déclaration de fausse affiliation" },
                  { icon: "🚫", text: "Utilisation à des fins commerciales sans autorisation écrite préalable" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3.5 rounded-xl"
                    style={{ background: "hsl(220 22% 7%)", border: "1px solid hsl(220 15% 12%)" }}
                  >
                    <span className="text-sm shrink-0 mt-0.5">{item.icon}</span>
                    <p className="text-xs leading-relaxed" style={{ color: "hsl(220 10% 52%)" }}>{item.text}</p>
                  </div>
                ))}
              </div>
            </SectionCard>
          </section>

          <section id="content">
            <SectionCard
              number="05"
              title="Contenu tiers"
              accent="blue"
              description="ATOMIC FLIX agrège et affiche des liens vers du contenu anime hébergé par des services tiers. Nous n'hébergeons, ne stockons ni ne distribuons directement ce contenu."
            >
              <div className="flex flex-col gap-3">
                <div
                  className="p-4 rounded-xl text-xs leading-relaxed"
                  style={{ background: "hsl(220 22% 7%)", border: "1px solid hsl(220 15% 12%)", color: "hsl(220 10% 56%)" }}
                >
                  <p className="font-semibold mb-2" style={{ color: "hsl(0 0% 85%)" }}>Responsabilité du contenu tiers</p>
                  ATOMIC FLIX n'assume aucune responsabilité quant à la légalité, l'exactitude, la disponibilité ou la qualité du contenu fourni par des tiers. Les droits sur les œuvres (anime, images, musiques) appartiennent à leurs détenteurs légitimes respectifs.
                </div>
                <div
                  className="p-4 rounded-xl text-xs leading-relaxed"
                  style={{ background: "hsl(220 22% 7%)", border: "1px solid hsl(220 15% 12%)", color: "hsl(220 10% 56%)" }}
                >
                  <p className="font-semibold mb-2" style={{ color: "hsl(0 0% 85%)" }}>Disponibilité du contenu</p>
                  La disponibilité des contenus peut varier selon les régions et peut être modifiée ou interrompue sans préavis, en fonction des décisions des sources tierces concernées.
                </div>
              </div>
            </SectionCard>
          </section>

          <section id="ip">
            <SectionCard
              number="06"
              title="Propriété intellectuelle"
              accent="blue"
              description="L'application ATOMIC FLIX, son interface, son logo, son nom commercial et l'ensemble de son code source sont la propriété exclusive de leurs créateurs et sont protégés par les lois applicables en matière de propriété intellectuelle."
            >
              <div
                className="flex gap-3 p-4 rounded-xl text-xs leading-relaxed"
                style={{ background: "hsla(200,100%,55%,0.06)", border: "1px solid hsla(200,100%,55%,0.15)", color: "hsl(220 10% 60%)" }}
              >
                <span className="shrink-0 text-base">©</span>
                <span>
                  Toute reproduction, modification, traduction ou utilisation commerciale de l'application ou de ses éléments sans autorisation écrite préalable est formellement interdite et passible de poursuites judiciaires.
                </span>
              </div>
            </SectionCard>
          </section>

          <section id="liability">
            <SectionCard
              number="07"
              title="Limitation de responsabilité"
              accent="blue"
              description="ATOMIC FLIX est fourni « tel quel », sans garantie d'aucune sorte. Nous nous efforçons d'assurer la continuité et la qualité du service, mais nous ne pouvons garantir :"
            >
              <div className="flex flex-col gap-2.5 mb-4">
                {[
                  "La disponibilité continue et ininterrompue de l'application",
                  "L'exactitude ou la complétude du contenu fourni par des tiers",
                  "L'absence d'erreurs, bugs ou interruptions de service",
                  "La compatibilité avec tous les appareils ou systèmes d'exploitation",
                ].map((text, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 px-4 py-3 rounded-xl"
                    style={{ background: "hsl(220 22% 7%)", border: "1px solid hsl(220 15% 12%)" }}
                  >
                    <span className="text-xs shrink-0 mt-0.5" style={{ color: "hsl(14 100% 57%)" }}>—</span>
                    <p className="text-xs leading-relaxed" style={{ color: "hsl(220 10% 56%)" }}>{text}</p>
                  </div>
                ))}
              </div>
              <div
                className="p-4 rounded-xl text-xs leading-relaxed"
                style={{ background: "hsla(14,100%,57%,0.06)", border: "1px solid hsla(14,100%,57%,0.14)", color: "hsl(220 10% 60%)" }}
              >
                En aucun cas, ATOMIC FLIX ne saurait être tenu responsable de dommages indirects, accessoires, spéciaux ou consécutifs résultant de l'utilisation ou de l'impossibilité d'utiliser l'application.
              </div>
            </SectionCard>
          </section>

          <section id="modifications">
            <SectionCard
              number="08"
              title="Modifications des conditions"
              accent="blue"
              description="ATOMIC FLIX se réserve le droit de modifier les présentes Conditions d'Utilisation à tout moment. Les modifications entrent en vigueur dès leur publication dans l'application ou sur cette page."
            >
              <div
                className="p-4 rounded-xl text-xs leading-relaxed"
                style={{ background: "hsl(220 22% 7%)", border: "1px solid hsl(220 15% 12%)", color: "hsl(220 10% 56%)" }}
              >
                Il est de votre responsabilité de consulter régulièrement ces conditions. La poursuite de l'utilisation de l'application après la publication de modifications constitue votre acceptation des nouvelles conditions. La date de dernière mise à jour est toujours indiquée en haut de cette page.
              </div>
            </SectionCard>
          </section>

          <section id="contact">
            <SectionCard
              number="09"
              title="Contact & Questions juridiques"
              accent="blue"
              description="Pour toute question relative aux présentes Conditions d'Utilisation ou pour signaler une violation, contactez-nous directement."
            >
              <div className="flex flex-col gap-3">
                <a
                  href="mailto:cidakue02@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-xl transition-all duration-200"
                  style={{ background: "hsl(220 22% 7%)", border: "1px solid hsl(220 15% 12%)", textDecoration: "none" }}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderColor = "hsla(200,100%,55%,0.35)")}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderColor = "hsl(220 15% 12%)")}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: "hsla(200,100%,55%,0.12)" }}
                  >
                    <span className="text-base">✉️</span>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest mb-0.5" style={{ color: "hsl(200 100% 60%)" }}>Email</p>
                    <p className="text-sm font-medium" style={{ color: "hsl(0 0% 85%)" }}>cidakue02@gmail.com</p>
                  </div>
                  <span className="ml-auto text-xs" style={{ color: "hsl(220 10% 40%)" }}>→</span>
                </a>
                <a
                  href="https://wa.me/22871394585"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl transition-all duration-200"
                  style={{ background: "hsl(220 22% 7%)", border: "1px solid hsl(220 15% 12%)", textDecoration: "none" }}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderColor = "hsla(120,60%,50%,0.35)")}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderColor = "hsl(220 15% 12%)")}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: "hsla(120,60%,50%,0.10)" }}
                  >
                    <span className="text-base">💬</span>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest mb-0.5" style={{ color: "hsl(120 60% 55%)" }}>WhatsApp</p>
                    <p className="text-sm font-medium" style={{ color: "hsl(0 0% 85%)" }}>+228 71 39 45 85</p>
                  </div>
                  <span className="ml-auto text-xs" style={{ color: "hsl(220 10% 40%)" }}>→</span>
                </a>
              </div>
            </SectionCard>
          </section>

        </main>
      </div>
    </div>
  );
}
