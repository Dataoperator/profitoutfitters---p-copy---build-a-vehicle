import React from "react";
import { Button } from "../../../../components/ui/button";
import { Separator } from "../../../../components/ui/separator";

// Navigation menu items data
const navItems = [
  "Build A Vehicle",
  "Where Quality Meets Urgency",
  "Services",
  "Manufacturing Partners",
  "Who Are We?",
  "Contact Us/Inquire",
];

export const HeaderSection = (): JSX.Element => {
  return (
    <header className="sticky top-0 w-full bg-white z-50">
      <div className="flex items-center justify-between h-[86px] px-4 md:px-16 lg:px-[68px]">
        {/* Logo container */}
        <div className="relative h-[85px] w-40">
          <img
            className="absolute w-[151px] h-[81px] top-[3px] left-px object-cover"
            alt="Company logo"
            src="https://c.animaapp.com/OuCAZvcn/img/image-2@2x.png"
          />
          <img
            className="absolute w-40 h-[85px] top-0 left-0 object-cover"
            alt="Company logo overlay"
            src="https://c.animaapp.com/OuCAZvcn/img/image-94@2x.png"
          />
        </div>

        {/* Navigation menu */}
        <nav className="hidden lg:block flex-1 mx-4">
          <ul className="flex justify-center items-center">
            {navItems.map((item, index) => (
              <React.Fragment key={index}>
                <li className="px-4">
                  <a
                    href="#"
                    className="font-['Bebas_Neue',Helvetica] font-normal text-black text-lg tracking-[3.00px] leading-5 whitespace-nowrap"
                  >
                    {item}
                  </a>
                </li>
                {index < navItems.length - 1 && (
                  <Separator
                    orientation="vertical"
                    className="h-4 border-[#7a7a7a] border-l-2 border-r-0"
                  />
                )}
              </React.Fragment>
            ))}
          </ul>
        </nav>

        {/* Customer Portal button */}
        <Button className="h-[53px] bg-[#002151] rounded-[10px] px-[30px] font-['Barlow',Helvetica] font-medium text-white text-lg">
          Customer Portal
        </Button>
      </div>

      {/* Bottom border */}
      <div className="w-full h-px bg-black opacity-20" />
    </header>
  );
};
