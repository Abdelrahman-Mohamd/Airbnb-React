import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';

function App(){
    return(
        <div>
            <Navbar/>
            <Hero/>
            <Card
               image="https://www.athletespeakers.com/storage/celebrities/1627410490_Katie-Zaferes-Banner-1.jpg" 
               rating="5.0" 
               reviewCount = {6} 
               country="USA" 
               title="Life Lessons with Katie Zaferes"
               price={136}
               />
        </div>
    )
}
export default App;