import React from "react";
import { motion } from 'motion/react'
import { animate, initial, transition } from '../utils/motion';

const Header = () => {
    return (
        <div className="h-[50px] md:p-10 p-7 mt-2 flex flex-row items-center justify-between">
            <div className="flex flex-row items-center gap-5">
                <span className="md:hidden"><motion.i class="fa-solid fa-bars text-white text-xl mt-1" animate={animate} initial={initial} transition={transition}></motion.i></span>
                <a href="/"><motion.h1 className="text-white text-2xl poetsen-one-regular" animate={animate} initial={initial} transition={transition} whileHover={{ scale: 1.3 }}><span className="">P</span>ortfolio.</motion.h1></a>
            </div>
            <motion.div className="flex flex-row hidden md:flex" initial={initial} animate={animate} transition={transition}>
                <ul className="flex flex-row text-white gap-5">
                    <a href="/"><motion.li whileHover={{ scale: 1.3 }}>Home</motion.li></a>
                    <a href="#about"><motion.li whileHover={{ scale: 1.3 }}>About</motion.li></a>
                    <a href="#projects"><motion.li whileHover={{ scale: 1.3 }}>Projects</motion.li></a>
                    <a href="#blog"><motion.li whileHover={{ scale: 1.3 }}>Blogs</motion.li></a>
                    <a href="#contact"><motion.li whileHover={{ scale: 1.3 }}>Contact</motion.li></a>
                </ul>
            </motion.div>
            <span><motion.i class="fa-brands fa-github text-white text-xl mt-1" animate={animate} initial={initial} transition={transition}></motion.i></span>
        </div>
    );
};

export default Header;