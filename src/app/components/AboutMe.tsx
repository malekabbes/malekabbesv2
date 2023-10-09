import "@/app/assets/css/aboutme.css";
import React from "react";
import { TiInfoLargeOutline } from "react-icons/ti";
import Image from "next/image";
import TitlesComponent from "./Titles";
const AboutMe = () => {
  return (
    <div className="relative " data-aos="fade-right" data-aos-delay="100">
      <div className="lg:grid  lg:grid-cols-3 lg:gap-1 lg:items-center p-8">
        <div className="lg:col-start-2 md:col-start-2 md:pl-5">
          <TitlesComponent
            title="SO&nbsp;,&nbsp;WHO AM I?"
            description="Get to know more about me and my journey in the world of web development."
          />
          <div className="text-center md:pt-20" data-aos="fade-right">
            <div className="account-profile">
              <Image
                alt="logo"
                src="/myphoto.png"
                className="profile-image w-60 h-80 rounded-full border-2 border-indigo-500 relative mx-auto bt-16 h-auto sm:w-40 xs:40 md:w-50 lg:w-60"
                width={200}
                height={200}
              />
              <div className="blob-wrap">
                <div className="blob"></div>
                <div className="blob"></div>
                <div className="blob"></div>
                <div className="blob"></div>
              </div>
            </div>
          </div>
          <ul className="mt-10 space-y-6 md:space-y-0 md:flex md:flex-col">
            {" "}
            {/* Use space-y to add spacing between list items */}
            <li className="mt-10">
              <div className="flex flex-col md:flex-row">
                <div className="md:flex-shrink-0">
                  <div className="flex items-center justify-center h-15 w-15 rounded-md bg-indigo-500 text-white">
                    <TiInfoLargeOutline size="3em" />
                  </div>
                </div>
                <div className="md:ml-4 mt-4 md:mt-0">
                  <h5 className="text-lg leading-6 text-gray-900 dark:text-white font-bold">
                    Personal informations
                  </h5>
                  <p className="mt-1 text-base leading-6 font-bold lg:text-xl md:text-lg sm:text-sm	 text-sky-950 dark:text-sky+-700 ">
                    Malek abbes , 23 Years old , junior Fullstack JS developer,
                    Im a quick learner, I participate in designing and
                    developing projects that fit UI/UX needs with optimized
                    code. I am passionate about Web development. Therefore, I am
                    always eager to improve my skills and learn new things to
                    stay on the edge of technology.
                  </p>
                </div>
              </div>
            </li>
            {/* Add more list items here if needed */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
