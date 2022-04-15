import React from 'react';
import './App.css';
// import ProjectContainer from '../components/ProjectContainer.js';
// import Nav from './components/Nav';
import ListofProjects from './components/ListofProjects';
import TopofPage from './components/TopofPage';
import Footer from './components/Footer.js';


function App() {

  return (
    <main>
      <TopofPage />
          <ListofProjects />
      <Footer />
    </main>
  );
}

export default App;
