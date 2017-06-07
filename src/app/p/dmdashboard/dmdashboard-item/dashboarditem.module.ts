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
import { ChartitemPieComponent } from './chartitem-pie/chartitem-pie.component';
import { ChartitemMonthComponent } from './chartitem-month/chartitem-month.component';
import { ChartitemTop10Component } from './chartitem-top10/chartitem-top10.component';


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
        ChartitemPieComponent,
        ChartitemMonthComponent,
        ChartitemTop10Component
    ],
    exports: [
        ChartitemPieComponent,
        ChartitemMonthComponent,
        ChartitemTop10Component
    ]
})
export class DashboarditemModule { } 