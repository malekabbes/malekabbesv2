"use client";
import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import "@/app/assets/css/navbar.css";
import { link } from "fs";
import { PiProjectorScreenChart } from "react-icons/pi";
import { SiAboutdotme } from "react-icons/si";
import { BiHomeSmile } from "react-icons/bi";
import { GrContactInfo } from "react-icons/gr";

const Navbar = () => {
  const navigation = [
    {
      name: "Home",
      icon: <BiHomeSmile />,
    },
    {
      name: "About ME",
      icon: <SiAboutdotme />,
    },
    {
      name: "Projects",
      icon: <PiProjectorScreenChart />,
    },
    {
      name: "Contact",
      icon: <GrContactInfo />,
    },
  ];

  return (
    <div className="w-full">
      <nav className="relative flex flex-wrap items-center justify-between p-6 mx-auto lg:justify-between xl:px-6 navbarbg">
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                <Link href="/">
                  <span className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
                    <div className="flex-shrink-0">
                      <span className="logotext text-slate-50 dark:text-black">
                        <Image
                          src="/logo.gif"
                          alt="maleklogo"
                          width="190"
                          height="120"
                        ></Image>

                        <span>
                          <Image
                            className="h-20 w-16"
                            src="/cltag.png"
                            alt="Workflow"
                            width="90"
                            height="100"
                          />
                        </span>
                      </span>
                    </div>
                  </span>
                </Link>

                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700"
                >
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                  <>
                    {navigation.map((item, index) => (
                      <Link
                        key={index}
                        href="/"
                        className="menu-item w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none"
                      >
                        {item.name}
                      </Link>
                    ))}
                    <Link
                      href="/"
                      className="w-full px-6 py-2 mt-3 text-center text-white rounded-md lg:ml-5 contact-btn"
                    >
                      Get in Touch
                    </Link>{" "}
                    <ThemeChanger />
                  </>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link
                  href="/"
                  className="inline-block px-4 py-2 text-lg  text-gray-100 no-underline rounded-md dark:text-white-900 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800"
                >
                  {menu.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden mr-3 space-x-4 lg:flex nav__item">
          <Link
            href="/"
            className="px-6 py-2 text-white contact-btn rounded-md md:ml-5"
          >
            Get in Touch
          </Link>
          <ThemeChanger />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
