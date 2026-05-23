// src/components/FilterBar.jsx
import React from "react";

export default function FilterBar({ categories, selected, onSelect }) {
  // ka saar duplicates
  const unique = Array.from(new Set(categories));

  return (
    <div className="mt-3 flex flex-wrap items-center gap-2">
      {unique.map((c) => (
        <button
          key={c}
          onClick={() => onSelect(c)}
          className={[
            "shrink-0 rounded-full border transition-all",
            "px-3 py-1.5 text-xs md:text-[13px]",
            selected === c
              ? "bg-teal-600 text-white shadow"
              : "bg-white text-zinc-800 border-zinc-200 hover:bg-zinc-50",
          ].join(" ")}
        >
          {c}
        </button>
      ))}
    </div>
  );
}
