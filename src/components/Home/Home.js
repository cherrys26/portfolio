
import React, { useRef, useEffect } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import Fade from 'react-reveal/Fade'

import './Home.css'
import 'primeflex/primeflex.css';

export default function Home() {

    const x = useMotionValue(200);
    const y = useMotionValue(200);

    const rotateX = useTransform(y, [0, 400], [45, -45]);
    const rotateY = useTransform(x, [0, 400], [-45, 45]);

    function handleMouse(event) {
        const rect = event.currentTarget.getBoundingClientRect();

        x.set(event.clientX - rect.left);
        y.set(event.clientY - rect.top);
    }

    return (

        <div className="p-grid p-justify-between">
            <Fade left>
                <div className="p-col-12 p-md-2 p-lg-3">
                    Hi,
                    I'm Steve Chirayath
                    Junior Front End Developer
                    UX/UI Designer
                </div>
            </Fade>
            <Fade >
                <div className="p-col-12 p-md-2 p-lg-3">
                    <div className="container">
                        <motion.div
                            style={{
                                width: 500,
                                height: 500,
                                display: "flex",
                                placeItems: "center",
                                placeContent: "center",
                                borderRadius: 30,
                                perspective: 1000
                            }}
                            onMouseMove={handleMouse} >
                            <motion.div whileHover={{ scale: 1.1 }} style={{
                                rotateX: rotateX,
                                rotateY: rotateY
                            }}>
                                <img src='image.jpg' style={{ width: "250px", height: "300px", borderRadius: "20px" }} />
                            </motion.div>
                        </motion.div>

                    </div>
                </div>
            </Fade >
            <Fade right>
                <div className="p-col-12 p-md-2 p-lg-3">Contact Info</div>
            </Fade>
        </div >


    )
}