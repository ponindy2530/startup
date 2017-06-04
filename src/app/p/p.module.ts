import { PSharedModule } from './p-shared/p-module/p-shared.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';





@NgModule({
    imports: [
        CommonModule,
        PSharedModule.forRoot()
    ],
    declarations: []
})
export class PModule { } 