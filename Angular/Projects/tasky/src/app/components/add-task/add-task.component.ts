import {Component, inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-task',
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss'
})
export class AddTaskComponent implements OnInit{
  private fb = inject(FormBuilder)
  public  submitForm!: FormGroup

  ngOnInit() {
    this.initializeForm()
  }

  private initializeForm(){
    this.submitForm = this.fb.group({
      title: ['', [Validators.required]],
      category: ['', [Validators.required]],
      description: ['', [Validators.required]],
    })
  }

  protected onSubmitForm(){
    const FormDetails = this.submitForm.value;
    this.submitForm.reset()
    console.log(FormDetails);
  }
}
