import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { AuthGuard } from './auth/services/auth-guard.service';
import { LayoutComponent } from './layout/layout.component'
import { P404Component } from './error/404.component'
import { P500Component } from './error/500.component'
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'

export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    { path: '404', component: P404Component, data: { title: 'Page 404' } },
    { path: '500', component: P500Component, data: { title: 'Page 500' } },
    { path: 'login', component: LoginComponent, data: { title: 'Login Page' } },
    { path: 'register', component: RegisterComponent, data: { title: 'Register Page' } },
    { path: '', component: LayoutComponent, data: { title: 'Home' }, children: [

        { path: 'dashboard', canActivate: [/*AuthGuard*/], loadChildren: './dashboard/dashboard.module#DashboardModule' }

    ]},
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class UIRouting { }
