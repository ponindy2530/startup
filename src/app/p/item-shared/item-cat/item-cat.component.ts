import { PSharedComponent } from './../../p-shared/p-component/p-shared.component';
import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import * as _ from "lodash";
@Component({
  selector: 'app-item-cat',
  templateUrl: './item-cat.component.html',
  styleUrls: ['./item-cat.component.css']
})
export class ItemCatComponent extends PSharedComponent implements OnInit, OnChanges {

  @Input() apiKey: number;

  ngOnChanges(): void {
    let apiKey = this.apiKey;
    this.getData(apiKey);
  }

  getData(apiKey) {
    this._pSharedService.apiData(apiKey)
      .subscribe(res => this.models = _.filter(res, function (o) { return o.a > 0 }),
      err => console.log(err), () => {
        // console.log(this.models);
      });
  }

  ngOnInit() {
  }

  activeButton: number = 0;

  @Output() getcatTo = new EventEmitter();
  getcat(ev) {
    this.activeButton = ev.catid;
    this.getcatTo.emit(ev.catid);
  }

}
