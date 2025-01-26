import { Routes } from '@angular/router';
import { MainUiComponent } from './components/main-ui/main-ui.component';
import { YesComponent } from './components/yes/yes.component';

export const routes: Routes = [
  { path: '', component: MainUiComponent },
  { path: 'yes', component: YesComponent },
];
