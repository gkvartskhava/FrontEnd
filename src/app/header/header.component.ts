import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  toggleTheme() {
    const root = document.documentElement;
    const isDark = root.getAttribute('data-theme') === 'dark';
    const newTheme = isDark ? 'light' : 'dark';
    root.setAttribute('data-theme', newTheme);
  
    const icon = document.querySelector('.theme-icon') as HTMLElement;
    if (icon) {
      icon.classList.remove('fa-moon', 'fa-sun');
      icon.classList.add(newTheme === 'dark' ? 'fa-sun' : 'fa-moon');
    }
  }
  
  
  
  setLanguage(lang: string) {
    console.log('Language switched to:', lang);
    // implement logic later
  }

}
