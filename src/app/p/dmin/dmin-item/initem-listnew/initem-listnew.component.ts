import { PSharedComponent } from './../../../p-shared/p-component/p-shared.component';
import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import swal from 'sweetalert2';

@Component({
  selector: 'app-initem-listnew',
  templateUrl: './initem-listnew.component.html',
  styleUrls: ['./initem-listnew.component.css']
})
export class InitemListnewComponent extends PSharedComponent implements OnInit {



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
      this.updateId = ev.lotid;
      this._pSharedService.delData('mainstockin', 'lotid', this.updateId)
        .subscribe(resproducts => this.del = resproducts,
        err => console.log(err),
        () => {
          this.getData(this.apiKeyList);
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

  @Output() ToinformData = new EventEmitter();
  edit(ev: any) {
    console.log(ev);

    this.ToinformData.emit(ev);
  }

}
