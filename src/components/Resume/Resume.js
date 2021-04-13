import React, { useEffect, useState } from 'react'
import { Card } from 'primereact/card'
import { DataView } from 'primereact/dataview'
import Bounce from 'react-reveal/Bounce'

import ExperienceService from '../../services/Experience'

import './Resume.css'

export default function Resume() {


    const [experience, setExperience] = useState(null)

    const experienceService = new ExperienceService();

    useEffect(() => {
        experienceService.getExperience().then(data => setExperience(data)); // eslint-disable-next-line
    }, [])

    const Grid = (data) => {
        return (

            <div className="p-col-12 p-md-6 p-lg-6 p-xl-4">
                <Card className="resume">
                    <div className="p-card-title"> {data.title}</div>
                    <div className="p-card-subtitle"> {data.time} </div>
                    <div className="p-card-footer"><strong>Technologies Used:</strong> {data.technology}</div>
                </Card>
            </div>
        );
    }

    const itemTemplate = (experience) => {
        return Grid(experience);
    }

    return (
        <div>
            <Bounce bottom cascade>
                <h1>Experiences</h1>
                <DataView itemTemplate={itemTemplate} value={experience} ></DataView>
            </Bounce>
        </div>
    )

}