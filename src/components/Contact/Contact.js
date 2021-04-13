
import React from 'react';
import 'primereact/resources/primereact.css';
import Mail from './Mail';

import LightSpeed from 'react-reveal/LightSpeed';
import { Card } from 'primereact/card';

export default function Contact() {

    return (
        <section>
            <h1>Contact Me</h1>
            <div className="p-grid p-justify-center">
                <LightSpeed cascade>
                    <div >
                        <Mail></Mail>
                    </div>
                    <div >
                        <Card style={{ width: "30rem" }}>
                            <ul>
                                <li className="pi pi-home">Brampton, ON</li>
                                <br />
                                <li className="pi pi-phone">(647)784-0190</li>
                            </ul>
                        </Card>
                    </div>
                </LightSpeed>
            </div >
        </section>
    )
}