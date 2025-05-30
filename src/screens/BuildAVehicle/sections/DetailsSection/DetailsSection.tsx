import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const DetailsSection = (): JSX.Element => {
  // Content for the details section
  const detailsContent = {
    title: "3. Lighting",
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
  };

  return (
    <section className="w-full max-w-[1260px] h-auto mx-auto my-8">
      <div className="flex flex-col md:flex-row w-full">
        {/* Image side */}
        <div className="w-full md:w-1/2">
          <img
            className="w-full h-auto object-cover rounded-l-[40px]"
            alt="Vehicle lighting feature"
            src="https://c.animaapp.com/OuCAZvcn/img/mask-group-9.png"
          />
        </div>

        {/* Content side */}
        <Card className="w-full md:w-1/2 border-0 rounded-none md:rounded-r-[40px] bg-white">
          <CardContent className="p-12">
            <h3 className="font-['Barlow',Helvetica] font-bold text-black text-[22px] leading-10 mb-6">
              {detailsContent.title}
            </h3>
            <p className="font-['Montserrat',Helvetica] font-medium text-[#666666] text-base leading-[26px] whitespace-pre-line">
              {detailsContent.description}
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
