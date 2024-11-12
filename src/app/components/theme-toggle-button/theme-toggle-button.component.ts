import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
@Component({
  selector: 'app-theme-toggle-button',
  standalone: true,
  imports: [],
  templateUrl: './theme-toggle-button.component.html',
  styleUrl: './theme-toggle-button.component.css'
})
export class ThemeToggleButtonComponent {

  isDarkMode: boolean = true;
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.applyTheme();
    }
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    if (isPlatformBrowser(this.platformId)) {
      this.applyTheme();
    }
  }

  applyTheme() {
    if (isPlatformBrowser(this.platformId)) {
      if (this.isDarkMode) {
        document.body.classList.add('dark-theme');
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark');
      } else {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
        document.body.classList.remove('dark');
      }
    }
  }
}
