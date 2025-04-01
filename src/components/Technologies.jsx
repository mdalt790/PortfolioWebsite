import rPic from "../assets/r.png"
import { SiScikitlearn } from "react-icons/si"
import AI from "../assets/ai.png"
import { SiPython } from "react-icons/si"
import excel from "../assets/excel.png"
import { TbSql } from "react-icons/tb"
import {animate, motion} from "framer-motion"

const iconVariants = (duration) => ({
    initial: {y: -10},
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
})
// <a href="https://www.flaticon.com/free-icons/r" title="r icons">
//                <RiReactjsLine className="text-7xl text-cyan-400"/>
export const Technologies = () => {
  return (
    <div className="border-b border-neutral-900 pb-24">
        <motion.h1 
        whileInView={{opacity: 1, y:0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration: 1.5}}
        className="my-20 text-center text-4xl">Technologies</motion.h1>
        <motion.div whileInView={{opacity: 1, x: 0}}
        initial={{ opacity:0, x: -100}}
        transition={{duration: 1.5}}
        className="flex flex-wrap items-center justify-center gap-4">
            
            <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate" 
            className="rounded-2xl border-4 border-neutral-800 p-4">
                
                <motion.img 
                                style={{height: "75px", width: "75px"}}
                                 src={rPic} alt="RLogoPicture"/>
                        
            </motion.div>
            <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiScikitlearn className="text-7xl"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiPython className="text-7xl text-green-500"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <motion.img 
                                style={{height: "75px", width: "75px"}}
                                 src={excel} alt="excelLogo"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(6)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <TbSql className="text-7xl text-green-500"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(1.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <motion.img 
                                style={{height: "75px", width: "75px"}}
                                 src={AI} alt="aiPicture"/>
            </motion.div>
        </motion.div>
    </div>
  )
}
