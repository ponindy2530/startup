import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardviewHomeComponent } from './dmdashboard-view/dashboardview-home/dashboardview-home.component';



const routes: Routes = [
    { path: 'viewdashboard', component: DashboardviewHomeComponent },
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
     
    DashboardviewHomeComponent],
    exports: [RouterModule]
})
export class DmdashboardModule { } 