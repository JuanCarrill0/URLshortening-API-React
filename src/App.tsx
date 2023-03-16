import React from 'react';
import './App.css';

import {Navbar} from './Contains/navBar';
import { Banner } from './Contains/banner';
import { Input } from './Contains/inputLink';
import { Stadistics } from './Contains/stadistics';
import { FooterTop } from './Contains/footerTop';
import { FooterBottom } from './Contains/footerBottom';
import './App.css';

function App() {
  const handleLinkChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    
  };

  return (
    <div className="App">
      <div className="w-4/5 mx-auto">
        <Navbar/>
          <Banner/>
          <Input 
            onChange={handleLinkChange}        
          />
          <Stadistics 
          
          />
      </div>
      <div className="mt-28">
        <FooterTop />
        <FooterBottom />
      </div>
    </div>
  );
}

export default App;
