
import React from 'react';
import 'primereact/resources/primereact.css';
import Mail from './Mail';
import Location from './Location';
import LightSpeed from 'react-reveal/LightSpeed';

export default function Contact() {
    return (
        <section>
            <h1>Contact Me</h1>
            <div className="p-grid p-justify-center" >
                <LightSpeed cascade>
                    <div>
                        <Mail></Mail>

                        <Location></Location>
                    </div>
                </LightSpeed>
            </div >
        </section>
    )
}