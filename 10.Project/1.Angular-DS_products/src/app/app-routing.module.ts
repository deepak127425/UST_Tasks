import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CategoryComponent } from './category/category.component';
import { CreateComponent } from './create/create.component';
import { ViewComponent } from './view/view.component';
import { DeleteComponent } from './delete/delete.component';
import { SearchComponent } from './search/search.component';
import { UpdateComponent } from './update/update.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGaurdService } from './service/auth-gaurd.service';



const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {path : '', component : LoginComponent},
  { path: '',redirectTo: '/login',pathMatch: 'full'},
  { path: '',redirectTo: '/category',pathMatch: 'full', canActivate:[AuthGaurdService]},
  { path: 'category', component: CategoryComponent , canActivate:[AuthGaurdService] },
  { path: 'create', component: CreateComponent, canActivate:[AuthGaurdService] },
  { path: 'view', component: ViewComponent, canActivate:[AuthGaurdService] },
  { path: 'delete', component: DeleteComponent, canActivate:[AuthGaurdService]},
  { path: 'search', component: SearchComponent, canActivate:[AuthGaurdService] },
  { path: 'update', component: UpdateComponent, canActivate:[AuthGaurdService] },
  { path: 'logout', component: LogoutComponent, canActivate:[AuthGaurdService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
