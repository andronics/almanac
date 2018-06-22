import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity'

import { Game } from '../model/game.model'
import { GameActionTypes, GameActions } from '../actions/game.actions'

export interface State extends EntityState<Game> { selectedGameId: string | null }

export const adapter: EntityAdapter<Game> = createEntityAdapter<Game>({
    selectId: (game: Game) => game.id,
    sortComparer: false,
});

export const initialState: State = adapter.getInitialState({ selectedGameId: null });

export function reducer(state = initialState, action: GameActions) {

    switch (action.type) {

        case GameActionTypes.ADD_GAME_SUCCESS: {
            return adapter.addOne(action.payload.game, state)
        }

        case GameActionTypes.ADD_GAMES_SUCCESS: {
            return adapter.addMany(action.payload.games, state);
        }

        case GameActionTypes.CLEAR_GAMES_SUCCESS: {
            return adapter.removeAll({ ...state, selectedGameId: null });
        }

        case GameActionTypes.DELETE_GAME_SUCCESS: {
            return adapter.removeOne(action.payload.id, state);
        }

        case GameActionTypes.DELETE_GAMES_SUCCESS: {
            return adapter.removeMany(action.payload.ids, state);
        }

        case GameActionTypes.LOAD_GAMES_SUCCESS: {
            return adapter.addAll(action.payload.games, state)
        }

        case GameActionTypes.UPDATE_GAME_SUCCESS: {
            return adapter.updateOne(action.payload.game, state);
        }

        case GameActionTypes.UPDATE_GAMES_SUCCESS: {
            return adapter.updateMany(action.payload.games, state);
        }

        case GameActionTypes.UPSERT_GAME_SUCCESS: {
            return adapter.upsertOne(action.payload.game, state);
        }

        case GameActionTypes.UPSERT_GAMES_SUCCESS: {
            return adapter.upsertMany(action.payload.games, state);
        }

        default: {
            return state
        }

    }

}