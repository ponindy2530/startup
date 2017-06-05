import { PSharedModule } from './../../p-shared/p-module/p-shared.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CSlideOutComponent } from './c-manu/c-slide-out/c-slide-out.component';
import { ChartsPieComponent } from './c-item/item-charts/charts-pie/charts-pie.component';
import { ItemSearchComponent } from './c-item/item-search/item-search.component';
import { ItemSearchlistComponent } from './c-in/item-searchlist/item-searchlist.component';
import { InFormComponent } from './c-in/in-form/in-form.component';
import { InListComponent } from './c-in/in-list/in-list.component';
import { OutSearchoutComponent } from './c-out/out-searchout/out-searchout.component';
import { OutFormComponent } from './c-out/out-form/out-form.component';
import { OutListComponent } from './c-out/out-list/out-list.component';
import { OutListallComponent } from './c-out/out-listall/out-listall.component';





@NgModule({
    imports: [
        CommonModule,
        PSharedModule
    ],
    declarations: [
        CSlideOutComponent,
        ChartsPieComponent,
        ItemSearchComponent,
        ItemSearchlistComponent,
        InFormComponent,
        InListComponent,
        OutSearchoutComponent,
        OutFormComponent,
        OutListComponent,
        OutListallComponent
    ],
    exports: [
        CSlideOutComponent,
        ChartsPieComponent,
        ItemSearchComponent,
        ItemSearchlistComponent,
        InFormComponent,
        InListComponent,
        OutSearchoutComponent,
        OutFormComponent,
        OutListComponent,
        OutListallComponent
    ]
})
export class DmComponentModule { } 