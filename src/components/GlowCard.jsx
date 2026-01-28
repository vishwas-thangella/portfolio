import React from "react";
import { motion } from "motion/react";

const GlowCard = () => {
    return (
        <div className="">
            <a href="/">
                <button
                    className={`button--toggle button--toggled`}
                >
                    <div className="button--texts md:w-92">
                        <h1 className="text-center w-full text-purple-700">( 2022 - 2024 )</h1>
                        <div className="flex flex-row gap-5 p-7 items-center">
                            <div>
                                <i class="fa-solid fa-code text-3xl text-white"></i>
                            </div>
                            <div>
                                <h1>Full Stack Developer</h1>
                                <h1 className="mt-1">Fiverr (freelance) </h1>
                            </div>
                        </div>
                    </div>
                    <div className="animating">
                        <div className="innerAnimating"></div>
                    </div>
                </button>
            </a>
            <a href="/">
                <button
                    className={`button--toggle button--toggled`}
                >
                    <div className="button--texts md:w-92">
                        <h1 className="text-center w-full text-purple-700">( 2025 - Present )</h1>
                        <div className="flex flex-row gap-5 p-7 items-center">
                            <div>
                                <i class="fa-solid fa-code text-3xl text-white"></i>
                            </div>
                            <div>
                                <h1>Software Developer</h1>
                                <h1 className="mt-1">Black Bucks Group </h1>
                            </div>
                        </div>
                    </div>
                    <div className="animating">
                        <div className="innerAnimating"></div>
                    </div>
                </button>
            </a>
        </div>

    );
};

export default GlowCard;