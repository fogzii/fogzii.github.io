import React, { Component } from "react";
import Title from "./Title";
import { camera_gif, camera_static } from "../assets/images";
import TitleDescription from "./TitleDescription";
import ImageButton from "./ImageButton";
import Header from "./Header";
import { BrowserRouter } from "react-router-dom";
import { Link } from "react-scroll";
import About from "./About";
import Projects from "./Projects";
import ContactMe from "./ContactMe";

class Main extends Component {
    render() {
        return (
            <BrowserRouter>
            <div>
                <div className="centered-container" id="home">
                    <Header/>
                    <Title title={'Time to BeReal.'}/>
                    <TitleDescription titleDescription = {'See what Bowen Xiao has been up to.'}/>
                    <Link to="about" spy={true} smooth={true} duration={500}>
                        <ImageButton src={camera_static} hoverSrc={camera_gif} alt="Play Button" />
                    </Link>
                </div>
                <div>
                    <About/>
                    <Projects/>
                    <ContactMe/>
                </div>
            </div>
            </BrowserRouter>
        )
    }
}

export default Main;