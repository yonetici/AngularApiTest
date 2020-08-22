import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {IAlbum, IPhotos, IPost, IUser} from './user';
import {catchError, map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userListUrl = 'https://jsonplaceholder.typicode.com/';
  public sendGetRequest(value) {
    return this.httpClient.get(this.userListUrl + value);
  }

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(this.userListUrl + 'users').pipe(
      tap(veri => console.log('All: ' + JSON.stringify(veri))),
      catchError(this.handleError)
    );
  }

  getUser(id: number): Observable<IUser | undefined> {
    return this.httpClient.get<IUser>(this.userListUrl + 'users/' + id);
/*    return this.getUsers().pipe(
      map((users: IUser[]) => users.find(p => p.id === id))
    );
 */
  }
  getPostsbyId(id: number): Observable<IPost[]> {
    return this.httpClient.get<IPost[]>(this.userListUrl + 'posts?userId=' + id);
  }

  getAlbumsbyId(id: number): Observable<IAlbum[]> {
    return this.httpClient.get<IAlbum[]>(this.userListUrl + 'albums?userId=' + id);
  }

  private handleError(err: HttpErrorResponse ) {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occured: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

}
