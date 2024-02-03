import { Component, ViewChild } from '@angular/core';
import {Chart} from 'chart.js';


@Component({
  selector: 'app-admin-chart',
  templateUrl: './admin-chart.component.html',
  styleUrls: ['./admin-chart.component.css']
})
export class AdminChartComponent {
  chartOptions = {
	  animationEnabled: true,
	  axisY: {
		includeZero: true
	  },
	  data: [{
		type: "column", //change type to bar, line, area, pie, etc
		//indexLabel: "{y}", //Shows y value on all Data Points
		indexLabelFontColor: "#5A5757",
		dataPoints: [
      { label: 'Jan', y: 71, color : 'red' },
      { label: 'Feb', y: 55, color : 'red' },
      { label: 'Mar', y: 50, color : 'red' },
      { label: 'Apr', y: 65, color : 'red' },
      { label: 'May', y: 71, color : 'red' },
      { label: 'Jun', y: 92, color : 'red' },
      { label: 'Jul', y: 68, color : 'red' },
      { label: 'Aug', y: 38, color : 'red' },
      { label: 'Sep', y: 54, color : 'red' },
      { label: 'Oct', y: 60, color : 'red' },
      { label: 'Nov', y: 60, color : 'red' },
      { label: 'Dec', y: 60, color : 'red' }
    ]
	  }]
	}
}
