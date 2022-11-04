import React from 'react';

function Logo (props) {
      //console.log(props);
      const testName= "Nadia"
      function logWhenClicked(props){
      console.log("you poked a pokemon");
      }
  
    return (
    <div>
      <header>
      <h1> Welcome to {props.AppName} {testName}</h1>
      <img 
          src= "https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
          onClick={props.logWhenClicked} alt="pokemon pic">
  
          </img>
      </header>
        
  
    </div>)
  }

  export default Logo;
