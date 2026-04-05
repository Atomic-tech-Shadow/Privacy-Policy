import { useState, useEffect } from "react";

const sections = [
  { id: "introduction", label: "Introduction" },
  { id: "collected-data", label: "Données collectées" },
  { id: "not-collected", label: "Ce que nous ne faisons pas" },
  { id: "content", label: "Contenu" },
  { id: "permissions", label: "Permissions" },
  { id: "contact", label: "Contact" },
];

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState("introduction");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sectionEls = sections.map((s) => document.getElementById(s.id));
      for (let i = sectionEls.length - 1; i >= 0; i--) {
        const el = sectionEls[i];
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(sections[i].id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen" style={{ background: "hsl(220 20% 7%)", color: "hsl(0 0% 95%)" }}>
      {/* Header */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "hsla(220,20%,7%,0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid hsl(220 15% 15%)" : "1px solid transparent",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center font-black text-sm"
              style={{ background: "hsl(14 100% 57%)", color: "white" }}
            >
              AF
            </div>
            <span className="font-bold text-lg tracking-wide" style={{ color: "hsl(0 0% 95%)" }}>
              ATOMIC FLIX
            </span>
          </div>
          <span
            className="text-xs font-medium px-3 py-1.5 rounded-full"
            style={{ background: "hsl(220 20% 10%)", color: "hsl(14 100% 57%)", border: "1px solid hsl(220 15% 15%)" }}
          >
            Politique de confidentialité
          </span>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div
            className="inline-block text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6"
            style={{ background: "hsla(14,100%,57%,0.12)", color: "hsl(14 100% 57%)", border: "1px solid hsla(14,100%,57%,0.25)" }}
          >
            Dernière mise à jour : Avril 2026
          </div>
          <h1 className="text-4xl sm:text-5xl font-black mb-5 leading-tight">
            Politique de{" "}
            <span style={{ color: "hsl(14 100% 57%)" }}>Confidentialité</span>
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "hsl(220 10% 55%)" }}>
            Chez ATOMIC FLIX, votre vie privée est notre priorité. Cette page explique clairement
            quelles données l'application utilise, pourquoi, et ce qu'elle ne fait absolument pas.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 pb-24 flex gap-12">
        {/* Sidebar navigation */}
        <aside className="hidden lg:block w-56 shrink-0">
          <div className="sticky top-28">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: "hsl(220 10% 45%)" }}
            >
              Navigation
            </p>
            <nav className="flex flex-col gap-1">
              {sections.map((s) => (
                <button
                  key={s.id}
                  onClick={() => scrollTo(s.id)}
                  className="text-left text-sm px-3 py-2 rounded-lg transition-all duration-200 font-medium"
                  style={{
                    color: activeSection === s.id ? "hsl(14 100% 57%)" : "hsl(220 10% 55%)",
                    background: activeSection === s.id ? "hsla(14,100%,57%,0.10)" : "transparent",
                    borderLeft: activeSection === s.id ? "2px solid hsl(14 100% 57%)" : "2px solid transparent",
                  }}
                >
                  {s.label}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Content */}
        <main className="flex-1 max-w-2xl">
          <div className="flex flex-col gap-10">
            {/* Introduction */}
            <section id="introduction">
              <SectionCard
                number="01"
                title="Introduction"
                description="ATOMIC FLIX est une application mobile dédiée au streaming d'anime. Nous accordons une grande importance à votre vie privée et avons conçu l'application pour collecter le minimum d'informations nécessaires à son bon fonctionnement."
              />
            </section>

            {/* Données collectées */}
            <section id="collected-data">
              <SectionCard
                number="02"
                title="Données collectées"
                description="L'application collecte uniquement ce dont elle a besoin pour fonctionner correctement."
              >
                <div className="mt-6 flex flex-col gap-3">
                  {[
                    {
                      icon: "▶",
                      title: "Historique de visionnage",
                      desc: "L'app enregistre les épisodes que vous avez regardés pour permettre la reprise là où vous vous êtes arrêté et générer des recommandations personnalisées.",
                    },
                    {
                      icon: "📅",
                      title: "Planning de suivi",
                      desc: "Les animes que vous ajoutez à votre liste de suivi sont sauvegardés localement sur votre appareil.",
                    },
                    {
                      icon: "🔔",
                      title: "Notifications",
                      desc: "L'app demande votre permission pour envoyer des notifications et vous alerter des nouveaux épisodes de vos séries suivies.",
                    },
                    {
                      icon: "📱",
                      title: "Identifiant appareil",
                      desc: "Un identifiant unique de votre appareil est utilisé exclusivement pour l'envoi de notifications push. Il n'est pas partagé ni utilisé à d'autres fins.",
                    },
                  ].map((item) => (
                    <DataItem key={item.title} icon={item.icon} title={item.title} desc={item.desc} />
                  ))}
                </div>
              </SectionCard>
            </section>

            {/* Ce que nous ne faisons pas */}
            <section id="not-collected">
              <SectionCard
                number="03"
                title="Ce que nous ne faisons pas"
                description="Transparence totale sur les pratiques que nous n'appliquons pas."
              >
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { text: "Aucune collecte de nom, email ou données personnelles identifiables" },
                    { text: "Aucun partage de données avec des tiers ou partenaires publicitaires" },
                    { text: "Aucune création de compte requise pour utiliser l'application" },
                    { text: "Aucune donnée stockée sur un serveur externe" },
                  ].map((item, i) => (
                    <NegativeItem key={i} text={item.text} />
                  ))}
                </div>
              </SectionCard>
            </section>

            {/* Contenu */}
            <section id="content">
              <SectionCard
                number="04"
                title="Contenu affiché"
                description="ATOMIC FLIX affiche du contenu anime (images, vidéos) provenant de sources tierces accessibles via internet. Ce contenu est streamé en temps réel et n'est pas stocké localement sur votre appareil."
              >
                <div
                  className="mt-5 p-4 rounded-xl text-sm leading-relaxed"
                  style={{ background: "hsla(14,100%,57%,0.06)", border: "1px solid hsla(14,100%,57%,0.15)", color: "hsl(220 10% 70%)" }}
                >
                  Le streaming depuis des sources tierces signifie que l'application n'héberge aucun contenu protégé.
                  Tout le contenu est accessible via des liens tiers et reste soumis aux conditions d'utilisation de ces sources.
                </div>
              </SectionCard>
            </section>

            {/* Permissions */}
            <section id="permissions">
              <SectionCard
                number="05"
                title="Permissions demandées"
                description="ATOMIC FLIX ne demande que les permissions strictement nécessaires."
              >
                <div className="mt-6 flex flex-col gap-3">
                  <PermissionItem
                    name="Notifications"
                    purpose="Pour vous alerter de la sortie de nouveaux épisodes des animes que vous suivez. Cette permission est optionnelle et peut être désactivée à tout moment depuis les réglages de votre appareil."
                    color="hsl(14 100% 57%)"
                  />
                  <PermissionItem
                    name="Accès Internet"
                    purpose="Indispensable pour streamer le contenu anime depuis les sources en ligne. Sans cette permission, l'application ne peut pas fonctionner."
                    color="hsl(200 100% 50%)"
                  />
                </div>
              </SectionCard>
            </section>

            {/* Contact */}
            <section id="contact">
              <SectionCard
                number="06"
                title="Contact"
                description="Des questions sur notre politique de confidentialité ? N'hésitez pas à nous contacter."
              >
                <div
                  className="mt-5 p-5 rounded-xl"
                  style={{ background: "hsl(220 20% 10%)", border: "1px solid hsl(220 15% 15%)" }}
                >
                  <p className="text-sm" style={{ color: "hsl(220 10% 60%)" }}>
                    Pour toute question relative à la confidentialité et au traitement de vos données dans l'application ATOMIC FLIX, vous pouvez nous contacter via la page de l'application sur l'App Store ou le Play Store.
                  </p>
                </div>
              </SectionCard>
            </section>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer
        className="border-t"
        style={{ borderColor: "hsl(220 15% 13%)", background: "hsl(220 20% 5%)" }}
      >
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div
              className="w-7 h-7 rounded-md flex items-center justify-center font-black text-xs"
              style={{ background: "hsl(14 100% 57%)", color: "white" }}
            >
              AF
            </div>
            <span className="font-semibold text-sm" style={{ color: "hsl(0 0% 80%)" }}>ATOMIC FLIX</span>
          </div>
          <p className="text-xs text-center" style={{ color: "hsl(220 10% 40%)" }}>
            © 2026 ATOMIC FLIX. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
}

function SectionCard({
  number,
  title,
  description,
  children,
}: {
  number: string;
  title: string;
  description: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className="rounded-2xl p-7"
      style={{ background: "hsl(220 20% 10%)", border: "1px solid hsl(220 15% 15%)" }}
    >
      <div className="flex items-start gap-4 mb-3">
        <span
          className="text-xs font-black mt-1 shrink-0"
          style={{ color: "hsl(14 100% 57%)" }}
        >
          {number}
        </span>
        <h2 className="text-xl font-bold" style={{ color: "hsl(0 0% 95%)" }}>{title}</h2>
      </div>
      <p className="text-sm leading-relaxed pl-8" style={{ color: "hsl(220 10% 60%)" }}>
        {description}
      </p>
      {children && <div className="pl-8">{children}</div>}
    </div>
  );
}

function DataItem({
  icon,
  title,
  desc,
}: {
  icon: string;
  title: string;
  desc: string;
}) {
  return (
    <div
      className="flex gap-4 p-4 rounded-xl"
      style={{ background: "hsl(220 20% 7%)", border: "1px solid hsl(220 15% 13%)" }}
    >
      <span className="text-xl mt-0.5 shrink-0">{icon}</span>
      <div>
        <p className="text-sm font-semibold mb-1" style={{ color: "hsl(0 0% 90%)" }}>{title}</p>
        <p className="text-xs leading-relaxed" style={{ color: "hsl(220 10% 55%)" }}>{desc}</p>
      </div>
    </div>
  );
}

function NegativeItem({ text }: { text: string }) {
  return (
    <div
      className="flex items-start gap-3 p-4 rounded-xl"
      style={{ background: "hsl(220 20% 7%)", border: "1px solid hsl(220 15% 13%)" }}
    >
      <span
        className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-xs font-bold"
        style={{ background: "hsla(120,60%,50%,0.15)", color: "hsl(120 60% 55%)" }}
      >
        ✓
      </span>
      <p className="text-xs leading-relaxed" style={{ color: "hsl(220 10% 60%)" }}>{text}</p>
    </div>
  );
}

function PermissionItem({
  name,
  purpose,
  color,
}: {
  name: string;
  purpose: string;
  color: string;
}) {
  return (
    <div
      className="p-4 rounded-xl"
      style={{ background: "hsl(220 20% 7%)", border: "1px solid hsl(220 15% 13%)" }}
    >
      <div className="flex items-center gap-2 mb-2">
        <div className="w-2 h-2 rounded-full" style={{ background: color }} />
        <span className="text-sm font-semibold" style={{ color: "hsl(0 0% 90%)" }}>{name}</span>
      </div>
      <p className="text-xs leading-relaxed pl-4" style={{ color: "hsl(220 10% 55%)" }}>{purpose}</p>
    </div>
  );
}
