import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  toggleTheme() {
    const el = document.documentElement;
    const isDark = el.getAttribute('data-theme') === 'dark';
    el.setAttribute('data-theme', isDark ? 'light' : 'dark');
  }
  
  setLanguage(lang: string) {
    console.log('Language switched to:', lang);
    // implement logic later
  }

}
