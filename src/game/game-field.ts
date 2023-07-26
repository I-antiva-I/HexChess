
import {GameTile} from "./game-tile"
import {GameFigurePawn} from "./../game/figures/game-figure-pawn"
import {GameFigureRook} from "./../game/figures/game-figure-rook"
import {GameFigureKnight} from "./../game/figures/game-figure-knight"
import {GameFigureBishop} from "./../game/figures/game-figure-bishop"
import {GameFigureQueen} from "./../game/figures/game-figure-queen"
import {GameFigureKing} from "./../game/figures/game-figure-king"

import {Team, TileState} from "./../game/enums";



export class GameField
{
    // Class Proprties ---------------------------------------------
    radius:     number;          
    tiles:      Array<Array<GameTile>>;
    rowSize:    number;
    colSize:    number;

    // Class Functions ---------------------------------------------
    // Constructor
    constructor(radius:number)
    {
        this.radius =   radius;
        this.rowSize =  radius*2+1;
        this.colSize =  radius*2+1;
        
        // Offset for placing into "Table"
        let offset = radius;

        // Color group of tile
        let colorGroup = 0;

        // Creation of GameTiles
        this.tiles = new Array<Array<GameTile>>(this.rowSize);

        // Each coordinate value is in interval from -RADIUS to +RADIUS
        for(let r:number = -radius; r < radius+1; r++)
        {
            this.tiles[r+offset] = new Array<GameTile>(this.colSize);
            for(let c:number = -radius; c < radius+1; c++)
            {
                for(let s:number = -radius; s < radius+1; s++)
                {
                    // Condition for valid coordinates
                    if ((c+r+s) === 0)
                    {
                        this.tiles[r+offset][c+offset] = new GameTile(r,c,s, (colorGroup%3)+1);
                    }
                   
                }
                colorGroup++;
            }
        }
        
        // Preparations
        // this.colorizeTiles();
        this.placeFigures();
    }


    // Get Tile via coordinates
    getTile(coorR:number, coorC:number) : GameTile | undefined
    {
        // Coordinate + Radius(Offset) = Position of tile in table
        try {return this.tiles[coorR+this.radius][coorC+this.radius];}
        catch (exception: any)
        {
            return undefined;
        }
    }


    // Place figures on tiles
    placeFigures()
    {
        // C 5-5
        // PAWNS
        // BLACK
        this.tiles[4][6].tileFigure  = new GameFigurePawn(Team.BLACK);

        this.tiles[4][7].tileFigure  = new GameFigurePawn(Team.BLACK);
        this.tiles[4][8].tileFigure  = new GameFigurePawn(Team.BLACK);
        this.tiles[4][9].tileFigure  = new GameFigurePawn(Team.BLACK);
        this.tiles[4][10].tileFigure  = new GameFigurePawn(Team.BLACK);

        this.tiles[3][6].tileFigure  = new GameFigurePawn(Team.BLACK);
        this.tiles[2][6].tileFigure  = new GameFigurePawn(Team.BLACK);
        this.tiles[1][6].tileFigure  = new GameFigurePawn(Team.BLACK);
        this.tiles[0][6].tileFigure  = new GameFigurePawn(Team.BLACK);

        // WHITE
        this.tiles[6][4].tileFigure  = new GameFigurePawn(Team.WHITE);

        this.tiles[7][4].tileFigure  = new GameFigurePawn(Team.WHITE);
        this.tiles[8][4].tileFigure  = new GameFigurePawn(Team.WHITE);
        this.tiles[9][4].tileFigure  = new GameFigurePawn(Team.WHITE);
        this.tiles[10][4].tileFigure  = new GameFigurePawn(Team.WHITE);

        this.tiles[6][3].tileFigure  = new GameFigurePawn(Team.WHITE);
        this.tiles[6][2].tileFigure  = new GameFigurePawn(Team.WHITE);
        this.tiles[6][1].tileFigure  = new GameFigurePawn(Team.WHITE);
        this.tiles[6][0].tileFigure  = new GameFigurePawn(Team.WHITE);

        // ROOKS
        // WHITE
        this.tiles[7][0].tileFigure  = new GameFigureRook(Team.WHITE);
        this.tiles[10][3].tileFigure  = new GameFigureRook(Team.WHITE);
        // BLACk
        this.tiles[0][7].tileFigure  = new GameFigureRook(Team.BLACK);
        this.tiles[3][10].tileFigure  = new GameFigureRook(Team.BLACK);

        // KNIGHTS
        // WHITE
        this.tiles[8][0].tileFigure  = new GameFigureKnight(Team.WHITE);
        this.tiles[10][2].tileFigure  = new GameFigureKnight(Team.WHITE);
        // BLACk
        this.tiles[0][8].tileFigure  = new GameFigureKnight(Team.BLACK);
        this.tiles[2][10].tileFigure  = new GameFigureKnight(Team.BLACK);

        // BISHOPS
        // WHITE
        this.tiles[10][0].tileFigure  = new GameFigureBishop(Team.WHITE);
        this.tiles[9][1].tileFigure  = new GameFigureBishop(Team.WHITE);
        this.tiles[8][2].tileFigure  = new GameFigureBishop(Team.WHITE);
        // BLACk
        this.tiles[0][10].tileFigure  = new GameFigureBishop(Team.BLACK);
        this.tiles[1][9].tileFigure  = new GameFigureBishop(Team.BLACK);
        this.tiles[2][8].tileFigure  = new GameFigureBishop(Team.BLACK);

        // QUEENS
        this.tiles[9][0].tileFigure  = new GameFigureQueen(Team.WHITE);
        this.tiles[10][1].tileFigure  = new GameFigureKing(Team.WHITE);
        // KINGS
        this.tiles[0][9].tileFigure  = new GameFigureQueen(Team.BLACK);
        this.tiles[1][10].tileFigure  = new GameFigureKing(Team.BLACK);

        // TEST
       // this.tiles[5][5].tileFigure  = new GameFigureKnight(Team.BLACK);
        


    }

    // Basically, rotate "table" on 45 degrees
    getColumns() 
    {
        let col =       0;
        let row =       0;
        let iteration = 0;

        let radius = this.radius;
        let allColumns = new Array<Array<GameTile>>;

        // First tile is (0; RADIUS)
        // Last tile is (ROWSIZE-1; RADIUS)
        while ((row!=2*radius+1) || (col!=radius-1)) 
        {
            let oneColumn = new Array<GameTile>;

            row = Math.max(iteration-radius, 0);
            col = Math.min(iteration+radius, 2*radius);

            while ((row<=2*radius) && (col>=0))
            {
                if (this.tiles[row][col] !== undefined)
                    {oneColumn.push(this.tiles[row][col]);}

                row++;
                col--;
            }

            allColumns.push(oneColumn);
            iteration++;
        }
        
        return allColumns;
    }

    processClick(current: Array<number>, previous: Array<number>)
    {
        // Origin Tile 
        let currentTile =    this.getTile(current[0],current[1]);
        let previousTile =    this.getTile(previous[0],previous[1]);

        if(currentTile !== undefined)
        {
            switch(currentTile?.tileState)
            {
                case TileState.STATE_DEFAULT:
                    if (currentTile.isOccuppied())
                    {
                        this.allTilesToDefault();
                        this.showPossibleMoves(currentTile);
                    }
                    else
                    {
                        this.allTilesToDefault();
                    }
                    break;
                case TileState.STATE_HIGHLIGHTED:
                    if (previousTile !== undefined)
                    {
                        this.repositionFigure(previousTile, currentTile);
                        this.allTilesToDefault();
                    }
                    break;
                default:
                    this.allTilesToDefault();
            }
        }
    }

    repositionFigure(origin: GameTile, endpoint: GameTile)
    {
        endpoint.tileFigure = origin.tileFigure;
        origin.tileFigure = undefined;
    }

    allTilesToDefault()
    {
        for (let row =0 ; row<this.rowSize; row++)
        {
            for (let col =0 ; col<this.colSize; col++)
            {
                if (this.tiles[row][col] !== undefined)
                {
                    this.tiles[row][col].tileState = TileState.STATE_DEFAULT;
                }
            }
        }
    }

    // Move
    showPossibleMoves(origin: GameTile)
    {
        if (origin.isOccuppied())
        {
            // All possible movement directions
            let movementVectors = origin.tileFigure?.movementVectors || [];

            for(let vector of movementVectors)
            {
                let iteration=0;
     
                while(true)
                {
                    // Tile that should be checked
                    let tile = this.getTile(origin.coorR+vector.deltaR*(iteration+1), origin.coorC+vector.detlaC*(iteration+1));

                    if (tile === undefined) {break;}
                    else if ((vector.maxDistance) && (iteration>=vector.maxDistance)) {break;}
                    else
                    {
                        if(!tile.isOccuppied())
                        {
                            tile.tileState=TileState.STATE_HIGHLIGHTED;
                        }
                        else
                        {  
                            //console.log("TEAM", tile.tileFigure?.team )
                            if (origin.tileFigure?.team !== undefined)
                            {
                                if(tile.isOccuppiedByEnemy(origin.tileFigure?.team))
                                {
                                    tile.tileState=TileState.STATE_HIGHLIGHTED;
                                }
                            }

                            break;
                        }
                    }
                    iteration++;
                }
            }
        }
    }
}

