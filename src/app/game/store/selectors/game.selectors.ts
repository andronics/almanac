import { createSelector, createFeatureSelector, Selector } from '@ngrx/store'
import { adapter, State } from '../reducer/game.reducer'

export const getGameState = createFeatureSelector<State>('games')

export const {

    // select the array of user ids
    selectIds: selectGameIds,

    // select the dictionary of user entities
    selectEntities: selectGameEntities,

    // select the array of users
    selectAll: selectAllGames,

    // select the total user count
    selectTotal: selectGameTotal,

} = adapter.getSelectors(getGameState)


export const getUniqueProperties = (prop: string) => {
    return createSelector(selectAllGames, state =>
        state.reduce((arr, item) => {
            arr.push(item[prop])
            return arr
        }, [])
    )
}

export const getByProperty = (prop: string) => {
    return createSelector(selectAllGames, state =>
        state.reduce((obj, item) => {
            if (!obj.hasOwnProperty(prop))
                obj[prop] = []
            obj[item[prop]].push(item)
            return obj
        }, {})
    )
}

// select the array of game countries
export const getGamesByCountries = getByProperty('country')
export const getGamesByStatus = getByProperty('status')

