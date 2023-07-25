
import {GameFigure} from "./figures/game-figure";
import { TileState } from "./enums";

export class GameTile
{
    // Class Proprties ---------------------------------------------
    // Coordinates              [!] Coordinates must obey this rule: coorC+coorR+coorS = 0 
    coorR: number;              // ROW
    coorC: number;              // COLUMN
    coorS: number;              // STABILIZER
    // Color 
    tileColor:      number;
    // State
    tileState:      TileState;
    // Figure
    tileFigure:     GameFigure | undefined;


    // Class Functions ---------------------------------------------
    // Constructor
    constructor(r:number, c:number, s:number)
    {
        this.coorR = r;
        this.coorC = c;
        this.coorS = s;

        this.tileColor =    1;
        this.tileFigure =   undefined;
        this.tileState =    TileState.STATE_DEFAULT;
    }

    //
    isOccuppied():boolean
    {
        if (this.tileFigure === undefined) {return false;} else {return true;}
    }

    //
    isOccuppiedByEnemy():boolean
    {
        return true;
    }

    //
    isOccuppiedByPlayer():boolean
    {
        return true;
    }

}