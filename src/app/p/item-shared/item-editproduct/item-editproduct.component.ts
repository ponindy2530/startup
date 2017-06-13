import { PSharedComponent } from './../../p-shared/p-component/p-shared.component';
import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import swal from 'sweetalert2';
@Component({
  selector: 'app-item-editproduct',
  templateUrl: './item-editproduct.component.html',
  styleUrls: ['./item-editproduct.component.css']
})
export class ItemEditproductComponent extends PSharedComponent implements OnInit, OnChanges {

  @Input() getDataGo: any;

  ngOnChanges(): void {
    this.models = this.getDataGo;
  }


  ngOnInit() {
  }

  delete(ev, index) {
    if (ev.countin == 0) {
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
        this.updateId = ev.mid;
        this._pSharedService.delData('mainproduct', 'mid', this.updateId)
          .subscribe(res => this.del = res,
          err => console.log(err),
          () => {
            this.models = this.models.filter((val, i) => i != index);
          });
      })
    } else {
      swal('ไม่สามารถลบได้เนื่องจากมีรายการรับเข้า ' + ev.countin + ' ครั้ง');
    }
  }

  @Output() todataform = new EventEmitter();
  @Output() todataform2 = new EventEmitter();
  add(ev) {
    this.todataform.emit(ev);
  }

  edit(ev) {
    this.todataform2.emit(ev);
  }

}
