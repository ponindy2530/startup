import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ChartModule } from 'angular2-highcharts';
import {
    DataTableModule,
    SharedModule,
    TooltipModule,
} from 'primeng/primeng';
import { InitemFormComponent } from './initem-form/initem-form.component';
import { InitemListComponent } from './initem-list/initem-list.component';
import { InitemListnewComponent } from './initem-listnew/initem-listnew.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ChartModule,
        DataTableModule,
        SharedModule,
        TooltipModule
    ],
    declarations: [
        InitemFormComponent,
        InitemListComponent,
        InitemListnewComponent
    ],
    exports: [
        InitemFormComponent,
        InitemListComponent,
        InitemListnewComponent
    ]
})
export class InitemModule { } 