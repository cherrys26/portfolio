// import React from "react";
// import { useState, useRef, useLayoutEffect, useEffect } from "react";
// import { images } from "./Refresh";
// import { motion, useViewportScroll, useTransform, AnimatePresence, useCycle } from "framer-motion";
// import "./Test.css";
// import ExperienceService from '../../services/Experience'

// const ParallaxImage = ({ src, ...style }) => {
//   const [elementTop, setElementTop] = useState(0);
//   const ref = useRef(null);
//   const { scrollY } = useViewportScroll();

//   const y = useTransform(scrollY, [elementTop, elementTop + 1], [0, -1], {
//     clamp: false
//   });

//   useLayoutEffect(() => {
//     const element = ref.current;
//     setElementTop(element.offsetTop);
//   }, [ref]);

//   return (
//     <div ref={ref} className="image-container">
//       <motion.div className="overlay" style={{ ...style, y }} />
//       <img src={src} alt="" />
//     </div>
//   );
// };


// export default function Test() {


//   return (
//     <>
//       <div className="container-test">
//         {images.map(image => (
//           <div className="section">
//             <div><h1><strong>About Me</strong></h1> </div>
//             <div className="p-grid p-justify-between ">
//               <div className="p-col-12 p-md-12 p-lg-5 about-main">
//                 <ParallaxImage key={image.src} {...image} />

//                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
//                 ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
//                         Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
//               </div>
//               <div className="p-col-12 p-md-12 p-lg-5">
//               </div>
//             </div>
//           </div>
//         ))}
//         <ParallaxImage {...images[0]} {...images[8]} />
//         <div>
//           <ParallaxImage {...images[0]} {...images[9]} />
// Hello</div>
//         <ParallaxImage {...images[0]} {...images[8]} />
//       </div>
//     </>
//   )
// };

