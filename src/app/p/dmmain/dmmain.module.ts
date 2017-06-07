import { MainitemModule } from './dmmain-item/mainitem.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainviewHomeComponent } from './dmmain-view/mainview-home/mainview-home.component';



const routes: Routes = [
    { path: 'viewmain', component: MainviewHomeComponent },
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MainitemModule
    ],
    declarations: [


        MainviewHomeComponent],
    exports: [RouterModule]
})
export class DmmainModule { } 