import { Base } from './base.model'

export class Draw extends Base {
    type: string;
    timestamp: number;
    sets: DrawSet[];
}


export interface DrawSet {
    name: string
    primary: number[],
    bonus: number[]
}


