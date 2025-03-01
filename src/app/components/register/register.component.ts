import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(private _Router:Router){}
  registerForm:FormGroup = new FormGroup({
    name :new FormControl ('',[
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(15),
    ]),
    email:new FormControl('',[Validators.required,Validators.email]),
    phone:new FormControl('',[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]),
   
    

  })
  handleForm():void{
    this._Router.navigate(['/home'])
  }

}
