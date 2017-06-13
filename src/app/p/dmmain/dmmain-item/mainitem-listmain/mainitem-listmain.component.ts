import { PSharedComponent } from './../../../p-shared/p-component/p-shared.component';
import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-mainitem-listmain',
  templateUrl: './mainitem-listmain.component.html',
  styleUrls: ['./mainitem-listmain.component.css']
})
export class MainitemListmainComponent extends PSharedComponent implements OnInit, OnChanges {



  @Input() apiKeyListall: number;


  ngOnChanges() {
    let apiKey = this.apiKeyListall;
    this.getData(apiKey);
  }


  getData(apiKey) {
    this._pSharedService.apiData(apiKey)
      .subscribe(res => this.models = res,
      err => console.log(err)
      , () => {
        // console.log(this.models);
      });
  }
  @Output() ToinformData = new EventEmitter();
  onRowSelect(ev: any) {
    // console.log(ev.data);
    this.ToinformData.emit(ev.data);
  }

}
