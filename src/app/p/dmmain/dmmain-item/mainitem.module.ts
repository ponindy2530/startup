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

import {
    MdGridListModule
} from '@angular/material';
import { MainitemListmainComponent } from './mainitem-listmain/mainitem-listmain.component';
import { MainitemListinComponent } from './mainitem-listin/mainitem-listin.component';
import { MainitemListoutComponent } from './mainitem-listout/mainitem-listout.component';
import { MainitemListexpComponent } from './mainitem-listexp/mainitem-listexp.component';
import { MainitemListstockComponent } from './mainitem-liststock/mainitem-liststock.component';
import { MainitemCatComponent } from './mainitem-cat/mainitem-cat.component';
import { MainitemSupComponent } from './mainitem-sup/mainitem-sup.component';
import { MainSearchComponent } from './main-search/main-search.component';
import { CMainListComponent } from './c-main-list/c-main-list.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ChartModule,
        DataTableModule,
        SharedModule,
        TooltipModule,
        MdGridListModule
    ],
    declarations: [
        MainitemListmainComponent,
        MainitemListinComponent,
        MainitemListoutComponent,
        MainitemListexpComponent,
        MainitemListstockComponent,
        MainitemCatComponent,
        MainitemSupComponent,
        MainSearchComponent,
        CMainListComponent
    ],
    exports: [
        MainitemListmainComponent,
        MainitemListinComponent,
        MainitemListoutComponent,
        MainitemListexpComponent,
        MainitemListstockComponent,
        MainitemCatComponent,
        MainitemSupComponent,
        MainSearchComponent,
        CMainListComponent
    ]
})
export class MainitemModule { } 