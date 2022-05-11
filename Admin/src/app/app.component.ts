import { Component } from '@angular/core';

export interface User {
  name: string;
  age: number;
}

const USERS_DATA: User[] = [
  { name: 'Mfon', age: 10},
  { name: 'Mfon', age: 10},
  { name: 'Mfon', age: 10},
  { name: 'Mfon', age: 10},
  { name: 'Mfon', age: 10},
  { name: 'Mfon', age: 10},
  { name: 'Mfon', age: 10}
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Admin';

  dataSource = USERS_DATA;

  displayedColumns = ['name', 'age'];
}
