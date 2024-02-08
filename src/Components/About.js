import React from 'react';
import SubHeading from './SubHeading';
import ImageSlider from './ImageSlider';

export default function About() {
    return (
        <div className="centered-container" id='about'>
            <SubHeading subHeading = {'About'}/>
            <p className="removeMargin"> Bowen Xiao | 3rd Year Computer Science | INTJ </p>
            <div className='container'>
                <ImageSlider/>
            </div>
        </div>
    );
}
