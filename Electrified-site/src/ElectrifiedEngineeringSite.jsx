import { useEffect, useState } from "react";
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Sun,
  Battery,
  Leaf,
  ShieldCheck,
  Wrench,
  Users,
  Building2,
  Globe2,
  CheckCircle2,
} from "lucide-react";

// ✅ Minimal Button & Card replacements
function Button({ children, variant = "default", className = "", ...props }) {
  let base =
    "px-4 py-2 font-medium text-sm rounded-md transition-colors focus:outline-none";
  let styles =
    variant === "outline"
      ? "border border-slate-300 text-slate-700 hover:bg-slate-100"
      : variant === "secondary"
      ? "bg-slate-700 text-white hover:bg-slate-800"
      : "bg-emerald-600 text-white hover:bg-emerald-700";

  return (
    <button className={`${base} ${styles} ${className}`} {...props}>
      {children}
    </button>
  );
}

function Card({ children, className = "" }) {
  return (
    <div className={`rounded-xl border bg-white shadow-sm ${className}`}>
      {children}
    </div>
  );
}
function CardHeader({ children, className = "" }) {
  return <div className={`p-4 border-b ${className}`}>{children}</div>;
}
function CardTitle({ children, className = "" }) {
  return <h3 className={`font-semibold ${className}`}>{children}</h3>;
}
function CardContent({ children, className = "" }) {
  return <div className={`p-4 ${className}`}>{children}</div>;
}

// ✅ Main site component
export default function ElectrifiedEngineeringSite() {
  const [open, setOpen] = useState(false);

  // Smooth scrolling
  useEffect(() => {
    const handleLinkClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (!target) return;
      const id = target.getAttribute("href").slice(1);
      const el = document.getElementById(id);
      if (el) {
        e.preventDefault();
        const y = el.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: y, behavior: "smooth" });
        setOpen(false);
      }
    };
    document.addEventListener("click", handleLinkClick);
    return () => document.removeEventListener("click", handleLinkClick);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <a href="#home" className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-xl bg-emerald-600 grid place-items-center text-white font-bold">
                EEL
              </div>
              <div className="leading-tight">
                <div className="font-semibold">Electrified Engineering Ltd</div>
                <div className="text-xs text-slate-500">
                  Sustainable Power & Facilities Management
                </div>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-6 text-sm">
              {[
                ["Home", "home"],
                ["About", "about"],
                ["Services", "services"],
                ["Why Us", "why"],
                ["Clients", "clients"],
                ["Team", "team"],
                ["Contact", "contact"],
              ].map(([label, id]) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className="hover:text-emerald-700"
                >
                  {label}
                </a>
              ))}
              <a href="#contact">
                <Button className="rounded-2xl">Get a Quote</Button>
              </a>
            </nav>

            <button
              className="md:hidden p-2"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {open && (
          <div className="md:hidden border-t border-slate-200">
            <div className="px-4 py-3 grid gap-3 text-sm">
              {[
                ["Home", "home"],
                ["About", "about"],
                ["Services", "services"],
                ["Why Us", "why"],
                ["Clients", "clients"],
                ["Team", "team"],
                ["Contact", "contact"],
              ].map(([label, id]) => (
                <a key={id} href={`#${id}`} className="py-1">
                  {label}
                </a>
              ))}
              <a href="#contact">
                <Button className="w-full rounded-2xl">Get a Quote</Button>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">
            Empowering Africa with sustainable energy & smart facilities
            management
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            We deliver alternative power solutions and integrated FM services
            across Nigeria and Sub-Saharan Africa—reliable, efficient, and
            tailored to your needs.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#services">
              <Button className="rounded-2xl">Explore Services</Button>
            </a>
            <a href="#contact">
              <Button variant="outline" className="rounded-2xl">
                Talk to Us
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold">Who We Are</h2>
          <p className="mt-4 text-slate-600">
            Electrified Engineering Limited (EEL) is a dynamic power and
            facilities management company incorporated in Nigeria in 2021. We
            specialise in renewable energy systems, backup power solutions, and
            comprehensive facilities management.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-slate-500">
          © {new Date().getFullYear()} Electrified Engineering Limited. All
          rights reserved.
        </div>
      </footer>
    </div>
  );
}
