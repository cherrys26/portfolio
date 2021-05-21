import { ScrollTop } from 'primereact/scrolltop'
import { Button } from 'primereact/button'
import { Toolbar } from 'primereact/toolbar'
import { Divider } from 'primereact/divider'

import Contact from './components/Contact/Contact'
import 'primereact/resources/themes/saga-purple/theme.css';
import 'primeicons/primeicons.css';
import './App.css';
import Home from './components/Home/Home';
import Resume from './components/Resume/Resume';
import About from './components/About/About';

import React, { Component, createRef, useState } from 'react'
// import Test from './components/Test/Test';
import { motion, useViewportScroll, useTransform } from "framer-motion";
import Example from './components/Test/Example'
import Testing from './components/Test/Refresh'


function CheckScroll() {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, -300], [0.2, 1]);

  return (
    <div className="wrapper-scroll">
      <motion.div
        className="container-scroll"
        style={{
          scale
        }}
      >
        <motion.div
          className="item-scroll"
          style={{
            scaleY: scrollYProgress
          }}
        />
      </motion.div>
    </div>
  )
}
export default class App extends Component {

  scrollHome = createRef();
  scrollContact = createRef();
  scrollAbout = createRef();
  scrollResume = createRef();

  scrollToHome = () => {
    this.scrollHome.current.scrollIntoView({ behavior: "smooth" });
  };
  scrollToAbout = () => {
    this.scrollAbout.current.scrollIntoView({ behavior: "smooth" });
  };
  scrollToContact = () => {
    this.scrollContact.current.scrollIntoView({ behavior: "smooth" });
  };
  scrollToResume = () => {
    this.scrollResume.current.scrollIntoView({ behavior: "smooth" })
  };

  content = (
    <React.Fragment>
      <Button className="p-button-text" onClick={this.scrollToHome}>Home</Button>
      <Divider layout="vertical" />
      <Button className="p-button-text" onClick={this.scrollToResume}>Experience</Button>
      <Divider layout="vertical" />
      <Button className="p-button-text" onClick={this.scrollToAbout}>About Me</Button>
      <Divider layout="vertical" />
      <Button className="p-button-text" onClick={this.scrollToContact}>Contact</Button>
    </React.Fragment>

  )

  render() {
    return (
      <div className="App">
        <ScrollTop threshold={300} className="custom-scrolltop" icon="pi pi-arrow-up" />
        <Toolbar left={this.content} />
        <Testing />
        <div className="body">
          <header className="section" ref={this.scrollHome}>
            <Home></Home>
          </header>
          {/* <Test /> */}
          <div ref={this.scrollResume}></div>
          <Resume></Resume>
          <div ref={this.scrollAbout}></div>
          <About></About>
          <div ref={this.scrollContact}></div>
          <Contact></Contact>

          <div>
            Break
            <br />
          </div>
          <div className="example-container">


          </div>
        </div>

      </div >
    );
  }
}

