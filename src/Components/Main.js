import React, {Component} from "react";
import Title from "./Title";
import PhotoWall from "./PhotoWall";
import {img1, img2, img3, camera_gif, camera_static} from "../assets/images";
import TitleDescription from "./TitleDescription";
import SubHeading from "./SubHeading";
import ImageButton from "./ImageButton";
import Header from "./Header";

// import List from "./List";

const posts = [
    {
        id: "0",
        description: "test 1",
        imageLink: img1
    },
    {
        id: "1",
        description: "test 2",
        imageLink: img2
    },
    {
        id: "2",
        description: "test 3",
        imageLink: img3
    }
]

class Main extends Component {
    render() {
        return (
            <div>
                <div className="centered-container">
                    <Header />
                    <Title title={'Time to BeReal.'}/>
                    <TitleDescription titleDescription = {'See what Bowen Xiao has been up to.'}/>
                    <ImageButton src={camera_static} hoverSrc={camera_gif} alt="Play Button" />
                </div>
                <div>
                    <PhotoWall posts={posts} />
                    <SubHeading subHeading = {'About'}/>
                    <SubHeading subHeading = {'Projects'}/>
                    <SubHeading subHeading = {'Contact Me'}/>
                </div>
            </div>
        )
    }
}

export default Main;