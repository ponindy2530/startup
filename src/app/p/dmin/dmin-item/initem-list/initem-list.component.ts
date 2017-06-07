import { PSharedComponent } from './../../../p-shared/p-component/p-shared.component';
import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-initem-list',
  templateUrl: './initem-list.component.html',
  styleUrls: ['./initem-list.component.css']
})
export class InitemListComponent extends PSharedComponent implements OnInit {

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
