import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { ChartsModule } from 'ng2-charts/ng2-charts';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { AppAsideModule, AppBreadcrumbModule, AppHeaderModule, AppFooterModule, AppSidebarModule } from '@coreui/angular'
import { UIRouting } from './ui.routing'

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true
};


import { LayoutComponent } from './layout/layout.component'

import { P404Component } from './error/404.component'
import { P500Component } from './error/500.component'

import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'


export const COMPONENTS = [
    LayoutComponent,
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent
]

@NgModule({
    imports: [
        CommonModule,
        AppAsideModule,
        AppBreadcrumbModule.forRoot(),
        AppHeaderModule,
        AppFooterModule,
        AppSidebarModule,
        FormsModule,
        // DashboardRouting,
        ChartsModule,
        BsDropdownModule,
        ButtonsModule.forRoot(),
        PerfectScrollbarModule,
        BsDropdownModule.forRoot(),
        TabsModule.forRoot(),
        ChartsModule,
        // StoreModule.forFeature("ui", reducer),
        // EffectsModule.forFeature([UIEffects]),
        UIRouting
    ],
    declarations: COMPONENTS,
    exports: COMPONENTS,
    providers: []
})
export class UIModule { }
