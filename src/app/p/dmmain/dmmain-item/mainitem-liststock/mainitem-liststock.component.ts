import { PSharedComponent } from './../../../p-shared/p-component/p-shared.component';
import { Component, OnInit } from '@angular/core';
import * as _ from "lodash";
@Component({
  selector: 'app-mainitem-liststock',
  templateUrl: './mainitem-liststock.component.html',
  styleUrls: ['./mainitem-liststock.component.css']
})
export class MainitemListstockComponent extends PSharedComponent implements OnInit {

  ngOnInit() {
    // this.datestart = "2016-10-01";
    // this.dateend = "2017-09-30";
    // this.hcode = "10702";

    this.api(20);
  }

  api(k) {
    this._pSharedService.apiData(k)
      .subscribe(res => this.models = _.filter(res, function (o) { return o.nstck == 1}),
      err => console.log(err)
      , () => {
        // console.log(this.models);
      });
  }

}
