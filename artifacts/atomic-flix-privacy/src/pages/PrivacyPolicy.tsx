import { useState, useEffect } from "react";
import { SectionCard, Sidebar } from "@/components/Layout";

const sections = [
  { id: "introduction", label: "Introduction" },
  { id: "no-data", label: "Aucune donnée collectée" },
  { id: "commitments", label: "Nos engagements" },
  { id: "content", label: "Contenu affiché" },
  { id: "permissions", label: "Permissions" },
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
      <section className="pt-32 sm:pt-36 pb-10 sm:pb-14 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div
            className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.15em] px-4 py-2 rounded-full mb-5 sm:mb-6"
            style={{ background: "hsla(14,100%,57%,0.10)", color: "hsl(14 100% 57%)", border: "1px solid hsla(14,100%,57%,0.22)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: "hsl(14 100% 57%)" }} />
            Avril 2026 — Version 1.0
          </div>
          <h1 className="text-3xl sm:text-5xl font-black mb-4 sm:mb-5 leading-tight tracking-tight">
            Politique de{" "}
            <span style={{ color: "hsl(14 100% 57%)" }}>Confidentialité</span>
          </h1>
          <p className="text-sm sm:text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: "hsl(220 10% 52%)" }}>
            ATOMIC FLIX est conçu avec un engagement clair : nous ne collectons aucune donnée personnelle. Votre vie privée est protégée par défaut.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-8 sm:mb-10">
        <div style={{ height: "1px", background: "hsl(220 15% 13%)" }} />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-24 sm:pb-28 flex gap-10 lg:gap-14">
        <Sidebar sections={sections} activeSection={activeSection} onScrollTo={scrollTo} />

        <main className="flex-1 min-w-0 flex flex-col gap-4 sm:gap-6">

          <section id="introduction">
            <SectionCard
              number="01"
              title="Introduction"
              description="ATOMIC FLIX est une application mobile dédiée au streaming d'anime. Elle a été conçue selon un principe fondamental : zéro collecte de données personnelles. Vous pouvez utiliser l'application en toute tranquillité, sans crainte que vos informations soient enregistrées, analysées ou partagées."
            />
          </section>

          <section id="no-data">
            <SectionCard
              number="02"
              title="Aucune donnée collectée"
              description="ATOMIC FLIX ne collecte, ne stocke et ne transmet aucune donnée personnelle. Aucune information vous concernant n'est enregistrée, que ce soit sur nos serveurs ou sur votre appareil à des fins d'identification."
            >
              {/* Zero data banner */}
              <div
                className="flex items-center gap-4 p-4 sm:p-5 rounded-xl mb-4"
                style={{ background: "hsla(120,60%,50%,0.07)", border: "1px solid hsla(120,60%,50%,0.2)" }}
              >
                <div
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shrink-0 text-xl sm:text-2xl"
                  style={{ background: "hsla(120,60%,50%,0.12)" }}
                >
                  🛡️
                </div>
                <div>
                  <p className="text-sm sm:text-base font-bold mb-0.5" style={{ color: "hsl(120 60% 60%)" }}>
                    Zéro donnée personnelle
                  </p>
                  <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "hsl(220 10% 55%)" }}>
                    Aucune information personnelle n'est collectée, stockée ni partagée.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                {[
                  { icon: "👤", label: "Nom / Prénom", status: "Non collecté" },
                  { icon: "📧", label: "Adresse email", status: "Non collecté" },
                  { icon: "📍", label: "Localisation", status: "Non collectée" },
                  { icon: "📱", label: "Identifiant appareil", status: "Non collecté" },
                  { icon: "🔑", label: "Identifiants de connexion", status: "Non requis" },
                  { icon: "💳", label: "Données de paiement", status: "Non collectées" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 px-3 sm:px-4 py-3 rounded-xl"
                    style={{ background: "hsl(220 22% 7%)", border: "1px solid hsl(220 15% 12%)" }}
                  >
                    <span className="text-base shrink-0">{item.icon}</span>
                    <span className="text-xs font-medium flex-1" style={{ color: "hsl(220 10% 60%)" }}>{item.label}</span>
                    <span
                      className="text-[10px] font-bold px-2 py-1 rounded-full shrink-0"
                      style={{ background: "hsla(120,60%,50%,0.12)", color: "hsl(120 60% 55%)" }}
                    >
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </SectionCard>
          </section>

          <section id="commitments">
            <SectionCard
              number="03"
              title="Nos engagements"
              description="Nous nous engageons fermement à respecter les principes suivants, sans exception et sans compromis."
            >
              <div className="flex flex-col gap-2.5">
                {[
                  { icon: "🚫", text: "Aucun partage de données avec des tiers, annonceurs ou partenaires" },
                  { icon: "🚫", text: "Aucune publicité ciblée ni profilage comportemental" },
                  { icon: "🚫", text: "Aucune création de compte requise pour utiliser l'application" },
                  { icon: "🚫", text: "Aucun cookie de tracking ni outil d'analyse comportementale" },
                  { icon: "🚫", text: "Aucune vente de données à quelque entité que ce soit" },
                  { icon: "🚫", text: "Aucune surveillance de vos activités de visionnage à des fins commerciales" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 px-3 sm:px-4 py-3 rounded-xl"
                    style={{ background: "hsl(220 22% 7%)", border: "1px solid hsl(220 15% 12%)" }}
                  >
                    <span className="text-sm shrink-0 mt-0.5">{item.icon}</span>
                    <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "hsl(220 10% 58%)" }}>{item.text}</p>
                  </div>
                ))}
              </div>
            </SectionCard>
          </section>

          <section id="content">
            <SectionCard
              number="04"
              title="Contenu affiché"
              description="ATOMIC FLIX affiche du contenu anime (images, vidéos) accessible via internet depuis des sources tierces. Ce contenu est streamé en temps réel et n'est ni stocké ni hébergé par l'application."
            >
              <div
                className="flex gap-3 p-3.5 sm:p-4 rounded-xl text-xs sm:text-sm leading-relaxed"
                style={{ background: "hsla(14,100%,57%,0.06)", border: "1px solid hsla(14,100%,57%,0.14)", color: "hsl(220 10% 60%)" }}
              >
                <span className="shrink-0 text-base">ℹ️</span>
                <span>
                  L'application n'héberge aucun contenu protégé par des droits d'auteur. Tout contenu provient de sources tierces et reste soumis aux conditions de ces sources.
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
                    purpose: "Pour vous alerter des nouveaux épisodes de vos animes suivis. Aucune donnée liée aux notifications n'est conservée. Peut être désactivée à tout moment dans les réglages de votre appareil.",
                  },
                  {
                    name: "Accès Internet",
                    badge: "Requise",
                    badgeColor: "hsl(200 100% 55%)",
                    badgeBg: "hsla(200,100%,55%,0.12)",
                    dot: "hsl(200 100% 55%)",
                    purpose: "Nécessaire pour streamer le contenu anime depuis les sources en ligne. Sans cette permission, l'application ne peut pas fonctionner.",
                  },
                ].map((p) => (
                  <div
                    key={p.name}
                    className="p-3.5 sm:p-4 rounded-xl"
                    style={{ background: "hsl(220 22% 7%)", border: "1px solid hsl(220 15% 12%)" }}
                  >
                    <div className="flex items-center gap-3 mb-2">
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

          <section id="contact">
            <SectionCard
              number="06"
              title="Contact"
              description="Des questions sur notre politique de confidentialité ? Contactez-nous directement."
            >
              <div className="flex flex-col gap-3">
                <a
                  href="mailto:cidakue02@gmail.com"
                  className="flex items-center gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-xl transition-all duration-200"
                  style={{ background: "hsl(220 22% 7%)", border: "1px solid hsl(220 15% 12%)", textDecoration: "none" }}
                >
                  <div
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: "hsla(14,100%,57%,0.12)" }}
                  >
                    <span className="text-base">✉️</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] font-bold uppercase tracking-widest mb-0.5" style={{ color: "hsl(14 100% 57%)" }}>Email</p>
                    <p className="text-xs sm:text-sm font-medium truncate" style={{ color: "hsl(0 0% 85%)" }}>cidakue02@gmail.com</p>
                  </div>
                  <span className="text-xs shrink-0" style={{ color: "hsl(220 10% 40%)" }}>→</span>
                </a>
                <a
                  href="https://wa.me/22871394585"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-xl transition-all duration-200"
                  style={{ background: "hsl(220 22% 7%)", border: "1px solid hsl(220 15% 12%)", textDecoration: "none" }}
                >
                  <div
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: "hsla(120,60%,50%,0.10)" }}
                  >
                    <span className="text-base">💬</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] font-bold uppercase tracking-widest mb-0.5" style={{ color: "hsl(120 60% 55%)" }}>WhatsApp</p>
                    <p className="text-xs sm:text-sm font-medium" style={{ color: "hsl(0 0% 85%)" }}>+228 71 39 45 85</p>
                  </div>
                  <span className="text-xs shrink-0" style={{ color: "hsl(220 10% 40%)" }}>→</span>
                </a>
              </div>
            </SectionCard>
          </section>

        </main>
      </div>
    </div>
  );
}
