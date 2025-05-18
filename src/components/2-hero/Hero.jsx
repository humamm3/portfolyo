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
                    Software Designer and Website Creator
                    </motion.h1>

                <p className='sub-title'>I’m Humam Kasir, a web designer and creative developer based in Turkey. I’m the founder and lead designer at my own digital studio, where we create modern, user-centered websites that help individuals and businesses grow their online presence with confidence and clarity.</p>

                <div className='all-icons flex'>
                    <div className="icon icon-twitter"></div>
                    <div className="icon icon-instagram"></div>
                    <div className="icon icon-github"></div>
                    <div className="icon icon-linkedin2"></div>
                </div>
            </div>



            <div className='right-section animation '>
                <Lottie animationData={developer} /></div>
        </section>
    );
};

export default Hero;
