import { Mainstockin } from './../../../dm-model';
import { PSharedComponent } from './../../../p-shared/p-component/p-shared.component';
import { Component, OnInit, OnChanges, Output, Input, EventEmitter } from '@angular/core';
import * as _ from "lodash";
import swal from 'sweetalert2';
@Component({
  selector: 'app-initem-form',
  templateUrl: './initem-form.component.html',
  styleUrls: ['./initem-form.component.css']
})
export class InitemFormComponent extends PSharedComponent implements OnInit {

  model = new Mainstockin();


  @Input() getDataForm: Mainstockin;
  munit: string;
  ngOnChanges() {
    if (this.getDataForm.lotid >= 1) {
      // this.getData1(11, this.getDataForm.mid)
      // this.numnow = this.getDataForm.numold;
      // this.pricen = this.getDataForm.pricen;
      this.model = this.getDataForm;
    } else {
      // this.getData1(9, this.getDataForm.mid)
      this.model.mid = this.getDataForm.mid;
      this.model.mcode = this.getDataForm.mcode;
      this.model.mname = this.getDataForm.mname;
      this.munit = this.getDataForm.munit;
      this.model.supid = this.getDataForm.supid;
      this.model.numberid = this.getDataForm.numberid;
      this.model.pricen = null;
      this.model.pricelot = null;
      this.model.numstockin = null;
      // this.model.receiver = this.getDataForm.receiver;

    }
  }

  //บริษัท
  getData(apiKey) {
    this._pSharedService.apiData(apiKey)
      .subscribe(res => this.models = res,
      err => console.log(err)
      , () => {
        // console.log(this.models);
      });
  }


  ngOnInit() {
    this.model.datestockin = this._pSharedService.dateNows();
    this.getData(3);
  }

  resForm() {
    this.model.mid = null;
    this.model.mcode = '';
    this.model.mname = '';
    this.model.pricen = null;
    this.model.pricelot = null;
    this.model.numstockin = null;
    this.model.numberid = null;
    this.model.expire = null;
    this.model.notelot = null;
    this.model.supid = 0;
    this.toResList();
  }

  @Output() resList = new EventEmitter();

  toResList() {
    this.resList.emit(true);
  }

  @Output() listF = new EventEmitter();
  doCalPricelot() {
    this.model.pricelot = Number(this.model.pricen) * Number(this.model.numstockin);
    this.listF.emit(false);
  }

  doCalPricen() {
    if (Number(this.model.numstockin) > 0) {
      this.model.pricen = Number(this.model.pricelot) / Number(this.model.numstockin);
    }
  }


  getExp(ev: any) {
    const currentTime = new Date();
    const y = currentTime.getFullYear();
    const monthnow = y + ("0" + (currentTime.getMonth() + 1)).slice(-2);
    if (ev.target.value.length >= 2) {
      if (ev.target.value.substr(0, 2) == 20) {
        if (ev.target.value.length >= 4) {
          if (ev.target.value.substr(0, 4) >= y.toString().substr(0, 4)) {
            if (ev.target.value.length >= 5) {
              if (ev.target.value.substr(4, 1) == 0 || ev.target.value.substr(4, 1) == 1) {
                if (ev.target.value.length == 6) {
                  if (ev.target.value.substr(4, 1) == 0) {
                    if (ev.target.value.substr(5, 1) == 0) {
                      swal(
                        ' ตัวเลขหลัก 6 ไม่ถูกต้อง!',
                        'ต้องเป็นเลข 1 ถึง 9 เท่านั้น'
                      );
                      this.model.expire = ev.target.value.substr(0, 5);
                    }
                  } else {
                    if (ev.target.value.substr(5, 1) == 3 || ev.target.value.substr(5, 1) == 4 || ev.target.value.substr(5, 1) == 5 || ev.target.value.substr(5, 1) == 6 || ev.target.value.substr(5, 1) == 7 || ev.target.value.substr(5, 1) == 8 || ev.target.value.substr(5, 1) == 9) {
                      swal(
                        ' ตัวเลขหลัก 6 ไม่ถูกต้อง!',
                        'ต้องเป็นเลข 0 ถึง 2 เท่านั้น'
                      );
                      this.model.expire = ev.target.value.substr(0, 5);
                    }
                  }

                } else {
                  this.model.expire = ev.target.value.substr(0, 6);
                }

              } else {
                swal(
                  ' ตัวเลขหลัก 5 ไม่ถูกต้อง!',
                  'ต้องเป็นเลข 0 หรือ 1 เท่านั้น'
                );
                this.model.expire = ev.target.value.substr(0, 4);
              }
            }
          } else {
            swal(
              'ปี ค.ศ ไม่ถูกต้อง !',
              'ปี ค.ศ ต้องมากกว่า หรือ เท่ากับปี ' + y + ' เท่านั้น'
            );
            this.model.expire = 20;
          }
        }
      } else {
        swal(
          'ตัวเลข 2 หลักแรกไม่ถูกต้อง !',
          'ต้องเป็นเลข 20 เท่านั้น ระบบจะเปลี่ยนแปลงค่าอัตโนมัติ'
        );
        this.model.expire = 20;
      }

    }
  }


  save() {
    // console.log(this.model.lotid);

    if (this.model.lotid >= 1) {
      this.updateId = this.model.lotid;
    } else {
      this.updateId = 0;
    }
    // console.log(this.updateId);
    // console.log(this.model);
    this.model.usernames = '1';
    this.pd = this.model;
    this._pSharedService.addData('mainstockin', 'lotid', this.updateId, this.pd)
      .subscribe(res => this.addmodel = res,
      err => console.log(err),
      () => {
        swal(
          'ระบบทำการบันทึก!',
          'ข้อมูลเรียบร้อยแล้ว',
          'success'
        );
        // this.listF.emit(true);
        this.resForm();
      }
      );
  }

}

