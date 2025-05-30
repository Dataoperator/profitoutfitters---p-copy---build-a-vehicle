import React from "react";
import { Button } from "../../components/ui/button";
import { CallToActionSection } from "./sections/CallToActionSection";
import { ContentSection } from "./sections/ContentSection";
import { DetailsSection } from "./sections/DetailsSection";
import { FeaturesSection } from "./sections/FeaturesSection";
import { FooterSection } from "./sections/FooterSection";
import { HeaderSection } from "./sections/HeaderSection";
import { HeroSection } from "./sections/HeroSection";
import { InfoSection } from "./sections/InfoSection";
import { IntroSection } from "./sections/IntroSection";

export const BuildAVehicle = (): JSX.Element => {
  return (
    <main
      className="bg-white flex flex-col items-center w-full"
      data-model-id="162:1079"
    >
      <div className="bg-white w-full relative">
        <HeaderSection />

        <div className="w-full bg-[#f2f2f2]">
          <HeroSection />

          <div className="relative w-[98px] h-[66px] mx-auto sm:mx-0 sm:ml-[170px] mt-4">
            <Button className="w-24 h-[66px] bg-[#002151] rounded-[10px] relative">
              <span className="absolute top-[13px] left-[18px] font-www-utilitac-com-barlow-medium text-white text-[26px] leading-10 whitespace-nowrap">
                OK
              </span>
              <img
                className="w-[18px] h-[15px] absolute top-[27px] left-[62px]"
                alt="Arrow"
                src="https://c.animaapp.com/OuCAZvcn/img/arrow-4.svg"
              />
            </Button>
          </div>

          <CallToActionSection />
          <IntroSection />
          <InfoSection />
          <FeaturesSection />
          <DetailsSection />
          <ContentSection />
          <FooterSection />
        </div>
      </div>
    </main>
  );
};
