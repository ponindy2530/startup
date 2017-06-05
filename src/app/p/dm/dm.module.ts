import { PSharedModule } from './../p-shared/p-module/p-shared.module';
import { VDashboardComponent } from './dm-pview/v-dashboard/v-dashboard.component';
import { DmRoutingModule } from './dm-routing.module';
import { DmComponentModule } from './dm-component/dm-component.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DmComponent } from './dm.component';
import { VMainComponent } from './dm-pview/v-main/v-main.component';
import { VInComponent } from './dm-pview/v-in/v-in.component';
import { VOutComponent } from './dm-pview/v-out/v-out.component';





@NgModule({
    imports: [
        CommonModule,
        DmComponentModule,
        DmRoutingModule,
        PSharedModule
    ],
    declarations: [
        DmComponent,
        VDashboardComponent,
        VMainComponent,
        VInComponent,
        VOutComponent
    ]
})
export class DmModule { } 