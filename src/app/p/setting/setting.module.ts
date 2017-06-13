import { ItemSharedModule } from './../item-shared/item-shared.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingHomeComponent } from './setting-home/setting-home.component';


const routes: Routes = [
    { path: 'viewsetting', component: SettingHomeComponent },
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ItemSharedModule,
        // MainitemModule

    ],
    declarations: [


 
        SettingHomeComponent],
    exports: [RouterModule]
})
export class SettingModule { } 