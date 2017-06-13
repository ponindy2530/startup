import { Mainstockout, Mainstockin } from './../../../dm-model';
import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
declare var jQuery: any;
import * as _ from "lodash";
@Component({
  selector: 'app-mainview-home',
  templateUrl: './mainview-home.component.html',
  styleUrls: ['./mainview-home.component.css']
})
export class MainviewHomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    jQuery(".dropdown-button").dropdown();
    jQuery('ul.tabs').tabs();
    jQuery('.collapsible').collapsible();
  }
  opform: boolean = true;

  apiKeylistin: number = 21;
  apiKeylistout: number = 22;
  apiKeyListall: number = 13;
  opcat: boolean = true;
  showlistin: boolean = false;
  showlistout: boolean = false;
  showlistout1: boolean = false;
  showformout: boolean = false;
  showformin: boolean = false;
  showlistin1: boolean = false;
  showlistall: boolean = false;
  getDataForm = new Mainstockout();
  toDataOut(ev) {
    jQuery('.modal').modal({
      dismissible: false
    });
    this.showformout = true;
    this.showlistout = false;
    this.showlistout1 = true;
    // console.log(ev);
    this.getDataForm = ev;

  }

  getDataForm2 = new Mainstockin();
  ToinformData(ev: any) {
    // console.log(ev);
    jQuery('.modal').modal({
      dismissible: false
    });
    this.showformin = true;
    this.showlistin = false;
    this.showlistin1 = true;
    this.getDataForm2 = ev;
  }



  showfout() {
    this.showlistall = false;
    this.showlistin = false;
    this.showlistin1 = false;
    this.showlistout1 = false;
    this.showlistout = true;
  }

  showfin() {
    this.showlistall = false;
    this.showlistout = false;
    this.showlistout1 = false;
    this.showlistin1 = false;
    this.showlistin = true;
  }

  showfall() {
    this.showlistin = false;
    this.showlistin1 = false;
    this.showlistout = false;
    this.showlistout1 = false;
    this.showlistall = true;
  }

  resList(ev: boolean) {
    this.showformout = false;
    this.showlistout1 = false;
    this.showlistout = true;
    jQuery('#modal1').modal('close');
  }

  resList2(ev: boolean) {
    this.showformin = false;
    this.showlistin1 = false;
    this.showlistin = true;
    jQuery('#modal1').modal('close');
  }
  apiKeylist: number;
  oplist: boolean = false;
  tolist: string;
  onscformlest(ev: string) {
    if (ev.length >= 2) {
      console.log(ev);
      
      // this.opform = false;
      this.oplist = true;
      this.tolist = ev;
      this.apiKeylist = 47;

    } else {
      this.oplist = false;
    }
  }

    gettocat2(ev: string) {
    this.opform = false;
    this.oplist = true;
    this.tolist = ev;
    this.apiKeylist = 51;
  }

  gettosup2(ev: string) {
    this.opform = false;
    this.oplist = true;
    this.tolist = ev;
    this.apiKeylist = 38;
  }

}
