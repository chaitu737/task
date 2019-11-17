import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from "@angular/forms";
import { FormArray } from "@angular/forms";
import { NoteService } from '../services/note.service';

export function toFormData<T>(formValue:T){
  const fd = new FormData();
for(const key of Object.keys(formValue)){
  
  const value = formValue[key];


  fd.append(key, value);
}
return fd;

}

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  show: boolean = false;
  selectedFile;

  noteForm = this.fb.group({
    title: ['', Validators.required],
    body: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private noteService:NoteService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    let data={
      title:this.noteForm.value['title'],
      post:this.noteForm.value['body']
    }
  this.noteService.createNote(toFormData(data)).subscribe(response=>{
    console.log(response);
  })
    console.warn(this.noteForm.value);

    this.addNote(this.noteForm.value['title'], this.noteForm.value['body']);
  }

  onFileSelected(event){
    if (event.target.files && event.target.files.length) {
      const [selectedFile] = event.target.files;
      this.selectedFile = selectedFile;
      }
  }
  addNote(title, body) {
    // const randomId: number = Math.trunc(Math.random() * 10000000000);
    // this.store.dispatch(new NoteActions.AddNote({ id: randomId, title, body }));
    // this.show = false;
    // this.noteForm.reset();
  }

}
