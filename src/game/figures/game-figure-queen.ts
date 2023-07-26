
import {GameFigure} from "./game-figure";
import {FigureType, Team} from "../enums";
import { MovementVector } from "../movement-vector";

export class GameFigureQueen extends GameFigure
{             

    constructor(team:Team)
    {
        super(team , FigureType.QUEEN);

        // Movement of Queen (Rook and Bishop)
        // Rook 
        this.movementVectors.push(new MovementVector(+1, 0));
        this.movementVectors.push(new MovementVector(-1, 0));
        this.movementVectors.push(new MovementVector( 0,+1));
        this.movementVectors.push(new MovementVector( 0,-1));
        this.movementVectors.push(new MovementVector(+1,-1));
        this.movementVectors.push(new MovementVector(-1,+1));
        // Bishop
        this.movementVectors.push(new MovementVector(+1,+1));
        this.movementVectors.push(new MovementVector(-1,-1));
        this.movementVectors.push(new MovementVector(-2,+1));
        this.movementVectors.push(new MovementVector(+2,-1));
        this.movementVectors.push(new MovementVector(+1,-2));
        this.movementVectors.push(new MovementVector(-1,+2));
    }

    greeting()
    {
        console.log("Hi! I'm "+String(this.figureType)+" from "+String(this.team)+" team");
    }
}
