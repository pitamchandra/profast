import React from "react";

export default function BenefitCard({ item }) {
  return (
    <div className="rounded-2xl bg-white shadow-sm border border-base-200 ">
      <div className="flex flex-col gap-5 p-5 md:flex-row md:items-center md:gap-8 md:p-8">
        {/* Left Illustration */}
        <div data-aos="flip-left" data-aos-duration="2000" className="flex w-full justify-start md:w-[220px] md:justify-center">
          <img
            src={item.image}
            alt={item.title}
            className="h-24 w-auto md:h-28 object-contain"
            loading="lazy"
            draggable={false}
          />
        </div>

        {/* Dotted Divider */}
        <div className="hidden md:block h-20 w-px border-l-2 border-dashed border-base-content/20" />

        {/* Content */}
        <div className="flex-1">
          <h3 className="text-lg md:text-xl font-semibold text-[#0B3B40]">
            {item.title}
          </h3>
          <p className="mt-2 text-sm md:text-base leading-relaxed text-base-content/70">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
}
