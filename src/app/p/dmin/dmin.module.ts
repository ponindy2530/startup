import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InviewHomeComponent } from './dmin-view/inview-home/inview-home.component';

const routes: Routes = [
    { path: 'viewin', component: InviewHomeComponent },
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        InviewHomeComponent
    ],
    exports: [RouterModule]
})
export class DminModule { } 