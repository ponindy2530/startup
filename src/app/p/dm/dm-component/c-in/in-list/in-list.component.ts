import { PSharedComponent } from './../../../../p-shared/p-component/p-shared.component';
import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import swal from 'sweetalert2';
declare var jQuery: any;
@Component({
  selector: 'app-in-list',
  templateUrl: './in-list.component.html',
  styleUrls: ['./in-list.component.css']
})
export class InListComponent extends PSharedComponent implements OnInit, OnChanges {


  @Input() apiKeyList: number;

  ngOnChanges() {
    let apiKey = this.apiKeyList;
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

  showDate: any;

  ngOnInit() {
    this.showDate = this._pSharedService.dateNows();
  }


  delete(ev: any) {
    console.log(ev);

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
      this.updateId = ev.lotid;
      this._pSharedService.delData('mainstockin', 'lotid', this.updateId)
        .subscribe(resproducts => this.del = resproducts,
        err => console.log(err),
        () => {
          this.getData(5);
          swal(
            'ระบบทำการลบ!',
            'ข้อมูลเรียบร้อยแล้ว',
            'success'
          );
        }
        );
    }, (dismiss) => {
      if (dismiss === 'cancel') {
        swal(
          'ยกเลิก',
          'การลบข้อมูลเรียบร้อยแล้ว :)',
          'error'
        )
      }
    })

  }

  @Output() ToinformData = new EventEmitter();
  edit(ev: any) {
    this.ToinformData.emit(ev);
  }

}
