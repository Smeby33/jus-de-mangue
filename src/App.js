import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbare from './navbare';
import Contenu from './contenu';
import Footerrs from './footerrs';
import Connexion from './connexion';

function App() {
  return (
    <div className="App">
      <div className="up">
        <div className="up1">
          <Navbare/>
          <Contenu/>
        </div>
        <div className="up2">
          <Connexion/>
        </div>
      </div>
      <div className="dawn">
        <Footerrs/>
      </div>
    </div>
  );
}

export default App;
 