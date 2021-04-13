import { Card } from 'primereact/card';
import React, { useEffect, useState } from 'react';
import './Test.css'

class Example extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    mouseEnter() {
        console.log('mouse enter')
        document.querySelector('img').classList.add('.image-hover-opacity')
    }

    mouseLeave() {
        console.log('mouse leave')
        document.querySelector('img').classList.remove('.image-hover-opacity')
    }
    render() {
        return (
            <img src="http://i.imgur.com/PLKabDV.png" onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} />
        );
    }
}

export default Example;