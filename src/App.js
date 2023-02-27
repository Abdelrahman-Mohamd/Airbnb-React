import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import Data from './data'

function App(){
    const Cards = Data.map(
        function(x){
            return <Card key = {x.id}
                         image={x.coverImg}
                         rating={x.stats.rating}
                         reviewCount={x.stats.reviewCount}
                         location={x.location}
                         title={x.title}
                         price={x.price}
                    />
        }
    )
    return(
        <div>
            <Navbar/>
            <Hero/>
            {/* <Card
               image="https://www.athletespeakers.com/storage/celebrities/1627410490_Katie-Zaferes-Banner-1.jpg" 
               rating="5.0" 
               reviewCount = {6} 
               location="USA" 
               title="Life Lessons with Katie Zaferes"
               price={136}
               /> */}
               {Cards}
        </div>
    )
}
export default App;