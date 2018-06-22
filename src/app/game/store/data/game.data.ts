import { Injectable, Inject } from '@angular/core'
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'
import { ThenableReference } from '@firebase/database-types';
import { Reference } from '@firebase/database';
import { Observable, from, of } from 'rxjs';
import { map } from 'rxjs/operators'

import { Game } from '../model/game.model'


@Injectable()
export class GameData {

    ref: AngularFireList<Game>
    items: Observable<any[]>
    path: string = '/games'

    constructor(private db: AngularFireDatabase) {
        this.ref = this.db.list<Game>(this.path)
        this.items = this.ref.snapshotChanges().pipe(
            map(actions =>
                actions.map(a => ({ id: a.key, ...a.payload.val() }))
            )
        )
    }

    async addItem(game: Game): Promise<Game> {
        let ref = this.ref.push(game)
        return Promise.resolve({ id: ref.key, ...game }) 
    }

    addItems(games: Game[]): Promise<Game[]> {
        return Promise.all(games.map(
            async (game: Game) => await this.addItem(game)
        ))
    }

    clearItems(): Promise<void> {
        return this.ref.remove()
    }

    async deleteItem(id: string): Promise<void> {
        if (typeof id !== 'string' || id === '') {
            return Promise.reject(new Error("id must be a valid key"))
        }  
        return await this.ref.remove(id)
    }

    deleteItems(ids: string[]): Promise<void[]> {
        
        return Promise.all(ids.map(
            async (id: string) => await this.deleteItem(id)
        ))
    }

    async setItem(id: string, data: Partial<Game>): Promise<void> {
        return await this.ref.set(id, Object.assign(data))
    }

    setItems(games: { id: string, data: Partial<Game> }[]): Promise<void[]> {
        return Promise.all(games.map(
            async (game) => await this.setItem(game.id, game.data)
        ))
    }

    async updateItem(id: string, data: Partial<Game>): Promise<void> {
        return await this.ref.update(id, Object.assign(data))
    }

    updateItems(games: { id: string, data: Partial<Game> }[]): Promise<void[]> {
        return Promise.all(games.map(
            async (game) => await this.updateItem(game.id, game.data)
        ))
    }

    async upsertItem(id: string, data: Partial<Game>): Promise<void> {
        const snapshot = await this.db.object(`${this.path}/${id}`).snapshotChanges().toPromise()
        return snapshot.payload.exists
            ? await this.updateItem(id, data)
            : await this.setItem(id, Object.assign(data))
  
    }

    upsertItems(games: { id: string, data: Partial<Game> }[]): Promise<void[]> {
        return Promise.all(games.map(
            async game => await this.upsertItem(game.id, game.data)
        ))
    }

}
