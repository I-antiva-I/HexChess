
import {GameFigure} from "./game-figure";
import {FigureType, Team} from "../enums";

export class GameFigureKnight extends GameFigure
{             

    constructor(team:Team)
    {
        super(team , FigureType.KNIGHT);

        this.movementVectors = [[+3,-1],[-3,+1],[+1,-3],[-1,+3], [-2,-1],[+2,+1],[+1,+2],[-1,-2]];
    }

    greeting()
    {
        console.log("Hi! I'm "+String(this.figureType)+" from "+String(this.team)+" team");
    }
}
