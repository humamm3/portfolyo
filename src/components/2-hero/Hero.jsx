import { useState } from "react";
import { motion } from "motion/react"
import './hero.css';
import Lottie from "lottie-react";
import developer from "../../../src/components/animation/Animation - developer.json";

const Hero = () => {
    const [opn, setopn] = useState(false);
    return (
        <section className='hero flex'>
            <div className='left-section '>
                <div className='parent-avatar flex'>
                    <motion.img onClick={() => {
                        setopn(true);
                    }}
                    initial={{transform:"scale(0)"}}
                    animate={{transform:"scale(1.1)"}}
                    transition={{damping: 6, type:"spring", stiffness: 100}}
                     src="./me.png"className='avatar' alt="" />
                     
                     {opn && (
                        <div className="modal" onClick={() => setopn(false)}>
                        <motion.img 
                        initial={{transform:"scale(0)"}}
                         animate={{ transform: "scale(1)" }}
                         transition={{ duration: 2, type: "spring"}}
                        src="./mer.jpg" alt="Profile" className="modal-img" />
                      </div>
                     )}
                    <div className='icon-verified'></div>
                </div>

    
                <motion.h1
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 2}}
                className='title'>
                    Full Stack Web Developer & Website Creator
                    </motion.h1>

                <p className='sub-title'>I am Humam Kasir, a Full Stack Web Developer based in Turkey I specialize in building responsive websites and web applications from front-end interfaces to back-end systems My goal is to deliver clean scalable and high-performance solutions that provide real value to businesses and users</p>

                <div className='all-icons flex'>
                    <a href="https://wa.me/05365083588" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>
                    <a href="https://www.instagram.com/__humam__k.27?igsh=ZHFldWdhc3E1bGU0"><div className="icon icon-instagram"></div></a>
                    <a href="https://github.com/humamm3?tab=repositories"><div className="icon icon-github"></div></a>
                    <a href="https://www.linkedin.com/in/humam-kasir-5a4137344?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer"><div className="icon icon-linkedin2"></div></a> 
                </div>
            </div>



            <div className='right-section animation '>
                <Lottie animationData={developer} /></div>
        </section>
    );
};

export default Hero;
