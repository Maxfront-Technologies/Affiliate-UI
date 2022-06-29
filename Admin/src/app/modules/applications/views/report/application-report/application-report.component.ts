import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-application-report',
  templateUrl: './application-report.component.html',
  styleUrls: ['./application-report.component.scss']
})
export class ApplicationReportComponent implements OnInit {
  chartData = [
    {
      data: [330, 600, 260, 700],
      label: 'Account A'
    },
    {
      data: [120, 455, 100, 340],
      label: 'Account B'
    },
    {
      data: [45, 67, 800, 500],
      label: 'Account C'
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
  constructor() { }

  ngOnInit(): void {
  }

}
