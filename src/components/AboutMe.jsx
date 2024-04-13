import Section from "./Section";
import { curve } from "../assets";
import { heroBackground } from "../assets";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import web from "../assets/webdev.jpg";

const AboutMe = () => {
    const parallaxRef = useRef(null);

    return (
        <Section
            className="pt-[12rem] -mt-[5.25rem]"
            crosses
            crossesOffset="lg:translate-y-[5.25rem]"
            customPaddings
            id="about-me"
        >
            <div className="container relative" ref={parallaxRef}>
                <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem]">
                    <h1 className="h1 mb-6">
                        My name is{" "}
                        <span className="inline-block relative">
                            Hao Duong
                            <img
                                src={curve}
                                className="absolute top-full left-0 w-full xl:-mt-2"
                                width={624}
                                height={28}
                                alt="Curve"
                            ></img>
                        </span>
                    </h1>
                    <p className="body-1 max-w-3xl mx-auto mb-2 text-n-2 lg:mb-8">
                        I am an aspiring web developer with skills in JS, CSS,
                        HTML, React, NextJS, TailwinCSS, and UI/UX design.
                    </p>
                </div>

                <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
                    <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
                        <div className="relative bg-n-8 rounded-[1rem]">
                            <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />
                            <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1100/490]">
                                <img
                                    src={web}
                                    className="w-full h-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[0%] lg:-translate-y-[9%]"
                                    width={1024}
                                    height={490}
                                    alt="AI"
                                />

                                <ScrollParallax isAbsolutelyPositioned>
                                    <ul className="hidden absolute -left-[10rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blu border border-n-1/10 rounded-2xl xl:flex">
                                        {heroIcons.map((icon, index) => (
                                            <li className="p-5" key={index}>
                                                <div className="overflow-hidden rounded-full">
                                                    <img
                                                        src={icon}
                                                        width={24}
                                                        height={25}
                                                        alt="icon"
                                                    />
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </ScrollParallax>
                            </div>
                        </div>

                        <Gradient />
                    </div>

                    <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
                        <img
                            src={heroBackground}
                            className="w-full"
                            width={1440}
                            height={1800}
                            alt="hero"
                        />
                    </div>

                    <BackgroundCircles />
                </div>
            </div>

            <BottomLine />
        </Section>
    );
};

export default AboutMe;
