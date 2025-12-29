import React from "react";
import {
  Truck,
  MapPinned,
  Boxes,
  HandCoins,
  Building2,
  RotateCcw,
} from "lucide-react";

import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Express & Standard Delivery",
    description:
      "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
    icon: Truck,
  },
  {
    title: "Nationwide Delivery",
    description:
      "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
    icon: MapPinned,
    featured: true,
  },
  {
    title: "Fulfillment Solution",
    description:
      "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
    icon: Boxes,
  },
  {
    title: "Cash on Home Delivery",
    description:
      "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
    icon: HandCoins,
  },
  {
    title: "Corporate Service / Contract In Logistics",
    description:
      "Customized corporate services which includes warehouse and inventory management support.",
    icon: Building2,
  },
  {
    title: "Parcel Return",
    description:
      "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
    icon: RotateCcw,
  },
];

export default function Services() {
  return (
    <section className="w-full py-10 md:py-14">
      <div className="mx-auto w-full">
        {/* Outer dark rounded container */}
        <div className="rounded-3xl bg-[#083A3F] px-20 py-10 md:px-20 md:py-12">
          {/* Header */}
          <div className="mx-auto mb-8 max-w-2xl text-center">
            <h2 className="text-3xl font-semibold text-white md:text-4xl">
              Our Services
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-white/75 md:text-base">
              Enjoy fast, reliable parcel delivery with real-time tracking and
              zero hassle. From personal packages to business shipments — we
              deliver on time, every time.
            </p>
          </div>

          {/* Cards */}
          <div className="grid gap-5 md:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
