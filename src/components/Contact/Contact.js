
import React from 'react';
import 'primereact/resources/primereact.css';
import Mail from './Mail';
import Location from './Location';
import LightSpeed from 'react-reveal/LightSpeed';

export default function Contact() {
    return (
        <section>
            <h1>Contact Me</h1>
            <LightSpeed cascade>
                <div className="p-grid p-justify-around" >
                    <div className="p-col-12 p-md-8 p-lg-6">
                        <Mail></Mail>
                    </div>
                    <div className="p-col-12 p-md-8 p-lg-6">
                        <Location></Location>
                    </div>

                </div >
            </LightSpeed>
        </section>
    )
}