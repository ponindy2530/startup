import { MainproductDt } from './../../dm-model';
import { PSharedComponent } from './../../p-shared/p-component/p-shared.component';
import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import swal from 'sweetalert2';
declare var jQuery: any;
import * as _ from "lodash";
@Component({
  selector: 'app-item-formproduct',
  templateUrl: './item-formproduct.component.html',
  styleUrls: ['./item-formproduct.component.css']
})
export class ItemFormproductComponent extends PSharedComponent implements OnInit, OnChanges {
  htit: string;
  @Input() getDataForm: MainproductDt;
  @Input() idupdate: number;
  model = new MainproductDt();
  ngOnChanges() {
    if (this.idupdate == 0) {
      this.htit = "แบบฟอร์มเพิ่มวัสดุทันตกรรม";
      // this.model = this.getDataForm;
      let xx: any[] = this.getDataForm.mcode.split(/[\s]+/);
      console.log(xx);
      
      this.model.mcode = this.getDataForm.mcode;
      this.model.mname = this.getDataForm.mname;
      this.model.munit = this.getDataForm.munit;
      this.model.catid = this.getDataForm.catid;
      this.updateId = this.idupdate
      // console.log(this.getDataForm);
    } else {
      this.htit = "แบบฟอร์มแก้ไขวัสดุทันตกรรม";
      this.model = this.getDataForm;
      this.updateId = this.idupdate
      console.log(this.updateId);
    }

  }



  ngOnInit() {
    this._pSharedService.apiData(53)
      .subscribe(res => this.models1 = res,
      err => console.log(err), () => {
        // console.log(this.models);
      });
  }

  save() {
    // console.log(this.model);
    // console.log(this.shallow);


    // console.log(_.isEqual(this.model, this.shallow));


    // if (_.isEqual(this.model, this.shallow) == true) {
    //   swal('ค่าเดิมไม่บันทึก');
    // } else {
    //   swal('ค่าใหม่บันทึก');
    // }




    if (this.updateId < 1) {
      if (_.find(this.models2, ['mname', this.model.mname]) && _.find(this.models2, ['mcode', this.model.mcode])) {
        swal(
          'โปรดป้อนรหัสและชื่อ',
          'ที่ไม่ซ้ำกับที่มีอยู่แล้ว',
          'error'
        );
        this.model = new MainproductDt();
        return;
      } else if (_.find(this.models2, ['mcode', this.model.mcode])) {
        swal(
          'โปรดป้อนรหัส',
          'ที่ไม่ซ้ำกับที่มีอยู่แล้ว',
          'error'
        );
        this.model.mcode = '';
        return;
      } else if (_.find(this.models2, ['mname', this.model.mname])) {
        swal(
          'โปรดป้อนชื่อ',
          'ที่ไม่ซ้ำกับที่มีอยู่แล้ว',
          'error'
        );
        this.model.mname = '';
        return;
      } else {
        this.saveto();
      }
    } else {
      this.saveto();
    }



  }

  saveto() {
    this.model.hcode = '10702';
    this.model.usernames = '1';
    this.pd = this.model;
    this._pSharedService.addData('mainproduct', 'mid', this.updateId, this.pd)
      .subscribe(resproducts => this.addmodel = resproducts,
      err => console.log(err),
      () => {
        this.model = new MainproductDt();
        this.ngOnInit();
        swal({
          title: 'กรุณารอสักครู่ !!',
          text: 'ระบบกำลังทำการประมวลผล',
          showCancelButton: false,
          showConfirmButton: false,
          timer: 2000
        }).then(
          () => { },
          // handling the promise rejection
          (dismiss) => {
            if (dismiss === 'timer') {
              swal(
                'ระบบทำการบันทึก!',
                'ข้อมูลเรียบร้อยแล้ว',
                'success'
              );
            }
          });
      }
      );
  }

}
