import {Component, OnInit} from '@angular/core';
import {UserService} from '../user/user.service';
import {ActivatedRoute} from '@angular/router';
import {IAlbum, IUser} from '../user/user';

@Component({
  selector: 'app-user-albums',
  templateUrl: './user-albums.component.html'
})
export class UserAlbumsComponent implements OnInit {

  user: IUser;
  albums: IAlbum[];
  private errorMessage;
  constructor(private userService: UserService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {

    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getUser(id);
      this.getAlbumsbyId(id);
    }
  }

  getUser(id: number): void {
    this.userService.getUser(id).subscribe({
      next: user => this.user = user,
      error: err => this.errorMessage = err
    });
  }

  getAlbumsbyId(id: number): void {
    this.userService.getAlbumsbyId(id).subscribe({
      next: albums => this.albums = albums,
      error: err => this.errorMessage = err
    });
  }


}
