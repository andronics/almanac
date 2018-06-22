import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { DashboardComponent } from './dashboard.component';
import { DashboardRouting } from './dashboard.routing';

@NgModule({
    imports: [
        DashboardRouting,
        FormsModule,
        ChartsModule,
        BsDropdownModule,
        ButtonsModule.forRoot()
    ],
    declarations: [DashboardComponent]
})
export class DashboardModule { }
