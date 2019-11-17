import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { NoteService } from 'src/app/services/note.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from "@angular/router";




@Component({
  selector: 'app-viewnote',
  templateUrl: './viewnote.component.html',
  styleUrls: ['./viewnote.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('true', style({})),
      state('false', style({})),
      transition('void => false', [
        style({ transform: 'translateY(-100%)' }),
        animate('300ms ease-in', style({ transform: 'translateY(0%)' })),
      ]),
      transition('false => true', [
        animate('200ms ease-in', style({ transform: 'translateY(-100%)' })),
      ]),
    ]),
  ],
})
export class ViewnoteComponent implements OnInit {
 notes;
 private subscription: Subscription;
 private params:any;
 private notesSubscription: Subscription;


  constructor(
    private noteService:NoteService,
    private route:ActivatedRoute
  ) {
      this.notes =[];   
   }

  ngOnInit() { 
    this.subscription =Observable
    .combineLatest(this.route.data, this.route.params)
    .subscribe(([data,params])=>{
      this.notes=this.noteService.getAllNotes();
      console.log(this.notes);
      this.params = params;
      console.log(this.params);
    })
  
  
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.notesSubscription.unsubscribe();
  }

}
