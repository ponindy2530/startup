import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OutitemFormComponent } from './outitem-form/outitem-form.component';
import { OutitemListComponent } from './outitem-list/outitem-list.component';
import { OutitemListnewComponent } from './outitem-listnew/outitem-listnew.component';
import { FormsModule } from '@angular/forms';
import { ChartModule } from 'angular2-highcharts';
import {
    DataTableModule,
    SharedModule,
    TooltipModule,
} from 'primeng/primeng';

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
        OutitemFormComponent,
        OutitemListComponent,
        OutitemListnewComponent
    ],
    exports: [
        OutitemFormComponent,
        OutitemListComponent,
        OutitemListnewComponent
    ]
})
export class OutitemModule { } 