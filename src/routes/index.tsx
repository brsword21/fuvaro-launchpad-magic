import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  Calculator,
  Radio,
  MapPin,
  CheckCircle2,
  Compass,
  ChevronDown,
} from "lucide-react";
import logo from "@/assets/fuvaro-logo.png";
import truckBg from "@/assets/fuvaro-truck-bg.png";
import truckWaitlist from "@/assets/row-2-column-2.png";
import appMobile from "@/assets/fuvaro-app-mobile.png";
import appDesktop from "@/assets/fuvaro-app-desktop.png";
import blueBg from "@/assets/blue-bg.png";

export const Route = createFileRoute("/")({
  component: Landing,
});

function Navbar() {
  const links = [
    { label: "Produkt", href: "#produkt" },
    { label: "Jak to działa", href: "#jak-to-dziala" },
    { label: "Cennik", href: "#cennik" },
    { label: "FAQ", href: "#faq" },
  ];
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#050816]/70 border-b border-[rgba(24,200,255,0.12)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 shrink-0">
          <img src={logo} alt="Fuvaro" className="h-9 w-auto object-contain" />
        </a>
        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-[color:var(--muted-foreground)] hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#waitlist"
          className="btn-primary inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm"
        >
          Dołącz do waitlisty
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}

const SPEED_LINES = [
  { top: 6,  left: 4,  width: 32, dur: 2.2, delay: 0,    opacity: 0.26 },
  { top: 16, left: 18, width: 38, dur: 2.5, delay: -0.9, opacity: 0.24 },
  { top: 26, left: 8,  width: 42, dur: 2.0, delay: -1.5, opacity: 0.25 },
  { top: 36, left: 24, width: 34, dur: 2.4, delay: -0.4, opacity: 0.23 },
  { top: 46, left: 12, width: 40, dur: 2.1, delay: -1.1, opacity: 0.24 },
  { top: 56, left: 28, width: 36, dur: 2.6, delay: -0.7, opacity: 0.22 },
  { top: 66, left: 6,  width: 44, dur: 2.3, delay: -1.3, opacity: 0.23 },
  { top: 76, left: 20, width: 30, dur: 2.0, delay: -0.5, opacity: 0.22 },
  { top: 86, left: 14, width: 38, dur: 2.4, delay: -1.0, opacity: 0.21 },
  { top: 94, left: 26, width: 35, dur: 2.2, delay: -0.6, opacity: 0.20 },
];

function Hero() {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = particlesRef.current;
    if (!container) return;

    const spawn = () => {
      const p = document.createElement("div");
      p.className = "animate-wind";
      const dur = 2.2 + Math.random() * 1.4;
      const top = Math.random() * 100;
      p.style.top = `${top}%`;
      p.style.width = `${55 + Math.random() * 70}px`;
      p.style.height = "1.5px";
      p.style.background =
        "linear-gradient(to right, rgba(0,255,255,0), rgba(111,219,255,0.7), rgba(0,180,255,0.12))";
      p.style.filter = "blur(1px)";
      p.style.animationDuration = `${dur}s`;
      p.style.animationDelay = `${Math.random() * 0.4}s`;
      p.style.animationIterationCount = "1";
      p.style.animationFillMode = "forwards";
      container.appendChild(p);
      setTimeout(() => p.remove(), (dur + 0.5) * 1000);
    };

    const id = setInterval(spawn, 320);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="top" className="relative overflow-hidden min-h-[680px] lg:min-h-[780px]">

      {/* ── BACKGROUND SCENE ── */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 animate-camera-float">

          {/* unified background — single image, no clip seam */}
          <img
            src={truckBg}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              objectPosition: "52% 50%",
              maskImage: "linear-gradient(to top, black 0%, black 62%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to top, black 0%, black 62%, transparent 100%)",
            }}
          />

          {/* road glow — full-width continuity under streaks */}
          <div
            className="absolute inset-x-0 bottom-[10%] h-[28%] pointer-events-none"
            style={{
              background:
                "linear-gradient(to top, rgba(0,100,220,0.14) 0%, rgba(0,150,255,0.06) 40%, transparent 100%)",
              maskImage: "linear-gradient(to top, black 0%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to top, black 0%, transparent 100%)",
            }}
          />

          {/* cyan glow — full width, soft */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 90% 60% at 65% 55%, rgba(0,150,255,0.16), transparent 70%)",
            }}
          />

          {/* text scrim — radial fade, no hard vertical cut */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 85% 110% at 20% 48%, rgba(5,8,22,0.88) 0%, rgba(5,8,22,0.45) 42%, rgba(5,8,22,0.08) 62%, transparent 78%)",
            }}
          />

          {/* moving grid — full width, fades out at top edge */}
          <div
            className="absolute bottom-0 left-0 h-[42%] animate-grid-move opacity-[0.32] pointer-events-none"
            style={{
              width: "200%",
              backgroundImage:
                "repeating-linear-gradient(to right, rgba(0,150,255,0.15) 0px, rgba(0,150,255,0.15) 2px, transparent 2px, transparent 80px)",
              maskImage: "linear-gradient(to top, black 0%, black 35%, transparent 85%)",
              WebkitMaskImage: "linear-gradient(to top, black 0%, black 35%, transparent 85%)",
            }}
          />

          {/* bottom blend — soft fade into page background */}
          <div
            className="absolute bottom-0 left-0 right-0 h-72 pointer-events-none"
            style={{
              background:
                "linear-gradient(to top, #050816 0%, rgba(5,8,22,0.95) 18%, rgba(5,8,22,0.65) 40%, rgba(5,8,22,0.25) 65%, transparent 100%)",
            }}
          />

          {/* wheel blur — front */}
          <div
            className="absolute animate-blur-pulse pointer-events-none"
            style={{
              bottom: "19%", right: "26%",
              width: "90px", height: "20px",
              background: "radial-gradient(ellipse at center, rgba(0,180,255,0.75), rgba(0,180,255,0))",
              borderRadius: "50%",
              filter: "blur(10px)",
            }}
          />

          {/* wheel blur — back */}
          <div
            className="absolute animate-blur-pulse pointer-events-none"
            style={{
              bottom: "19%", right: "40%",
              width: "90px", height: "20px",
              background: "radial-gradient(ellipse at center, rgba(0,180,255,0.75), rgba(0,180,255,0))",
              borderRadius: "50%",
              filter: "blur(10px)",
            }}
          />

        </div>
      </div>

      {/* wind overlay — above scene, below text */}
      <div className="absolute inset-0 z-[5] pointer-events-none overflow-hidden">
        <div className="absolute inset-0">
          {SPEED_LINES.map((l, i) => (
            <span
              key={i}
              className="absolute rounded-full animate-speed-line"
              style={{
                top: `${l.top}%`,
                left: `${l.left}%`,
                width: `${l.width}%`,
                height: "1.5px",
                background:
                  "linear-gradient(to right, rgba(0,255,255,0), rgba(111,219,255,0.65), rgba(0,170,255,0.1))",
                filter: "blur(1px)",
                opacity: l.opacity,
                animationDuration: `${l.dur}s`,
                animationDelay: `${l.delay}s`,
              }}
            />
          ))}
        </div>
        <div ref={particlesRef} className="absolute inset-0" />
      </div>

      {/* ── CONTENT ── */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 pt-20 pb-32">
        <div className="max-w-xl lg:max-w-2xl">
          <h1 className="text-5xl lg:text-[68px] font-bold leading-[1.02] tracking-tight">
            Wycena tras.{" "}
            <span className="text-gradient-cyan">Informacje real-time</span> o punktach logistycznych.
          </h1>
          <p className="mt-6 text-lg text-[color:oklch(0.78_0.04_255)] max-w-xl leading-relaxed">
            kalkulator kosztów oraz informacje z terenu od społeczności kierowców - wszystko w jednym miejscu, zanim wyślesz auto w trasę.
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-8 flex flex-col sm:flex-row gap-3 max-w-lg"
          >
            <input
              type="email"
              required
              placeholder="twoj@email.pl"
              className="flex-1 rounded-full bg-[#0B1730]/80 border border-[rgba(24,200,255,0.22)] px-5 py-3.5 text-sm text-foreground placeholder:text-[color:var(--muted-foreground)] focus:outline-none focus:border-[color:var(--electric)] focus:ring-2 focus:ring-[color:var(--ring)] transition"
            />
            <button
              type="submit"
              className="btn-primary inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm whitespace-nowrap"
            >
              Dołącz do waitlisty
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
          <p className="mt-4 text-xs text-[color:var(--muted-foreground)]">
            Nie pozwól konkurencji podejmować bardziej świadomych decyzji od Ciebie.
          </p>
        </div>
      </div>

    </section>
  );
}

function Product() {
  const items = [
    {
      tag: "Real-time intel",
      title: "Sprawdzone informacje o punktach logistycznych",
      desc: "Czasy rozładunku, kolejki, parkingi, kontrole. Dane potwierdzane na żywo przez społeczność kierowców na trasie.",
      img: appMobile,
      alt: "Fuvaro — aplikacja mobilna dla kierowców",
      reverse: false,
    },
    {
      tag: "Profitability engine",
      title: "Kalkulator kosztów tras",
      desc: "Policz paliwo, opłaty drogowe, ZUS kierowcy i marżę w kilka sekund. Wiedz, czy trasa się opłaca, zanim klikniesz „przyjmuję”.",
      img: appDesktop,
      alt: "Fuvaro — kalkulator kosztów trasy dla spedytora",
      reverse: true,
    },
  ];
  return (
    <section id="produkt" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
            Dwa filary, które zmieniają sposób{" "}
            <span className="text-gradient-cyan">zarządzania transportem</span>.
          </h2>
        </div>

        <div className="mt-16 space-y-24">
          {items.map((it) => {
            const isWide = it.img === appDesktop;
            return (
              <div
                key={it.title}
                className={`grid gap-10 items-center ${
                  isWide ? "lg:grid-cols-12" : "lg:grid-cols-2"
                } ${it.reverse ? "lg:[&>*:first-child]:order-2" : ""}`}
              >
                <div className={`relative overflow-visible ${isWide ? "lg:col-span-8" : ""}`}>
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-visible">
                    <div
                      className="absolute rounded-full"
                      style={{
                        width: isWide ? "145%" : "115%",
                        height: isWide ? "110%" : "140%",
                        background:
                          "radial-gradient(circle, rgba(26,107,170,0.75) 0%, rgba(15,61,110,0.42) 32%, rgba(47,107,255,0.14) 58%, transparent 74%)",
                        filter: "blur(52px)",
                      }}
                    />
                    <div
                      className="absolute rounded-full"
                      style={{
                        width: isWide ? "105%" : "90%",
                        height: isWide ? "95%" : "110%",
                        background:
                          "radial-gradient(circle, rgba(24,200,255,0.38) 0%, rgba(47,107,255,0.2) 48%, transparent 70%)",
                        filter: "blur(36px)",
                      }}
                    />
                    <div
                      className="absolute rounded-full"
                      style={{
                        width: isWide ? "72%" : "62%",
                        height: isWide ? "68%" : "78%",
                        background:
                          "radial-gradient(circle, rgba(111,219,255,0.52) 0%, rgba(24,200,255,0.26) 52%, transparent 74%)",
                        filter: "blur(22px)",
                      }}
                    />
                  </div>
                  <div className="relative p-8 lg:p-12">
                    <img src={it.img} alt={it.alt} className="w-full h-auto object-contain" />
                  </div>
                </div>
                <div className={isWide ? "lg:col-span-4" : ""}>
                  <div className="text-[11px] uppercase tracking-[0.18em] text-[color:var(--electric)]">
                    {it.tag}
                  </div>
                  <h3 className="mt-3 text-3xl lg:text-4xl font-semibold leading-tight">
                    {it.title}
                  </h3>
                  <p className="mt-4 text-[color:var(--muted-foreground)] leading-relaxed">
                    {it.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
function HowItWorks() {
  const steps = [
    {
      icon: Calculator,
      title: "Oblicz koszt trasy",
      desc: "Wprowadź punkty A → B, ładunek i pojazd. Fuvaro pokazuje pełny koszt i marżę w czasie rzeczywistym.",
    },
    {
      icon: MapPin,
      title: "Sprawdź sytuację na miejscu",
      desc: "Zobacz live raporty od kierowców: czasy rozładunku, korki, kontrole i sytuacja na punktach logistycznych.",
    },
    {
      icon: Compass,
      title: "Podejmij lepszą decyzję przed wyjazdem",
      desc: "Zaakceptuj, odrzuć lub renegocjuj trasę z pełnymi danymi.",
    },
  ];
  return (
    <section id="jak-to-dziala" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
            Jak to działa
          </h2>
          <p className="mt-4 text-[color:var(--muted-foreground)]">
            Trzy kroki dzielą Cię od świadomych decyzji transportowych.
          </p>
        </div>

        <div className="mt-14 relative">
          <div className="hidden md:block absolute left-0 right-0 top-12 h-px section-divider" />
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((s, i) => (
              <div key={s.title} className="relative rounded-3xl glass p-8 card-hover-scale">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center justify-center h-12 w-12 rounded-2xl bg-[#0B1730] border border-[rgba(24,200,255,0.3)] glow-cyan">
                    <s.icon className="h-5 w-5 text-[color:var(--electric)]" />
                  </div>
                  <span className="font-display text-5xl font-bold text-transparent" style={{ WebkitTextStroke: "1px rgba(111,219,255,0.35)" }}>
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold">{s.title}</h3>
                <p className="mt-3 text-sm text-[color:var(--muted-foreground)] leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const plans = [
    {
      name: "Solo",
      price: "59",
      desc: "Dla kierowców i mikrofirm transportowych.",
      features: ["Mapa z ocenami punktów logistycznymi", "Osobne pokoje z czatem na żywo dla każdego punktu", "Kalkulator kosztów tras"],
      featured: false,
    },
    {
      name: "Firma",
      price: "159",
      desc: "Dla firm transportowych z flotą i zespołem.",
      features: ["Wszystko z planu Solo", "Narzędzia do zarządzania zespołem", "Wiele profili kierowców i pojazdów", "Raporty i analityka", "Priorytetowe wsparcie"],
      featured: true,
    },
  ];
  const maxFeatures = Math.max(...plans.map((p) => p.features.length));
  return (
    <section id="cennik" className="relative overflow-hidden pt-28 pb-32">
      <div
        className="absolute inset-x-0 bottom-0 z-0 pointer-events-none"
        aria-hidden="true"
        style={{ top: "38%", minHeight: "520px" }}
      >
        <img
          src={blueBg}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: "center 58%" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, #050816 0%, rgba(5,8,22,0.7) 14%, rgba(5,8,22,0.15) 38%, transparent 52%)",
          }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-32"
          style={{
            background: "linear-gradient(to top, #050816 0%, transparent 100%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
            Prosty cennik. <span className="text-gradient-cyan">Bez ukrytych kosztów.</span>
          </h2>
        </div>

        <div className="mt-14 grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-3xl p-8 lg:p-10 overflow-hidden card-hover-scale ${
                p.featured ? "glass glow-cyan" : "glass"
              }`}
            >
              {p.featured && (
                <>
                  <div className="absolute -top-32 -right-20 h-72 w-72 rounded-full blur-3xl opacity-50"
                    style={{ background: "radial-gradient(closest-side, #2F6BFF, transparent)" }} />
                  <span className="absolute top-6 right-6 chip">Najpopularniejszy</span>
                </>
              )}
              <div className="relative">
                <div className="text-sm uppercase tracking-[0.2em] text-[color:var(--electric)]">{p.name}</div>
                <div className="mt-5 flex items-baseline gap-2">
                  <span className="text-6xl font-bold tracking-tight">{p.price}</span>
                  <span className="text-[color:var(--muted-foreground)]">PLN / miesiąc</span>
                </div>
                <p className="mt-3 text-[color:var(--muted-foreground)]">{p.desc}</p>

                <ul className="mt-8 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className="h-5 w-5 text-[color:var(--electric)] shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                  {Array.from({ length: maxFeatures - p.features.length }).map((_, i) => (
                    <li key={`spacer-${i}`} className="invisible pointer-events-none" aria-hidden="true">
                      <div className="flex items-start gap-3 text-sm">
                        <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5" />
                        <span>placeholder</span>
                      </div>
                    </li>
                  ))}
                </ul>

                <a
                  href="#waitlist"
                  className={`mt-10 inline-flex w-full items-center justify-center gap-2 rounded-full py-3.5 text-sm font-medium transition ${
                    p.featured
                      ? "btn-primary"
                      : "btn-waitlist-outline border border-[rgba(255,159,28,0.45)] text-foreground hover:bg-[rgba(255,159,28,0.12)]"
                  }`}
                >
                  Dołącz do waitlisty
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const items = [
    { q: "Kiedy Fuvaro będzie dostępne?", a: "Pracujemy nad pierwszą wersją produkcyjną. Osoby z waitlisty otrzymają dostęp w pierwszej kolejności oraz zniżkę startową." },
    { q: "Czy waitlista wiąże mnie z zakupem?", a: "Nie. Dołączenie do waitlisty jest bezpłatne i niezobowiązujące. Sam decydujesz, czy aktywujesz subskrypcję po starcie." },
    { q: "Skąd Fuvaro czerpie dane o punktach logistycznych?", a: "Dane pochodzą od społeczności kierowców na trasie oraz integracji z partnerami logistycznymi. Wszystko jest weryfikowane w czasie rzeczywistym." },
    { q: "Czy mogę korzystać z Fuvaro jako jednoosobowy przewoźnik?", a: "Tak. Plan Solo został zaprojektowany właśnie z myślą o kierowcach i mikroprzedsiębiorstwach transportowych." },
    { q: "Jak działa kalkulator kosztów?", a: "Uwzględnia paliwo, opłaty drogowe (toll), ZUS i koszty pracy kierowcy, amortyzację oraz marżę — pokazuje rentowność trasy przed jej przyjęciem." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative py-28">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <div className="text-center">
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
            Najczęstsze pytania
          </h2>
        </div>
        <div className="mt-12 space-y-3">
          {items.map((it, i) => (
            <div key={it.q} className="rounded-2xl glass overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-6 px-6 py-5 text-left"
              >
                <span className="font-medium">{it.q}</span>
                <ChevronDown
                  className="h-5 w-5 text-[color:var(--electric)] transition-transform duration-300"
                  style={{ transform: open === i ? "rotate(180deg)" : "rotate(0deg)" }}
                />
              </button>
              <div
                style={{
                  display: "grid",
                  gridTemplateRows: open === i ? "1fr" : "0fr",
                  transition: "grid-template-rows 0.32s cubic-bezier(0.4,0,0.2,1)",
                }}
              >
                <div style={{ overflow: "hidden" }}>
                  <div
                    className="px-6 pb-5 text-sm text-[color:var(--muted-foreground)] leading-relaxed"
                    style={{
                      opacity: open === i ? 1 : 0,
                      transform: open === i ? "translateY(0)" : "translateY(-6px)",
                      transition: "opacity 0.28s ease, transform 0.28s ease",
                    }}
                  >
                    {it.a}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="waitlist" className="relative py-28 overflow-visible">
      <div className="mx-auto max-w-6xl px-6 lg:px-10 overflow-visible">
        <div className="relative rounded-[2rem] overflow-hidden border border-[rgba(24,200,255,0.28)] px-6 py-12 lg:px-10 lg:py-16 text-center min-h-[520px] lg:min-h-[580px] waitlist-hover-scale">
          <img
            src={truckWaitlist}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover scale-x-[-1] pointer-events-none"
            style={{ objectPosition: "center center" }}
          />

          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 90% 80% at 50% 55%, rgba(0,150,255,0.18), transparent 70%)",
            }}
          />

          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, transparent 0%, transparent 48%, rgba(5,8,22,0.35) 68%, rgba(5,8,22,0.55) 100%)",
            }}
          />

          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, rgba(5,8,22,0.5) 0%, transparent 22%, transparent 78%, rgba(5,8,22,0.6) 100%)",
            }}
          />

          <div className="absolute inset-0 bg-grid opacity-15 pointer-events-none" />

          <div className="relative z-10 flex flex-col h-full min-h-[440px] lg:min-h-[500px]">
            <div className="text-center">
              <h2 className="text-4xl lg:text-6xl font-bold leading-tight tracking-tight">
                Nie czekaj, aż okazja <span className="text-gradient-cyan">odjedzie</span>
              </h2>
              <p className="mt-4 text-lg lg:text-xl text-[color:var(--muted-foreground)]">
                Dołącz do waitlisty Fuvaro
              </p>
            </div>

            <div className="mt-6 lg:mt-0 lg:absolute lg:left-[12.5%] lg:top-[34%] lg:w-[42%] lg:h-[32%] flex flex-col justify-center text-center lg:text-left px-1">
              <p className="text-sm lg:text-[15px] text-[color:var(--muted-foreground)] leading-relaxed max-w-md mx-auto lg:mx-0">
                Bądź wśród pierwszych, którzy zmienią sposób zarządzania transportem.
              </p>

              <form
                onSubmit={(e) => e.preventDefault()}
                className="mt-4 lg:mt-5 flex flex-col lg:flex-row lg:items-center gap-2 max-w-xs mx-auto lg:mx-0 lg:max-w-[92%]"
              >
                <input
                  type="email"
                  required
                  placeholder="twoj@email.pl"
                  className="w-full lg:flex-1 lg:min-w-0 rounded-full bg-[#0B1730]/85 border border-[rgba(24,200,255,0.22)] px-4 py-2.5 text-sm text-foreground placeholder:text-[color:var(--muted-foreground)] focus:outline-none focus:border-[color:var(--electric)] focus:ring-2 focus:ring-[color:var(--ring)] transition"
                />
                <button
                  type="submit"
                  className="btn-primary inline-flex w-full lg:w-auto shrink-0 items-center justify-center gap-1.5 rounded-full px-3.5 py-2.5 text-xs whitespace-nowrap"
                >
                  Dołącz do waitlisty
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </form>
            </div>

            <div className="mt-auto pt-8 lg:pt-0 lg:absolute lg:bottom-6 lg:left-0 lg:right-0 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-[color:var(--muted-foreground)]">
              <span className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[color:var(--electric)]" />Bez zobowiązań</span>
              <span className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[color:var(--electric)]" />Wczesny dostęp</span>
              <span className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[color:var(--electric)]" />Zniżka dla pierwszych</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[rgba(24,200,255,0.12)] py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Fuvaro" className="h-7 w-auto object-contain" />
        </div>
        <p className="text-xs text-[color:var(--muted-foreground)]">
          © {new Date().getFullYear()} Fuvaro. Real-time inteligencja transportu.
        </p>
      </div>
    </footer>
  );
}

function Landing() {
  return (
    <div className="min-h-screen text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Product />
        <HowItWorks />

        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
