import React from "react";
import Marquee from "react-fast-marquee";

import logo1 from '../../../assets/brands/amazon.png'
import logo2 from '../../../assets/brands/amazon_vector.png'
import logo3 from '../../../assets/brands/casio.png'
import logo4 from '../../../assets/brands/moonstar.png'
import logo5 from '../../../assets/brands/randstad.png'
import logo6 from '../../../assets/brands/star.png'
import logo7 from '../../../assets/brands/start_people.png'

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];

export default function ClientMarquee() {
  return (
    <section className="w-full py-10 md:py-14">
      <Marquee speed={50} direction="left" pauseOnHover gradient gradientWidth={60}>
              {logos.map((src, index) => (
                <div key={index} className="mx-14 flex items-center">
                  <img
                    src={src}
                    alt={`Brand logo ${index + 1}`}
                    className="h-6 w-auto object-contain opacity-80 hover:opacity-100 transition"
                    loading="lazy"
                    draggable={false}
                  />
                </div>
              ))}
            </Marquee>
    </section>
  );
}
