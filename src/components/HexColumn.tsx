
import HexTile from  "./HexTile";
import { GameTile } from "../game/game-tile";

function HexColumn(props: {
    tiles:          Array<GameTile>, 
    offset:         number, 
    gap:            number, 
    callback:       Function
}) 
{
    
    let hexTiles = new Array<JSX.Element>();
    for(let tile of props.tiles)
    {
        hexTiles.push(<HexTile
            callback={props.callback}
            coorR={tile.coorR}
            coorC={tile.coorC}
            color={tile.tileColor}
            state={tile.tileState}
            figureTeam={tile.tileFigure?.team}
            figureType={tile.tileFigure?.figureType}

                        />)
    }




    return (
        <div className="hex-column" style={{left: String(props.offset)+"px", gap: String(props.gap)+"px"}}>
            {hexTiles}
        </div>
    )
}

export default HexColumn;

