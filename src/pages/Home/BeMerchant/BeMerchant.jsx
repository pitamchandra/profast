import React from "react";

import waveImg from "../../../assets/be-a-merchant-bg.png";
import illustrationImg from "../../../assets/location-merchant.png";

export default function BeMerchant() {
  return (
    <section className="w-full bg-base-200/60 py-10 md:py-14">
      <div className="mx-auto w-full">
        <div className="relative overflow-hidden rounded-3xl bg-secondary px-6 py-10 md:px-12 md:py-12">
          {/* Top wave/glow */}
          {waveImg && (
            <img
              src={waveImg}
              alt=""
              className="pointer-events-none absolute left-0 top-0 w-full opacity-70"
              draggable={false}
            />
          )}

          <div className="relative grid items-center gap-10 md:grid-cols-2">
            {/* Left Content */}
            <div>
              <h2 className="text-2xl font-semibold leading-snug text-white md:text-4xl">
                Merchant and Customer Satisfaction is Our First Priority
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/75 md:text-base">
                We offer the lowest delivery charge with the highest value along with
                100% safety of your product. Pathao courier delivers your parcels in
                every corner of Bangladesh right on time.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                {/* Filled button (theme primary) */}
                <button  data-aos="fade-up" data-aos-duration="1000" className="btn btn-primary rounded-full px-6 text-secondary border-0 hover:opacity-90">
                  Become a Merchant
                </button>

                {/* Outline button (theme primary border/text) */}
                <button data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" className="btn btn-outline btn-primary rounded-full px-6 bg-transparent hover:bg-transparent">
                  Earn with ZapShift Courier
                </button>
              </div>
            </div>

            {/* Right Illustration */}
            <div className="flex justify-center md:justify-end">
              <img
                src={illustrationImg}
                alt="Merchant illustration"
                className="w-[260px] max-w-full md:w-[360px] object-contain"
                loading="lazy"
                draggable={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
