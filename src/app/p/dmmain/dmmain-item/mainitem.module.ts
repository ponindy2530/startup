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
import { MainitemListmainComponent } from './mainitem-listmain/mainitem-listmain.component';
import { MainitemListinComponent } from './mainitem-listin/mainitem-listin.component';
import { MainitemListoutComponent } from './mainitem-listout/mainitem-listout.component';
import { MainitemListexpComponent } from './mainitem-listexp/mainitem-listexp.component';
import { MainitemListstockComponent } from './mainitem-liststock/mainitem-liststock.component';

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
        MainitemListmainComponent,
        MainitemListinComponent,
        MainitemListoutComponent,
        MainitemListexpComponent,
        MainitemListstockComponent
    ],
    exports: [
        MainitemListmainComponent,
        MainitemListinComponent,
        MainitemListoutComponent,
        MainitemListexpComponent,
        MainitemListstockComponent
    ]
})
export class MainitemModule { } 