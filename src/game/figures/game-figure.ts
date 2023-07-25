
import {FigureType, Team} from "./../enums";

export abstract class GameFigure
{             
    team:               Team;          
    figureType:         FigureType;
    movementVectors:    Array<Array<number>> | undefined;

    constructor(team:Team, figureType: FigureType)
    {
        this.team = team;
        this.figureType = figureType;
        this.movementVectors = [[1,0],[-1,0],[0,-1],[0,1]];
    }

    greeting()
    {
        console.log("Hi! I'm "+String(this.figureType)+" from "+String(this.team)+" team");
    }


}

