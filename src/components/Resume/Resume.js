import React, { useEffect, useState } from 'react'
import { Inplace, InplaceDisplay, InplaceContent } from 'primereact/inplace';
import { Card } from 'primereact/card'
import { DataView } from 'primereact/dataview'
import { DataTable } from 'primereact/datatable';
import { TabView, TabPanel } from 'primereact/tabview';
import { Button } from 'primereact/button'
import Bounce from 'react-reveal/Bounce'
import Tada from 'react-reveal/Tada';

import ExperienceService from '../../services/Experience'

import './Resume.css'

export default function Resume() {

    const [experience, setExperience] = useState(null)
    const [description, setDescription] = useState([])

    const experienceService = new ExperienceService();

    useEffect(() => {
        experienceService.getExperience().then(data => setExperience(data)); // eslint-disable-next-line
    }, []
    )

    const onOpen = () => {
        experienceService.getDescriptions().then(desc => setDescription(desc))
    }


    const Grid = (data) => {
        return (

            <div className="p-col-12 p-md-6 p-lg-6 p-xl-4">
                <Card className="resume">
                    <div className="p-card-title"> {data.title}</div>
                    <div className="p-card-subtitle"> {data.time} </div>
                    <div className="p-card-footer"><strong>Technologies Used:</strong> {data.technology}</div>
                    <br />
                    <Inplace onOpen={onOpen}>
                        <InplaceDisplay>
                            <Button label="More Info"></Button>
                        </InplaceDisplay>
                        <InplaceContent>
                            <DataTable value={description}>
                                <div></div>
                            </DataTable>
                        </InplaceContent>
                    </Inplace>
                </Card>
            </div>
        );
    }

    const itemTemplate = (experience) => {
        return Grid(experience);
    }

    return (
        <div className="App-header">
            <Bounce bottom cascade>
                <h1>Experiences</h1>
                <DataView itemTemplate={itemTemplate} value={experience} ></DataView>
            </Bounce>
            <br />
            <Tada>
                <div className="tabview">
                    <div className="card">
                        <TabView>

                            <TabPanel header="Work Experience">
                                <Card >
                                    <div className="p-card-title">Home Depot - <i>Sales Associate </i> </div><div className="p-card-subtitle">Nov 2017 - Present</div>
                                    <div className="p-card-content">
                                        <ul>
                                            <li>Tool rental associate.</li>
                                            <li>Trained in several departments, available to work wherever needed.</li>
                                            <li>Taught and trained new associates departmental standards and procedures.</li>
                                            <li>Took charge to help coworkers while finishing tasks given to me.</li>
                                            <li>Given the responsibility to run the department on my own or with a team. </li>
                                        </ul>
                                    </div>

                                </Card>
                                <Card >
                                    <div className="p-card-title">Mcdonalds- <i>Crew Member </i>  </div><div className="p-card-subtitle">Feb 2016 - Aug 2017</div>
                                    <div className="p-card-content">
                                        <ul>
                                            <li>Model employee that was given the privilege of learning both kitchen and store facing responsibilities.</li>
                                            <li>Worked together with crew managers to keep workflow very efficient.</li>
                                            <li>Cooked food and maintained high quality of service for guests.</li>
                                            <li>Helped and initiated new employees and taught departmental procedures.</li>
                                            <li>Dealt with guests to provide the best experience.</li>
                                            <li>Employee of the month: May 2017</li>
                                        </ul>
                                    </div>

                                </Card>
                            </TabPanel>
                            <TabPanel header="Education">
                                <Card >
                                    <div className="p-card-title">Sheridan College - <i>Business Administration Accounting</i> </div><div className="p-card-subtitle">Sept 2017 - Dec 2020</div>
                                    <div className="p-card-content"><ul><li>Advanced Diploma in Business Administration Accounting</li></ul></div>
                                </Card>
                            </TabPanel>
                        </TabView>
                    </div>
                </div>
            </Tada>
        </div>
    )

}