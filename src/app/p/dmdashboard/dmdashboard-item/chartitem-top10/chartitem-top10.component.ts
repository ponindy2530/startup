import { PSharedComponent } from './../../../p-shared/p-component/p-shared.component';
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
@Component({
  selector: 'app-chartitem-top10',
  templateUrl: './chartitem-top10.component.html',
  styleUrls: ['./chartitem-top10.component.css']
})
export class ChartitemTop10Component extends PSharedComponent implements OnInit {



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
        let labels = [];
        let data = [];

        chartData.forEach(v => {
          labels.push({ name: v.mname, y: +v.pricenow });
          data.push({ name: v.mname, y: +v.pricenow });
        });

        // console.log(labels);
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
        type: 'column'
      },
      title: {
        // text: 'มูลค่าสินค้ามากที่สุด 10 ตัว. ปีงบประมาณ, 2559 ถึงปี, 2560'
        text: `มูลค่าสินค้ามากที่สุด 10 ตัว. ปีงบประมาณ, ${MonthapiId + 543} ถึงปี, ${MonthapiId + 543 + 1}`
      },
      xAxis: {
        type: 'category'
      },
      yAxis: {
        title: {
          text: 'มูลค่า'
        }

      },
      legend: {
        enabled: false
      },
      plotOptions: {
        series: {
          dataLabels: {
            enabled: true,
            format: '{point.y:.1f} บาท'
          }
        }
      },

      tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.0f}</b> บาท<br/>'
      },

      series: [{
        name: 'ชื่อวัสดุทันตกรรม',
        colorByPoint: true,
        data: data
      }],
    };

    // this.loading = false;
  }





}
