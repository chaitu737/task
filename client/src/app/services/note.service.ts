import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { HttpClient,HttpHeaders,HttpErrorResponse } from "@angular/common/http";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NoteService {
  domain ='http://localhost:3000/api/v1/notes';
  public notes:Array<any>


  constructor(
    private http:HttpClient
  ) { 
    this.notes=[];
  }


  getAllNotes(){
    return this.notes
    
  }


  createNote(data){
    return this.http.post(this.domain+ '/create', data).map(res=>res).subscribe((data:any)=>{
      console.log(data);
      this.notes.push(data.newnote);
      console.log(this.notes);

    },(error)=>{
      console.log(error);
    });
  }

  getNotes(){
    return this.http.get(this.domain + '/all').map(res=>res);

  }
}
