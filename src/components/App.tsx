import React, {useEffect, useMemo, useState} from 'react';
// TSX Components
import HexField from './HexField';
// Classes
import {GameField} from "./../game/game-field";
// CSS
import './../css/App.css';
// OTHER
import logo from './../images/logo.svg';



function App() {
  
  let [gameState, setGameState] = useState({gameField: new GameField(5)});
  //console.log("???" ,gameState["gameField"].getTile(-435,-51))
  let callback = (coorR: number, coorC: number) =>
    {
      console.log("App says: ", coorR, coorC)
      console.log("App says: ", coorR, coorC)

      setGameState({gameField:  gameState["gameField"].highlightTiles([coorR, coorC]) });
    }

  return (
    <div className="application">
        <HexField gameField={gameState["gameField"]} callback={callback}></HexField>
    </div>
  );
}

export default App;
