import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { 
  HomeComponent,
  LoginComponent,
  RegisterComponent
} from './components';

const routes: Routes = [
  { path: '',          component: HomeComponent      },
  { path: 'login',     component: LoginComponent     },
  { path: 'register',  component: RegisterComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
