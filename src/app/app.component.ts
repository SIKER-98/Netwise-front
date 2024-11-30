import {Component} from '@angular/core';
import {FactListComponent} from './components';

@Component({
  selector: 'app-root',
  imports: [FactListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Frontend';
}
