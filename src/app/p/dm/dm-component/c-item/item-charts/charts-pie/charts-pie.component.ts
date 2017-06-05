import { PSharedComponent } from './../../../../../p-shared/p-component/p-shared.component';
import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-charts-pie',
  templateUrl: './charts-pie.component.html',
  styleUrls: ['./charts-pie.component.css']
})
export class ChartsPieComponent extends PSharedComponent implements OnChanges {



  @Input() apiKey: number;



  ngOnChanges(changes: SimpleChanges): void {
    let apiKey = changes['apiKey'].currentValue;
    this.onCharts(apiKey);
  }


  onCharts(apiKey) {
    this._pSharedService.apiData(apiKey)
      .subscribe(res => this.models = res,
      err => console.log(err)
      , () => {
        // console.log(this.models);
        let chartData = this.models;
        let data = [];

        chartData.forEach(v => {
          data.push({ name: v.rctname, y: +v.a });
        });

        console.log(data);
        this.openCharts(data);
      });
  }


  options: object;
  openCharts(data) {
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
        text: 'การเบิกใช้วัสดุ ในรพ. กับ รพสต.'
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
