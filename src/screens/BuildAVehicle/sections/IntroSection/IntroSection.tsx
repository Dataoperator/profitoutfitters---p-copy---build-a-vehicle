import React from "react";

export const IntroSection = (): JSX.Element => {
  // Data for the intro section
  const introData = {
    title: "Police Car Builder: How Does It Work?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu.",
  };

  return (
    <section className="w-full max-w-[1172px] py-8 mx-auto">
      <h2 className="font-['Barlow',Helvetica] font-bold text-black text-[45px] text-center leading-10 mb-6">
        {introData.title}
      </h2>

      <p className="font-['Montserrat',Helvetica] font-medium text-[#666666] text-base text-center leading-7 max-w-[1168px] mx-auto">
        {introData.description}
      </p>
    </section>
  );
};
