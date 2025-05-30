import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const FeaturesSection = (): JSX.Element => {
  // Content data for the equipment section
  const equipmentContent = {
    title: "2. Equipment",
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.",
      "veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur.",
    ],
    image: "https://c.animaapp.com/OuCAZvcn/img/mask-group-10.png",
  };

  return (
    <section className="w-full flex flex-col md:flex-row">
      <Card className="w-full md:w-1/2 border-0 rounded-none">
        <CardContent className="p-12">
          <h2 className="font-['Barlow',Helvetica] font-bold text-black text-[22px] leading-10 mb-6">
            {equipmentContent.title}
          </h2>
          <div className="font-['Montserrat',Helvetica] font-medium text-[#666666] text-base leading-[26px] space-y-6">
            {equipmentContent.description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="w-full md:w-1/2 h-auto">
        <img
          className="w-full h-full object-cover"
          alt="Vehicle equipment features"
          src={equipmentContent.image}
        />
      </div>
    </section>
  );
};
