import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import {
    DataTableModule,
    SharedModule,
    TooltipModule,
    DialogModule,
    PanelModule,
    DropdownModule,
    SplitButtonModule,
    ButtonModule,
    AutoCompleteModule,
    AccordionModule,
    FieldsetModule
} from 'primeng/primeng';

import {
    MdCardModule,
    MdButtonModule,
    MdCheckboxModule,
    MaterialModule,
    MdNativeDateModule,
    MdToolbarModule,
    MdAutocompleteModule,
    MdChipsModule
} from '@angular/material';

import { PSharedComponent } from './../p-component/p-shared.component';
import { SumsPipe, SumsPipe2 } from './../p-pipe/p-sums.pipe';
import { PSharedService } from './../p-service/p-shared.service';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { ChartModule } from 'angular2-highcharts';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';
import * as highcharts from 'highcharts';




@NgModule({
    imports: [
        CommonModule,
        MdCardModule,
        MdButtonModule,
        MdCheckboxModule,
        MaterialModule,
        MdNativeDateModule,
        ChartModule
    ],
    declarations: [
        PSharedComponent,
        SumsPipe2,
        SumsPipe
    ],
    exports: [
        HttpModule,
        FormsModule,
        DataTableModule,
        SharedModule,
        TooltipModule,
        DialogModule,
        PanelModule,
        DropdownModule,
        SplitButtonModule,
        ButtonModule,
        AutoCompleteModule,
        ChartModule,
        AccordionModule,
        MdCardModule,
        MdButtonModule,
        MdCheckboxModule,
        MaterialModule,
        MdNativeDateModule,
        MdToolbarModule,
        MdAutocompleteModule,
        MdChipsModule,
        FieldsetModule


    ]
})


export class PSharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: PSharedModule,
            providers: [
                CookieService,
                PSharedService,
                { provide: HighchartsStatic, useValue: highcharts }
            ]
        };
    }
}