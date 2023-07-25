import { GameField } from "../game/game-field";
import HexTile from  "./HexTile";
import HexColumn from './HexColumn';

function HexField(props: {
    gameField:      GameField, 
    callback:       Function
}) 
{
    let hexColumns = new Array<JSX.Element>();

    let iteration =         0;
    let radius =            props.gameField.radius;
    let columnOffset =      12;                  // Pixels
    let columnGap =         4;                   // Pixels

    for(let column of props.gameField.getColumns())
    {
        let offset = columnOffset*(radius-iteration);
        hexColumns.push(<HexColumn 
            tiles=      {column} 
            offset=     {offset}
            gap=        {columnGap}
            callback=   {props.callback}
            />)
        iteration++;
    }

    return (
        <div className="hex-field">
            {hexColumns}
        </div>
    )
}


export default HexField;

