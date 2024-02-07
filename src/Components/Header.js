import React from 'react';
import { HashLink } from 'react-router-hash-link';

function Header() {
    return (
        <header className="header">
            <div className="navigation">
                <HashLink to="#home" smooth>
                    <button>HOME</button>
                </HashLink>
                <HashLink to="#about" smooth>
                    <button>ABOUT</button>
                </HashLink>
                <HashLink to="#projects" smooth>
                    <button>PROJECTS</button>
                </HashLink>
                <HashLink to="#contact-me" smooth>
                    <button>CONTACT ME</button>
                </HashLink>
            </div>
        </header>
    );
}

export default Header;