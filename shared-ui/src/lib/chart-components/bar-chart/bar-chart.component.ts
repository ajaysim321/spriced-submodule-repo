import { AfterViewInit, Component, HostListener, Input, OnInit } from '@angular/core';
import * as echarts from 'echarts';
import { DropdownComponent } from "../dropdown/dropdown.component";
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-bar-chart',
  imports: [DropdownComponent,CommonModule, IonicModule],
  standalone: true,
  templateUrl: './bar-chart.component.html',
  styleUrl: './bar-chart.component.scss'
})
export class BarChartComponent implements AfterViewInit {
  @Input() data!: any;
  @Input() chartConfiguration!: any;
   private myChart!: echarts.ECharts;

   @HostListener('window:resize', ['$event'])
     onResize() {
       if (!!this.myChart) {
         this.myChart.resize()
       }
    }
  
   constructor()
   {

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
       if(!!this.chartConfiguration){
        this.myChart = echarts.init(chartDom);
        const option = this.mapConfigToECharts(this.chartConfiguration.chart);
        this.myChart.setOption(option);
        setTimeout(() => {
          this.myChart.resize();
        }, 100);
       }
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
   mapConfigToECharts(config: any): any {
    return {
      title: {
        text: config.title,
        left: 'top',
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: { type: 'shadow' },
      },
      legend: {
        data: config.series.map((s: any) => s.name),
        top: config.legend.position === 'top' ? 0 : 'auto',
      },
      xAxis: {
        type: 'category',
        name: config.xAxis.title,
        // data: config.xAxis.categories,
        // name: this.xAxisLable,
        data: this.data.title,
      },
      yAxis: {
        type: 'value',
        name: config.yAxis.title,
        axisLabel: {
          formatter: (value: number) =>
            config.yAxis.labels.format.replace('{value}', value.toString()),
        },
      },
      series: config.series.map((s: any) => ({
        name: s.name,
        type: config.type,
        // type: config.type,
        data: s.data,
        stack: config.stacked ? 'total' : null,
        itemStyle: {
          color: s.color,
        },
      })),
    };
  }
}
