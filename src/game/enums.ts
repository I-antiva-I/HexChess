// Chess figures (pieces)
export enum FigureType 
{
  PAWN,
  ROOK,
  KNIGHT,
  BISHOP,
  QUEEN,
  KING,
}

// Teams
export enum Team
{
  BLACK,
  WHITE,
}

// States of tiels
export enum TileState
{
  STATE_DEFAULT =                       "default",
  STATE_HIGHLIGHTED =                   "highlighted",
  STATE_HIGHLIGHTED_FOR_MOVE =          "move",
  STATE_HIGHLIGHTED_FOR_ATTACK =        "attack",
}

// Movement vectors 
