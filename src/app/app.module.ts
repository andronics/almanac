import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'

import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store'
import { StoreDevtoolsModule, StoreDevtools } from '@ngrx/store-devtools'

import { environment } from '@env/environment'
import { reducers, metaReducers } from '@app/app.reducer'
import { CustomRouterStateSerializer } from '@app/shared/utils';

import { AuthModule } from '@app/auth/auth.module'
import { GameModule } from '@app/game/game.module'
import { UIModule } from '@app/ui/ui.module'

import { AppComponent } from '@app/app.component'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    
    RouterModule.forRoot([], { useHash: true }),
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([]),
    
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router'
    }),
    
    StoreDevtoolsModule.instrument({
      name: 'Almanac',
      logOnly: environment.production
    }),
  
    AuthModule,
    GameModule,
    UIModule
  
  ],
  providers: [
    { provide: RouterStateSerializer, useClass: CustomRouterStateSerializer }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
