import React from 'react';


function BestPokemon(props){
   
    return (
      <div> 
        <p> My favorite Pokemon is Pikachu</p>
          <ul>{props.abilities.map((name, index) => (
          <li key={index}>{name}</li>
        ))}</ul>
      </div>
    )
};

export default BestPokemon;