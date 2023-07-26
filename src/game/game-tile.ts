
import {GameFigure} from "./figures/game-figure";
import { TileState, Team } from "./enums";

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
    constructor(r:number, c:number, s:number, color: number = 0,)
    {
        this.coorR = r;
        this.coorC = c;
        this.coorS = s;

        this.tileColor =    color;
        this.tileState =    TileState.STATE_DEFAULT;
        this.tileFigure =   undefined;
    }

    //
    isOccuppied():boolean
    {
        if (this.tileFigure === undefined) {return false;} else {return true;}
    }

    //
    isOccuppiedByEnemy(team: Team):boolean
    {
        if (this.isOccuppied())
        {
            if (this.tileFigure?.team != team)
            {
                return true;
            }
        }
        return false;
    }

    //
    isOccuppiedByAlly(team: Team):boolean
    {
        if (this.isOccuppied())
        {
            if (this.tileFigure?.team == team)
            {
                return true;
            }
        }
        return false;
    }

}