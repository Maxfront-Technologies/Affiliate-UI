import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-my-chart',
  templateUrl: './my-chart.component.html',
  styleUrls: ['./my-chart.component.scss']
})
export class MyChartComponent implements OnInit {
  chartData = [
    {
      data: [330, 600, 260, 700],
      label: 'Affliaites'
    },
    {
      data: [120, 455, 100, 340],
      label: 'Referrals'
    },
    {
      data: [45, 67, 800, 500],
      label: 'Commission'
    }
  ];
  chartLabels = [
    'January',
    'February',
    'March',
    'April'
  ];
  chartOptions = {
    responsive: true
  };

  ngOnInit(): void {
    
  }

}
