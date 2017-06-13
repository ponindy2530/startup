import { PSharedComponent } from './../../../p-shared/p-component/p-shared.component';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-main-search',
  templateUrl: './main-search.component.html',
  styleUrls: ['./main-search.component.css']
})
export class MainSearchComponent extends PSharedComponent implements OnInit {


  ngOnInit() {

  }

  @Output() onFilter = new EventEmitter();

  getfilter(ev: any) {

    this.onFilter.emit(ev.target.value)

    // if (ev.target.value.length >= 2) {
    //   this._ServiceMainService.getData4(47, this.hcode, this.datestart, this.dateend, ev.target.value)
    //     .subscribe(res => this.models = res,
    //     err => console.log(err)
    //     , () => {

    //     });
    // } else {
    //   this.models = [];
    // }


  }





}
