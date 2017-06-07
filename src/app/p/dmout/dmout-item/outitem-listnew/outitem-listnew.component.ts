import { PSharedComponent } from './../../../p-shared/p-component/p-shared.component';
import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import swal from 'sweetalert2';

@Component({
  selector: 'app-outitem-listnew',
  templateUrl: './outitem-listnew.component.html',
  styleUrls: ['./outitem-listnew.component.css']
})
export class OutitemListnewComponent extends PSharedComponent implements OnInit, OnChanges {



  @Input() apiKetListNew: number;

  ngOnChanges() {
    let apiKey = this.apiKetListNew;
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

  dateNow: string;
  ngOnInit() {
    this.dateNow = this._pSharedService.dateNows();
  }

  @Output() ToinformData = new EventEmitter();

  edit(ev: any) {
    this.ToinformData.emit(ev);
  }

  @Output() resList = new EventEmitter();

  toResList() {
    this.resList.emit(true);
  }
  delete(ev: any) {
    // console.log(ev);

    swal({
      title: 'คุณแน่ใจไหม ?',
      text: "ที่จะลบข้อมูล " + ev.mname,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'ตกลง',
      cancelButtonText: 'ยกเลิก',
    }).then(() => {
      this.updateId = ev.soid;
      this._pSharedService.delData('mainstockout', 'soid', this.updateId)
        .subscribe(resproducts => this.del = resproducts,
        err => console.log(err),
        () => {
          this.getData(this.apiKetListNew);
          swal(
            'ระบบทำการลบ!',
            'ข้อมูลเรียบร้อยแล้ว',
            'success'
          );
          this.toResList();
        }
        );
    });

  }

}