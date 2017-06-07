import { PSharedComponent } from './../../../p-shared/p-component/p-shared.component';
import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-outitem-list',
  templateUrl: './outitem-list.component.html',
  styleUrls: ['./outitem-list.component.css']
})
export class OutitemListComponent extends PSharedComponent implements OnInit, OnChanges {



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
