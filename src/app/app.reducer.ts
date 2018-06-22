import { ActionReducer, ActionReducerMap, MetaReducer, createSelector, createFeatureSelector } from '@ngrx/store';
import { environment } from '@env/environment';
import { RouterStateUrl } from './shared/utils';
import * as fromRouter from '@ngrx/router-store';

/**
 * storeFreeze prevents state from being mutated. When mutation occurs, an
 * exception will be thrown. This is useful during development mode to
 * ensure that none of the reducers accidentally mutates the state.
 */
import { storeFreeze } from 'ngrx-store-freeze';

/**
 * Every reducer module's default export is the reducer function itself. In
 * addition, each module should export a type or interface that describes
 * the state of the reducer plus any selector functions. The `* as`
 * notation packages up all of the exports into a single object.
 */



// import * as fromAuth from '@app/auth/auth.reducer';
// import * as fromDraw from '@app/draw/draw.reducer'
// import * as fromEntry from '@app/entry/entry.reducer'
// import * as fromGame from '@app/game/game.reducer'
// import * as fromLayout from '@app/layout/layout.reducer'

/**
 * As mentioned, we treat each reducer like a table in a database. This means
 * our top level state interface is just a map of keys to inner state types.
 */
export interface State {
    // auth: fromAuth.State,
    // draw: fromDraw.State,
    // entry: fromEntry.State,
    // game: fromGame.State,
    // layout: fromLayout.State;
    router: fromRouter.RouterReducerState<RouterStateUrl>;
}

/**
 * Our state is composed of a map of action reducer functions.
 * These reducer functions are called with each dispatched action
 * and the current or initial state and return a new immutable state.
 */
export const reducers: ActionReducerMap<State> = {
    // auth: fromAuth.State,
    // draw: fromDraw.reducer,
    // entry: fromEntry.reducer,
    // game: fromGame.reducer,
    // layout: fromLayout.reducer,
    router: fromRouter.routerReducer,
};

// console.log all actions
export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
    return function (state: State, action: any): State {
        console.log('state', state);
        console.log('action', action);

        return reducer(state, action);
    };
}

/**
 * By default, @ngrx/store uses combineReducers with the reducer map to compose
 * the root meta-reducer. To add more meta-reducers, provide an array of meta-reducers
 * that will be composed to form the root meta-reducer.
 */
export const metaReducers: MetaReducer<State>[]
    = !environment.production ? [logger, storeFreeze] : []


