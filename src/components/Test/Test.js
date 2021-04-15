
// import React from 'react';
// import './Test.css'

// class Example extends React.Component {
//     constructor() {
//         super();
//         this.state = {};
//     }
//     mouseEnter() {
//         console.log('mouse enter')
//         document.getElementById('test').classList.add('.image-hover-opacity')
//         document.getElementById('test').style.width = "50rem"
//     }

//     mouseLeave() {
//         console.log('mouse leave')
//         document.getElementById('test').classList.remove('.image-hover-opacity')
//         document.getElementById('test').style.width = ""

//     }
//     render() {
//         return (
//             <img src="http://i.imgur.com/PLKabDV.png" onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} id="test" alt="test" className="" />
//         );
//     }
// }

// export default Example;


import React, { Component, createRef } from "react";

export default class Example extends Component {
    scrollDiv = createRef();

    scrollSmoothHandler = () => {
        this.scrollDiv.current.scrollIntoView({ behavior: "smooth" });
    };

    render() {
        return (
            <div className="example">
                <div className="longDiv">
                    <h1>Hello CodeSandbox</h1>
                    <button onClick={this.scrollSmoothHandler}>click me!</button>
                    <h2>Start editing to see some magic happen!</h2>
                </div>

                <div ref={this.scrollDiv}>hi</div>
            </div>
        );
    }
}