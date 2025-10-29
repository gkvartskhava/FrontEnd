import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-error-component',
  imports: [RouterLink],
  templateUrl: './error-component.component.html',
  styleUrl: './error-component.component.scss'
})
export class ErrorComponentComponent {
  errorCode = 404;
  errorMessage = 'this page not found';
}
