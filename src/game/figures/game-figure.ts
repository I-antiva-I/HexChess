
import {FigureType, Team} from "./../enums";
import { MovementVector } from "../movement-vector";

export abstract class GameFigure
{             
    team:               Team;          
    figureType:         FigureType;
    movementVectors:    Array<MovementVector>;

    constructor(team:Team, figureType: FigureType)
    {
        this.team = team;
        this.figureType = figureType;
        this.movementVectors = new Array<MovementVector>;
    }

    greeting()
    {
        console.log("Hi! I'm "+String(this.figureType)+" from "+String(this.team)+" team");
    }


}

