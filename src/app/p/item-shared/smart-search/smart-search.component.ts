import { PSharedComponent } from './../../p-shared/p-component/p-shared.component';
import { Component, OnInit, OnChanges, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import * as _ from "lodash";
@Component({
  selector: 'app-smart-search',
  templateUrl: './smart-search.component.html',
  styleUrls: ['./smart-search.component.css']
})
export class SmartSearchComponent extends PSharedComponent implements OnInit, OnChanges {
  @Input() CatID: number;

  ngOnChanges(changes: SimpleChanges): void {
    // this.burs = [];
    this.y0 = [];
    this.y1 = [];
    this.y2 = [];
    this.y3 = [];
    this.yn = [];
    let CatID = changes['CatID'].currentValue;
    this.setup(CatID);
    // console.log(CatID);

  }







  y0 = [];
  y1 = [];
  y2 = [];
  y3 = [];
  yn = [];
  arrburs = [];
  burs = [];
  sample = "Micro";
  bgColor = "#FFDB73";
  selectedChip = "Airoter";
  isShowData = false;
  txtSearch = "";
  t0 = "";
  t1 = "";
  t2 = "";
  t3 = "";
  catid = 1;


  ngOnInit() {
    this._pSharedService.apiData(52)
      .subscribe(res => this.models = res,
      err => console.log(err),
      () => {
        this.models1 = _.clone(this.models);
        // console.log(this.models1);
      });
  }

  setup(CatID) {
    let catid = CatID;
    this.burs = _.filter(this.models1, function (o) {
      if (o['catid'] == catid) { return o; }
    });

    // console.log(this.burs);

    this.burs.forEach(v => {
      let xx: any[] = v.mname.split(/[\s-]+/);
      //  xx = ['Air','prep','taper','008'];
      this.arrburs.push(xx);
      // console.log(this.arrburs);

      // console.log(_.size(this.arrburs));

      for (let i = 0; i < 4; i++) {
        if (xx[i] && i == 0 && this.y0.indexOf(xx[i]) == -1) { this.y0.push(xx[i]); }
        if (xx[i] && i == 1 && this.y1.indexOf(xx[i]) == -1) { this.y1.push(xx[i]); }
        if (xx[i] && i == 2 && this.y2.indexOf(xx[i]) == -1) { this.y2.push(xx[i]); }
        if (xx[i] && i == 3 && this.yn.indexOf(xx[i]) == -1) { this.yn.push(xx[i]); }
      }
    });

    this.yn.forEach(v => {
      // console.log(v);
      if (v && this.y2.indexOf(v) == -1 && v) { this.y3.push(v); }
    });

    // console.log(this.y0);
    // console.log(this.y1);
    // console.log(this.y2);
    // console.log(this.y3);
  }


  catname = "";
  doFilterCat(cat: any) {
    this.catname = cat.catname;
    this.isShowData = false;
    this.selectedChip = "";
    this.txtSearch = "";
    this.doSetFilter("");
    this.catid = cat.catid;
    // console.log(cat.catid);
    this.setup(cat.catid);
  }

  updateText(t: string) {
    if (this.txtSearch.indexOf('t') == -1) {
      this.txtSearch = this.t0 + " " + this.t1 + " " + this.t2 + " " + this.t3;
    }
  }
  doSetMaster(a: string) {
    this.isShowData = true;
    this.selectedChip = a;
    this.txtSearch = a;
    this.doSetFilter("");
  }

  @Output() getDataTo = new EventEmitter();

  // -----------------------------------------------
  doSetFilter(a: any) {
    // console.log(a);

    this.txtSearch = this.selectedChip + " " + a;
    // console.log(this.txtSearch);
    let txt = this.txtSearch.trim();
    // console.log(txt);
  
    this.models = _.filter(this.models1, function (o) {
      let xx = true;
      let str = txt.split(" ");
      // console.log(str);

      str.forEach(v => {
        // console.log(o);
        
        if (o['mname'].indexOf(v) !== -1) {
          xx = xx && true;
        } else { xx = xx && false }
      });
      if (xx) { return o; }
    });
    //    console.log(str);
    // console.log(this.models);
    this.getDataTo.emit(this.models);

  }


  setColor(a, lv: number) {
    //console.log("sample = "+a);
    this.sample = a;
    let ss = this.selectedChip + " " + a;

    let obj = _.filter(this.arrburs, function (o) {
      let str = ss.split(" ");
      //    console.log(str);

      let x = true;
      str.forEach(v => {
        if (o.indexOf(v) !== -1) { x = x && true; } else { x = x && false }
      })
      if (x) { return o };

    });
    let sh = _.find(obj, function (o) {

      if (o.indexOf(a) !== -1) { return o; }
    });

    if (sh) { return true; } else { return false; }
  }

}
