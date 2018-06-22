import { Base } from './base.model'

export class Game extends Base {
    name: string;
    status?: string;
    country: string;
    countrycode: string;
    fee: GameFee;
    payouts: GamePayout[]
    schedule: GameSchedule[];
    sets: GameSet[];
}

export interface GameFee {
    amount: number;
    currency: GameFeeCurrency;
}

export interface GameFeeCurrency {
    name: string;
    code: string;
    sign?: string;
}

export interface GamePayout {
  amount: number;
  criteria: GamePayoutCriteria[] 
}

export interface GamePayoutCriteria {
  set: string,
  primary: number,
  bonus: number,
}

export interface GameSchedule {
    day: number;
    time: string;
}

export interface GameSet {
    name: string;
    min: number;
    max: number;
    primary: number;
    bonus: number;
}


