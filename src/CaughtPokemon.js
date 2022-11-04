import React from 'react';
import {useState} from "react";

function CaughtPokemon(props) {
    
    const [caught, setCaught]= useState([]);
    
    const RandomNameArray= ["Pika","Trepitjada","DinoBub"]
    const RandomName=RandomNameArray[Math.floor(Math.random() * RandomNameArray.length)];

    function catchPokemon(){
      setCaught (caught.concat(RandomName));
    }

    return (
      <div>
              <p>Caught {caught.length} Pokémon on {props.date}</p>
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