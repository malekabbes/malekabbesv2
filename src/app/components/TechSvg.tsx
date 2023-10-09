import Image from "next/image";
import React, { FC } from "react";
import "flowbite";

type langProps = {
  name: string;
};
const TechSvg: FC<langProps> = ({ name }: langProps) => {
  // const imageSrc = require(`@/app/assets/img/techs/${name}.svg`).default;

  return (
    <>
      <Image
        alt={name}
        src={`/${name}.svg`}
        width={110}
        height={110}
        data-tooltip-target={name}
      />

      <div
        id={name}
        role="tooltip"
        className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
      >
        {name}
        <div className="tooltip-arrow" data-popper-arrow></div>
      </div>
    </>
  );
};
export default TechSvg;
