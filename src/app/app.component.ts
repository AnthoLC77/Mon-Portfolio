import { Component, CUSTOM_ELEMENTS_SCHEMA, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ThemeToggleButtonComponent } from './components/theme-toggle-button/theme-toggle-button.component';
import { CommonModule, NgFor } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink, RouterLinkActive, NgFor, ThemeToggleButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppComponent {
  title = 'mon-portfolio';
  customNavbarPosition = '0px';
  isMenuOpen = false;

  constructor() {}

  setCustomNavbarPosition(position: string): void {
    this.customNavbarPosition = position;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }



  @HostListener('document:click', ['$event'])
  onClick(event : MouseEvent) {
  const menu = document.querySelector('.side-menu');
  const menuBtn = document.getElementById('menu-burger');

    if(menu && menuBtn && !menu.contains(event.target as Node) && !menuBtn.contains(event.target as Node) && this.isMenuOpen) {
      this.isMenuOpen = false
    }
  }
}
