"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Creating responsive, fast-loading, and visually stunning websites that captivate your audience and boost your online presence. From front-end to back-end, I ensure every aspect of your web solution is seamless and effective.",
    href: "/contact",
  },
  {
    num: "02",
    title: "Mobile Development",
    description:
      "Delivering high-quality, user-friendly mobile applications that enhance user experiences and drive engagement. Whether it's iOS or Android, I specialize in building robust, scalable apps that meet your business needs.",
    href: "/contact",
  },
  {
    num: "03",
    title: "UI/UX Design",
    description:
      "Designing intuitive, user-centered interfaces that make your digital products. Focusing on understanding user needs and crafting experiences that are both aesthetically pleasing and functionally effective.",
    href: "/contact",
  },
  {
    num: "04",
    title: "SEO",
    description:
      "Optimizing your digital presence to rank higher on search engines, driving more organic traffic and increasing visibility. I use proven strategies to enhance your site’s relevance, authority, and searchability.",
    href: "/contact",
  },
];

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-8">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((services, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {services.num}
                  </div>
                  <Link
                    href={services.href}
                    className="w-[70px] h-[70px] rounded-full
                  bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {services.title}
                </h2>
                {/* description */}
                <p className="text-white/60">{services.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
