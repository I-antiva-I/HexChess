
import {GameFigure} from "./game-figure";
import {FigureType, Team} from "./../enums";
import { MovementVector } from "../movement-vector";

export class GameFigurePawn extends GameFigure
{             

    constructor(team:Team)
    {
        super(team , FigureType.PAWN);
        

        // BLACK [[+1,0],[0,-1],[+1,-1]];
        // WHITE [[-1,0],[0,+1],[-1,+1]];
        if (team === Team.BLACK)
        {
            this.movementVectors.push(new MovementVector(+1, 0,1));
            this.movementVectors.push(new MovementVector( 0,-1,1));
            this.movementVectors.push(new MovementVector(+1,-1,1,false));
        }
        else
        {
            this.movementVectors.push(new MovementVector(-1, 0,1));
            this.movementVectors.push(new MovementVector( 0,+1,1));
            this.movementVectors.push(new MovementVector(-1,+1,1,false));
        }

    }

    greeting()
    {
        console.log("Hi! I'm "+String(this.figureType)+" from "+String(this.team)+" team");
    }
}
