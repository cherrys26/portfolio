// export const images = [
//     {
//         width: "50px",
//         height: "50px",
//         borderRadius: `80% 0 55% 50% / 55% 0 80% 50% `,
//         border: "3px solid black",
//         transform: `rotate(-20deg)`,
//         marginTop: "20px",
//     },
//     {
//         background: "#C24B47",
//         width: 500,
//         height: 400,
//         left: 300,
//         top: 0,
//         borderRadius: "50px"
//     },
//     {
//         background: "#A46F4C",
//         width: "150%",
//         height: "",
//         left: "-25%",
//         top: "50%"
//     },
//     {
//         background: "#F2CFA6",
//         width: 700,
//         height: 500,
//         left: "-20%",
//         top: "20%"
//     },
//     {
//         background: "#58742A",
//         width: 500,
//         height: 400,
//         left: -200,
//         top: "-50%"
//     },
//     {
//         background: "#765647",
//         width: 500,
//         height: 400,
//         left: 300,
//         top: "-30%"
//     },
//     {
//         background: "#F40046",
//         width: "120%",
//         height: 200,
//         left: "-10%",
//         top: "50%"
//     },
//     {
//         background: "#14555C",
//         width: 500,
//         height: 400,
//         left: "50%",
//         top: 100
//     },
//     {
//         background: "#ADD8E6",
//         width: 30,
//         height: 30,
//         left: "20%",
//         top: 10
//     },
//     {
//         background: "#ADD8E6",
//         width: 30,
//         height: 30,
//         left: "80%",
//         top: 10
//     },
//     {
//         background: "#F0D2B7",
//         width: 500,
//         height: 400,
//         left: -100,
//         top: "50%"
//     }
// ];

import React from "react";
import { motion, useElementScroll, useTransform, useMotionValue } from "framer-motion";
import "./Test.css"

const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.5
        }
    }
};

const item = {
    hidden: { y: 20, opacity: 0.2 },
    visible: {
        y: 0,
        opacity: 1
    }
};

export default function Testing() {


    return (
        <motion.ul
            className="container-testing"
            variants={container}
            initial="hidden"
            animate="visible"
        >
            {[0, 1, 2, 3, 7, 8].map((index) => (
                <motion.li key={index} className="item-testing" variants={item} />
            ))}
        </motion.ul>
    );
};
