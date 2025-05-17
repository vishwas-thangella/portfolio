import React from "react";
import { motion } from 'framer-motion';

const Project = (props) => {

    const data = props.project;

    const initial = {
        x: -300
    }

    const whileonScreen = {
        x: 0
    }

    return (
        <div className="flex md:grid md:grid-cols-2 flex-col-reverse gap-5">
            <motion.div className="flex flex-col gap-5" initial={initial} whileInView={whileonScreen}>
                <div className="flex flex-col gap-1">
                    <h1 className="text-purple-500 text-xs">{data.title}</h1>
                    <h1 className="text-xl text-white">{data.name}</h1>
                </div>
                <div className="p-5 rounded-xl text-xs text-white md:w-[90%] left-20 border border-white glossy">
                    <p>{data.description}</p>
                    <div className="flex flex-row gap-5">
                        <a href={data.github}><i class="fa-brands fa-github text-white text-xl mt-5"></i></a>
                        {data.playstore ? <a href={data.playstore}><i class="fa-brands fa-google-play text-white text-xl mt-5"></i></a> : null}
                    </div>
                </div>
            </motion.div>
            <motion.div className="projects-right flex justify-center items-center" initial={initial} whileInView={whileonScreen}>
                <motion.img src={data.image} alt="project" className="rounded-xl object-cover" whileHover={{scale:1.2}}/>
            </motion.div>
        </div>
    );
};

export default Project;