import React from 'react';
import photo from "../../extras/imgs/tech-blog.png";

function Projects(props) {
    const currentProject = {
        name: "Personal Crypto Tracker",
        description:
          "A individual tracker for one's crypto-currency, eligible for multiple types of coins and able to input number of coins.",
    };
    return (
    <section>
          <h1>{currentProject.name}</h1>
          <p>{currentProject.name}</p>
          <div className="flex-row">
          <img
            src={photo}
            alt="tech-blog-screenshot"
            className="img-thumbnail mx-1"
          />
        </div>
    </section>
    );
}


export default Projects;