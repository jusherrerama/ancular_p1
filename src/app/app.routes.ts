import { Routes, RouterModule } from '@angular/router'; 
// Importamos nuestros componentes
import { AppComponent } from './app.component';
import { UserFormComponent } from './user-form/user-form.component';  
// Definimos las rutas
export const routes: Routes = [
  { path: '', redirectTo: 'one', pathMatch: 'full' },
  { path: 'one', component: UserFormComponent },
  { path: 'two', component: AppComponent }
];
  
export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(routes);