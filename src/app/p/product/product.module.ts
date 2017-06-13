import { PChartsModule } from './../p-item/p-charts/pcharts.module';
import { MainitemModule } from './../dmmain/dmmain-item/mainitem.module';
import { ItemSharedModule } from './../item-shared/item-shared.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductHomeComponent } from './product-view/product-home/product-home.component'

import {
    DataTableModule,
    SharedModule,
    TooltipModule,
} from 'primeng/primeng';

const routes: Routes = [
    { path: 'viewproduct', component: ProductHomeComponent },
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ItemSharedModule,
        MainitemModule,
        DataTableModule,
        SharedModule,
        TooltipModule,
        PChartsModule

    ],
    declarations: [


        ProductHomeComponent],
    exports: [RouterModule]
})
export class ProductModule { } 