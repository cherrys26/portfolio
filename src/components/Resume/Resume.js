import React, { useEffect, useState } from 'react'
import { Inplace, InplaceDisplay, InplaceContent } from 'primereact/inplace';
import { Card } from 'primereact/card'
import { DataView } from 'primereact/dataview'
import { TabView, TabPanel } from 'primereact/tabview';
import { Button } from 'primereact/button'
import { motion, AnimateSharedLayout } from 'framer-motion'
import Bounce from 'react-reveal/Bounce'
import Tada from 'react-reveal/Tada';

import ExperienceService from '../../services/Experience'

import './Resume.css'


const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.5
        }
    }
};

const item = {
    hidden: { y: 20, opacity: 0.2 },
    visible: {
        y: 0,
        opacity: 1
    }
};


export default function Resume() {

    const [experience, setExperience] = useState('')

    const experienceService = new ExperienceService();

    useEffect(() => {
        experienceService.getExperience().then(data => setExperience(data)); // eslint-disable-next-line
    }, []
    )



    return (
        <div className="App-header">
            <div className="section">
                <h1>Experiences</h1>
                <motion.ul
                    className="container-testing"
                    variants={container}
                    initial="hidden"
                    animate="visible"
                >
                    {experience && experience.map(experience => (
                        <motion.li key={experience.title} className="item-testing" variants={item}><div>
                            <div className="p-card-title"> {experience.title}</div>
                            <div className="p-card-subtitle"> {experience.time} </div>
                            <div className="p-card-footer"><strong>Technologies Used:</strong> {experience.technology}</div>
                            <br />
                            <Inplace>
                                <InplaceDisplay>
                                    <Button label="More Info"></Button>
                                </InplaceDisplay>
                                <InplaceContent>
                                    <Card>
                                        <ul>
                                            <div>
                                                {experience.description.one}
                                            </div>
                                            <div>
                                                {experience.description.two}
                                            </div>
                                            <div>
                                                {experience.description.three}
                                            </div>
                                            <div>
                                                {experience.description.four}
                                            </div>
                                            <div>
                                                {experience.description.five}
                                            </div>
                                            <div>
                                                {experience.description.six}
                                            </div>

                                        </ul>
                                    </Card>
                                </InplaceContent>
                            </Inplace>
                        </div>
                        </motion.li>
                    ))}
                </motion.ul>
                {experience && experience.map(experience => {
                    return (
                        <div className="p-col-12 p-md-6 p-lg-6 p-xl-4" >
                            <motion.div initial={{ backgroundColor: "#f00" }}
                                animate={{ backgroundColor: "#fff" }} className="resume card"
                                key={experience.title} whileHover={{ scale: 1.05 }}>
                                <div>
                                    <div className="p-card-title"> {experience.title}</div>
                                    <div className="p-card-subtitle"> {experience.time} </div>
                                    <div className="p-card-footer"><strong>Technologies Used:</strong> {experience.technology}</div>
                                    <br />
                                    <Inplace>
                                        <InplaceDisplay>
                                            <Button label="More Info"></Button>
                                        </InplaceDisplay>
                                        <InplaceContent>
                                            <Card>
                                                <ul>
                                                    <div>
                                                        {experience.description.one}
                                                    </div>
                                                    <div>
                                                        {experience.description.two}
                                                    </div>
                                                    <div>
                                                        {experience.description.three}
                                                    </div>
                                                    <div>
                                                        {experience.description.four}
                                                    </div>
                                                    <div>
                                                        {experience.description.five}
                                                    </div>
                                                    <div>
                                                        {experience.description.six}
                                                    </div>

                                                </ul>
                                            </Card>
                                        </InplaceContent>
                                    </Inplace>
                                </div>
                            </motion.div>

                        </div>
                    )
                })}
            </div>
            <div className="section">
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
            Hello world

        </div>
    )

}