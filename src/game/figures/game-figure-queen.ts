
import {GameFigure} from "./game-figure";
import {FigureType, Team} from "../enums";

export class GameFigureQueen extends GameFigure
{             

    constructor(team:Team)
    {
        super(team , FigureType.QUEEN);

    }

    greeting()
    {
        console.log("Hi! I'm "+String(this.figureType)+" from "+String(this.team)+" team");
    }
}
