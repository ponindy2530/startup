import { Mainstockout } from './../../../dm-model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-outview-home',
  templateUrl: './outview-home.component.html',
  styleUrls: ['./outview-home.component.css']
})
export class OutviewHomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  searchlist: boolean = false; //รายการค้นหา
  listall: boolean = true; //รายการค้นหา
  listall1: boolean = false; //รายการค้นหา
  list: boolean = true;
  list1: boolean = false;
  apiKey: number;
  apiKeyListall: number = 13;
  toSearchText: string;
  apiKetListNew: number = 10; //รายการบันทึกล่าสุด
  // getSearchText(ev: string) {
  //   if (ev.length >= 2) {
  //     this.listall = false;
  //     this.listall1 = false;
  //     this.searchlist = true;
  //     this.apiKey = 6;
  //     this.toSearchText = ev;
  //     this.list = false;
  //     this.list1 = true;
  //     this.inform = false;
  //     this.inlist = false;
  //   } else {
  //     this.searchlist = false;
  //     this.listall = false;
  //     this.listall1 = true;
  //     this.list = true;
  //     this.list1 = false;
  //   }
  // }

  getDataForm = new Mainstockout();
  ToinformData(ev: any) {
    // this.searchlist = false;
    this.listall = false;
    this.listall1 = true;
    this.list = false;
    this.list1 = true;
    this.getDataForm = ev;
  }

  resList(ev: boolean) {
    this.listall1 = false;
    this.listall = true;
    this.list = true;
    this.list1 = false;
  }

  resList2(ev: boolean) {
    this.listall1 = true;
    this.listall = false;
  }

}
