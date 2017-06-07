import { Component, OnInit } from '@angular/core';
declare var jQuery: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title: string = " ระบบจัดการ วัสดุทันตกรรม ( Dentmat V.401)";

  ngOnInit(): void {
    this.loadJq();
  }

  loadJq() {
    jQuery(".button-collapse").sideNav();
  }
}
