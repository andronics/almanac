import { Action } from '@ngrx/store'
import { Game } from '../model/game.model'

export enum GameActionTypes {
    ADD_GAME = "[Game] Add Game", 
    ADD_GAME_SUCCESS = "[Game] Add Game Success",
    ADD_GAMES = "[Game] Add Games",
    ADD_GAMES_SUCCESS = "[Game] Add Games Success",
    CLEAR_GAMES = "[Game] Clear Games",
    CLEAR_GAMES_SUCCESS = "[Game] Clear Games Success",
    DELETE_GAME = "[Game] Delete Game",
    DELETE_GAME_SUCCESS = "[Game] Delete Game Success",
    DELETE_GAMES = "[Game] Delete Games",
    DELETE_GAMES_SUCCESS = "[Game] Delete Games Success",
    FAILURE = "[Game] Failure",
    LOAD_GAMES = "[Game] Load Games",
    LOAD_GAMES_SUCCESS = "[Game] Load Games Success",
    UPDATE_GAME = "[Game] Update Game",
    UPDATE_GAME_SUCCESS = "[Game] Update Game Success",
    UPDATE_GAMES = "[Game] Update Games",
    UPDATE_GAMES_SUCCESS = "[Game] Update Games Success",
    UPSERT_GAME = "[Game] Upsert Game",
    UPSERT_GAME_SUCCESS = "[Game] Upsert Game Success",
    UPSERT_GAMES = "[Game] Upsert Games",
    UPSERT_GAMES_SUCCESS = "[Game] Upsert Games Success",
}

export class AddGame implements Action {
    readonly type: string = GameActionTypes.ADD_GAME
    constructor(public payload: { game: Game }) { }
}

export class AddGameSuccess implements Action {
    readonly type: string = GameActionTypes.ADD_GAME_SUCCESS
    constructor(public payload: { game: Game }) { }
}

export class AddGames implements Action {
    readonly type: string = GameActionTypes.ADD_GAMES
    constructor(public payload: { games: Game[] }) { }
}

export class AddGamesSuccess implements Action {
    readonly type: string = GameActionTypes.ADD_GAMES_SUCCESS
    constructor(public payload: { games: Game[] }) { }
}

export class ClearGames implements Action {
    readonly type: string = GameActionTypes.CLEAR_GAMES
    constructor(public payload?) { }
}

export class ClearGamesSuccess implements Action {
    readonly type: string = GameActionTypes.CLEAR_GAMES_SUCCESS
    constructor(public payload?) { }
}

export class DeleteGame implements Action {
    readonly type: string = GameActionTypes.DELETE_GAME
    constructor(public payload: { id: string }) { }
}

export class DeleteGameSuccess implements Action {
    readonly type: string = GameActionTypes.DELETE_GAME_SUCCESS
    constructor(public payload: { id: string }) { }
}

export class DeleteGames implements Action {
    readonly type: string = GameActionTypes.DELETE_GAMES
    constructor(public payload: { ids: string[] }) { }
}

export class DeleteGamesSuccess implements Action {
    readonly type: string = GameActionTypes.DELETE_GAMES_SUCCESS
    constructor(public payload: { ids: string[] }) { }
}

export class Failure implements Action {
    readonly type: string = GameActionTypes.FAILURE
    constructor(public payload: { error: any }) { }
}

export class LoadGames implements Action {
    readonly type: string = GameActionTypes.LOAD_GAMES
    constructor(public payload?) { }
}

export class LoadGamesSuccess implements Action {
    readonly type: string = GameActionTypes.LOAD_GAMES_SUCCESS
    constructor(public payload: { games: Game[] }) {}
}

export class UpdateGame implements Action {
    readonly type: string = GameActionTypes.UPDATE_GAME
    constructor(public payload: { game: { id: string, data: Partial<Game> } }) { }
}

export class UpdateGameSuccess implements Action {
    readonly type: string = GameActionTypes.UPDATE_GAME_SUCCESS
    constructor(public payload: { game: { id: string, data: Partial<Game> } }) { }
}

export class UpdateGames implements Action {
    readonly type: string = GameActionTypes.UPDATE_GAMES
    constructor(public payload: { games: { id: string, data: Partial<Game> }[] }) { }
}

export class UpdateGamesSuccess implements Action {
    readonly type: string = GameActionTypes.UPDATE_GAME_SUCCESS
    constructor(public payload: { games: { id: string, data: Partial<Game> }[] }) { }
}

export class UpsertGame implements Action {
    readonly type: string = GameActionTypes.UPSERT_GAME
    constructor(public payload: { game: { id: string, data: Partial<Game> } }) { }
}

export class UpsertGameSuccess implements Action {
    readonly type: string = GameActionTypes.UPSERT_GAME_SUCCESS
    constructor(public payload: { game: { id: string, data: Partial<Game> } }) { }
}

export class UpsertGames implements Action {
    readonly type: string = GameActionTypes.UPSERT_GAMES
    constructor(public payload: { games: { id: string, data: Partial<Game> }[] }) { }
}

export class UpsertGamesSuccess implements Action {
    readonly type: string = GameActionTypes.UPSERT_GAMES_SUCCESS
    constructor(public payload: { games: { id: string, data: Partial<Game> }[] }) { }
}

export type GameActions
    = AddGame
    | AddGameSuccess
    | AddGames
    | AddGamesSuccess
    | ClearGames
    | ClearGamesSuccess
    | DeleteGame
    | DeleteGameSuccess
    | DeleteGames
    | DeleteGamesSuccess
    | Failure
    | LoadGames
    | LoadGamesSuccess
    | UpsertGame
    | UpsertGameSuccess
    | UpsertGames
    | UpsertGamesSuccess
    | UpdateGame
    | UpdateGameSuccess
    | UpdateGames
    | UpdateGameSuccess
