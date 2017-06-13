import { PChartsComponent } from './p-charts.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartModule } from 'angular2-highcharts';




@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ChartModule,
    ],
    declarations: [
        PChartsComponent
    ],
    exports: [
        PChartsComponent
    ]
})
export class PChartsModule { } 