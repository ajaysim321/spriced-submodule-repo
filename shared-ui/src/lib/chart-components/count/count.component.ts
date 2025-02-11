import { AfterViewInit, Component, HostListener, Input, OnDestroy, OnInit } from '@angular/core';
import * as echarts from 'echarts';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-count',
  imports: [IonicModule],
  standalone: true,
  templateUrl: './count.component.html',
  styleUrl: './count.component.scss'
})
export class CountComponent implements AfterViewInit, OnDestroy {
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
  
         const  option = {
          title: {
            text: 'Step Line'
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['Step Start', 'Step Middle', 'Step End']
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              name: 'Step Start',
              type: 'line',
              step: 'start',
              data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
              name: 'Step Middle',
              type: 'line',
              step: 'middle',
              data: [220, 282, 201, 234, 290, 430, 410]
            },
            {
              name: 'Step End',
              type: 'line',
              step: 'end',
              data: [450, 432, 401, 454, 590, 530, 510]
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
