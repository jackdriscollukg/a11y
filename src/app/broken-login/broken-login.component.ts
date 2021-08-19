import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-broken-login',
  templateUrl: './broken-login.component.html',
  styleUrls: ['./broken-login.component.scss'],
})
export class BrokenLoginComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  handleKeyDown(event) {
    // if key is enter
    if (event.keyCode === 13) {
      // login
      this.submit(event);
    }
  }

  submit(event) {
    let usernameField = document.getElementById('username') as HTMLInputElement;
    let passwordField = document.getElementById('password') as HTMLInputElement;
    // get login values from inputs
    let username = usernameField?.value;
    let password = passwordField?.value;
    // simulate login
    if (username === 'admin' && password === 'admin') {
      // login successful
      window.location.href = '/success';
      return;
    }
    // login failed
    usernameField.classList.add('error');
    passwordField.classList.add('error');

    // blur focus
    usernameField.blur();
    passwordField.blur();

    event.target.blur();
  }

  checkboxClick(event) {
    event.target.classList.toggle('checked');
  }
}
