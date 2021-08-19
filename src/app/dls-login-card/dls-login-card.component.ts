import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'dls-login-card',
  templateUrl: './dls-login-card.component.html',
  styleUrls: ['./dls-login-card.component.scss'],
})
export class DlsLoginCardComponent implements OnInit {
  username: FormControl = new FormControl();
  password: FormControl = new FormControl();
  form: FormControl = new FormControl();
  loginForm = new FormGroup({
    username: this.username,
    password: this.password,
    form: this.form,
  });
  constructor(private router: Router) {}

  ngOnInit(): void {}

  submitForm() {
    const username = this.username.value;
    const password = this.password.value;

    // Mock the login
    if (username !== 'admin' && password !== 'password') {
      this.loginForm.controls['form'].setErrors({ invalid: true });
    }
    else {
      // clear errrors
      this.loginForm.controls['form'].setErrors(null);
      // navigate to the dashboard
      this.router.navigate(['/success']);
    }

  }
}
