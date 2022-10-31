import { Component, OnInit } from '@angular/core';
import { PoChartOptions, PoChartSerie, PoChartType } from '@po-ui/ng-components';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

// chart
// gauge
// widget

export class DashboardComponent implements OnInit {

	avatar: any = 'assets/img/unnamed.webpd'

	chartAreaOptions: PoChartOptions = {
		axis: {
		  maxRange: 700,
		  gridLines: 8
		}
	  };

	  chartAreaCategories: Array<string> = ['Jan-18', 'Jul-18', 'Jan-19', 'Jul-19', 'Jan-20', 'Jul-20', 'Jan-21'];

	  chartAreaSeries: Array<PoChartSerie> = [
		{ label: 'Starbucks', data: [550, 497, 532, 550, 530, 565, 572], type: PoChartType.Area },
		{ label: 'Green Mntn Coffee Roaster', data: [420, 511, 493, 525, 522, 510, 567], type: PoChartType.Area },
		{ label: 'Dunkin Brands Group', data: [312, 542, 497, 610, 542, 661, 674], type: PoChartType.Area },
		{
		  label: 'Coffee Arabica Price',
		  data: [550, 612, 525, 373, 342, 297, 282],
		  type: PoChartType.Line,
		  color: 'po-color-07'
		}
	  ];
  constructor() { }

  ngOnInit(): void {
  }

}
