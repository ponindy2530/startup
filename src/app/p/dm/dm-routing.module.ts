import { VDashboardComponent } from './dm-pview/v-dashboard/v-dashboard.component';
import { VMainComponent } from './dm-pview/v-main/v-main.component';
import { VInComponent } from './dm-pview/v-in/v-in.component';
import { VOutComponent } from './dm-pview/v-out/v-out.component';
import { DmComponent } from './dm.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
    {
        path: 'dm', component: DmComponent,
        children: [
            { path: 'dashboard', component: VDashboardComponent },
            { path: 'main', component: VMainComponent },
            { path: 'in', component: VInComponent },
            { path: 'out', component: VOutComponent }
        ]
    },
    // { path: '', redirectTo: 'dm/dashboard', pathMatch: 'full' },
    // { path: '**', redirectTo: 'dm/dashboard', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DmRoutingModule { }