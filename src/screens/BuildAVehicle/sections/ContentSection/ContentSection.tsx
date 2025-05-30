import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const ContentSection = (): JSX.Element => {
  // Content data for the section
  const contentData = {
    title: "4. Finalize With Our Police Car Builder",
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.",
      "veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur.",
    ],
    image: "https://c.animaapp.com/OuCAZvcn/img/mask-group-11.png",
  };

  return (
    <section className="flex flex-row w-full max-w-[1260px] mx-auto my-12">
      <Card className="w-1/2 border-0 rounded-none shadow-none">
        <CardContent className="p-12">
          <h2 className="font-['Barlow',Helvetica] font-bold text-black text-[22px] leading-10 mb-6">
            {contentData.title}
          </h2>
          <div className="font-['Montserrat',Helvetica] font-medium text-[#666666] text-base leading-[26px] space-y-6">
            {contentData.description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="w-1/2">
        <img
          className="w-full h-full object-cover"
          alt="Police car builder preview"
          src={contentData.image}
        />
      </div>
    </section>
  );
};
