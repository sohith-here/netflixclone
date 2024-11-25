import React from 'react'
import Navbar from "./components/navbar";
import './App.css'
import Banner from './components/Banner';
import Rowpost from './components/RowPost';
import { originalsUrl,actionUrl, romanceUrl,horrorUrl,comedyUrl } from './components/urls';
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Banner/>
     <Rowpost url={originalsUrl} title='Netflix Originals'/>
     <Rowpost url={actionUrl} title='Action' isSmall/>
     <Rowpost url={romanceUrl} title='Romance' isSmall/>
     <Rowpost url={horrorUrl} title='Horror' isSmall/>
     <Rowpost url={comedyUrl} title='Comedy' isSmall/>
     
  
    </div>
    
  );
}

export default App;
