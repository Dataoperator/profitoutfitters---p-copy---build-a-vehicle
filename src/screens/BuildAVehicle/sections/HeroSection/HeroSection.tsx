import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

// Define vehicle category data for mapping
const vehicleCategories = [
  {
    id: 1,
    name: "Police",
    image: "https://c.animaapp.com/OuCAZvcn/img/mask-group-6@2x.png",
    arrow: "https://c.animaapp.com/OuCAZvcn/img/arrow-1-7.svg",
    highlight: false,
  },
  {
    id: 2,
    name: "First Responders",
    image: "https://c.animaapp.com/OuCAZvcn/img/mask-group-4@2x.png",
    arrow: "https://c.animaapp.com/OuCAZvcn/img/arrow-1-7.svg",
    highlight: false,
  },
  {
    id: 3,
    name: "EMS",
    image: "https://c.animaapp.com/OuCAZvcn/img/mask-group-2@2x.png",
    arrow: "https://c.animaapp.com/OuCAZvcn/img/arrow-1-7.svg",
    highlight: false,
  },
  {
    id: 4,
    name: "EMS",
    image: "https://c.animaapp.com/OuCAZvcn/img/mask-group@2x.png",
    arrow: "https://c.animaapp.com/OuCAZvcn/img/arrow-1.svg",
    highlight: true,
  },
  {
    id: 5,
    name: "Municipal",
    image: "https://c.animaapp.com/OuCAZvcn/img/mask-group-7@2x.png",
    arrow: "https://c.animaapp.com/OuCAZvcn/img/arrow-1-7.svg",
    highlight: false,
  },
  {
    id: 6,
    name: "Construction",
    image: "https://c.animaapp.com/OuCAZvcn/img/mask-group-5@2x.png",
    arrow: "https://c.animaapp.com/OuCAZvcn/img/arrow-1-7.svg",
    highlight: false,
  },
  {
    id: 7,
    name: "Utility",
    image: "https://c.animaapp.com/OuCAZvcn/img/mask-group-3@2x.png",
    arrow: "https://c.animaapp.com/OuCAZvcn/img/arrow-1-7.svg",
    highlight: false,
  },
  {
    id: 8,
    name: "Towing/Recovery",
    image: "https://c.animaapp.com/OuCAZvcn/img/mask-group-1@2x.png",
    arrow: "https://c.animaapp.com/OuCAZvcn/img/arrow-1-7.svg",
    highlight: false,
  },
];

export const HeroSection = (): JSX.Element => {
  return (
    <section className="w-full py-10">
      <div className="container mx-auto">
        <div className="mb-12">
          <h1 className="font-['Barlow',Helvetica] font-bold text-black text-[45px] leading-10 mb-6">
            Let&#39;s Get Started.*
          </h1>
          <div className="font-['Montserrat',Helvetica] font-bold text-[#666666] text-base leading-8">
            - Build Your Next Vehicle In 5 Minutes
            <br />- No Email Required
            <br />- Free Instant Pricing
            <br />- Every Option In One Place
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {vehicleCategories.map((category) => (
            <Card
              key={category.id}
              className="rounded-[10px] border border-solid border-[#e7e7e7] overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
            >
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    className="w-full h-[244px] object-cover p-2 pt-[9px]"
                    alt={`${category.name} vehicle`}
                    src={category.image}
                  />
                  <div
                    className={`flex justify-between items-center px-5 py-3 h-[66px] ${
                      category.highlight
                        ? "bg-[#030953] text-white"
                        : "bg-neutral-100 text-black"
                    }`}
                  >
                    <span className="font-['Barlow',Helvetica] font-semibold text-[22px] leading-10">
                      {category.name}
                    </span>
                    <img
                      className="w-[43px] h-[15px]"
                      alt="Arrow"
                      src={category.arrow}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
