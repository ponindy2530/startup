import { Mainstockin } from './../../dm-model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-v-in',
  templateUrl: './v-in.component.html',
  styleUrls: ['./v-in.component.css']
})
export class VInComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  searchlist: boolean = false; //รายการค้นหา
  inform: boolean = true; //ฟอร์มรับเข้า
  inlist: boolean = true; //แสดงรายการบันทึก
  toSearchText: string;
  apiKey: number;
  apiKeyList: number = 5;
  getSearchText(ev: string) {
    if (ev.length >= 2) {
      this.searchlist = true;
      this.apiKey = 2;
      this.toSearchText = ev;
      this.inform = false;
      this.inlist = false;
    } else {
      this.searchlist = false;
    }
  }

  getDataForm = new Mainstockin();
  ToinformData(ev: any) {
    this.searchlist = false;
    this.inform = true;
    this.inlist = true;
    this.getDataForm = ev;
  }

  listF(ev: boolean) {
    if (ev == true) {
      this.getDataForm = new Mainstockin();
      this.inlist = ev;
    } else {
      this.inlist = ev;
    }


  }

}
