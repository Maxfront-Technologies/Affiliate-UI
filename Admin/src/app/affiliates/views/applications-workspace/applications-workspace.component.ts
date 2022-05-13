import { Component, OnInit } from '@angular/core';

interface SideNavToggle
{
  screenWidth: number;
  collapsed: boolean;
}
@Component({
  selector: 'app-applications-workspace',
  templateUrl: './applications-workspace.component.html',
  styleUrls: ['./applications-workspace.component.scss'],

})
export class ApplicationsWorkspaceComponent implements OnInit {

  isSideNavCollapsed = false;
  screenWidth = 0;
   onToggleSideNav(data: SideNavToggle): void
   {
      this.screenWidth = data.screenWidth;
      this.isSideNavCollapsed = data.collapsed;
   }
  constructor() { }

  ngOnInit(): void {
  }

}
