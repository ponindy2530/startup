import { Mainstockin } from './../../../dm-model';
import { PSharedComponent } from './../../../p-shared/p-component/p-shared.component';
import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import swal from 'sweetalert2';
@Component({
  selector: 'app-mainitem-listin',
  templateUrl: './mainitem-listin.component.html',
  styleUrls: ['./mainitem-listin.component.css']
})
export class MainitemListinComponent extends PSharedComponent implements OnInit, OnChanges {

  @Input() apiKeylistin: number;

  ngOnChanges() {
    let apiKey = this.apiKeylistin;
    let y = this.dYEn = this._pSharedService.dateYearEn();
    // console.log(y);

    this.getData(apiKey, y);
  }
  dYEn: any;
  getData(apiKey, y) {
    this._pSharedService.apiData1(apiKey, y)
      .subscribe(res => this.models = res,
      err => console.log(err),
      () => {
        console.log(this.models);
      });
  }



  delete(ev, index) {




    if (ev.a >= 1) {
      swal(
        'ไม่สามารถลบได้',
        'เนื่องจากวัสดุมีรายการเบิกจ่าย ' + ev.a + ' ครั้ง',
        'error'
      );
    } else {
      swal({
        title: 'ท่านต้องการจะลบข้อมูล ?',
        text: "ใช่หรือไม่ ถ้าใช่กด ตกลง ถ้าไม่กด ยกเลิก !!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'ตกลง',
        cancelButtonText: 'ยกเลิก',
      }).then(() => {
        this.updateId = ev.lotid;
        this._pSharedService.delData('mainstockin', 'lotid', this.updateId)
          .subscribe(res => this.del = res,
          err => console.log(err),
          () => {
            this.models = this.models.filter((val, i) => i != index);
          });
      })
    }


    // console.log(item, index);

    // let index = this.findSelectedCarIndex();

    // this.car = null;
    // this.displayDialog = false;
  }




  dYTh: any;
  ngOnInit() {
    this.dYTh = this._pSharedService.dateYearEn() + 543;
  }

  @Output() ToinformData = new EventEmitter();
  edit(ev: any) {
    // console.log(ev);

    this.ToinformData.emit(ev);
  }

}


