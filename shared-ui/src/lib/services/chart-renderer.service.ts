import { Injectable, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { CountComponent } from '../chart-components/count/count.component';
import { LineChartComponent } from '../chart-components/line-chart/line-chart.component';
import { BarChartComponent } from '../chart-components/bar-chart/bar-chart.component';
import { PieChartComponent } from '../chart-components/pie-chart/pie-chart.component';
import { NumberStatsComponent } from '../chart-components/number-stats/number-stats.component';


@Injectable({
    providedIn: 'root'
})
export class ChartRendererService {
    constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

    renderChart(
        type: string,
        viewContainerRef: ViewContainerRef,
        chartData:any,
        chartConfiguration:any
    ): void {
        viewContainerRef.clear();

        let component: any;

        switch (type) {
            case 'count':
                component = CountComponent;
                break;
            case 'line-chart':
                component = LineChartComponent;
                break;
            case 'bar-chart':
                component = BarChartComponent;
                break;
            case 'pie-chart':
                component = PieChartComponent;
                break;
            case 'number-states':
                component = NumberStatsComponent;
                break;
            default:
                console.error(`Unknown chart type: ${type}`);
                return;
        }

        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
        const componentRef = viewContainerRef.createComponent(componentFactory);

        if (componentRef.instance) {
            (componentRef.instance as any).data = chartData;
            (componentRef.instance as any).chartConfiguration = chartConfiguration;
        }
    }
}
