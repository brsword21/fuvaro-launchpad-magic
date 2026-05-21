import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Calculator,
  Radio,
  MapPin,
  CheckCircle2,
  Compass,
  Gauge,
  Users,
  Sparkles,
  ChevronDown,
} from "lucide-react";
import logo from "@/assets/fuvaro-logo.png";
import truck from "@/assets/fuvaro-truck.png";

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

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid pointer-events-none" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[520px] w-[900px] rounded-full blur-3xl opacity-40"
        style={{ background: "radial-gradient(closest-side, #2F6BFF, transparent)" }} />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-20 pb-28 grid lg:grid-cols-[1.05fr_1fr] gap-14 items-center">
        <div>
          <span className="chip">Rewolucja w zarządzaniu transportem</span>
          <h1 className="mt-6 text-5xl lg:text-[68px] font-bold leading-[1.02] tracking-tight">
            Wycena tras.{" "}
            <span className="text-gradient-cyan">Informacje real-time</span> o punktach logistycznych.
          </h1>
          <p className="mt-6 text-lg text-[color:var(--muted-foreground)] max-w-xl leading-relaxed">
            Kalkulator kosztów i informacje z terenu od społeczności kierowców —
            wszystko w jednym miejscu, zanim wyślesz auto w trasę.
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

        <div className="relative">
          <div className="absolute -inset-6 rounded-3xl blur-3xl opacity-60"
            style={{ background: "radial-gradient(closest-side, rgba(24,200,255,0.35), transparent 70%)" }} />
          <div className="relative rounded-3xl overflow-hidden border border-[rgba(24,200,255,0.22)] glass">
            <img src={truck} alt="Fuvaro — inteligentny transport" className="w-full h-auto object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#050816]/60 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
              <div className="glass rounded-2xl px-4 py-3 flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-[#18C8FF] shadow-[0_0_12px_#18C8FF] animate-pulse" />
                <div className="text-xs">
                  <div className="text-foreground font-medium">Live · 142 kierowców</div>
                  <div className="text-[color:var(--muted-foreground)]">Trasa PL → DE · aktualizacja 12s temu</div>
                </div>
              </div>
              <div className="glass rounded-2xl px-4 py-3 hidden sm:block">
                <div className="text-[10px] uppercase tracking-widest text-[color:var(--muted-foreground)]">Marża</div>
                <div className="text-lg font-semibold text-gradient-cyan">+18,4%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  const cards = [
    {
      icon: Calculator,
      title: "Kalkulator kosztów tras",
      desc: "Policz paliwo, opłaty drogowe, ZUS kierowcy i marżę w kilka sekund. Wiedz, czy trasa się opłaca, zanim klikniesz „przyjmuję”.",
      tag: "Profitability engine",
    },
    {
      icon: Radio,
      title: "Sprawdzone informacje o punktach logistycznych",
      desc: "Czasy rozładunku, kolejki, parkingi, kontrole. Dane potwierdzane na żywo przez społeczność kierowców na trasie.",
      tag: "Real-time intel",
    },
  ];
  return (
    <section id="produkt" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <span className="chip">Produkt</span>
          <h2 className="mt-5 text-4xl lg:text-5xl font-bold leading-tight">
            Dwa filary, które zmieniają sposób{" "}
            <span className="text-gradient-cyan">zarządzania transportem</span>.
          </h2>
        </div>
        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {cards.map((c) => (
            <div key={c.title} className="group relative rounded-3xl glass p-8 overflow-hidden">
              <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full blur-3xl opacity-40 group-hover:opacity-70 transition-opacity"
                style={{ background: "radial-gradient(closest-side, #18C8FF, transparent)" }} />
              <div className="relative">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-2xl bg-[#0B1730] border border-[rgba(24,200,255,0.3)] glow-cyan">
                  <c.icon className="h-5 w-5 text-[color:var(--electric)]" />
                </div>
                <div className="mt-6 text-[11px] uppercase tracking-[0.18em] text-[color:var(--electric)]">
                  {c.tag}
                </div>
                <h3 className="mt-2 text-2xl font-semibold">{c.title}</h3>
                <p className="mt-3 text-[color:var(--muted-foreground)] leading-relaxed">
                  {c.desc}
                </p>

                <div className="mt-8 h-40 rounded-2xl border border-[rgba(24,200,255,0.18)] bg-[#050816]/60 relative overflow-hidden">
                  <div className="absolute inset-0 bg-grid opacity-60" />
                  <div className="absolute inset-x-6 bottom-6 flex items-end gap-1.5">
                    {[28, 52, 38, 64, 80, 46, 72, 90, 58, 76, 96, 68].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-sm"
                        style={{
                          height: `${h}%`,
                          background: "linear-gradient(180deg, #6FDBFF, #2F6BFF)",
                          opacity: 0.3 + (i / 12) * 0.7,
                        }}
                      />
                    ))}
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
      desc: "Zaakceptuj, odrzuć lub renegocjuj trasę z pełnymi danymi — nie na ślepo.",
    },
  ];
  return (
    <section id="jak-to-dziala" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <div className="max-w-2xl">
            <span className="chip">Workflow</span>
            <h2 className="mt-5 text-4xl lg:text-5xl font-bold leading-tight">
              Jak to działa
            </h2>
            <p className="mt-4 text-[color:var(--muted-foreground)]">
              Trzy kroki dzielą Cię od świadomych decyzji transportowych.
            </p>
          </div>
        </div>

        <div className="mt-14 relative">
          <div className="hidden md:block absolute left-0 right-0 top-12 h-px section-divider" />
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((s, i) => (
              <div key={s.title} className="relative rounded-3xl glass p-8">
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

function Features() {
  const items = [
    { icon: Gauge, title: "Live marża per trasa", desc: "Widzisz natychmiast czy zlecenie jest opłacalne." },
    { icon: Users, title: "Społeczność kierowców", desc: "Tysiące oczu na drodze — sprawdzone raporty z terenu." },
    { icon: Sparkles, title: "Inteligentne sugestie", desc: "AI proponuje optymalizacje trasy i kosztów." },
    { icon: Radio, title: "Powiadomienia real-time", desc: "Kontrole, korki, kolejki — wszystko zanim wyjedziesz." },
  ];
  return (
    <section id="funkcje" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <span className="chip">Live operations</span>
          <h2 className="mt-5 text-4xl lg:text-5xl font-bold leading-tight">
            Wszystko, czego potrzebuje{" "}
            <span className="text-gradient-cyan">nowoczesna spedycja</span>.
          </h2>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((f) => (
            <div key={f.title} className="rounded-2xl glass p-6">
              <div className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-[#0B1730] border border-[rgba(24,200,255,0.3)]">
                <f.icon className="h-4 w-4 text-[color:var(--electric)]" />
              </div>
              <h3 className="mt-5 text-base font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-[color:var(--muted-foreground)] leading-relaxed">{f.desc}</p>
            </div>
          ))}
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
      features: ["Pełny dostęp do funkcji", "Społeczność kierowców", "Kalkulator kosztów tras", "Powiadomienia real-time"],
      featured: false,
    },
    {
      name: "Firma",
      price: "159",
      desc: "Dla firm transportowych z flotą i zespołem.",
      features: ["Wszystko z planu Solo", "Zarządzanie zespołem", "Wielu kierowców i pojazdów", "Raporty i analityka", "Priorytetowe wsparcie"],
      featured: true,
    },
  ];
  return (
    <section id="cennik" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <span className="chip">Cennik</span>
          <h2 className="mt-5 text-4xl lg:text-5xl font-bold leading-tight">
            Prosty cennik. <span className="text-gradient-cyan">Bez ukrytych kosztów.</span>
          </h2>
        </div>

        <div className="mt-14 grid lg:grid-cols-2 gap-6 max-w-5xl">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-3xl p-8 lg:p-10 overflow-hidden ${
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
                </ul>

                <a
                  href="#waitlist"
                  className={`mt-10 inline-flex w-full items-center justify-center gap-2 rounded-full py-3.5 text-sm font-medium transition ${
                    p.featured
                      ? "btn-primary"
                      : "border border-[rgba(24,200,255,0.35)] text-foreground hover:bg-[rgba(24,200,255,0.08)]"
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
          <span className="chip">FAQ</span>
          <h2 className="mt-5 text-4xl lg:text-5xl font-bold leading-tight">
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
                  className={`h-5 w-5 text-[color:var(--electric)] transition-transform ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-5 -mt-1 text-sm text-[color:var(--muted-foreground)] leading-relaxed">
                  {it.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="waitlist" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="relative rounded-[2rem] overflow-hidden border border-[rgba(24,200,255,0.28)] p-12 lg:p-20 text-center"
          style={{
            background:
              "radial-gradient(ellipse 80% 100% at 50% 0%, rgba(47,107,255,0.35), transparent 60%), linear-gradient(180deg, #081328, #050816)",
          }}
        >
          <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-72 w-[700px] rounded-full blur-3xl opacity-50"
            style={{ background: "radial-gradient(closest-side, #18C8FF, transparent)" }} />

          <div className="relative">
            <span className="chip">Waitlista otwarta</span>
            <h2 className="mt-6 text-4xl lg:text-6xl font-bold leading-tight tracking-tight">
              Dołącz do waitlisty <span className="text-gradient-cyan">Fuvaro</span>
            </h2>
            <p className="mt-5 text-[color:var(--muted-foreground)] max-w-xl mx-auto">
              Bądź wśród pierwszych, którzy zmienią sposób zarządzania transportem.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-10 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
            >
              <input
                type="email"
                required
                placeholder="twoj@email.pl"
                className="flex-1 rounded-full bg-[#0B1730]/80 border border-[rgba(24,200,255,0.22)] px-5 py-3.5 text-sm text-foreground placeholder:text-[color:var(--muted-foreground)] focus:outline-none focus:border-[color:var(--electric)] focus:ring-2 focus:ring-[color:var(--ring)] transition"
              />
              <button
                type="submit"
                className="btn-primary inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm whitespace-nowrap"
              >
                Dołącz do waitlisty
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-[color:var(--muted-foreground)]">
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
        <Benefits />
        <HowItWorks />
        <Features />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
