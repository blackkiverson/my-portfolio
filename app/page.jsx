"use client";

import { FiDownload, fiDownload } from "react-icons/fi";
import { Cursor, useTypewriter } from "react-simple-typewriter";

// components
import Social from "@/components/Social";
import { Button } from "@/components/ui/button";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  const [text, count] = useTypewriter({
    words: ["Samuel Onyebuchi", "a developer.", "a designer."],
    loop: true,
    delaySpeed: 2000,
    typeSpeed: 100,
    deleteSpeed: 100,
  });

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 my-6">
              Hello I'm <br />{" "}
              <span className="text-accent">{text}<Cursor/></span>
            </h1>
            <p className="mb-9 text-white/80">
              Transforming ideas into engaging digital experiences for mobile
              and web, blending creativity with technical precision.
            </p>
            {/* btn & socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a href="/docs/Resume.pdf" download>
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2 duration-500"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
