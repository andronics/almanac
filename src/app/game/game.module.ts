import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { DatabaseModule } from '@app/database/database.module'

import { GameEffects } from './store/effects/game.effects'
import { GameData } from './store/data/game.data'

import { reducer } from './store/reducer/game.reducer'

export const COMPONENTS = []

@NgModule({
    imports: [
        CommonModule,
        DatabaseModule,
        StoreModule.forFeature("games", reducer),
        EffectsModule.forFeature([GameEffects])
    ],
    declarations: COMPONENTS,
    exports: COMPONENTS,
    providers: [
        GameData
    ]
})
export class GameModule {}
