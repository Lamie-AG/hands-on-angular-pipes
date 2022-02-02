import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-pipes';
  text = "Hello World! This is a string.";
  money = 1000000;
  christmas = new Date(2022, 11, 24); // watch out! the month parameter starts at zero. thus we have an offset of -1
  secret = "SecretMessage";
}
