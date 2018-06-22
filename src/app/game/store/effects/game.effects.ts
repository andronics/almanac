import { Injectable } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of, from } from 'rxjs';
import { map, tap, mergeMap, switchMap, catchError } from 'rxjs/operators';

import { Game } from '../model/game.model'
import { GameData } from '../data/game.data'
import { GameActionTypes } from '../actions/game.actions'
import * as GameActions from '../actions/game.actions'

@Injectable()
export class GameEffects {

    constructor(public actions$: Actions, public store: Store<any>, public gameData: GameData) { }

    @Effect()
    addItem$ = this.actions$.ofType(GameActionTypes.ADD_GAME).pipe(
        switchMap(
            (action: GameActions.AddGame) => {
                return this.gameData.addItem(action.payload.game)
            }
        ),
        map(
            (game: Game) => new GameActions.AddGameSuccess({ game: game })
        ),
        catchError(
            (error: any) => of(new GameActions.Failure({ error: error }))
        )
    )

    @Effect()
    addItems$ = this.actions$.ofType(GameActionTypes.ADD_GAMES).pipe(
        switchMap(
            (action: GameActions.AddGames) => {
                return this.gameData.addItems(action.payload.games)
            }
        ),
        map(
            (games: Game[]) => new GameActions.AddGamesSuccess({ games: games })
        ),
        catchError(
            (error: any) => of(new GameActions.Failure({ error: error }))
        )
    )

    @Effect()
    clear$ = this.actions$.ofType(GameActionTypes.CLEAR_GAMES).pipe(
        switchMap(
            (action: GameActions.AddGames) => {
                return this.gameData.clearItems()
            }
        ),
        map(
            (games: Game[]) => new GameActions.ClearGamesSuccess()
        ),
        catchError(
            (error: any) => of(new GameActions.Failure({ error: error }))
        )
    )

    @Effect()
    deleteItem$ = this.actions$.ofType(GameActionTypes.DELETE_GAME).pipe(
        switchMap(
            (action: GameActions.DeleteGame) => {
                console.log(`Effect Payload: ${action.payload.id}`)
                return this.gameData.deleteItem(action.payload.id)
                .then(() => action.payload.id)
            }
        ),
        map(
            (id: string) => new GameActions.DeleteGameSuccess({ id: id })
        )
    )

    @Effect()
    deleteItems$ = this.actions$.ofType(GameActionTypes.DELETE_GAMES).pipe(
        switchMap(
            (action: GameActions.DeleteGames) => {
                return this.gameData.deleteItems(action.payload.ids)
                .then(() => action.payload.ids)
            }
        ),
        map(
            (ids: string[]) => new GameActions.DeleteGamesSuccess({ ids: ids })
        )
    )

    @Effect({ dispatch: false })
    failure$ = this.actions$.ofType(GameActionTypes.FAILURE).pipe(
        tap((action: GameActions.Failure) => {
            // this.notificationService.showNotification(
            //     MessageType.Error,
            //     'Home',
            //     action.payload.error
            // );
        })
    );

    @Effect()
    load$ = this.actions$.ofType(GameActionTypes.LOAD_GAMES).pipe(
        switchMap(
            () => this.gameData.items
        ),
        map(
            (games: Game[]) => {
                return new GameActions.LoadGamesSuccess({ games: games })
            }
        ),
        catchError(
            (error: any) => of(new GameActions.Failure({ error: error }))
        )
    )

    @Effect()
    updateItem$ = this.actions$.ofType(GameActionTypes.UPDATE_GAME).pipe(
        switchMap(
            (action: GameActions.UpdateGame) =>
                this.gameData.updateItem(action.payload.game.id, action.payload.game.data)
                .then(() => action.payload.game)
        ),
        map(
            (game: { id: string, data: Partial<Game> }) =>
                new GameActions.UpdateGameSuccess({ game: game })
        ),
        catchError(
            (error: any) =>
                of(new GameActions.Failure({ error: error }))
        )
    )

    @Effect()
    updateItems$ = this.actions$.ofType(GameActionTypes.UPDATE_GAMES).pipe(
        switchMap(
            (action: GameActions.UpdateGames) =>
                this.gameData.updateItems(action.payload.games)
                .then(() => action.payload.games)
        ),
        map(
            (games: { id: string, data: Partial<Game> }[]) =>
                new GameActions.UpdateGamesSuccess({ games: games })
        ),
        catchError(
            (error: any) => of(new GameActions.Failure({ error: error }))
        )
    )

    @Effect()
    upsertItem$ = this.actions$.ofType(GameActionTypes.UPSERT_GAME).pipe(
        switchMap(
            (action: GameActions.UpsertGame) =>
                this.gameData.updateItem(action.payload.game.id, action.payload.game.data)
                    .then(() => action.payload.game)
        ),
        map(
            (game: { id: string, data: Partial<Game> }) =>
                new GameActions.UpsertGameSuccess({ game: game })
        ),
        catchError(
            (error: any) =>
                of(new GameActions.Failure({ error: error }))
        )
    )

    @Effect()
    upsertItems$ = this.actions$.ofType(GameActionTypes.UPSERT_GAMES).pipe(
        switchMap(
            (action: GameActions.UpsertGames) =>
                this.gameData.upsertItems(action.payload.games)
                    .then(() => action.payload.games)
        ),
        map(
            (games: { id: string, data: Partial<Game> }[]) =>
                new GameActions.UpsertGamesSuccess({ games: games })
        ),
        catchError(
            (error: any) => of(new GameActions.Failure({ error: error }))
        )
    )

}