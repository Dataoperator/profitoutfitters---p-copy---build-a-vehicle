import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const CallToActionSection = (): JSX.Element => {
  // Contact information data
  const contactInfo = {
    phone: "(979) 324-5537",
    email: "info@ProFitOutfitters.com",
  };

  return (
    <Card className="w-full py-6 px-4 my-8 border-0 shadow-none">
      <CardContent className="p-0">
        <div className="flex flex-col md:flex-row justify-between items-start gap-4">
          <div className="space-y-2 max-w-[623px]">
            <h2 className="font-['Barlow',Helvetica] font-bold text-black text-[22px] leading-10">
              Need Help With Our Police Car Builder?
            </h2>
            <p className="font-['Montserrat',Helvetica] font-medium text-[#666666] text-base leading-7">
              There&apos;s a lot of options. We&apos;re here to help you get the
              most for your budget.
            </p>
          </div>

          <div className="font-['Barlow',Helvetica] font-bold text-black text-[22px] leading-[65px]">
            <span>Toll Free: {contactInfo.phone} Email: </span>
            <a
              href={`mailto:${contactInfo.email}`}
              rel="noopener noreferrer"
              target="_blank"
              className="underline"
            >
              {contactInfo.email}
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
