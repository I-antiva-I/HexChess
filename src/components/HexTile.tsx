// Black
import iconBlackPawn from "./../images/figures/black/pawn.svg";
import iconBlackRook from "./../images/figures/black/rook.svg";
import iconBlackKnight from "./../images/figures/black/knight.svg";
import iconBlackBishop from "./../images/figures/black/bishop.svg";
import iconBlackQueen from "./../images/figures/black/queen.svg";
import iconBlackKing from "./../images/figures/black/king.svg";
// White
import iconWhitePawn from "./../images/figures/white/pawn.svg";
import iconWhiteRook from "./../images/figures/white/rook.svg";
import iconWhiteKnight from "./../images/figures/white/knight.svg";
import iconWhiteBishop from "./../images/figures/white/bishop.svg";
import iconWhiteQueen from "./../images/figures/white/queen.svg";
import iconWhiteKing from "./../images/figures/white/king.svg";


import { FigureType, Team, TileState} from "../game/enums";

function HexTile(props:{
    callback:           Function,
    coorR:              number,
    coorC:              number,
    color:              number
    state:              TileState,
    figureTeam?:        Team,
    figureType?:        FigureType,
}) 
{
    let onClickEvent = () =>
    {
        console.log("Hi!");
        props.callback(props.coorR, props.coorC)


        //console.log(event);
    };

    return (
        <div 
            className=      {"hex-tile "+"state-"+(props.state)+" color-"+String(props.color)}
            onClick=        {onClickEvent}
            >
                {prepareIcon(props.figureTeam, props.figureType)}
        </div>
    )
}






// TODO: CONDITIONAL IMPORT

function prepareIcon(figureTeam:any, figureType:any)
{
    if ((figureTeam !== undefined) && (figureType !== undefined))
    {
        // BLACK
        if ((figureTeam === Team.BLACK) && (figureType === FigureType.PAWN))
        {
            return <img className="hex-icon" src={iconBlackPawn}></img>
        }
        if ((figureTeam === Team.BLACK) && (figureType === FigureType.ROOK))
        {
            return <img className="hex-icon" src={iconBlackRook}></img>
        }
        if ((figureTeam === Team.BLACK) && (figureType === FigureType.KNIGHT))
        {
            return <img className="hex-icon" src={iconBlackKnight}></img>
        }
        if ((figureTeam === Team.BLACK) && (figureType === FigureType.BISHOP))
        {
            return <img className="hex-icon" src={iconBlackBishop}></img>
        }
        if ((figureTeam === Team.BLACK) && (figureType === FigureType.QUEEN))
        {
            return <img className="hex-icon" src={iconBlackQueen}></img>
        }
        if ((figureTeam === Team.BLACK) && (figureType === FigureType.KING))
        {
            return <img className="hex-icon" src={iconBlackKing}></img>
        }

        // WHITE
        if ((figureTeam === Team.WHITE) && (figureType === FigureType.PAWN))
        {
            return <img className="hex-icon" src={iconWhitePawn}></img>
        }
        if ((figureTeam === Team.WHITE) && (figureType === FigureType.ROOK))
        {
            return <img className="hex-icon" src={iconWhiteRook}></img>
        }
        if ((figureTeam === Team.WHITE) && (figureType === FigureType.KNIGHT))
        {
            return <img className="hex-icon" src={iconWhiteKnight}></img>
        }
        if ((figureTeam === Team.WHITE) && (figureType === FigureType.BISHOP))
        {
            return <img className="hex-icon" src={iconWhiteBishop}></img>
        }
        if ((figureTeam === Team.WHITE) && (figureType === FigureType.QUEEN))
        {
            return <img className="hex-icon" src={iconWhiteQueen}></img>
        }
        if ((figureTeam === Team.WHITE) && (figureType === FigureType.KING))
        {
            return <img className="hex-icon" src={iconWhiteKing}></img>
        }



    }

    return <div></div>;
}



// "./../images/figures"
//     <img className="hex-icon" src={icon}></img>
//             {props.text === undefined ? "YES" : "NO"}

export default HexTile;
