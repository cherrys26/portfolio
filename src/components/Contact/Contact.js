import { InputText } from 'primereact/inputtext'

import { useState } from 'react';



export default function Contact() {

    const [value, setValue] = useState();
    return (
        <InputText value={value} onChange={(e) => setValue(e.target.value)} />
    )
}