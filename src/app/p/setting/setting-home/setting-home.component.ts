import { MainproductDt } from './../../dm-model';
import { Component, OnInit } from '@angular/core';
declare var jQuery: any;
import * as _ from "lodash";
import swal from 'sweetalert2';
@Component({
  selector: 'app-setting-home',
  templateUrl: './setting-home.component.html',
  styleUrls: ['./setting-home.component.css']
})
export class SettingHomeComponent implements OnInit {


  ngOnInit() {

  }

  Aic: boolean = true; //หมวดหมู่
  Ass: boolean = true; //ค้นหา
  Aie: boolean = false;
  Atf: boolean = false;
  CatID: number = 1;
  getcatTo(ev) {
    this.CatID = ev;
  }
  getDataGo: any;
  getDataTo(ev) {
    this.Aie = true;
    // console.log(ev);
    this.getDataGo = ev;
  }
  getDataForm: MainproductDt;
  idupdate: number = 0;
 

  todataform(ev) {
    jQuery('.modal').modal({
      dismissible: false
    });
    this.Atf = true;
    this.getDataForm = ev;
    this.idupdate = 0;
    // console.log(ev);
  }

  todataform2(ev) {
    jQuery('.modal').modal({
      dismissible: false
    });
    this.Atf = true;
    this.getDataForm = ev;
    this.idupdate = ev.mid;
    // console.log(ev);
  }

}