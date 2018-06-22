import { Base } from './base.model'

export class Entry extends Base {
    type: string;
    sets: EntrySet[];
}

export interface EntrySet {
    name: string
    entry: number[]
}


