import React, { useState } from 'react';

function Navigation(props) {
        const {
          someProjects = [],
          setCurrentProject,
          currentProject,
        } = props;

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
              <a data-testid="about" href="#about">
                About me
              </a>
            </li>
            <li className="mx-2">
              <span>Contact</span>
            </li>
            {someProjects.map((Project) => (
              <li
                className={`mx-1 ${
                  currentProject.name === Project.name && 'navActive'
                  }`}
                key={Project.name}
              >
                <span
                  onClick={() => {
                    setCurrentCategory(category)
                  }}
                >
                  {capitalizeFirstLetter(category.name)}
                </span>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    );
}
  
  export default Navigation;