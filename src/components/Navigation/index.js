import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Navigation(props) {
    const {
          someProjects = [],
          setCurrentProject,
          currentProject,
          contactSelected,
          setContactSelected
    } = props;

    useEffect(() => {
            document.title = capitalizeFirstLetter(currentProject.name);
        }, [currentProject]);

    return (
        <header className="flex-row px-1">
        <h2>
          <a data-testid="link" href="/">
            <span role="img" aria-label="camera"> 📸</span> mlbarre
          </a>
        </h2>
        <nav>
          <ul className="flex-row">
            <li className="mx-2">
            <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
                Origin Story
              </a>
            </li>
            <li className={`mx-2 ${contactSelected && 'navActive'}`}>
            <span onClick={() => setContactSelected(true)}>Where to Find Me</span>
            </li>
            {someProjects.map((Project) => (
              <li
                className={`mx-1 ${
                  currentProject.name === Project.name && !contactSelected && `navActive`
                }`}
                key={Project.name}
              >
                <span
                  onClick={() => {
                    setCurrentProject(Project)
                    setContactSelected(false);
                  }}
                >
                  {capitalizeFirstLetter(Project.name)}
                </span>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    );
}
  
  export default Navigation;