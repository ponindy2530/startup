import { Mainstockout } from './../../dm-model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-v-out',
  templateUrl: './v-out.component.html',
  styleUrls: ['./v-out.component.css']
})
export class VOutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  searchlist: boolean = false; //รายการค้นหา
  listall: boolean = true; //รายการค้นหา
  apiKey: number;
  apiKeyListall: number = 7;
  toSearchText: string;
  getSearchText(ev: string) {
    if (ev.length >= 2) {
      this.listall = false;
      this.searchlist = true;
      this.apiKey = 6;
      this.toSearchText = ev;
      // this.inform = false;
      // this.inlist = false;
    } else {
      this.searchlist = false;
      this.listall = true;
    }
  }

  getDataForm = new Mainstockout();
  ToinformData(ev: any) {
    this.searchlist = false;
    this.listall = true;
    this.getDataForm = ev;
  }

}
