import React from 'react';
import SubHeading from './SubHeading';
import ImageButton from './ImageButton';
import { linkedin_img, github_img, facebook_img } from '../assets/images';

function ContactMe() {
    return (
        <div className="centered-container" id='contact-me'>
            <SubHeading subHeading = {'Contact Me'}/>
            <div className="contact-links">
                <a href="https://www.linkedin.com/in/bowenxiao03/" target="_blank" rel="noopener noreferrer">
                    <ImageButton src={linkedin_img} hoverSrc={linkedin_img} alt="LinkedIn Button" />
                </a>
                <a href="https://github.com/fogzii/" target="_blank" rel="noopener noreferrer">
                    <ImageButton src={github_img} hoverSrc={github_img} alt="Github Button" />
                </a>
                <a href="https://www.facebook.com/bowen.xiao.501/" target="_blank" rel="noopener noreferrer">
                    <ImageButton src={facebook_img} hoverSrc={facebook_img} alt="Facebook Button" />
                </a>
            </div>
        </div>
    );
}

export default ContactMe;