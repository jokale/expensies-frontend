import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { render } from '@testing-library/react';

class App  extends React.Component {


render() {
  return (
    <div>
      
       <Navbar/>
        <p>
         Hello
        </p>
     
    
    </div>
  );
}
}
export default App;
