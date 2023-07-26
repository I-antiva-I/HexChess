import {GameFigure} from "./game-figure";
import {FigureType, Team} from "../enums";

export class GameFigureBishop extends GameFigure
{             

    constructor(team:Team)
    {
        super(team , FigureType.BISHOP);

        this.movementVectors = [[+1,+1],[-1,-1],[-2,+1],[+2,-1],[+1,-2],[-1,+2]];
    }

    greeting()
    {
        console.log("Hi! I'm "+String(this.figureType)+" from "+String(this.team)+" team");
    }
}