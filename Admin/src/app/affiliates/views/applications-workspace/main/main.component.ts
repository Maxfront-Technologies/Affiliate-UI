import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  @Input() collapsed = false;
  @Input() screenWidth = 0;

  getBodyClass(): string
  {
    let styleClass = '';
    if(this.collapsed && this.screenWidth > 500)
    {
      styleClass = 'body-trimed';

    }
    else if(this.collapsed && this.screenWidth <= 500 && this.screenWidth > 0)
    {
      styleClass='body-md-screen'
    }
    return styleClass;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
