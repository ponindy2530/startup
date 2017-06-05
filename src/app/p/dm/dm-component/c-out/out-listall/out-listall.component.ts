import { PSharedComponent } from './../../../../p-shared/p-component/p-shared.component';
import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-out-listall',
  templateUrl: './out-listall.component.html',
  styleUrls: ['./out-listall.component.css']
})
export class OutListallComponent extends PSharedComponent implements OnInit, OnChanges {
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
  informData(ev: any) {
    this.ToinformData.emit(ev);
  }



  ngOnInit() {
  }

}
