import { Routes, RouterModule } from '@angular/router'; 
// Importamos nuestros componentes
import { AppComponent } from './app.component';
import { UserFormComponent } from './user/user-form/user-form.component';  
// Definimos las rutas
export const routes: Routes = [
  { path: '', redirectTo: 'log_in', pathMatch: 'full' },
  { path: 'log_in', component: UserFormComponent },
  { path: 'two', component: AppComponent }
];
  
export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(routes);