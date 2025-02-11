import { AfterViewInit, Component, OnInit, QueryList, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { ChartRendererService, ChartService, WidgetRendererComponent } from '@spriced-platform-angular-workspace/shared-ui';

@Component({
  selector: 'app-dashboard',
  imports: [HttpClientModule, WidgetRendererComponent, IonicModule],
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  charts: any[] = [];
  dashboardType: any;
  @ViewChildren('chartContainer', { read: ViewContainerRef })
  chartContainers!: QueryList<ViewContainerRef>;

  constructor(
    private chartRendererService: ChartRendererService,
    private http: HttpClient,
    public _chartService: ChartService,
  ) {}

  ngOnInit() {
    // Fetch charts from API
    this._chartService.getChartsData().subscribe((response) => {
    
      console.log(response);
      this.dashboardType = response?.dashboardConfig?.title;
      // this.charts = response?.dashboardConfig?.rows;   
      this.charts = response?.dashboardConfig?.rows.map(row => {
        const columnsPerRow = row?.blocks?.length;
        const colSizelg = Math.floor(12 / columnsPerRow); // Distribute columns equally
        return {
          ...row,
          blocks: row?.blocks.map(block => ({
            ...block,
            colSize:colSizelg
          }))
        };
      });
    });
  }
}

