import { InputText } from 'primereact/inputtext'
import { InputTextarea } from 'primereact/inputtextarea'
import { Card } from 'primereact/card';
import { Button } from 'primereact/button'
import LightSpeed from 'react-reveal/LightSpeed';

import React, { useState } from 'react';
import 'primereact/resources/primereact.css';

export default function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    return (

        <div>
            <LightSpeed cascade>
                <Card>
                    <div>
                        Contact Me
                </div>
                    <br />
                    <div className="p-fluid p-grid">

                        <span className="p-float-label">
                            <InputText id="name" value={name} onChange={(e) => setName(e.target.value)} />
                            <label htmlFor="name">Name</label>
                        </span>
                    </div>
                    <br />
                    <div className="p-fluid p-grid">

                        <span className="p-float-label">
                            <InputText id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <label htmlFor="email">Name</label>
                        </span>
                    </div>
                    <br />
                    <div className="p-fluid p-grid">

                        <span className="p-float-label">
                            <InputTextarea id="textarea" value={message} onChange={(e) => setMessage(e.target.value)} rows={4} cols={22.5} />
                            <label htmlFor="textarea">Textarea</label>
                        </span>
                    </div>

                </Card>
            </ LightSpeed>
        </div >
    )
}