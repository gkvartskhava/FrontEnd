import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-error-component',
  standalone: true,
  imports: [],
  templateUrl: './error-component.component.html',
  styleUrl: './error-component.component.scss'
})
export class ErrorComponentComponent {
  errorCode = 404;
  errorMessage = 'this page not found';

  goHome(){

  }
}
