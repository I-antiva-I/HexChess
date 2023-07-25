
import {GameFigure} from "./game-figure";
import {FigureType, Team} from "./../enums";

export class GameFigurePawn extends GameFigure
{             

    constructor(team:Team)
    {
        super(team , FigureType.PAWN);
        
        if (team === Team.BLACK)
        {
            this.movementVectors = [[+1,0],[0,-1],[+1,-1]];
        }
        else
        {
            this.movementVectors = [[-1,0],[0,+1],[-1,+1]];
        }

    }

    greeting()
    {
        console.log("Hi! I'm "+String(this.figureType)+" from "+String(this.team)+" team");
    }
}
