
// import React from 'react';
// import './Test.css'

// class Example extends React.Component {
//     constructor() {
//         super();
//         this.state = {};
//     }
//     mouseEnter() {
//         console.log('mouse enter')
//         document.getElementById('test').classList.add('.image-hover-opacity')
//         document.getElementById('test').style.width = "50rem"
//     }

//     mouseLeave() {
//         console.log('mouse leave')
//         document.getElementById('test').classList.remove('.image-hover-opacity')
//         document.getElementById('test').style.width = ""

//     }
//     render() {
//         return (
//             <img src="http://i.imgur.com/PLKabDV.png" onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} id="test" alt="test" className="" />
//         );
//     }
// }

// export default Example;


// import React, { Component, createRef } from "react";

// export default class Example extends Component {
//     scrollDiv = createRef();

//     scrollSmoothHandler = () => {
//         this.scrollDiv.current.scrollIntoView({ behavior: "smooth" });
//     };

//     render() {
//         return (
//             <div className="example">
//                 <div className="longDiv">
//                     <h1>Hello CodeSandbox</h1>
//                     <button onClick={this.scrollSmoothHandler}>click me!</button>
//                     <h2>Start editing to see some magic happen!</h2>
//                 </div>

//                 <div ref={this.scrollDiv}>hi</div>
//             </div>
//         );
//     }
// }


import React, { Component } from 'react';
import axios from 'axios';

const API = 'https://hn.algolia.com/api/v1/search?query=';
const DEFAULT_QUERY = 'redux';

export default class Example extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hits: [],
            isLoading: false,
            error: null,
        };
    }

    componentDidMount() {
        this.setState({ isLoading: true });

        axios.get(API + DEFAULT_QUERY)
            .then(result => this.setState({
                hits: result.data.hits,
                isLoading: false
            }))
            .catch(error => this.setState({
                error,
                isLoading: false
            }));
    }

    render() {
        const { hits, isLoading } = this.state;

        if (isLoading) {
            return <p>Loading ...</p>;
        }

        return (
            <ul>
                {hits.map(hit =>
                    <div>
                        <li key={hit.objectID}>
                            <a href={hit.url}>{hit.points}<br />{hit.title}</a>
                        </li>
                        <li key={hit.objectID}>
                            <a href={hit.url}>{hit._highlightResult.title.matchLevel}</a>
                        </li>
                        <li key={hit.objectID}>
                            <a href={hit.url}>{hit._highlightResult.title.value}</a>
                        </li>
                    </div>
                )}
            </ul>
        );
    }
}