import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Example() {
    const [leftExpanded, setLeftExpanded] = useState(false);
    const [rightExpanded, setRightExpanded] = useState(false);

    return (
        <div
            style={{
                width: 300,
                height: 150,
                borderRadius: 30,
                overflow: "hidden",
                display: "flex",
                justifyContent: "space-between",
                transform: "translateZ(0)"
            }}
        >
            <motion.div
                style={{
                    width: leftExpanded ? 300 : rightExpanded ? 1 : 140,
                    height: 150,
                    borderRadius: 10,
                    backgroundColor: "#39FF14",
                    cursor: "pointer"
                }}
                layout
                onTap={() => {
                    setLeftExpanded(!leftExpanded);
                }}
            >
                {leftExpanded === false ? (<div>hello</div>) : (<div>world</div>)}

            </motion.div>
            <motion.div
                style={{
                    width: rightExpanded ? 300 : leftExpanded ? 1 : 140,
                    height: 150,
                    borderRadius: 10,
                    backgroundColor: "#39FF14",
                    cursor: "pointer"
                }}
                layout
                onTap={() => {
                    setRightExpanded(!rightExpanded);
                }}
            >
                {rightExpanded === false ? (<div>hello</div>) : (<div>world</div>)}
            </motion.div>
        </div>
    );
}
