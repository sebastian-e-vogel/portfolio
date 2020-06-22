import React from 'react';
import './App.css';

import AboutMe from "./components/aboutMe";



 const App = () => {
  return (
    <div className="aplication">
      <section className="container-welcome">
        <div className="welcome" />
      </section>
      <section className="aboutMe">
        <AboutMe />
      </section>
    </div>
  );
}

export default App;
