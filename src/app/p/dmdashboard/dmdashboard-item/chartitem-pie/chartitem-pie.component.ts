import { PSharedComponent } from './../../../p-shared/p-component/p-shared.component';
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
@Component({
  selector: 'app-chartitem-pie',
  templateUrl: './chartitem-pie.component.html',
  styleUrls: ['./chartitem-pie.component.css']
})
export class ChartitemPieComponent extends PSharedComponent implements OnInit {


  @Input() apiKey: number;
  @Input() MonthapiKey1: number;

  ngOnChanges(changes: SimpleChanges): void {
    let apiId = changes['apiKey'].currentValue;
    let MonthapiId = changes['MonthapiKey1'].currentValue;
    // console.log(apiId);
    this.onCharts(apiId, MonthapiId);
  }

  onCharts(apiId, MonthapiId) {
    // this.datestart = "2016-10-01";
    // this.dateend = "2017-09-30";
    // this.hcode = "10702";


    this._pSharedService.apiData1(apiId, MonthapiId)
      .subscribe(res => this.models = res,
      err => console.log(err)
      , () => {
        // console.log(this.models);
        let chartData = this.models;
        let data = [];

        chartData.forEach(v => {
          data.push({ name: v.rctname, y: +v.a });
        });

        // console.log(data);
        this.openCharts(data, MonthapiId);


      });
  }

  options: object;
  openCharts(data, MonthapiId) {
    this.options = {

      credits: {
        enabled: false
      },

      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        // text: 'การเบิกใช้วัสดุ ในรพ. กับ รพสต. ปีงบประมาณ, 2559 ถึงปี, 2560'
        text: `การเบิกใช้วัสดุ ในรพ. กับ รพสต. ปีงบประมาณ, ${MonthapiId + 543} ถึงปี, ${MonthapiId + 543 + 1}`
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: false
          },
          showInLegend: true
        }
      },
      series: [{
        name: 'Brands',
        colorByPoint: true,
        data: data
      }]
    };
    // this.loading = false;
  }
}
