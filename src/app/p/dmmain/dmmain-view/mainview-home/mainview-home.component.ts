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
    jQuery('ul.tabs').tabs();
    jQuery('.collapsible').collapsible();
  }

}
