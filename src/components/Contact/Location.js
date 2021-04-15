
import React from 'react';
import 'primereact/resources/primereact.css';
import { Card } from 'primereact/card'
import {
    GoogleMap,
    useLoadScript,
    Marker
} from '@react-google-maps/api';

const mapContainerStyle = {
    width: '25vh',
    height: '25vh',
};
const center = {
    lat: 43.72332946813944,
    lng: - 79.82586171681207
};

export default function Location() {

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    })

    if (loadError) return "Error loading maps";
    if (!isLoaded) return "Loading Maps";

    return (

        <div >
            <Card style={{ width: "30rem" }}>
                <li className="pi pi-home">Brampton, ON</li>
                <br />
                <li className="pi pi-phone">(647)784-0190</li>

                <GoogleMap mapContainerStyle={mapContainerStyle} zoom={12} center={center}>

                    <Marker
                        position={{ lat: 43.72332946813944, lng: - 79.82586171681207 }} />


                </GoogleMap>
            </Card>
        </div>

    )
}