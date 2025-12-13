import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-error-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './error-component.component.html',
  styleUrl: './error-component.component.scss'
})
export class ErrorComponentComponent {
  @Input() title: string = 'Error';
  @Input() message: string = 'Something went wrong. Please try again.';
  @Input() type: 'error' | 'warning' | 'info' = 'error';
  @Input() showRetry: boolean = true;
  @Input() retryText: string = 'Try Again';

  onRetry() {
    window.location.reload();
  }
}
