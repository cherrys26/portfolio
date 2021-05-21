
import React, { useState } from 'react';
import 'primereact/resources/primereact.css';
import Mail from './Mail';
import Location from './Location';
import LightSpeed from 'react-reveal/LightSpeed';
import { motion } from "framer-motion";
import { Card } from 'primereact/card'

export default function Contact() {
    const [leftExpanded, setLeftExpanded] = useState(false);
    const [rightExpanded, setRightExpanded] = useState(false);

    return (
        <section className="section">
            <div><h1>Contact Me</h1></div>
            <LightSpeed cascade>
                <Card>
                    <div className="p-grid p-justify-around" >
                        <div
                            style={{
                                width: 400,
                                height: 400,
                                borderRadius: 30,
                                overflow: "hidden",
                                display: "flex",
                                justifyContent: "space-between",
                                transform: "translateZ(0)"
                            }}
                        >

                            <motion.div style={{
                                width: leftExpanded ? 400 : rightExpanded ? 1 : 190,
                                height: 400,
                                borderRadius: 10,
                                backgroundColor: "#39FF14",
                                cursor: "pointer"
                            }}
                                layout
                                onTap={() => {
                                    setLeftExpanded(!leftExpanded);
                                }}
                            >
                                {leftExpanded === false ? (<div>Send me an Email</div>) : (<div> <Mail /></div>)}


                            </motion.div>
                            <motion.div style={{
                                width: rightExpanded ? 400 : leftExpanded ? 1 : 190,
                                height: 400,
                                borderRadius: 10,
                                backgroundColor: "#39FF14",
                                cursor: "pointer"
                            }}
                                layout
                                onTap={() => {
                                    setRightExpanded(!rightExpanded);
                                }}
                            >
                                {rightExpanded === false ? (<div>Locate me?</div>) : (<div><Location /></div>)}

                            </motion.div>
                        </div>
                    </div >
                </Card>
            </LightSpeed>
        </section>
    )
}