import React from 'react';

function Navigation() {

    return (
    <header className="flex-row px-1">
        <h2>
        <a data-testid="link" href="/">
            <span role="img" aria-label="camera"> 📸</span> Oh Snap!
            </a>
        </h2>
        <nav>
            <ul className="flex-row">
                <li className="mx-2">
                <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
                        Origin Story
                    </a>
                </li>
                <li className="mx-2">
                    <a href="#portfolio">
                        Projects
                    </a>
                </li>
                <li className="mx-2">
                    <a href="#resume">
                        Cover Letters
                    </a>
                </li>
                <li>
                <span onClick={() => setContactSelected(true)}>Where to Find Me</span>
                </li>
            </ul>
        </nav>
    </header>
    );
}
  
  export default Navigation;