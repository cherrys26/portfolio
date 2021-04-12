import React from 'react'

import { Avatar } from 'primereact/avatar';

import Fade from 'react-reveal/Fade'

import './Home.css'
import 'primeflex/primeflex.css';

export default function Home() {

    return (

        <div className="p-grid p-justify-between">
            <Fade left>
                <div className="p-col-12 p-md-2 p-lg-3">
                    <Avatar image="../../image.jpg" className="p-mr-2" shape="rectangle" />

                </div>
            </Fade>
            <Fade>
                <div className="p-col-12 p-md-2 p-lg-3">
                    Hi,
                    I'm Steve Chirayath
                    Junior Front End Developer
                    UX/UI Designer
                </div>
            </Fade>
            <Fade right>
                <div className="box">p-col-12 p-md-6 p-lg-3</div>
            </Fade>
        </div>


    )
}