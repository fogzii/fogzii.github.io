import React from 'react';
import { Link } from 'react-scroll';

function Header() {
    return (
        <header className="header">
            <div className="navigation">
                <Link activeClass="active" to="home" offset={-10} spy={true} smooth={true} duration={500}>
                    <button>HOME</button>
                </Link>
                <Link activeClass="active" to="about" spy={true} smooth={true} duration={500}>
                    <button>ABOUT</button>
                </Link>
                <Link activeClass="active" to="projects" spy={true} smooth={true} duration={500}>
                    <button>PROJECTS</button>
                </Link>
                <Link activeClass="active" to="contact-me" spy={true} smooth={true} duration={500}>
                    <button>CONTACT ME</button>
                </Link>
            </div>
        </header>
    );
}

export default Header;