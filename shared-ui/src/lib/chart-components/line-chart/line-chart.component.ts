import { AfterViewInit, Component, HostListener, Input, OnInit } from '@angular/core';
import * as echarts from 'echarts';
import { DropdownComponent } from "../dropdown/dropdown.component";
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';


@Component({
  selector: 'app-line-chart',
  standalone: true,
  imports: [DropdownComponent,CommonModule,IonicModule],
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.scss'
})
export class LineChartComponent implements AfterViewInit {
 @Input() data!: any;
 @Input() chartConfiguration!: any;
  private myChart!: echarts.ECharts;

  @HostListener('window:resize', ['$event'])
    onResize() {
      if (!!this.myChart) {
        this.myChart.resize()
      }
    }
 

  ngAfterViewInit(): void {
    this.initializeChart();
    this.addResizeListener();
  }

  private initializeChart(): void {
    const chartDom = document.getElementById(this.data.widgetId);
    if (chartDom) {
      if (this.myChart) {
        this.myChart.dispose();
      }

      this.myChart = echarts.init(chartDom);

       const option = {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: 'line'
          }
        ]
      };

      this.myChart.setOption(option);
      setTimeout(() => {
        this.myChart.resize();
      }, 100);
    } else {
      console.error('Chart container not found!');
    }
  }

  private addResizeListener(): void {
    window.addEventListener('resize', this.handleResize);
  }

  private handleResize = (): void => {
    if (this.myChart) {
      this.myChart.resize();
    }
  };

  ngOnDestroy(): void {
    // Clean up resize listener and dispose of the chart instance
    window.removeEventListener('resize', this.handleResize);
    if (this.myChart) {
      this.myChart.dispose();
    }
  }
  
}
