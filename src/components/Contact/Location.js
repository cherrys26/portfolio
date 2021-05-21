
import React from 'react';
import 'primereact/resources/primereact.css';
import {
    GoogleMap,
    useLoadScript,
    Marker
} from '@react-google-maps/api';
import '../../App.css'

const mapContainerStyle = {
    width: '35vh',
    height: '35vh',
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
            <div className="p-grid p-justify-around contact">

                <div>
                    <li className="pi pi-home">Brampton, ON</li>
                    <br />
                    <br />
                    <li className="pi pi-phone">(647)784-0190</li>
                </div>

                <GoogleMap mapContainerStyle={mapContainerStyle} zoom={12} center={center}>

                    <Marker
                        position={{ lat: 43.72332946813944, lng: - 79.82586171681207 }} />


                </GoogleMap>

            </div>
        </div >

    )
}