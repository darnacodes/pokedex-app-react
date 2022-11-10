import React from 'react';
import {useState} from "react";

function CaughtPokemon(props) {
    
    const [caught, setCaught]= useState([]);
    const [pokemonNameInput, setpokemonNameInput]= useState(" ");
    
    //const RandomNameArray= ["Pika","Trepitjada","DinoBub"]
    //const RandomName=RandomNameArray[Math.floor(Math.random() * RandomNameArray.length)];

    function handleInputChange(event) {
      setpokemonNameInput(event.target.value);
    }

    function catchPokemon(){
      setCaught (caught.concat(pokemonNameInput));
      setpokemonNameInput("");
    }

    return (
      <div>
              <p>Caught {caught.length} Pokémon on {props.date}</p>
              <input type="text" 
              value={pokemonNameInput}
              onChange={handleInputChange}/>

              <button onClick={catchPokemon}> Catch Pokemon</button>
              <ul>{caught.map((element,index) =>{
                    
                  return (
                  <li key={index}>{element} </li>
                  )

              })}
              </ul>
                  
      </div>
    
  );
  }
  
  export default CaughtPokemon;