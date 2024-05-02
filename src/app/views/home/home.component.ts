import { Component } from '@angular/core';
import { PagesLayoutComponent } from '../../layouts/pages-layout/pages-layout.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PagesLayoutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
