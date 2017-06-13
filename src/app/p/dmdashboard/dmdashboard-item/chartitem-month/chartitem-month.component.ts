import { PSharedComponent } from './../../../p-shared/p-component/p-shared.component';
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-chartitem-month',
  templateUrl: './chartitem-month.component.html',
  styleUrls: ['./chartitem-month.component.css']
})
export class ChartitemMonthComponent extends PSharedComponent implements OnInit, OnChanges {

  @Input() apiKey: number;
  @Input() MonthapiKey1: number;

  ngOnChanges(changes: SimpleChanges): void {
    let apiId = changes['apiKey'].currentValue;
    let MonthapiId = changes['MonthapiKey1'].currentValue;
    // console.log(apiId);
    this.onCharts(apiId, MonthapiId);
  }


  onCharts(apiId, MonthapiId) {

    this._pSharedService.apiData1(apiId, MonthapiId)
      .subscribe(res => this.models = res,
      err => console.log(err)
      , () => {
        // console.log(this.models);
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

        // console.log(categories);
        // console.log(_dataA);
        // console.log(_dataB);
        let series = [_dataA, _dataB]
        // this.openCharts(categories, _dataA, _dataB,MonthapiId);

        this.openCharts(categories, series, MonthapiId);

      });
  }


  options: object;
  // openCharts(categories, _dataA, _dataB,MonthapiId) {
  openCharts(categories, series, MonthapiId) {
    this.options = {
      credits: {
        enabled: false
      },
      chart: {
        type: 'column'  //#1
      },
      title: {
        // text: 'มูลค่ารับเข้า - เบิกจ่าย ปีงบประมาณ, 2559 ถึงปี, 2560'
        text: `มูลค่ารับเข้า - เบิกจ่าย ปีงบประมาณ, ${MonthapiId + 543} ถึงปี, ${MonthapiId + 543 + 1}`
      },
      xAxis: {
        categories: categories,
        crosshair: true
      },
      yAxis: {
        min: 0,
        title: {
          text: 'มูลค่า (บาท)'
        }
      },
      tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f} บาท</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
      },
      plotOptions: {
        column: {
          pointPadding: 0.0,
          borderWidth: 0
        }
      },
      // series: [_dataA, _dataB]
      series: series

    }

    // this.loading = false;
  }

}

