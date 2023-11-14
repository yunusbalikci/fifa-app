import React from "react";
import animation from '../images/animation.png'

export default function Section(){
    return(
        <div>
            <div class="container mx-auto py-10 pb-8">
                <div class="flex flex-col md:flex-row items-center">
                    <div class="md:w-1/2 text-center md:text-left mb-4 md:mb-0">
                        <h1 class="text-4xl font-bold mb-5">Discover New <br />Horizon</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, perferendis. Adipisci et facere eaque soluta velit aperiam quidem nihil eligendi?</p>
                    </div>
                <div class="md:w-1/2 pl-20">
                    <img src={animation} alt="Resim" class="mx-auto md:mx-0 transition duration-300"/>
                </div>
         </div>
        </div>
    </div>
    )
}