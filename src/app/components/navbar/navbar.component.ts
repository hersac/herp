import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { MenuOption } from '../../data/menu-option';
import { menuBar } from '../../data/opcionesGlobales';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  @Input() dataUsuario: Object = {};
  opciones: MenuOption[] = menuBar;

  faArrowRightFromBracket = faArrowRightFromBracket;

  constructor() {

  }

}
