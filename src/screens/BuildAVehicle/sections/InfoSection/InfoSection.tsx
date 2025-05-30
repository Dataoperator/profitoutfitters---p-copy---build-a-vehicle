import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

// Data for the info section
const infoData = {
  title: "1. Vehicles",
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
  enim ad minim.
  
  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
  ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
  voluptate velit esse cillum dolore eu fugiat nulla pariatur.
  Excepteur veniam, quis nostrud exercitation ullamco laboris nisi
  ut aliquip ex ea commodo consequat. Duis aute irure dolor in
  reprehenderit in voluptate velit esse cillum dolore eu fugiat
  nulla pariatur. Excepteur.`,
  imageUrl: "https://c.animaapp.com/OuCAZvcn/img/mask-group-8.png",
  imageAlt: "Mask group",
};

export const InfoSection = (): JSX.Element => {
  return (
    <section className="w-full max-w-[1260px] mx-auto my-12">
      <div className="flex flex-col md:flex-row w-full h-[480px]">
        {/* Image side */}
        <div className="w-full md:w-1/2 h-full">
          <img
            className="w-full h-full object-cover"
            alt={infoData.imageAlt}
            src={infoData.imageUrl}
          />
        </div>

        {/* Content side */}
        <Card className="w-full md:w-1/2 h-full rounded-[0px_40px_40px_0px] border-0">
          <CardContent className="p-0">
            <div className="p-12 h-full flex flex-col">
              <h2 className="font-['Barlow',Helvetica] font-bold text-black text-[22px] leading-10">
                {infoData.title}
              </h2>

              <p className="mt-4 font-['Montserrat',Helvetica] font-medium text-[#666666] text-base leading-[26px]">
                {infoData.description}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
