import { PSharedComponent } from './../../../p-shared/p-component/p-shared.component';
import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import swal from 'sweetalert2';
@Component({
  selector: 'app-mainitem-listout',
  templateUrl: './mainitem-listout.component.html',
  styleUrls: ['./mainitem-listout.component.css']
})
export class MainitemListoutComponent extends PSharedComponent implements OnInit, OnChanges {


  @Input() apiKeylistout: number;

  ngOnChanges() {
    let apiKey = this.apiKeylistout;
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
  dYTh: any;
  ngOnInit() {
    this.dYTh = this._pSharedService.dateYearEn() + 543;
  }
  // yy: any
  // gety(i, y) {
  //   if (i == 1) {
  //     this.yy = this.dYTh - y;
  //   } else if (i == 2) {
  //     this.yy = this.dYTh + y;
  //   } else {
  //     this.yy = this.dYTh
  //   }

  //   this.getData(this.apiKeylistout, this.yy);

  // }


  delete(ev, index) {
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
      this.updateId = ev.soid;
      this._pSharedService.delData('mainstockout', 'soid', this.updateId)
        .subscribe(res => this.del = res,
        err => console.log(err),
        () => {
          this.models = this.models.filter((val, i) => i != index);
        });
    })
  }

  @Output() toDataOut = new EventEmitter();
  edit(ev) {
    this.toDataOut.emit(ev);
  }


}
