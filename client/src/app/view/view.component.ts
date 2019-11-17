import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from "@angular/forms";
import { FormArray } from "@angular/forms";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  show: boolean = false;

  noteForm = this.fb.group({
    title: ['', Validators.required],
    body: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    console.warn(this.noteForm.value);
    // this.addNote(this.noteForm.value['title'], this.noteForm.value['body']);
  }

  addNote(title, body) {
    // const randomId: number = Math.trunc(Math.random() * 10000000000);
    // this.store.dispatch(new NoteActions.AddNote({ id: randomId, title, body }));
    // this.show = false;
    // this.noteForm.reset();
  }

}
