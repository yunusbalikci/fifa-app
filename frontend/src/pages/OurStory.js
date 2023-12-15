import Carousel from "components/Carousel";
import Header from "components/Header";
import { motion } from "framer-motion";

export default function OurStory() {
  return (
    <motion.div
    initial = {{ opacity: 0,}}
    animate = {{ opacity:1}}
    
    className="bg-zinc-100">
        <nav>
        <Header></Header>
        </nav>

        <div className="bg-zinc-100">
                <div className="container mx-auto py-10 bg-zinc-100">
                    <div class="flex flex-col md:flex-row items-center">
                        <div class="md:w-1/2 text-center md:text-left mb-4 md:mb-0">
                            <h1 class="text-4xl font-bold mb-5">Our Story</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, perferendis. Adipisci et facere eaque soluta velit aperiam quidem nihil eligendi?</p>
                            <br></br>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, perferendis. Adipisci et facere eaque soluta velit aperiam quidem nihil eligendi?</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, perferendis. Adipisci et facere eaque soluta velit aperiam quidem nihil eligendi?</p>

                        </div>
                    <div class="md:w-1/2 pl-20">
                    </div>
            </div>
            </div>
        </div>  
        <div className="bg-fifa-blue mt-20 border w-full h-28">
            
        </div>

    
    </motion.div>
  );
}
