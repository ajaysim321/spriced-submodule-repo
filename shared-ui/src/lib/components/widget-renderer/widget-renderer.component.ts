import { AfterViewInit, Component, Input, OnInit, QueryList, ViewChildren, ViewContainerRef } from '@angular/core';
import { ChartRendererService } from '../../services/chart-renderer.service';
import { ChartService } from '../../services/chart.service';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-widget-renderer',
  imports: [IonicModule],
  standalone: true,
  templateUrl: './widget-renderer.component.html',
  styleUrl: './widget-renderer.component.scss'
})
export class WidgetRendererComponent implements AfterViewInit {
  @Input() charts!: any
  @ViewChildren('chartContainer', { read: ViewContainerRef })
  chartContainers!: QueryList<ViewContainerRef>;
  constructor(
    private chartRendererService: ChartRendererService,
    private chartService: ChartService
  ) { }

  ngAfterViewInit(): void {
    if (this.chartContainers.length > 0) {
      const container = this.chartContainers.first;
      const chart = this.charts;
      if (chart) {
        this.chartService.getWidgetData(chart.widgetId).subscribe(
          res=>{
            const chartConfiguration = res;
            this.chartRendererService.renderChart(chart.type, container, chart, chartConfiguration);

          }
        )
      }
    }
  }
}

