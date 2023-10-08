"use client";
import { Container, Row, Col } from "react-grid-system";
import React, { useState, useEffect } from "react";
import InternshipCountry from "@/app/assets/img/france.svg";
import typing from "@/app/assets/img/typing.gif";
import avatar from "@/app/assets/img/avatar.svg";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { DiNodejs, DiReact } from "react-icons/di";
import { FaSymfony, FaVuejs } from "react-icons/fa";
import { SiMongodb, SiMysql, SiAngular, SiSpringboot } from "react-icons/si";
import TextTransition, { presets } from "react-text-transition";
import Image from "next/image";
import "@/app/assets/css/firstsection.css";
import Loading from "../loading";
const TEXTS = ["Shinning", "Optimized", "Responsive", "Innovative"];
const LANGTEXT = [
  "ReactJS",
  "VueJS",
  "NodeJS",
  "MongoDB",
  "Symfony",
  "MySQL",
  "Angular",
  "Springboot",
];
const LANGS = [
  <DiReact key="react" />,
  <FaVuejs key="vue" />,
  <DiNodejs key="node" size={55} />,
  <SiMongodb key="mongodb" />,
  <FaSymfony key="symfony" />,
  <SiMysql key="mysql" />,
  <SiAngular key="angular" />,
  <SiSpringboot key="springboot" />,
];
const HomeSection = () => {
  const [mounted, setMounted] = useState(false);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 3000);
    return () => clearTimeout(intervalId);
  }, []);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return <Loading />;

  return (
    <>
      <div className="flex justify-center justify-items-center ">
        <a
          href="#"
          className="inline-flex justify-between items-center py-1 px-2 pr-4 mb-7 text-sm text-blue-700 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800"
        >
          <span className="text-xs bg-blue-600 rounded-full text-white px-4 py-1.5 mr-3">
            Anouncement
          </span>{" "}
          <div className="text-sm font-medium flex items-center">
            Am currently looking for an internship in
            <span className="ml-2">
              <Image
                alt="internshipcountry"
                src={InternshipCountry}
                width={20}
              />
            </span>
          </div>
          <svg
            className="w-2.5 h-2.5 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
        </a>
      </div>
      <div className="window-tab ">
        <div className="tab-header">
          <div>
            <button className="tab-button"></button>
            <button className="tab-button"></button>
            <button className="tab-button"></button>
          </div>
        </div>
        <div className="relative">
          <Container fluid>
            <Row>
              <Col xs={9} md={7}>
                <div className="text-start  py-8 px-4 sm:px-6  z-20">
                  <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
                    <span className="intro block">
                      Looking for a{" "}
                      <TextTransition
                        style={{ padding: "0px" }}
                        springConfig={presets.gentle}
                      >
                        <span
                          className="intro"
                          style={{ color: "red", display: "inline-flex" }}
                        >
                          {TEXTS[index % TEXTS.length]}
                        </span>
                      </TextTransition>{" "}
                      website ?
                    </span>
                    <span className="intro block text-indigo-500">
                      <TypeAnimation
                        className="intro block text-indigo-500"
                        sequence={[
                          "You are", // Types 'One'
                          1000, // Waits 1s
                          "in the right place", // Deletes 'One' and types 'Two'
                          2000, // Waits 2s
                          "at the right time !", // Types 'Three' without deleting 'Two'
                          () => {},
                        ]}
                        wrapper="div"
                        cursor={true}
                        repeat={Infinity}
                      />
                    </span>
                  </h2>
                  <div style={{ display: "flex" }}>
                    <span className="text-xl mt-2 text-black dark:text-white">
                      Specialized in JavaScript with over a two years of
                      experience in building the web and working with
                      technologies like
                      <h3 className="text-black dark:text-white sm:text-4xl">
                        <TextTransition
                          delay={500}
                          style={{ padding: "0px" }}
                          springConfig={presets.gentle}
                        >
                          <span
                            style={{
                              color: "#053B50",
                              display: "flex",
                              fontSize: "30px",
                            }}
                          >
                            {LANGTEXT[index % LANGTEXT.length]}&nbsp;&nbsp;
                            {LANGS[index % LANGS.length]}
                          </span>
                        </TextTransition>
                      </h3>
                    </span>
                  </div>
                  <div className="lg:mt-0 lg:flex-shrink-0">
                    <div className="mt-12 inline-flex rounded-md shadow">
                      <motion.button
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                        className="py-4 px-6 bg-blue-800 hover:bg-indigo focus:ring-indigo focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                      >
                        Lets Build something
                      </motion.button>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={3} md={5}>
                <Image
                  src={avatar}
                  alt="typinganimation"
                  className="m-0 hidden lg:block  top-0"
                  width={320}
                  height={300}
                />
              </Col>
            </Row>
          </Container>
        </div>

        <Container fluid className="pt-16">
          <Row>
            <Col xs={12} md={4}></Col>
            <Col xs={12} md={4}>
              <div className="home-hero__mouse-scroll-cont">
                <div className="mouse"></div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default HomeSection;
