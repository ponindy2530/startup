import { PSharedComponent } from './../../../../p-shared/p-component/p-shared.component';
import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-searchlist',
  templateUrl: './item-searchlist.component.html',
  styleUrls: ['./item-searchlist.component.css']
})
export class ItemSearchlistComponent extends PSharedComponent implements OnChanges {
  @Input() apiKey: number;
  @Input() toSearchText: string;

  ngOnChanges() {
    let apiKey = this.apiKey;
    let toSearchText = this.toSearchText;
    this.getData(apiKey, toSearchText);
  }


  getData(apiKey, toSearchText) {
    this._pSharedService.apiData1(apiKey, toSearchText)
      .subscribe(res => this.models = res,
      err => console.log(err)
      , () => {
        // console.log(this.models);
      });
  }

  @Output() ToinformData = new EventEmitter();
  informData(ev: any) {
    this.ToinformData.emit(ev);
  }




}
