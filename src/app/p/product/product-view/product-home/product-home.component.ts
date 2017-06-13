import { PSharedComponent } from './../../../p-shared/p-component/p-shared.component';
import { Component, OnInit } from '@angular/core';
import * as _ from "lodash";
@Component({
  selector: 'app-product-home',
  templateUrl: './product-home.component.html',
  styleUrls: ['./product-home.component.css']
})
export class ProductHomeComponent extends PSharedComponent implements OnInit {



  ngOnInit() {
    this._pSharedService.apiData1(15, 2016)
      .subscribe(res => this.models = res,
      err => console.log(err)
      , () => {
        this.onCharts();
        // console.log(this.models);
      });
  }
  optionsPCharts: object;
  showCharts: boolean = false;
  onCharts() {
    let chartData = this.models;
    let categories = [];
    let _dataA: any = {};
    let _dataB: any = {};
    _dataA.name = 'รับเข้า';
    _dataB.name = 'เบิกจ่าย';
    _dataA.data = [];
    _dataB.data = [];
    chartData.forEach(v => {
      categories.push(v.monthnameshort);
      _dataA.data.push(+v.a);
      _dataB.data.push(+v.b);
    });
    let series = [_dataA, _dataB]
    // console.log(series);
    this.openCharts(categories, series);
  }

  openCharts(categories, series) {
    this.showCharts = true;
    this.optionsPCharts = {
      categories: categories,
      series: series,
      chartType: 'column',
      titleText: 'มูลค่ารับเข้า - เบิกจ่าย ปีงบประมาณ, 2559 ถึงปี, 256066666',
      yAxisText: 'มูลค่า (บาท)',
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
      '<td style="padding:0"><b>{point.y:.1f} บาท</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
    }
    // console.log(this.optionsPCharts);
  }

}



