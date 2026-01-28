import React, { useState, useEffect } from "react";
import Header from "./Header";
import TypeWritter from 'typewriter-effect';
import Lottie from 'react-lottie';
import compTyping from '../assets/json/comptyping.json';
import { motion } from "framer-motion"; // Corrected import
import { transition } from "../utils/motion";
import Button from "./Button";
import Image from '../assets/me.jpeg';
import codingAnimation from '../assets/json/code.json';
import GlowCard from "./GlowCard";
import skills from '../assets/Skills.png';
import Project from "./Project";
import Projects from "../utils/Projects";

const Hero = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: compTyping,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    const [width, setWidth] = useState(window.innerWidth);

    const setDimensions = () => {
        setWidth(window.innerWidth);
    };

    useEffect(() => {
        setDimensions();
        window.addEventListener("resize", setDimensions);
        return () => window.removeEventListener("resize", setDimensions);
    }, []);

    return (
        <div className="hero-main px-4 md:px-10 flex flex-col gap-20">
            <Header />
            {/* Intro Section */}
            <motion.div className="grid md:grid-cols-2 items-center"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={transition}
            >
                <div className="flex flex-col gap-5 md:gap-8 justify-center">
                    <h1 className="text-white text-4xl">Hi 👋🏻, I'm <span className="text-purple-500">Vishwas Thangella</span>,</h1>
                    <h1 className='md:text-4xl text-3xl w-full xl:text-5xl text-white'>
                        I am a <span className='text-theme-300 font-bold'>
                            <TypeWritter options={{
                                strings: ["Freelancer", "Web Developer", "Full Stack Developer", "React Native Developer"],
                                autoStart: true,
                                loop: true
                            }} />
                        </span>
                    </h1>
                    <div className="flex flex-row gap-5">
                        <a href="https://github.com/vishwas-thangella"><i className="fa-brands fa-github text-xl text-white"></i></a>
                        <a href="https://www.linkedin.com/in/vishwas-thangella/"><i className="fa-brands fa-linkedin text-xl text-white"></i></a>
                        <a href="https://www.instagram.com/vishwas.jsx/"><i className="fa-brands fa-instagram text-xl text-white"></i></a>
                    </div>
                    <Button
                        title="Download CV"
                        icon="fa-solid fa-download"
                        url="https://drive.google.com/file/d/1FCFsAv9xAEVP3VM5L_WmHDMC-DbCOFNR/view?usp=sharing"
                    />
                </div>

                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className='flex items-center justify-center'
                >
                    <Lottie
                        options={defaultOptions}
                        width={(width > 300 && width < 700) ? 340 : 500}
                        height={(width > 300 && width < 700) ? 350 : 500}
                    />
                </motion.div>
            </motion.div>

            {/* My Story */}
            <div className="work-experience text-white p-5" id="about">
                <h2 className="text-2xl font-bold mb-6 poetsen-one-regular">My Story</h2>
                <div className="grid md:grid-cols-2 gap-5">
                    <div className="flex flex-row">
                        <p className="leading-8" data-aos="fade-right"> " I'm Vishwas Thangella, a passionate Full Stack Developer and Mobile App Developer with a strong foundation in the MERN stack and React Native. Over the past few years, I've worked on a variety of freelance projects ranging from college websites and ecommerce platforms to mobile apps with integrated payment systems and automation features. I specialize in building responsive, scalable web and mobile applications using technologies like React, Node.js, MongoDB, Express, and React Native. I enjoy turning ideas into digital products that are not only functional but also user-friendly and visually appealing. My work includes developing platforms for startups and businesses in healthcare, education, travel, and legal sectors. I take pride in solving real-world problems through clean code, thoughtful design, and continuous learning. Currently, I'm looking to collaborate on innovative projects or join a forward-thinking team where I can contribute and grow. <span className="text-purple-500">Let’s build something impactful together! 🚀 </span>"</p>
                    </div>
                    <div className="flex items-center justify-center">
                        <img src={Image} alt="Vishwas Thangella" className="rounded-xl w-auto h-92 object-cover grayscale hover:grayscale-0 hover:scale-105 transition duration-500 ease-in-out" data-aos="fade-left" />
                    </div>
                </div>
            </div>

            {/* Work Experience */}

            <div className="work-exp md:p-10">
                <h2 className="text-2xl text-white font-bold mb-6 poetsen-one-regular" data-aos="fade-right">Work Experince</h2>
                <div className="grid md:grid-cols-2">
                    <div data-aos="slide-right" className="grid md:grid-cols-2 gap-5 items-center">
                        <GlowCard />
                    </div>
                    <div>
                        <Lottie
                            options={{
                                loop: true,
                                autoplay: true,
                                animationData: codingAnimation,
                                rendererSettings: {
                                    preserveAspectRatio: "xMidYMid slice",
                                },
                            }}
                            width={(width > 300 && width < 700) ? 340 : 500}
                            height={(width > 300 && width < 700) ? 350 : 500}
                        />
                    </div>
                </div>
            </div>

            {/* Skills */}

            <div data-aos="fade-up">
                <h2 className="text-2xl text-white font-bold mb-6 poetsen-one-regular" data-aos="fade-right">What I Do Best</h2>
                <img src={skills} alt="skills" />
            </div>

            {/* Projects */}

            <div id="projects">
                <h2 className="text-2xl text-white font-bold mb-6 poetsen-one-regular" data-aos="fade-right">🚀 Featured Projects</h2>
                <div className="flex flex-col gap-10">
                    {
                        Projects.map((project, index) => (
                            <Project key={index} project={project} />
                        ))
                    }
                </div>
            </div>

            {/* Contact */}

            <div data-aos="fade-up" id="contact">
                <h2 className="text-2xl text-white font-bold mb-6 poetsen-one-regular" data-aos="fade-right">Get in Touch !</h2>
                <h1 className="text-white text-xs leading-8">I'm currently looking to join a cross-functional team that values improving people's lives
                    through accessible design. <br />or have a project in mind? Let's connect.</h1>
                <h1 className="text-white text-xs mt-7">thangellavishwas@gmail.com</h1>
                <div className="flex flex-row gap-5 mt-7">
                    <a href="https://github.com/vishwas-thangella"><i className="fa-brands fa-github text-xl text-white"></i></a>
                    <a href="https://www.linkedin.com/in/vishwas-thangella/"><i className="fa-brands fa-linkedin text-xl text-white"></i></a>
                    <a href="https://www.instagram.com/vishwas.jsx/"><i className="fa-brands fa-instagram text-xl text-white"></i></a>
                </div>
            </div>

        </div>
    );
};

export default Hero;
