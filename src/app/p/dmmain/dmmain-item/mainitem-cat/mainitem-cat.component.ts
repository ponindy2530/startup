import { PSharedComponent } from './../../../p-shared/p-component/p-shared.component';
import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mainitem-cat',
  templateUrl: './mainitem-cat.component.html',
  styleUrls: ['./mainitem-cat.component.css']
})
export class MainitemCatComponent extends PSharedComponent implements OnInit {



  ngOnInit() {
    let apiId = 34;
    this.getData(apiId);
  }

  getData(apiId) {
    this._pSharedService.apiData(apiId)
      .subscribe(res => this.models = res,
      err => console.log(err)
      , () => {
        // console.log(this.models);

      });
    // this.loading = false;
  }

  @Output() gettocat = new EventEmitter();
  getcat(ev: any) {
    let catId = ev.catid;
    this.gettocat.emit(catId);
  }

}
