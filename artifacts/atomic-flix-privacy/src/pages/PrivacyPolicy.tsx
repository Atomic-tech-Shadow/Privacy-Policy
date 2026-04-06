import { useState, useEffect } from "react";
import { SectionCard, Sidebar } from "@/components/Layout";

const sections = [
  { id: "introduction", label: "Introduction" },
  { id: "collected-data", label: "Données collectées" },
  { id: "not-collected", label: "Ce que nous ne faisons pas" },
  { id: "content", label: "Contenu affiché" },
  { id: "permissions", label: "Permissions" },
  { id: "retention", label: "Conservation des données" },
  { id: "contact", label: "Contact" },
];

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState("introduction");

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
      <section className="pt-36 pb-14 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div
            className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] px-4 py-2 rounded-full mb-6"
            style={{ background: "hsla(14,100%,57%,0.10)", color: "hsl(14 100% 57%)", border: "1px solid hsla(14,100%,57%,0.22)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: "hsl(14 100% 57%)" }} />
            Avril 2026 — Version 1.0
          </div>
          <h1 className="text-4xl sm:text-5xl font-black mb-5 leading-tight tracking-tight">
            Politique de{" "}
            <span style={{ color: "hsl(14 100% 57%)" }}>Confidentialité</span>
          </h1>
          <p className="text-base sm:text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: "hsl(220 10% 52%)" }}>
            ATOMIC FLIX est conçu avec la vie privée comme priorité absolue. Cette politique détaille de façon transparente comment l'application traite vos données.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6 mb-10">
        <div style={{ height: "1px", background: "hsl(220 15% 13%)" }} />
      </div>

      <div className="max-w-6xl mx-auto px-6 pb-28 flex gap-14">
        <Sidebar sections={sections} activeSection={activeSection} onScrollTo={scrollTo} />

        <main className="flex-1 min-w-0 max-w-2xl flex flex-col gap-6">

          <section id="introduction">
            <SectionCard
              number="01"
              title="Introduction"
              description="ATOMIC FLIX est une application mobile dédiée au streaming d'anime. Nous avons conçu l'application selon un principe fondamental : collecter uniquement ce qui est strictement nécessaire à son fonctionnement, rien de plus. Cette politique s'applique à toutes les versions de l'application."
            />
          </section>

          <section id="collected-data">
            <SectionCard
              number="02"
              title="Données collectées"
              description="L'application collecte un minimum de données, uniquement pour vous offrir une expérience personnalisée et fonctionnelle."
            >
              <div className="flex flex-col gap-3">
                {[
                  {
                    icon: "▶",
                    color: "hsl(14 100% 57%)",
                    title: "Historique de visionnage",
                    desc: "Les épisodes regardés sont enregistrés localement pour permettre la reprise de lecture et générer des recommandations personnalisées.",
                  },
                  {
                    icon: "📋",
                    color: "hsl(200 100% 55%)",
                    title: "Liste de suivi",
                    desc: "Les animes ajoutés à votre planning de suivi sont sauvegardés sur votre appareil, sans synchronisation cloud.",
                  },
                  {
                    icon: "🔔",
                    color: "hsl(45 100% 55%)",
                    title: "Notifications push",
                    desc: "Avec votre autorisation, un identifiant appareil anonyme est utilisé pour vous notifier des nouveaux épisodes. Cette permission reste optionnelle.",
                  },
                  {
                    icon: "📱",
                    color: "hsl(280 100% 65%)",
                    title: "Identifiant appareil",
                    desc: "Utilisé exclusivement pour l'acheminement des notifications push. Cet identifiant est anonyme et n'est jamais lié à votre identité.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex gap-4 p-4 rounded-xl"
                    style={{ background: "hsl(220 22% 7%)", border: "1px solid hsl(220 15% 12%)" }}
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 text-base"
                      style={{ background: `${item.color}18` }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm font-semibold mb-1" style={{ color: "hsl(0 0% 92%)" }}>{item.title}</p>
                      <p className="text-xs leading-relaxed" style={{ color: "hsl(220 10% 52%)" }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </SectionCard>
          </section>

          <section id="not-collected">
            <SectionCard
              number="03"
              title="Ce que nous ne faisons pas"
              description="Nous nous engageons à ne jamais appliquer les pratiques suivantes, sans exception."
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Aucune collecte de nom, email ou données personnelles identifiables",
                  "Aucun partage de données avec des tiers ou partenaires publicitaires",
                  "Aucune création de compte requise pour utiliser l'application",
                  "Aucune donnée stockée sur un serveur externe sans votre consentement",
                  "Aucun tracking comportemental ni profilage à des fins commerciales",
                  "Aucune vente de données personnelles à quelque entité que ce soit",
                ].map((text, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 rounded-xl"
                    style={{ background: "hsl(220 22% 7%)", border: "1px solid hsl(220 15% 12%)" }}
                  >
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-[11px] font-black mt-0.5"
                      style={{ background: "hsla(120,60%,50%,0.14)", color: "hsl(120 60% 55%)" }}
                    >
                      ✓
                    </span>
                    <p className="text-xs leading-relaxed" style={{ color: "hsl(220 10% 56%)" }}>{text}</p>
                  </div>
                ))}
              </div>
            </SectionCard>
          </section>

          <section id="content">
            <SectionCard
              number="04"
              title="Contenu affiché"
              description="ATOMIC FLIX affiche du contenu anime (images, vidéos) provenant de sources tierces via internet. Ce contenu est streamé en temps réel et n'est jamais stocké localement."
            >
              <div
                className="flex gap-3 p-4 rounded-xl text-xs leading-relaxed"
                style={{ background: "hsla(14,100%,57%,0.06)", border: "1px solid hsla(14,100%,57%,0.14)", color: "hsl(220 10% 60%)" }}
              >
                <span className="shrink-0 text-base">ℹ️</span>
                <span>
                  L'application n'héberge aucun contenu protégé par des droits d'auteur. Tout le contenu est accessible via des liens tiers et demeure soumis aux conditions d'utilisation propres à ces sources.
                </span>
              </div>
            </SectionCard>
          </section>

          <section id="permissions">
            <SectionCard
              number="05"
              title="Permissions demandées"
              description="ATOMIC FLIX ne demande que les permissions strictement nécessaires à son fonctionnement."
            >
              <div className="flex flex-col gap-3">
                {[
                  {
                    name: "Notifications",
                    badge: "Optionnelle",
                    badgeColor: "hsl(45 100% 55%)",
                    badgeBg: "hsla(45,100%,55%,0.12)",
                    dot: "hsl(14 100% 57%)",
                    purpose: "Pour vous alerter des nouveaux épisodes de vos animes suivis. Peut être désactivée à tout moment dans les réglages de votre appareil.",
                  },
                  {
                    name: "Accès Internet",
                    badge: "Requise",
                    badgeColor: "hsl(200 100% 55%)",
                    badgeBg: "hsla(200,100%,55%,0.12)",
                    dot: "hsl(200 100% 55%)",
                    purpose: "Nécessaire pour streamer le contenu anime depuis les sources en ligne. Sans accès internet, l'application ne peut pas fonctionner.",
                  },
                ].map((p) => (
                  <div
                    key={p.name}
                    className="p-4 rounded-xl"
                    style={{ background: "hsl(220 22% 7%)", border: "1px solid hsl(220 15% 12%)" }}
                  >
                    <div className="flex items-center gap-3 mb-2.5">
                      <div className="w-2 h-2 rounded-full shrink-0" style={{ background: p.dot }} />
                      <span className="text-sm font-semibold" style={{ color: "hsl(0 0% 92%)" }}>{p.name}</span>
                      <span
                        className="text-[10px] font-bold px-2 py-0.5 rounded-full ml-auto"
                        style={{ background: p.badgeBg, color: p.badgeColor }}
                      >
                        {p.badge}
                      </span>
                    </div>
                    <p className="text-xs leading-relaxed pl-5" style={{ color: "hsl(220 10% 52%)" }}>{p.purpose}</p>
                  </div>
                ))}
              </div>
            </SectionCard>
          </section>

          <section id="retention">
            <SectionCard
              number="06"
              title="Conservation des données"
              description="Les données collectées par ATOMIC FLIX sont conservées localement sur votre appareil. Vous pouvez les supprimer à tout moment en désinstallant l'application. Aucune donnée ne persiste sur nos serveurs."
            >
              <div
                className="p-4 rounded-xl text-xs leading-relaxed"
                style={{ background: "hsl(220 22% 7%)", border: "1px solid hsl(220 15% 12%)", color: "hsl(220 10% 56%)" }}
              >
                En cas de mise à jour majeure de cette politique de confidentialité, vous en serez informé via l'application. La poursuite de l'utilisation de l'application vaut acceptation de la politique mise à jour.
              </div>
            </SectionCard>
          </section>

          <section id="contact">
            <SectionCard
              number="07"
              title="Contact & Questions"
              description="Pour toute question relative à la gestion de vos données ou à cette politique de confidentialité, vous pouvez nous contacter directement."
            >
              <div className="flex flex-col gap-3">
                <a
                  href="mailto:cidakue02@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-xl transition-all duration-200 group"
                  style={{ background: "hsl(220 22% 7%)", border: "1px solid hsl(220 15% 12%)", textDecoration: "none" }}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderColor = "hsla(14,100%,57%,0.35)")}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderColor = "hsl(220 15% 12%)")}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: "hsla(14,100%,57%,0.12)" }}
                  >
                    <span className="text-base">✉️</span>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest mb-0.5" style={{ color: "hsl(14 100% 57%)" }}>Email</p>
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
