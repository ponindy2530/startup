import { Mainstockin } from './../../../dm-model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inview-home',
  templateUrl: './inview-home.component.html',
  styleUrls: ['./inview-home.component.css']
})
export class InviewHomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  apiKeyList: number = 5;
  apiKeyListall: number = 14;
  listall: boolean = true; //รายการค้นหา
  listall1: boolean = false; //รายการค้นหา
  list: boolean = true;
  list1: boolean = false;


  getDataForm = new Mainstockin();
  ToinformData(ev: any) {
    console.log(ev);

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
