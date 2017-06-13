import { PSharedComponent } from './../../../p-shared/p-component/p-shared.component';
import { Component, OnInit, OnChanges, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';
import swal from 'sweetalert2';
declare var jQuery: any;
import * as _ from "lodash";

@Component({
  selector: 'app-c-main-list',
  templateUrl: './c-main-list.component.html',
  styleUrls: ['./c-main-list.component.css']
})
export class CMainListComponent extends PSharedComponent implements OnInit,OnChanges {


  @Input() apiKey: string;
  @Input() apiKeylist: number;
  shallow: string;
  shallow2: string;
  ngOnChanges(){
    let getText = this.apiKey;
    let getapiKeylist = this.apiKeylist;
    this.shallow = _.clone(getText); //ก๊อปค่าไว้
    this.shallow2 = _.clone(getapiKeylist); //ก๊อปค่าไว้
    this.onText(getText, getapiKeylist);

    console.log(getText);
    console.log(getapiKeylist);



  }

  onText(ev, getapiKeylist) {
    this._pSharedService.apiData1(getapiKeylist, ev)
      .subscribe(res => this.models = res,
      err => console.log(err)
      , () => {
        console.log(this.models);
      });
  }

  @Output() getdatashow = new EventEmitter();
  getsearch(ev: any) {
    this.getdatashow.emit(ev);
  }
  @Output() getdataedit = new EventEmitter();
  edit(ev: any) {
    this.getdataedit.emit(ev);
  }


  // delete(ev: any) {

  //   //Actual logic to perform a confirmation
  //   console.log(ev);

  //   console.log(this.models.indexOf(ev));
  //   this.models.splice(this.models.indexOf(ev), 1);


  // }

  delete(ev: any) {
    if (Number(ev.stin) == 0) {
      swal({
        title: 'คุณแน่ใจไหม ?',
        text: "ที่จะลบข้อมูล " + ev.mname,
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'ตกลง !',
        cancelButtonText: 'ยกเลิก !',
        confirmButtonClass: 'btn teal',
        cancelButtonClass: 'btn red',
        buttonsStyling: false
      }).then(() => {
        this.updateId = ev.mid;
        this._pSharedService.delData('mainproduct', 'mid', this.updateId)
          .subscribe(resproducts => this.del = resproducts,
          err => console.log(err),
          () => {
            this.onText(this.shallow, this.shallow2);
            swal(
              'ระบบทำการลบ!',
              'ข้อมูลเรียบร้อยแล้ว',
              'success'
            );
          }
          );
      }, (dismiss) => {
        // dismiss can be 'cancel', 'overlay',
        // 'close', and 'timer'
        if (dismiss === 'cancel') {
          swal(
            'ยกเลิก',
            'การลบข้อมูลเรียบร้อยแล้ว :)',
            'error'
          )
        }
      })
    } else {
      swal(
        'ไม่สามารถลบได้',
        'เนื่องจากมีรายการรับเข้าเบิกจ่ายมากกว่า 0',
        'error'
      );
      return;
    }
  }
}
