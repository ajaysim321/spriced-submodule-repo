import { AfterViewInit, Component, HostListener, Input, OnDestroy, OnInit } from '@angular/core';
import * as echarts from 'echarts';
import { DropdownComponent } from "../dropdown/dropdown.component";
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
  standalone: true,
  imports: [DropdownComponent,CommonModule, IonicModule]
})
export class PieChartComponent implements AfterViewInit, OnDestroy {
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
        tooltip: {
          trigger: 'item'
        },
        legend: {
          top: '5%',
          left: 'center'
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: '#fff',
              borderWidth: 2
            },
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 40,
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 1048, name: 'Search Engine' },
              { value: 735, name: 'Direct' },
              { value: 580, name: 'Email' },
              { value: 484, name: 'Union Ads' },
              { value: 300, name: 'Video Ads' }
            ]
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
