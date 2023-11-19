import React from "react";
import Person from "../images/person.png"
import { motion } from "framer-motion";

export default function About(){

    return(
        <motion.div className="bg-zinc-100"
        initial = {{ opacity: 0,}}
        animate = {{ opacity:1}}
        >
                <div className="container mx-auto py-10 pb-8">
                    <div class="flex flex-col md:flex-row items-center">
                        <div class=" text-center md:text-left mb-4 md:mb-0">
                            <h1 class="text-4xl text-center font-bold mb-5">About Us</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, perferendis. Adipisci et facere eaque soluta velit aperiam quidem nihil eligendi?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, perferendis. Adipisci et facere eaque soluta velit aperiam quidem nihil eligendi?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, perferendis. Adipisci et facere eaque soluta velit aperiam quidem nihil eligendi?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, perferendis. Adipisci et facere eaque soluta velit aperiam quidem nihil eligendi?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, perferendis. Adipisci et facere eaque soluta velit aperiam quidem nihil eligendi?</p>
                        </div>                  
                    </div>
                </div>
                <div className="flex items-center justify-center bg-zinc-100"> 
                    <div className="border p-4 border-gray rounded cursor-pointer w-1/3">
                        <img className="flex w-36 items-center mx-auto cursor-pointer mt-3 " alt="person" src={Person}></img>
                        <h2 className="text-center text-xl mt-3">Mustafa Al-Asadi</h2>
                    </div>
                    <div className="border p-4 border-gray rounded cursor-pointer w-1/3">
                        <img className="flex w-36 items-center mx-auto mt-3" alt="person" src={Person}></img>
                        <h2 className="text-center text-xl mt-3">Yunus Balıkcı</h2>
                    </div>
                    <div className="border p-4 border-gray rounded cursor-pointer w-1/3">
                        <img className="flex w-36 items-center mx-auto mt-3" alt="person" src={Person}></img>
                        <h2 className="text-center text-xl mt-3">Hasan Basri Akcan</h2>
                    </div>
                </div>
        </motion.div>
    )
}