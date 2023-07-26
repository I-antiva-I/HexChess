import {GameFigure} from "./game-figure";
import {FigureType, Team} from "../enums";
import { MovementVector } from "../movement-vector";

export class GameFigureBishop extends GameFigure
{             

    constructor(team:Team)
    {
        super(team , FigureType.BISHOP);

        // Movement of Bishop
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
