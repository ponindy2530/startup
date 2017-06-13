import { PSharedComponent } from './../../../p-shared/p-component/p-shared.component';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mainitem-sup',
  templateUrl: './mainitem-sup.component.html',
  styleUrls: ['./mainitem-sup.component.css']
})
export class MainitemSupComponent extends PSharedComponent implements OnInit {


  ngOnInit() {
    let apiId = 50;
    this.openData(apiId);
  }
  suppliers: any;
  tiles = [];
  openData(apiId) {
    this._pSharedService.apiData(apiId)
      .subscribe(res => this.suppliers = res,
      err => console.log(err),
      () => {
        let color = ['#ffbee7', '#ffc591', '#ccff94', '#bdf3ff', '#d9a9ff'];
        for (var i = 0; i < this.suppliers.length; i++) {
          let obj = { supname: this.suppliers[i]['supname'], supid: this.suppliers[i]['supid'], text: this.suppliers[i]['supname'], cols: Math.floor(Math.random() * 1) + 1, rows: Math.floor(Math.random() * 2) + 1, color: color[Math.floor(Math.random() * 3)] }
          this.tiles.push(obj);
        }
      }
      );
  }


  @Output() gettosup = new EventEmitter();
  doSelectFilter(ev: any) {
    let supId = ev.supid;
    this.gettosup.emit(supId);
  }

}
