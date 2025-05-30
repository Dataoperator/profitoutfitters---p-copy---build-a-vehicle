import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Separator } from "../../../../components/ui/separator";

// Data for contact information
const contactInfo = {
  address: {
    street: "22424 FM 159",
    city: "Navasota",
    state: "TX",
    zip: "77868",
  },
  phone: "(979) 324-5537",
  email: "info@ProFitOutfitters.com",
};

// Data for social media links
const socialMediaIcons = [
  {
    id: 1,
    src: "https://c.animaapp.com/OuCAZvcn/img/layer-1.svg",
    alt: "Social media icon",
  },
];

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="w-full bg-[#002151] text-white mt-8">
      <div className="relative w-full">
        {/* Wave decoration at the top */}
        <div className="w-full h-[100px] bg-[url(https://c.animaapp.com/OuCAZvcn/img/component-2.svg)] bg-[100%_100%]" />

        <div className="w-full py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-start gap-10">
              {/* Contact Information */}
              <div className="w-full md:w-auto max-w-[319px]">
                <h3 className="font-['Barlow',Helvetica] font-bold text-white text-[22px] leading-7 mb-8">
                  CONTACT
                </h3>

                <div className="flex items-start mb-4">
                  <div className="w-3.5 h-5 mt-1 bg-[url(https://c.animaapp.com/OuCAZvcn/img/group@2x.png)] bg-[100%_100%]" />
                  <div className="ml-8 font-['Montserrat',Helvetica] font-semibold text-[#cecece] text-base">
                    <span className="leading-10">
                      {contactInfo.address.street}{" "}
                    </span>
                    <span className="leading-5">
                      {contactInfo.address.city}, <br />
                      {contactInfo.address.state} {contactInfo.address.zip}
                    </span>
                  </div>
                </div>

                <div className="flex items-start mb-4">
                  <div className="w-5 h-5 mt-1 bg-[url(https://c.animaapp.com/OuCAZvcn/img/group-1@2x.png)] bg-[100%_100%]" />
                  <div className="ml-8 font-['Montserrat',Helvetica] font-semibold text-[#cecece] text-base leading-10">
                    {contactInfo.phone}{" "}
                    <a
                      href={`mailto:${contactInfo.email}`}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="hover:underline"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex mt-6">
                  {socialMediaIcons.map((icon) => (
                    <img
                      key={icon.id}
                      className="w-[18px] h-4"
                      alt={icon.alt}
                      src={icon.src}
                    />
                  ))}
                </div>
              </div>

              {/* Logo */}
              <div className="flex justify-center items-center w-full md:w-auto">
                <img
                  className="w-[348px] h-[185px] object-cover"
                  alt="Pro Fit Outfitters Logo"
                  src="https://c.animaapp.com/OuCAZvcn/img/logo-1-1@2x.png"
                />
              </div>

              {/* Newsletter */}
              <div className="w-full md:w-auto max-w-[478px]">
                <h3 className="font-['Barlow',Helvetica] font-bold text-white text-[22px] leading-7 mb-8">
                  JOIN OUR NEWS LETTER
                </h3>

                <p className="font-['Montserrat',Helvetica] font-semibold text-[#cecece] text-base leading-[30px] mb-6">
                  Stay tuned for the latest release of new products and <br />
                  offers when you join our mailing list.
                </p>

                <Card className="bg-[#002350] border border-[#ffffff4c] rounded-[10px] mb-6">
                  <CardContent className="p-0 flex items-center">
                    <Input
                      className="border-0 bg-transparent text-[#7b7b7b] font-['Montserrat',Helvetica] font-medium text-base h-[66px] focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                      placeholder="Email address"
                    />
                    <img
                      className="w-[43px] h-[15px] mr-4"
                      alt="Arrow"
                      src="https://c.animaapp.com/OuCAZvcn/img/arrow-4-1.svg"
                    />
                  </CardContent>
                </Card>

                <div className="mt-6">
                  <img
                    className="w-[181px] h-[34px]"
                    alt="Social media icons"
                    src="https://c.animaapp.com/OuCAZvcn/img/layer-1-1.svg"
                  />
                </div>
              </div>
            </div>

            <Separator className="my-8 bg-white/30" />

            <div className="text-center">
              <p className="font-['Montserrat',Helvetica] font-semibold text-[#cecece] text-base leading-10">
                Copyright © 2025, Pro Fit Outfitters
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
