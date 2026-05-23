export default function PageHero({ title, subtitle }) {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <div className="mt-6 mb-6 rounded-3xl border border-slate-200 bg-white/90 px-5 py-6 shadow-sm">
        <h1 className="text-center text-3xl sm:text-4xl font-extrabold
          bg-[linear-gradient(90deg,#f97316_0%,#d97706_18%,#16a34a_48%,#0d9488_72%,#06b6d4_100%)]
          bg-clip-text text-transparent">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-1 text-center text-sm text-slate-500">{subtitle}</p>
        )}
      </div>
    </div>
  );
}
