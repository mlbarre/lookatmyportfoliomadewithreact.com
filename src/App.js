// import logo from './logo.svg';
import React, { useState } from 'react';
// import Header from "./components/Header";
// import Footer from "./components/Footer";
import Navigation from './components/Navigation';
import Projects from "./components/Project";
import ContactForm from "./components/Contact";
import './App.css';


function App() {
  const [someProjects] = useState([
    {
      name: 'Personal Crypto Tracker',
      description: "A individual tracker for one's crypto-currency, eligible for multiple types of coins and able to input number of coins.",
    },
    { name: 'We Rate Pets', 
    description: 'A webpage for pet lovers of all animals' 
    }
]);
const [currentProject, setCurrentProject] = useState(someProjects[0]);
const [contactSelected, setContactSelected] = useState(false);

  return (
    
      <div>
        {/* <Header></Header> */}
        <Navigation
        someProjects={someProjects}
        setCurrentProject={setCurrentProject}
        currentProject={currentProject}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Navigation>
        <main>
        {!contactSelected ? (
          <>
          <Projects currentProject={currentProject}></Projects>
          </>
          ) : (
          <ContactForm></ContactForm>
          )}
          {/* <Footer></Footer> */}
        </main>
      </div>
    );
}

export default App;
