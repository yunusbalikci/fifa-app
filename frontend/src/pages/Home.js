import Section from "components/Section";
import Carousel from "components/Carousel";
import { motion } from "framer-motion";
import { Route } from "react-router-dom";
import Header from "components/Header";



export default function Home(){
    return (
        <motion.div
            
        initial = {{ opacity: 0,}}
        animate = {{ opacity:1}}
        >
            <nav>
            <Header></Header>
            </nav>
            <Section>
                <Section></Section>
            </Section>
            <Carousel>
                
            </Carousel>
        </motion.div>
    )
}