import React, { useState } from 'react';
import './App.css';
// import ProjectContainer from '../components/ProjectContainer.js';
import Nav from './components/Nav';
import ListofProjects from './components/ListofProjects';
// import Header from './components/Header';
// import Footer from './components/Footer';


function App() {

  return (
    <main>
      <Header />
        <Nav />
          <ListofProjects />
      <Footer />
    </main>
      );
}

export default App;
