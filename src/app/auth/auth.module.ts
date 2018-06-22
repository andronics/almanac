import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'

export const COMPONENTS = []

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: COMPONENTS,
    exports: COMPONENTS
})
export class AuthModule {}
