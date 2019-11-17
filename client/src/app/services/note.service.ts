import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { HttpClient,HttpHeaders,HttpErrorResponse } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class NoteService {
  domain ='http://localhost:3000/api/v1/notes';


  constructor(
    private http:HttpClient
  ) { }


  createNote(data){
    return this.http.post(this.domain+ '/create', data).map(res=>res);
  }

  getNotes(){
    return this.http.get(this.domain + '/all').map(res=>res);

  }
}
