'use client';

import { motion } from 'framer-motion';
import React, { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { BsArrowUpRight, BsGithub } from 'react-icons/bs';

import {
 Tooltip,
 TooltipContent,
 TooltipProvider,
 TooltipTrigger,
} from '@/components/ui/tooltip';

import Link from 'next/link';
import Image from 'next/image';
import WorkSliderBtns from '@/components/WorkSliderBtns';

const projects = [
 {
  num: '01',
  category: 'My Portfolio',
  title: 'personal project',
  description:
   'This project is my personal portfolio website where I showcase my skills, projects, and experience as a developer. It is built using Next.js for the frontend, TailwindCSS for styling, and ShadcnUI for UI components. I used JavaScript to add interactivity and manage the overall functionality.',
  stack: [
   { name: 'Next.js' },
   { name: 'Tailwind.css' },
   { name: 'ShadcnUI' },
   { name: 'Javascript' },
  ],
  image: '/assets/porfolioUI.png',
  live: 'https://blackk-portfolio.vercel.app',
  github: 'https://github.com/blackkiverson/my-portfolio',
 },
 {
  num: '02',
  category: 'fullstack',
  title: 'In-House Mobile App - AIENAI',
  description:
   'In this project, I developed a responsive and dynamic mobile application using React Native, Tailwind.css, Typescript, and for backend integrations Firebase. The focus was on creating a user-friendly interface that adapts well to different screen sizes and devices, while solving day-to-day issues for people. The project showcases my ability to implement clean and maintainable code.',
  stack: [
   { name: 'React Native' },
   { name: 'Tailwind.css' },
   { name: 'Typescript' },
   { name: 'Firebase' },
  ],
  image: '/assets/clothUI.jpg',
  live: 'https://www.aienai.co/',
  github: 'https://github.com/blackkiverson/',
 },
 {
  num: '03',
  category: 'fullstack',
  title: 'fullstack ecommerce shop - Glorisco',
  description:
   'This is a full-stack application where I handled both the frontend and backend development. Using Next.js and TailwindCSS, I built the frontend, while Node.js powered the backend. The project demonstrates my capability to work on both sides of a web application, ensuring seamless integration between the client and server.',
  stack: [{ name: 'Next.js' }, { name: 'Tailwind.css' }, { name: 'Node.js' }],
  image: '/assets/labUI.jpg',
  live: 'https://www.facebook.com/gloriscosupermart/',
  github: 'https://github.com/blackkiverson/',
 },
 //  {
 //   num: '04',
 //   category: 'frontend',
 //   title: 'project 4',
 //   description:
 //    'This project is a mobile application developed using React Native, with a focus on providing a seamless user experience across both iOS and Android platforms. TailwindCSS was used for styling, ensuring the UI is both attractive and responsive. The application is written in TypeScript, providing type safety and reducing runtime errors.',
 //   stack: [
 //    { name: 'React Native' },
 //    { name: 'Tailwind.css' },
 //    { name: 'Typescript' },
 //   ],
 //   image: '/assets/vegUI.jpg',
 //   live: '',
 //   github: 'https://github.com/blackkiverson/',
 //  },
 //  {
 //   num: '05',
 //   category: 'fullstack',
 //   title: 'project 5',
 //   description:
 //    'In this full-stack project, I utilized Next.js for the server-side rendering capabilities and built a robust web application. TailwindCSS was employed to create a sleek and responsive design, while TypeScript was used throughout the project to enhance code quality and maintainability. This project showcases my ability to develop a complete web solution from frontend to backend.',
 //   stack: [
 //    { name: 'Next.js' },
 //    { name: 'Tailwind.css' },
 //    { name: 'Typescript' },
 //   ],
 //   image: '/assets/jobile.jpg',
 //   live: '',
 //   github: '',
 //  },
];

const Work = () => {
 const [project, setProject] = useState(projects[0]);

 const handleSlideChange = (swiper) => {
  // get current slide index
  const currentIndex = swiper.activeIndex;
  // update project state based on current slide index
  setProject(projects[currentIndex]);
 };
 return (
  <motion.div
   initial={{ opacity: 0 }}
   animate={{
    opacity: 1,
    transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
   }}
   className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
  >
   <div className="container mx-auto">
    <div className="flex flex-col xl:flex-row xl:gap-[30px]">
     <div
      className="w-full xl:w-[50%] xl:h-[460px] flex flex-col
          xl:justify-between order-2 xl:order-none"
     >
      <div className="flex flex-col gap-[30px] h-[50%]">
       {/* outline num */}
       <div
        className="text-8xl leading-none font-extrabold text-transparent
              text-outline"
       >
        {project.num}
       </div>
       {/* project category */}
       <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
        {project.category} project
       </h2>
       <h4 className='font-normal leading-none text-gray-500 group-hover:text-accent transition-all duration-600 capitalize'>{project.title}</h4>
       {/* project description */}
       <p className="text-white/60">{project.description}</p>
       {/* stack */}
       <ul className="flex gap-4">
        {project.stack.map((item, index) => {
         return (
          <li key={index} className="text-xl text-accent">
           {item.name}
           {/* remove the last comma */}
           {index !== project.stack.length - 1 && ','}
          </li>
         );
        })}
       </ul>
       {/* border */}
       <div className="border border-white/20"></div>
       {/* buttons */}
       <div className="flex items-center gap-4">
        {/* live project button */}
        <Link href={project.live}>
         <TooltipProvider delayDuration={100}>
          <Tooltip>
           <TooltipTrigger
            className="w-[70px] h-[70px] rounded-full
                      bg-white/5 flex justify-center items-center group"
           >
            <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
           </TooltipTrigger>
           <TooltipContent>
            <p>Live Projects</p>
           </TooltipContent>
          </Tooltip>
         </TooltipProvider>
        </Link>
        {/* github project button */}
        <Link href={project.github}>
         <TooltipProvider delayDuration={100}>
          <Tooltip>
           <TooltipTrigger
            className="w-[70px] h-[70px] rounded-full
                      bg-white/5 flex justify-center items-center group"
           >
            <BsGithub className="text-white text-3xl group-hover:text-accent" />
           </TooltipTrigger>
           <TooltipContent>
            <p>Github Repository</p>
           </TooltipContent>
          </Tooltip>
         </TooltipProvider>
        </Link>
       </div>
      </div>
     </div>
     <div className="w-full xl:w-[50%]">
      <Swiper
       spaceBetween={30}
       slidesPerView={1}
       className="xl:h-[520px mb-12"
       onSlideChange={handleSlideChange}
      >
       {projects.map((project, index) => {
        return (
         <SwiperSlide key={index} className="w-full">
          <div
           className="h-[460px] relative group flex justify-center
                  items-center bg-pink-50/20"
          >
           {/* overlay */}
           <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
           {/* image */}
           <div className="relative w-full h-full">
            <Image src={project.image} fill className="object-cover" alt="" />
           </div>
          </div>
         </SwiperSlide>
        );
       })}
       {/* slider button */}
       <WorkSliderBtns
        containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between
              xl:w-max xl:justify-none"
        btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] 
              flex justify-center items-center transition-all "
       />
      </Swiper>
     </div>
    </div>
   </div>
  </motion.div>
 );
};

export default Work;
