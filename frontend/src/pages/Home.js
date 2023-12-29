import Section from "components/Section";
import Carousel from "components/Carousel";
import { motion } from "framer-motion";
import { Route } from "react-router-dom";
import Header from "components/Header";
import { useEffect } from "react";
import Footer from "components/Footer";


export default function Home(props){
    
    return (
        <motion.div
            
        initial = {{ opacity: 0,}}
        animate = {{ opacity:1}}
        >
            <nav>
            <Header></Header>
            <p>{props.name}</p>
            </nav>
            <Section>
                <Section></Section>
            </Section>
            <Carousel>
            </Carousel>
            <Footer></Footer>
        </motion.div>
    )
}