import React from "react";
import BenefitCard from "./BenefitCard";

// ✅ Use your own assets paths (import or public path)
// Example (recommended): import trackingImg from "../../assets/benefits/tracking.png";
import illustration from "../../../assets/Illustration.png";
import call from "../../../assets/call.png";

const benefits = [
  {
    title: "Live Parcel Tracking",
    description:
      "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment’s journey and get instant status updates for complete peace of mind.",
    image: illustration,
  },
  {
    title: "100% Safe Delivery",
    description:
      "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
    image: call,
  },
  {
    title: "24/7 Call Center Support",
    description:
      "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
    image: call,
  },
];

export default function BenefitsSection() {
  return (
    <section className="w-full bg-base-200/40 py-10 md:py-14">
      <div className="mx-auto w-full">
        <div className="space-y-5 md:space-y-6">
          {benefits.map((item, index) => (
            <BenefitCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
