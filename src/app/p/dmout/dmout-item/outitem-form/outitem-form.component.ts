import { Mainstockout } from './../../../dm-model';
import { PSharedComponent } from './../../../p-shared/p-component/p-shared.component';
import { Component, OnInit, OnChanges, Output, Input, EventEmitter } from '@angular/core';
import * as _ from "lodash";
import swal from 'sweetalert2';

@Component({
  selector: 'app-outitem-form',
  templateUrl: './outitem-form.component.html',
  styleUrls: ['./outitem-form.component.css']
})
export class OutitemFormComponent extends PSharedComponent implements OnInit {

  model = new Mainstockout();

  @Input() getDataForm: Mainstockout;

  ngOnChanges() {
    if (this.getDataForm.soid >= 1) {
      this.getData1(11, this.getDataForm.mid)
      this.numnow = this.getDataForm.numold;
      this.pricen = this.getDataForm.pricen;
      this.model = this.getDataForm;
    } else {
      this.getData1(9, this.getDataForm.mid)
      this.model.mid = this.getDataForm.mid;
      this.model.mcode = this.getDataForm.mcode;
      this.model.mname = this.getDataForm.mname;
      this.model.receiver = this.getDataForm.receiver;

    }
  }


  ngOnInit() {
    this.model.datestockout = this._pSharedService.dateNows();
    this.getData(8)
  }

  resForm() {
    this.model.mid = null;
    this.model.mcode = '';
    this.model.mname = '';
    this.model.receiver = 0;
    this.model.pricen = null;
    this.model.priceout = null;
    this.numnow = null;
    this.model.lotnumber = 0;
    this.model.numstockout = null;
    this.toResList();
  }
  @Output() resList = new EventEmitter();

  toResList() {
    this.resList.emit(true);
  }


  getData(apiKey) {
    this._pSharedService.apiData(apiKey)
      .subscribe(res => this.models = res,
      err => console.log(err),
      () => {
        // console.log(this.models);
      });
  }

  getData1(apiKey, mid) {
    this._pSharedService.apiData1(apiKey, mid)
      .subscribe(res => this.models1 = res,
      err => console.log(err),
      () => {
        // console.log(this.models1);
      });
  }


  getmn() {
    this.model.numstockout = this.numnow;
    this.model.priceout = Number(this.model.numstockout) * Number(this.pricen);
  }
  numnow: string;
  pricen: number;
  getoutin(ev: any) {
    let res = _.find(this.models1, ['lotid', ev.target.value]);
    // console.log(res);
    this.numnow = res['numnow'];
    this.pricen = res['pricen'];
    this.model.pricen = res['pricen'];
  }

  doCheckNum() {
    if (this.model.numstockout > this.numnow) {
      swal("จำนวนเบิกมากกว่า", "จำนวนที่มีใน Stock");
      this.model.numstockout = "";
    } else if (this.model.numstockout <= '0') {
      swal("จำนวนเบิกไม่ถูกต้อง", "กรุณาเปลี่ยนตัวเลขใหม่");
      this.model.numstockout = "";
    } else {
      this.model.priceout = Number(this.model.numstockout) * Number(this.pricen);
    }
  }

  save() {
    if (this.getDataForm.soid >= 1) {
      this.updateId = this.model.soid;
    } else {
      this.updateId = 0;
    }
    // console.log(this.model);
    // console.log(this.updateId);
    this.model.usernames = '1';
    this.model.hcode = '10702';
    this.pd = this.model;
    this._pSharedService.addData('mainstockout', 'soid', this.updateId, this.pd)
      .subscribe(resproducts => this.addmodel = resproducts,
      err => console.log(err),
      () => {
        swal(
          'ระบบทำการบันทึก!',
          'ข้อมูลเรียบร้อยแล้ว',
          'success'
        );
        this.resForm();
      }
      );
  }

}