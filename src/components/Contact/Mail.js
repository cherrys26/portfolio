import { InputText } from 'primereact/inputtext'
import { InputTextarea } from 'primereact/inputtextarea'
import { Card } from 'primereact/card';
import { Button } from 'primereact/button'
import { Toast } from 'primereact/toast'

import React, { useState, useRef } from 'react';
import 'primereact/resources/primereact.css';

import LightSpeed from 'react-reveal/LightSpeed';


export default function Mail() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const useToast = useRef()

    const onSendClick = () => {
        if (email) {
            useToast.current.show({ severity: 'success', summary: 'Message sent!', detail: 'Thanks for reaching out' })
        } else {
            useToast.current.show({ severity: 'error', summary: 'Invalid Email', detail: 'Please input valid email' })

        }
    }

    return (

        <div>
            <LightSpeed cascade>
                <Toast ref={useToast}></Toast>
                <Card style={{ width: "30rem" }}>
                    <br />
                    <div className="p-fluid p-grid" style={{ justifyContent: "center" }}>

                        <span className="p-float-label">
                            <InputText id="name" value={name} onChange={(e) => setName(e.target.value)} />
                            <label htmlFor="name">Name</label>
                        </span>
                    </div>
                    <br />
                    <div className="p-fluid p-grid" style={{ justifyContent: "center" }}>

                        <span className="p-float-label">
                            <InputText id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <label htmlFor="email">Email</label>
                        </span>
                    </div>
                    <br />
                    <div className="p-fluid p-grid" style={{ justifyContent: "center" }}>

                        <span className="p-float-label">
                            <InputTextarea id="textarea" value={message} onChange={(e) => setMessage(e.target.value)} rows={4} cols={22.5} />
                            <label htmlFor="textarea">Textarea</label>
                        </span>
                    </div>
                    <br />
                    <Button label="Send" onClick={onSendClick} />
                </Card>
            </LightSpeed>
        </div >
    )
}