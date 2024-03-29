import React from 'react';
import "../../App.css"
import { Avatar } from 'primereact/avatar'
import Flip from 'react-reveal/Flip';

export default function About() {

    return (
        <div className="section">
            <div><h1><strong>About Me</strong></h1> </div>
            <div className="p-grid p-justify-between ">
                <Flip>
                    <div className="p-col-12 p-md-12 p-lg-5 about-main">

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div className="p-col-12 p-md-12 p-lg-5">
                        <Avatar image="../../image.jpg" shape="rectangle" />
                    </div>
                </Flip>
            </div>
        </div>
    )
}