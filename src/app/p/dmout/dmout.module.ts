import { OutitemModule } from './dmout-item/outitem.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OutviewHomeComponent } from './dmout-view/outview-home/outview-home.component';


const routes: Routes = [
    { path: 'viewout', component: OutviewHomeComponent },
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        OutitemModule
    ],
    declarations: [


        OutviewHomeComponent],
    exports: [RouterModule]
})
export class DmoutModule { } 