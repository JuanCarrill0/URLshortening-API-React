import React from 'react';
import './App.css';

import {Navbar} from './components/navBar';
import { Banner } from './components/banner';
import { Input } from './components/inputLink';
import { Stadistics } from './components/stadistics';

import './App.css';

function App() {
  const handleLinkChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    
  };

  return (
    <div className="App">
        <Navbar/>
        <Banner/>
        <Input 
          onChange={handleLinkChange}        
        />
        <Stadistics 
        
        />
    </div>
  );
}

export default App;
