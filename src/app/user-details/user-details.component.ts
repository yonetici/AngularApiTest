import { Component, OnInit } from '@angular/core';
import {UserService} from '../user/user.service';
import {IUser} from '../user/user';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user: IUser[];
  private errorMessage;

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getUser(id);
    }
  }

  getUser(id: number): void {
    this.userService.getUser(id).subscribe({
      next: user => {
        console.log(user);
        this.user = user;
      },
      error: err => this.errorMessage = err
    });

}
}
