import React, { useState } from 'react';
import { Inplace, InplaceDisplay, InplaceContent } from 'primereact/inplace';
import { Card } from 'primereact/card';
import ExperienceService from '../../services/Experience';

export default function Rest() {
    const [products, setProducts] = useState([]);
    const experienceService = new ExperienceService();

    const onOpen = () => {
        experienceService.getDescriptions().then(data => setProducts(data)); // eslint-disable-next-line
    }

    return (
        <div>
            <div className="card">
                <h5>Lazy Data</h5>
                <Inplace onOpen={onOpen}>
                    <InplaceDisplay>
                        View Data
                </InplaceDisplay>
                    <InplaceContent>
                        <Card value={products}>
                            <div>
                                <ul>
                                    <li>{products.one}</li>
                                    <li>{products.two}</li>
                                    <li>{products.three}</li>
                                </ul>
                            </div>
                        </Card>
                    </InplaceContent>
                </Inplace>
            </div>
        </div>
    )
}