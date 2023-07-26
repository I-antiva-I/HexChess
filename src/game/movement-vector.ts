export class MovementVector
{
    // Class Proprties ---------------------------------------------
    // Change in coordinates
    deltaR: number;           
    detlaC: number;             
    //  
    maxDistance:            number;
    //
    isAttackPossible:       boolean;

    // Class Functions ---------------------------------------------
    // Constructor
    constructor(deltaR:number, detlaC:number, maxDistance:number=0, isAttackPossible:boolean =true)
    {
        this.deltaR = deltaR;
        this.detlaC = detlaC;
        this.maxDistance = maxDistance;
        this.isAttackPossible = isAttackPossible;
    }
}