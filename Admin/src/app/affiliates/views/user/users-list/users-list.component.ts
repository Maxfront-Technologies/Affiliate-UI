import { Component, OnInit } from '@angular/core';
import { Notify } from 'notiflix';
import { User } from 'src/app/domain/entities/user.entity';
import { UserService } from 'src/app/Infastructure/services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  constructor(private userService: UserService) { }
    users: User[] = [];
  ngOnInit(): void {
    this.getUsers();
  }
  getUsers()
  {
    this.userService.getUsers()
    .subscribe({
      next: (data) => {
        this.users = data;
      },
      error: (error) => {
        Notify.failure(error.message);
      }
    })
  }

}
