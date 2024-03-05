import { Component, Injector } from '@angular/core';
import { SharedModule } from './shared.module';
import { registerSyncGridComponent } from './formio custom components/sync grid/register';
import { registerEmpTableComponent } from './formio custom components/emp table/register';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sync-grid-old';
  constructor(injector:Injector){
    registerSyncGridComponent(injector);
    registerEmpTableComponent(injector);
  }
}
