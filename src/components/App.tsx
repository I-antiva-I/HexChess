import React, {useEffect, useMemo, useState} from 'react';
// TSX Components
import HexField from './HexField';
// Classes
import {GameField} from "./../game/game-field";
// CSS
import './../css/App.css';
// OTHER
import logo from './../images/logo.svg';


import { Team } from '../game/enums';

function App() {
  
  let [gameState, setGameState] = useState({
    gameField: new GameField(5),
    previousCoors:  [-99,99],
  });

  let callback = (coorR: number, coorC: number) =>
    {
      console.log("App recieved coordinates: ", coorR, coorC);
      gameState.gameField.processClick([coorR, coorC], gameState.previousCoors);
      
      setGameState(
        {
          gameField : gameState.gameField,
          previousCoors: [coorR, coorC]
        }
      )
    }

  return (
    <div className="application">
        <HexField gameField={gameState["gameField"]} callback={callback}></HexField>
    </div>
  );
}

export default App;
