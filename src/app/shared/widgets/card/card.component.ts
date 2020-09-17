import { Component, Input, OnInit } from '@angular/core';
import * as HighCharts from 'highcharts';
//import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() label: string
  @Input() total: string
  @Input() percentage: string

  highCharts = HighCharts
  chartOptions = {}

  constructor() { }

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
        type: 'area'
      },
      title: {
        text: null
      },
      subtitle: {
        text: null
      },
      tooltip: {
        split: true,
        outside: true
      },
      legend: {
        enabled: false
      },
      export: {
        enabled: false
      },
      series: [{
        data: [41, 60, 30, 66]
      }]
    };

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }
}
