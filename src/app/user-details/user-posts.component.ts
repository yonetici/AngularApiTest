import {Component, OnInit} from '@angular/core';
import {UserService} from '../user/user.service';
import {ActivatedRoute} from '@angular/router';
import {IPost, IUser} from '../user/user';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html'
})
export class UserPostsComponent implements OnInit {

  user: IUser;
  posts: IPost[];
  private errorMessage;
  constructor(private userService: UserService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {

    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getUser(id);
      this.getPostsbyId(id);
      }
  }

  getUser(id: number): void {
    this.userService.getUser(id).subscribe({
      next: user => this.user = user,
      error: err => this.errorMessage = err
      });
  }

  getPostsbyId(id: number): void {
    this.userService.getPostsbyId(id).subscribe({
      next: posts => this.posts = posts,
      error: err => this.errorMessage = err
    });
  }


}
