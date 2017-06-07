import { PSharedComponent } from './../../../p-shared/p-component/p-shared.component';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-outitem-list',
  templateUrl: './outitem-list.component.html',
  styleUrls: ['./outitem-list.component.css']
})
export class OutitemListComponent extends PSharedComponent implements OnInit {



  ngOnInit() {
    let apiKey = 13;
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
