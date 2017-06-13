import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-p-charts',
  templateUrl: './p-charts.component.html',
  styleUrls: ['./p-charts.component.css']
})
export class PChartsComponent implements OnChanges {




  @Input() optionsPCharts: object;

  ngOnChanges() {
    this.openCharts(this.optionsPCharts);
  }

  options: object;
  openCharts(optionsPCharts) {
    this.options = {
      credits: {
        enabled: false
      },
      chart: {
        type: optionsPCharts.chartType
      },
      title: {
        text: optionsPCharts.titleText
      },
      xAxis: {
        categories: optionsPCharts.categories,
        crosshair: true
      },
      yAxis: {
        min: 0,
        title: {
          text: optionsPCharts.yAxisText
        }
      },
      tooltip: {
        headerFormat: optionsPCharts.headerFormat,
        pointFormat: optionsPCharts.pointFormat,
        footerFormat: optionsPCharts.footerFormat,
        shared: optionsPCharts.shared,
        useHTML: optionsPCharts.useHTML
      },
      plotOptions: {
        column: {
          pointPadding: 0.0,
          borderWidth: 0
        }
      },
      series: optionsPCharts.series

    }
  }

}
