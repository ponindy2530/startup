import { SmartSearchComponent } from './smart-search/smart-search.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartModule } from 'angular2-highcharts';

import {
    DataTableModule,
    SharedModule,
    TooltipModule,
} from 'primeng/primeng';

import {
    MdGridListModule,
    MdChipsModule
} from '@angular/material';
import { ItemEditproductComponent } from './item-editproduct/item-editproduct.component';
import { ItemCatComponent } from './item-cat/item-cat.component';
import { ItemReloadComponent } from './item-reload/item-reload.component';
import { ItemFormproductComponent } from './item-formproduct/item-formproduct.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ChartModule,
        DataTableModule,
        SharedModule,
        TooltipModule,
        MdChipsModule
    ],
    declarations: [
        SmartSearchComponent,
        ItemEditproductComponent,
        ItemCatComponent,
        ItemReloadComponent,
        ItemFormproductComponent
    ],
    exports: [
        SmartSearchComponent,
        ItemEditproductComponent,
        ItemCatComponent,
        ItemReloadComponent,
        ItemFormproductComponent
    ]
})
export class ItemSharedModule { } 