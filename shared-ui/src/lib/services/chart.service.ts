import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ChartService {
  constructor(
    private http: HttpClient,

  ) { }

  // getChartData(): Observable<any> {
  //   return this.http.get(`${this.baseUrl}/charts`); // ✅ Uses dynamic base URL
  // }



  getChartsData() {
    return of(
      {
        "dashboardConfig": {
          "title": "Client Dashboard",
          "rows": [
            {
              "id": "row1",
              "title": "Stats",
              "blocks": [
                {
                  "widgetId": "widget1",
                  "type": "number-states",
                  "value": "600",
                  "title": "Total Users",
                  // "class": "ion-col col-md-6 col-sm-12",
                  "size": 12,
                  "size_md": 3,
                  "size_sm": 6,
                  // "size_lg":3,
                  "bgColor": "rgb(177, 53, 84)",
                  "description": "Active users"
                },
                {
                  "widgetId": "widget2",
                  "type": "number-states",
                  "value": "400",
                  "title": "Total customer",
                  // "class": "ion-col col-md-6 col-sm-12",
                  "size": 12,
                  "size_md": 3,
                  "size_sm": 6,
                  // "size_lg":3,
                  "bgColor": "rgb(53, 162, 177)",
                  "description": "Active users"
                },
                {
                  "widgetId": "widget3",
                  "type": "number-states",
                  "value": "300",
                  "title": "Total sales",
                  // "class": "ion-col col-md-6 col-sm-12",
                  "size": 12,
                  "size_md": 3,
                  "size_sm": 6,
                  // "size_lg":3,
                  "bgColor": "rgb(100, 53, 177)",
                  "description": "Current Sale "

                },
                {
                  "widgetId": "widget3",
                  "type": "number-states",
                  "value": "300",
                  "title": "Total Loss",
                  // "class": " col-md-6 col-sm-12",
                  "size": 12,
                  "size_md": 3,
                  "size_sm": 6,
                  // "size_lg":3,
                  "bgColor": "rgb(53, 136, 177)",
                  "description": "Current Sale "

                }
              ]
            },
            {
              "id": "row2",
              "title": "Chart examples",
              "blocks": [
                {
                  "widgetId": "widget4",
                  "type": "count",
                  "title": "Total Users",
                  // "class": " col-sm-12 col-lg-4"
                  "size": 12,
                  "size_md": 3,
                  "size_sm": 6,
                  // "size_lg":3,
                },
                {
                  "widgetId": "salesByEngine",
                  "type": "bar-chart",
                  "title": "Sales Overview",
                  // "class": " col-sm-12 col-lg-4",
                  "size": 12,
                  "size_md": 3,
                  "size_sm": 6,
                  // "size_lg":3,
                  "filter": true,
                  "dropdowns": [
                    { "label": "HHP" },
                    { "label": "Customer" },
                    { "label": "Engine" }
                  ],
                  "url": "assets/chart2.json"
                },
                {
                  "widgetId": "widget6",
                  "type": "line-chart",
                  "title": "Revenue Growth",
                  // "class": " col-sm-12 col-lg-4",
                  "size": 12,
                  "size_md": 3,
                  "size_sm": 6,
                  // "size_lg":3,
                  "filter": true,
                  "dropdowns": [
                    { "label": "HHP" },
                    { "label": "Customer" },
                    { "label": "Engine" }
                  ],
                },
              ]
            },
            {
              "id": "row3",
              "title": "Custom charts",
              "blocks": [
                {
                  "widgetId": "widget8",
                  "type": "line-chart",
                  "title": "Revenue Growth",
                  // "class": " col-sm-12 col-lg-6"
                  "size": 12,
                  "size_md": 3,
                  "size_sm": 6,
                  // "size_lg":3,
                },
                {
                  "widgetId": "widget9",
                  "type": "pie-chart",
                  "title": "Performance details",
                  // "class": "col-sm-12 col-lg-6"
                  "size": 12,
                  "size_md": 3,
                  "size_sm": 6,
                  // "size_lg":3,
                },
                // {
                //   "widgetId": "widget10",
                //   "type": "bar-chart",
                //   "title": "Market Share"
                // },
                // {
                //   "widgetId": "widget11",
                //   "type": "count",
                //   "title": "Total Users"
                // },
              ]
            },
            {
              "id": "row4",
              "title": "My charts",
              "blocks": [
                {
                  "widgetId": "widget12",
                  "type": "count",
                  "title": "Total Users",
                  // "class": " col-sm-12 col-lg-3"
                  "size": 12,
                  "size_md": 3,
                  "size_sm": 6,
                  // "size_lg":3,
                },
                {
                  "widgetId": "widget15",
                  "type": "pie-chart",
                  "title": "User Stats",
                  // "class": " col-sm-12 col-lg-3"
                  "size": 12,
                  "size_md": 3,
                  "size_sm": 6,
                  // "size_lg":3,
                },
                {
                  "widgetId": "widget19",
                  "type": "bar-chart",
                  "title": "Sales Overview",
                  // "class": " col-sm-12 col-lg-3"
                  "size": 12,
                  "size_md": 3,
                  "size_sm": 6,
                  // "size_lg":3,
                },
                {
                  "widgetId": "widget14",
                  "type": "line-chart",
                  "title": "Revenue Growth",
                  // "class": " col-sm-12 col-lg-3"
                  "size": 12,
                  "size_md": 3,
                  "size_sm": 6,
                  // "size_lg":3,
                },
                // {
                //   "widgetId": "widget92",
                //   "type": "count",
                //   "title": "Total Users",
                //   //  "class": " col-sm-12 col-lg-3"
                //   "size": 12,
                //   "size_md": 3,
                //   "size_sm": 6,
                //   "size_lg":3,
                // },
                // {
                //   "widgetId": "widget82",
                //   "type": "count",
                //   "title": "Total Users",
                //   //  "class": " col-sm-12 col-lg-3"
                //   "size": 12,
                //   "size_md": 3,
                //   "size_sm": 6,
                //   "size_lg":3,
                // },

              ]
            },
            // {
            //   "id": "row4",
            //   "title": "my new row",
            //   "blocks": [
            //     {
            //       "widgetId": "widget62",
            //       "type": "count",
            //       "title": "Total Users",
            //        "class": " col-sm-12 col-lg-3"
            //     },
            //     {
            //       "widgetId": "widget65",
            //       "type": "pie-chart",
            //       "title": "User Stats",
            //        "class": " col-sm-12 col-lg-3"
            //     },
            //     {
            //       "widgetId": "widget63",
            //       "type": "bar-chart",
            //       "title": "Sales Overview",
            //        "class": " col-sm-12 col-lg-3"
            //     },
            //     {
            //       "widgetId": "widget64",
            //       "type": "line-chart",
            //       "title": "Revenue Growth",
            //        "class": " col-sm-12 col-lg-3"
            //     },

            //   ]
            // },
          ]
        }
      }

    )
  }

  getData(url: string) {
    return this.http.get(url);
  }

  getWidgetData(widgetId: any) {
    let widgetConfig;

    switch (widgetId) {
      case 'salesByEngine':
        widgetConfig = {
          chart: {
            type: 'bar',
            stacked: true,
            title: 'Sales by Engine & Certification',
            xAxis: {
              title: 'Engine Types',
              categories: [
                'B6.7',
                'L9',
                'X12',
                'F3.8',
                'B4.5',
                'X15',
                'F2.8',
                'other',
                'G12',
              ],
            },
            yAxis: {
              title: 'Sales (in millions)',
              labels: {
                format: '{value}M',
              },
            },
            series: [
              {
                name: 'TIER 4 FINAL',
                data: [20, 30, 15, 10, 5, 10, 5, 2, 1],
                color: '#a6d96a',
              },
              {
                name: 'TIER 3',
                data: [15, 25, 10, 5, 3, 5, 2, 1, 0],
                color: '#fdae61',
              },
              {
                name: 'STAGE V',
                data: [10, 20, 8, 4, 2, 3, 1, 0.5, 0],
                color: '#fee08b',
              },
              {
                name: 'OTHER',
                data: [5, 10, 5, 2, 1, 1, 0.5, 0.2, 0],
                color: '#d73027',
              },
              {
                name: 'EPA21',
                data: [12, 18, 9, 4, 2, 2, 1, 0.5, 0],
                color: '#4575b4',
              },
              {
                name: 'EPA21 CANADA',
                data: [7, 14, 6, 3, 1, 1, 0.5, 0.2, 0],
                color: '#91bfdb',
              },
              {
                name: 'EPA17',
                data: [10, 8, 4, 2, 1, 1, 0.5, 0.1, 0],
                color: '#f46d43',
              },
            ],
            legend: {
              enabled: true,
              position: 'top',
            },
          },
        };
        break;

      case 'widget19':
        widgetConfig = {
          chart: {
            type: 'bar',
            stacked: true,
            title: 'Sales by Engine & Certification',
            xAxis: {
              title: 'Engine Types',
              categories: [
                'B6.7',
                'L9',
                'X12',
                'F3.8',
                'B4.5',
                'X15',
                'F2.8',
                'other',
                'G12',
              ],
            },
            yAxis: {
              title: 'Sales (in millions)',
              labels: {
                format: '{value}M',
              },
            },
            series: [
              {
                name: 'TIER 4 FINAL',
                data: [20, 30, 15, 10, 5, 10, 5, 2, 1],
                color: '#a6d96a',
              },
              {
                name: 'TIER 3',
                data: [15, 25, 10, 5, 3, 5, 2, 1, 0],
                color: '#fdae61',
              },
              {
                name: 'STAGE V',
                data: [10, 20, 8, 4, 2, 3, 1, 0.5, 0],
                color: '#fee08b',
              },
              {
                name: 'OTHER',
                data: [5, 10, 5, 2, 1, 1, 0.5, 0.2, 0],
                color: '#d73027',
              },
              {
                name: 'EPA21',
                data: [12, 18, 9, 4, 2, 2, 1, 0.5, 0],
                color: '#4575b4',
              },
              {
                name: 'EPA21 CANADA',
                data: [7, 14, 6, 3, 1, 1, 0.5, 0.2, 0],
                color: '#91bfdb',
              },
              {
                name: 'EPA17',
                data: [10, 8, 4, 2, 1, 1, 0.5, 0.1, 0],
                color: '#f46d43',
              },
            ],
            legend: {
              enabled: true,
              position: 'top',
            },
          },
        };
        break;
      default:
        widgetConfig = null; // Handle invalid widgetId if necessary
        break;
    }
    return of(widgetConfig);
  }


}