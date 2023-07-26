import {GameFigure} from "./game-figure";
import {FigureType, Team} from "../enums";
import { MovementVector } from "../movement-vector";

export class GameFigureKing extends GameFigure
{             

    constructor(team:Team)
    {
        super(team , FigureType.KING);

        // Movement of Kind (Rook and Bishop with max distance of 1)
        // Rook
        this.movementVectors.push(new MovementVector(+1, 0, 1));
        this.movementVectors.push(new MovementVector(-1, 0, 1));
        this.movementVectors.push(new MovementVector( 0,+1, 1));
        this.movementVectors.push(new MovementVector( 0,-1, 1));
        this.movementVectors.push(new MovementVector(+1,-1, 1));
        this.movementVectors.push(new MovementVector(-1,+1, 1));
        // Bishop 
        this.movementVectors.push(new MovementVector(+1,+1, 1));
        this.movementVectors.push(new MovementVector(-1,-1, 1));
        this.movementVectors.push(new MovementVector(-2,+1, 1));
        this.movementVectors.push(new MovementVector(+2,-1, 1));
        this.movementVectors.push(new MovementVector(+1,-2, 1));
        this.movementVectors.push(new MovementVector(-1,+2, 1));
        
    }

    greeting()
    {
        console.log("Hi! I'm "+String(this.figureType)+" from "+String(this.team)+" team");
    }
}
