import { NgModule } from '@angular/core'

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { environment } from '@env/environment'

@NgModule({
    imports: [
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAuthModule,
        AngularFireDatabaseModule
    ]
})
export class DatabaseModule {
    static forRoot() {
        return {
            ngModule: DatabaseModule,
            providers: []
        }
    }
}