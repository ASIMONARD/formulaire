import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm = new FormGroup({
    name: new FormControl(),
    password: new FormControl()
  });

  submit() {
    console.log('Ok');
    console.log(this.loginForm.value);
    this.loginForm.reset()
  }
}
