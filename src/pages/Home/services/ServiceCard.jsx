import React from "react";

export default function ServiceCard({ service }) {
  const Icon = service.icon;
  const featured = !!service.featured;

  return (
    <div 
      className={[
        "card rounded-2xl border border-black/5 shadow-sm hover:bg-lime-300 transition-all duration-300",
        featured ? "bg-lime-300" : "bg-white",
      ].join(" ")}
    >
      <div className="card-body items-center text-center">
        {/* Icon bubble */}
        <div className="mb-2 flex h-14 w-14 items-center justify-center rounded-full bg-slate-100">
          <Icon className="h-6 w-6 text-slate-700" />
        </div>

        <h3 className="text-base font-semibold text-slate-900 md:text-lg">
          {service.title}
        </h3>

        <p className="mt-1 text-sm leading-relaxed text-slate-600">
          {service.description}
        </p>
      </div>
    </div>
  );
}
