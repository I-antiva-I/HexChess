import {GameFigure} from "./game-figure";
import {FigureType, Team} from "./../enums";
import { MovementVector } from "../movement-vector";

export class GameFigureRook extends GameFigure
{             

    constructor(team:Team)
    {
        super(team , FigureType.ROOK);

        // Movement of Rook
        this.movementVectors.push(new MovementVector(+1, 0));
        this.movementVectors.push(new MovementVector(-1, 0));
        this.movementVectors.push(new MovementVector( 0,+1));
        this.movementVectors.push(new MovementVector( 0,-1));
        this.movementVectors.push(new MovementVector(+1,-1));
        this.movementVectors.push(new MovementVector(-1,+1));
    }

    greeting()
    {
        console.log("Hi! I'm "+String(this.figureType)+" from "+String(this.team)+" team");
    }
}
