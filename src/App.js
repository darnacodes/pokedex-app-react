
import React from 'react';
import Logo from './Logo';
import CaughtPokemon from './CaughtPokemon';
import BestPokemon from './BestPokemon';



function App() {
    //function buttonClick(){
    //console.log("Clicked the button!");

    function logWhenClicked(){
      console.log("you poked a pokemon");
  }
  return (
  <div>
    <Logo AppName="Pokedex" handleClick={logWhenClicked} />
    <BestPokemon abilities ={['Anticipation', 'Adaptability', 'Run-Away']}/>
    <CaughtPokemon date = {new Date().toLocaleDateString()}/>
    
  </div>
  )
  
};


export default App;