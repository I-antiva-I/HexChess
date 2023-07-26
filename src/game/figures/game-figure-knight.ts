
import {GameFigure} from "./game-figure";
import {FigureType, Team} from "../enums";
import { MovementVector } from "../movement-vector";

export class GameFigureKnight extends GameFigure
{             

    constructor(team:Team)
    {
        super(team , FigureType.KNIGHT);

        // Movement of Knight
        this.movementVectors.push(new MovementVector(+3, -1, 1));
        this.movementVectors.push(new MovementVector(-3, +1, 1));
        this.movementVectors.push(new MovementVector(+1, -3, 1));
        this.movementVectors.push(new MovementVector(-1, +3, 1));
        this.movementVectors.push(new MovementVector(-2, -1, 1));
        this.movementVectors.push(new MovementVector(+2, +1, 1));
        this.movementVectors.push(new MovementVector(-1, -2, 1));
        this.movementVectors.push(new MovementVector(+1, +2, 1));
        this.movementVectors.push(new MovementVector(+3, -2, 1));
        this.movementVectors.push(new MovementVector(-3, +2, 1));
        this.movementVectors.push(new MovementVector(+2, -3, 1));
        this.movementVectors.push(new MovementVector(-2, +3, 1));
    }

    greeting()
    {
        console.log("Hi! I'm "+String(this.figureType)+" from "+String(this.team)+" team");
    }
}
