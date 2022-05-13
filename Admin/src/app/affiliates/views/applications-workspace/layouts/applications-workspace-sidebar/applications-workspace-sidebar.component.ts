import { Component, Output, EventEmitter } from '@angular/core';


interface SideNavToggle
{
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-applications-workspace-sidebar',
  templateUrl: './applications-workspace-sidebar.component.html',
  styleUrls: ['./applications-workspace-sidebar.component.scss']
})
export class ApplicationsWorkspaceSidebarComponent {
 @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
 collapsed = false;
 screenWidth = 0;
 toggleCollapse(): void{
   this.collapsed = !this.collapsed;
   this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
 }

 closeSidenav(): void{
    this.collapsed = false;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});

 }


}
