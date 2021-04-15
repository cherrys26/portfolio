import React from 'react';
import "../../App.css"
import { Card } from 'primereact/card'
import { Splitter, SplitterPanel } from 'primereact/splitter';
export default function About() {

    return (
        <div className="tabview-demo">
            <Card>
                <Splitter style={{ height: '300px' }} className="p-mb-5">
                    <SplitterPanel className="p-d-flex p-ai-center p-jc-center">
                        Panel 1
                    </SplitterPanel>
                    <SplitterPanel className="p-d-flex p-ai-center p-jc-center">
                        <img src="./../image.jpg" id="test"></img>
                    </SplitterPanel>
                </Splitter>

            </Card>
        </div>
    )
}