// src/components/PromoDeals.jsx
import React, { useEffect, useRef, useState } from "react";

/**
 * PromoDeals — 3 pastel promo cards (responsive + animated)
 * React + TailwindCSS only. Copy–paste ready.
 */

export default function PromoDeals({ items = defaultItems }) {
  const wrapRef = useRef(null);
  const [shown, setShown] = useState({});

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("data-id");
          if (entry.isIntersecting) {
            setShown((s) => ({ ...s, [id]: true }));
            obs.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.14 }
    );
    el.querySelectorAll("[data-card]").forEach((n) => obs.observe(n));
    return () => obs.disconnect();
  }, []);

  return (
    <section
      aria-label="Promotions"
      className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6"
    >
      <div ref={wrapRef} className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {items.map((it, i) => (
          <article
            key={it.id}
            data-card
            data-id={it.id}
            className={[
              "relative isolate overflow-hidden rounded-2xl border border-slate-100 p-6 shadow-sm transition-all duration-700 ease-out",
              bgTone(it.bg),
              shown[it.id] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
              "hover:shadow-md hover:-translate-y-0.5",
            ].join(" ")}
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            {/* LEFT SIDE: Text */}
            <div className="relative z-10 max-w-[60%]">
              <p className="text-[11px] font-semibold uppercase tracking-[.18em] text-slate-500">
                {it.category}
              </p>
              <h3 className="mt-1 text-[1.55rem] leading-snug font-semibold text-slate-800">
                {it.title}
              </h3>
              <div className="mt-3 flex items-center gap-3">
                <span className="text-[1.6rem] font-bold text-rose-600">
                  ${it.price.toFixed(2)}
                </span>
                {it.oldPrice != null && (
                  <span className="text-slate-400 line-through">
                    ${it.oldPrice.toFixed(2)}
                  </span>
                )}
              </div>
              <div className="mt-5">
                <a
                  href={it.href || "#"}
                  className="inline-flex items-center rounded-full bg-sky-500 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2"
                >
                  {it.cta || "Shop now"}
                </a>
              </div>
            </div>

            {/* RIGHT SIDE: Image */}
            <div className="pointer-events-none absolute inset-y-0 right-0 flex w-[48%] items-center justify-end pr-3">
              <img
                src={it.image}
                alt={it.title}
                className="h-auto max-h-40 w-auto object-contain transition-transform duration-700 ease-out group-hover:scale-110"
                loading="lazy"
              />
            </div>

            {/* ROUND BADGE */}
            {it.badge?.text ? (
              <div
                className={[
                  "absolute right-5 top-5 grid h-12 w-12 place-items-center rounded-full text-[11px] font-extrabold text-slate-900 shadow-sm",
                  badgeTone(it.badge.tone),
                ].join(" ")}
              >
                {it.badge.text}
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}

// --- helpers ----
function bgTone(key = "beige") {
  switch (key) {
    case "beige":
      return "bg-amber-50"; // warm beige
    case "mint":
      return "bg-teal-50"; // mint
    case "sky":
      return "bg-sky-50"; // light blue
    default:
      return "bg-slate-50";
  }
}

function badgeTone(key = "amber") {
  switch (key) {
    case "amber":
      return "bg-amber-300/95";
    case "rose":
      return "bg-rose-300/95";
    case "teal":
      return "bg-teal-300/95";
    case "sky":
      return "bg-sky-300/95";
    default:
      return "bg-amber-300/95";
  }
}

// --- default items to match screenshot ---
export const defaultItems = [
  {
    id: "temp-gun",
    category: "syrub",
    title: "Tumcido",
    price: 35.0,
    oldPrice: 45.0,
    cta: "Shop now",
    href: "/products/temperature-gun",
    image:
      "https://i.pinimg.com/736x/3e/10/73/3e1073f1f2b9fec188f6c7a3052c576a.jpg",
    badge: null,
    bg: "beige",
  },
  {
    id: "steam-vaporizer",
    category: "Tablet",
    title: "M6-Forte ",
    price: 86.0,
    oldPrice: null,
    cta: "Shop now",
    href: "/products/steam-vaporizer",
    image:
      "https://i.pinimg.com/736x/c5/0b/92/c50b92a02820512df98d64ddb016eaa5.jpg",
    badge: null,
    bg: "mint",
  },
  {
    id: "steel-scissors",
    category: "Injection",
    title: "Cemmatidine",
    price: 13.0,
    oldPrice: 16.0,
    cta: "Shop now",
    href: "/products/steel-scissors",
    image:
      "https://i.pinimg.com/1200x/8f/eb/86/8feb86407a0e209aa550efc2f6539e81.jpg",
    badge: { text: "19%\nOff", tone: "amber" },
    bg: "sky",
  },
];
