import { PSharedComponent } from './../p-shared/p-component/p-shared.component';
import { Component, OnInit } from '@angular/core';
declare var jQuery: any;

@Component({
  selector: 'app-dm',
  templateUrl: './dm.component.html',
  styleUrls: ['./dm.component.css']
})
export class DmComponent extends PSharedComponent implements OnInit {
  title: string = " ระบบจัดการ วัสดุทันตกรรม ( Dentmat V.401)";

  ngOnInit() {
    this.loadJq();

    // this._router.navigate(['dm/dashboard']);
  }

  loadJq() {
    jQuery(".button-collapse").sideNav();
  }

}
