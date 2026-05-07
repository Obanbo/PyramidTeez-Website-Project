import React from 'react';

const navItems = ['About', 'Services', 'Apparel', 'Flyers', 'Contact'];

const icons = {
  ArrowRight: 'M5 12h14 M13 5l7 7-7 7',
  BadgeCheck: 'M9 12l2 2 4-5 M12 3l2.2 1.2 2.5-.2 1.1 2.3 2.2 1.3-.4 2.5 1.4 2.1-1.4 2.1.4 2.5-2.2 1.3-1.1 2.3-2.5-.2L12 21l-2.2-1.2-2.5.2-1.1-2.3L4 16.4l.4-2.5L3 11.8l1.4-2.1L4 7.2l2.2-1.3L7.3 3.6l2.5.2L12 3z',
  Brush: 'M9 21c-3 0-5-1-5-3 0-1.5 1.4-2.5 3-2.5 1.5 0 2 .5 3 0 1-.5 1-2 2-3l7-7a2.1 2.1 0 013 3l-7 7c-1 1-2.5 1-3 2-.5 1 .2 3.5-3 3.5z',
  ChefHat: 'M6 13.5a4 4 0 116-5 4 4 0 116 5V21H6v-7.5z M8 17h8',
  Instagram: 'M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5z M8 12a4 4 0 108 0 4 4 0 00-8 0z M17.5 6.5h.01',
  Mail: 'M4 4h16v16H4z M4 6l8 7 8-7',
  MapPin: 'M12 21s7-5.2 7-12a7 7 0 10-14 0c0 6.8 7 12 7 12z M12 11a2 2 0 100-4 2 2 0 000 4z',
  Menu: 'M4 6h16 M4 12h16 M4 18h16',
  MessageCircle: 'M21 11.5a8.5 8.5 0 01-12.2 7.7L3 21l1.8-5.4A8.5 8.5 0 1121 11.5z',
  Phone: 'M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.4 19.4 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .4 2 .7 2.8a2 2 0 01-.5 2.1L8.1 9.9a16 16 0 006 6l1.3-1.2a2 2 0 012.1-.5c.9.3 1.8.6 2.8.7a2 2 0 011.7 2z',
  Printer: 'M6 9V2h12v7 M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2 M6 14h12v8H6z',
  Shirt: 'M8 4l4 2 4-2 4 3-2 4-2-1v10H8V10l-2 1-2-4 4-3z',
  Sparkles: 'M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2z M19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16z',
  Star: 'M12 2l3 6 6.5.9-4.7 4.6 1.1 6.5L12 17l-5.9 3 1.1-6.5L2.5 8.9 9 8l3-6z',
  Truck: 'M3 5h12v11H3z M15 9h4l2 3v4h-6z M7 19a2 2 0 100-4 2 2 0 000 4z M17 19a2 2 0 100-4 2 2 0 000 4z',
  Wand2: 'M15 4l5 5 M4 20l10-10 M12 6l6 6 M5 5l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2z M19 16l.7 1.5L21 18l-1.3.5L19 20l-.7-1.5L17 18l1.3-.5L19 16z',
};

function Icon({ name, className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={icons[name]} />
    </svg>
  );
}

const services = [
  {
    icon: 'Shirt',
    title: 'Custom Apparel',
    description: 'Premium tees, hoodies, staff uniforms, event shirts, and statement pieces with crisp custom artwork.',
  },
  {
    icon: 'ChefHat',
    title: 'Restaurant Flyers',
    description: 'High-impact menus, food promos, grand opening flyers, and social graphics that make customers hungry.',
  },
  {
    icon: 'Brush',
    title: 'Brand Design',
    description: 'Polished logo placement, color direction, typography, and campaign visuals for a luxury streetwear feel.',
  },
  {
    icon: 'Printer',
    title: 'Print-Ready Production',
    description: 'Clean layouts prepared for apparel printing, digital promotion, and fast local marketing launches.',
  },
];

const apparel = [
  'Signature Gold Pyramid Tee',
  'Luxury Staff Uniform Set',
  'Event Drop Hoodie',
  'Bold Brand Merch Pack',
];

const flyers = [
  'Weekend Wings Special',
  'Grand Opening Promo',
  'Brunch Menu Feature',
  'Late Night Food Deal',
];

function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-black text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.24),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(255,214,102,0.16),transparent_26%),linear-gradient(135deg,#050505_0%,#111111_48%,#050505_100%)]" />
      <div className="fixed inset-0 -z-10 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:72px_72px]" />

      <header className="sticky top-0 z-40 border-b border-gold-400/15 bg-black/75 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#home" className="group flex items-center gap-3" aria-label="Pyramid Teez home">
            <span className="grid size-11 place-items-center rounded-2xl border border-gold-300/40 bg-gold-400/10 shadow-gold">
              <Icon name="Sparkles" className="size-5 text-gold-300" />
            </span>
            <span>
              <span className="block text-lg font-black uppercase tracking-[0.24em] text-gold-200">Pyramid</span>
              <span className="-mt-1 block text-sm font-semibold uppercase tracking-[0.35em] text-white/80">Teez</span>
            </span>
          </a>

          <div className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70 transition hover:text-gold-200">
                {item}
              </a>
            ))}
          </div>

          <a href="#contact" className="hidden rounded-full bg-gold-gradient px-5 py-3 text-sm font-black uppercase tracking-[0.18em] text-black shadow-gold transition hover:scale-105 md:inline-flex">
            Start Order
          </a>
          <button className="rounded-full border border-gold-300/30 p-3 text-gold-200 md:hidden" aria-label="Open menu">
            <Icon name="Menu" className="size-5" />
          </button>
        </nav>
      </header>

      <main>
        <section id="home" className="relative mx-auto grid max-w-7xl gap-12 px-5 pb-24 pt-16 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:pb-32 lg:pt-24">
          <div className="flex flex-col justify-center">
            <div className="mb-6 inline-flex w-fit items-center gap-3 rounded-full border border-gold-300/25 bg-white/5 px-4 py-2 text-sm font-semibold text-gold-100 backdrop-blur">
              <Icon name="Star" className="size-4 fill-gold-300 text-gold-300" />
              Premium black & gold custom design studio
            </div>
            <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Custom apparel and flyers that make your brand look
              <span className="block bg-gold-gradient bg-clip-text text-transparent">royal.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
              Pyramid Teez creates bold shirts, merch, restaurant flyers, and promo visuals for entrepreneurs, food brands, events, and teams that want to stand out.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a href="#contact" className="inline-flex items-center justify-center gap-3 rounded-full bg-gold-gradient px-7 py-4 font-black uppercase tracking-[0.16em] text-black shadow-gold transition hover:scale-105">
                Get a Quote <Icon name="ArrowRight" className="size-5" />
              </a>
              <a href="#apparel" className="inline-flex items-center justify-center rounded-full border border-gold-300/30 px-7 py-4 font-bold uppercase tracking-[0.16em] text-gold-100 transition hover:border-gold-200 hover:bg-gold-300/10">
                View Work
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[3rem] bg-gold-gradient opacity-20 blur-3xl" />
            <div className="relative rounded-[2rem] border border-gold-300/25 bg-white/[0.06] p-5 shadow-2xl backdrop-blur-xl">
              <div className="rounded-[1.5rem] border border-gold-300/20 bg-black p-5">
                <div className="aspect-[4/5] rounded-[1.25rem] bg-[radial-gradient(circle_at_50%_22%,rgba(255,214,102,.32),transparent_30%),linear-gradient(145deg,#171717,#050505)] p-6">
                  <div className="flex h-full flex-col justify-between rounded-[1rem] border border-gold-300/20 bg-black/55 p-6">
                    <div className="flex items-center justify-between text-gold-200">
                      <span className="text-xs font-black uppercase tracking-[0.3em]">New Drop</span>
                      <Icon name="BadgeCheck" className="size-6" />
                    </div>
                    <div className="mx-auto grid size-56 place-items-center rounded-full border border-gold-300/20 bg-gold-300/10 sm:size-64">
                      <div className="clip-pyramid h-36 w-44 bg-gold-gradient shadow-gold" />
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-[0.35em] text-white/50">Pyramid Teez</p>
                      <h2 className="mt-2 text-4xl font-black text-white">Gold Standard Merch</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="border-y border-gold-300/10 bg-white/[0.03] py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[.8fr_1.2fr] lg:px-8">
            <div>
              <p className="section-kicker">About Pyramid Teez</p>
              <h2 className="section-title">Built for brands that want more than basic.</h2>
            </div>
            <div className="space-y-6 text-lg leading-8 text-white/70">
              <p>
                Pyramid Teez blends streetwear energy, luxury color palettes, and clean marketing design to help small businesses and creators launch visuals that feel premium from the first impression.
              </p>
              <div className="grid gap-4 sm:grid-cols-3">
                {['Fast concepts', 'Sharp detail', 'Print-ready files'].map((item) => (
                  <div key={item} className="rounded-2xl border border-gold-300/15 bg-black/45 p-5 text-center font-bold text-gold-100">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="section-kicker justify-center">Services</p>
            <h2 className="section-title">Everything you need for a polished launch.</h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.map(({ icon, title, description }) => (
              <article key={title} className="group rounded-[1.5rem] border border-gold-300/15 bg-white/[0.045] p-6 transition hover:-translate-y-2 hover:border-gold-200/50 hover:bg-gold-300/10">
                <div className="mb-6 grid size-14 place-items-center rounded-2xl bg-gold-gradient text-black shadow-gold">
                  <Icon name={icon} className="size-7" />
                </div>
                <h3 className="text-xl font-black text-white">{title}</h3>
                <p className="mt-4 leading-7 text-white/65">{description}</p>
              </article>
            ))}
          </div>
        </section>

        <Showcase id="apparel" kicker="Custom Apparel Showcase" title="Merch that feels exclusive before it sells out." items={apparel} type="apparel" />
        <Showcase id="flyers" kicker="Restaurant Flyer Showcase" title="Food promos with scroll-stopping flavor." items={flyers} type="flyer" />

        <section id="contact" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <div className="grid overflow-hidden rounded-[2rem] border border-gold-300/20 bg-white/[0.055] shadow-2xl lg:grid-cols-[.9fr_1.1fr]">
            <div className="bg-[radial-gradient(circle_at_top,rgba(255,214,102,.22),transparent_38%),#080808] p-8 sm:p-10 lg:p-12">
              <p className="section-kicker">Contact</p>
              <h2 className="section-title">Ready to build your next premium look?</h2>
              <p className="mt-5 leading-8 text-white/70">
                Send your idea, business name, colors, deadline, and quantity. Pyramid Teez will help shape it into a clean design package.
              </p>
              <div className="mt-8 space-y-4">
                <ContactLink icon="Phone" text="Call or text for custom orders" href="tel:+10000000000" />
                <ContactLink icon="Mail" text="hello@pyramidteez.com" href="mailto:hello@pyramidteez.com" />
                <ContactLink icon="MapPin" text="Serving local brands, restaurants, and events" href="#home" />
                <ContactLink icon="Instagram" text="Follow the latest drops and flyers" href="#home" />
              </div>
            </div>
            <form className="grid gap-5 p-8 sm:p-10 lg:p-12">
              <div className="grid gap-5 sm:grid-cols-2">
                <Input label="Name" placeholder="Your name" />
                <Input label="Business" placeholder="Brand or restaurant" />
              </div>
              <Input label="Email" type="email" placeholder="you@example.com" />
              <Input label="Project Type" placeholder="Custom tees, flyer, branding..." />
              <label className="grid gap-2 text-sm font-bold uppercase tracking-[0.16em] text-gold-100">
                Project Details
                <textarea className="min-h-36 rounded-2xl border border-gold-300/15 bg-black/55 px-4 py-3 text-base normal-case tracking-normal text-white outline-none transition placeholder:text-white/35 focus:border-gold-200" placeholder="Tell us what you need designed." />
              </label>
              <button type="button" className="inline-flex items-center justify-center gap-3 rounded-full bg-gold-gradient px-7 py-4 font-black uppercase tracking-[0.16em] text-black shadow-gold transition hover:scale-[1.02]">
                Request Design Quote <Icon name="Wand2" className="size-5" />
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-gold-300/10 px-5 py-8 text-center text-sm text-white/50">
        © 2026 Pyramid Teez. Premium apparel, flyers, and visual branding.
      </footer>

      <a
        href="https://wa.me/10000000000?text=Hi%20Pyramid%20Teez%2C%20I%20need%20a%20custom%20design."
        className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-3 rounded-full bg-[#25D366] px-5 py-4 font-black text-black shadow-2xl transition hover:scale-105"
        aria-label="Message Pyramid Teez on WhatsApp"
      >
        <Icon name="MessageCircle" className="size-6" />
        <span className="hidden sm:inline">WhatsApp</span>
      </a>
    </div>
  );
}

function Showcase({ id, kicker, title, items, type }) {
  return (
    <section id={id} className="bg-white/[0.025] py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="section-kicker">{kicker}</p>
            <h2 className="section-title">{title}</h2>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-gold-300/20 px-4 py-2 text-sm font-bold text-gold-100">
            <Icon name="Truck" className="size-4" /> Designed to move fast
          </div>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <article key={item} className="group overflow-hidden rounded-[1.5rem] border border-gold-300/15 bg-black shadow-2xl">
              <div className="relative aspect-[4/5] bg-[linear-gradient(145deg,#1b1b1b,#050505)] p-5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(255,214,102,.24),transparent_34%)]" />
                <div className="relative flex h-full flex-col justify-between rounded-[1rem] border border-gold-300/15 bg-white/[0.04] p-5 transition group-hover:border-gold-200/55">
                  <span className="w-fit rounded-full bg-gold-300/15 px-3 py-1 text-xs font-black uppercase tracking-[0.22em] text-gold-100">0{index + 1}</span>
                  <Icon name={type === 'apparel' ? 'Shirt' : 'ChefHat'} className="mx-auto size-24 text-gold-200" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-white/40">Pyramid Teez</p>
                    <h3 className="mt-2 text-2xl font-black text-white">{item}</h3>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactLink({ icon, text, href }) {
  return (
    <a href={href} className="flex items-center gap-3 rounded-2xl border border-gold-300/15 bg-black/45 p-4 text-white/75 transition hover:border-gold-200/50 hover:text-gold-100">
      <Icon name={icon} className="size-5 text-gold-200" />
      <span>{text}</span>
    </a>
  );
}

function Input({ label, type = 'text', placeholder }) {
  return (
    <label className="grid gap-2 text-sm font-bold uppercase tracking-[0.16em] text-gold-100">
      {label}
      <input type={type} className="rounded-2xl border border-gold-300/15 bg-black/55 px-4 py-3 text-base normal-case tracking-normal text-white outline-none transition placeholder:text-white/35 focus:border-gold-200" placeholder={placeholder} />
    </label>
  );
}

export default App;
