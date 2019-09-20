import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponentComponent} from './page-not-found-component/page-not-found-component.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductEditComponent } from './product-edit/product-edit.component';


const routes: Routes = [
  {
    path : 'pets',
    component : ProductListComponent
  },
  {
    path : 'pets/new',
    component : ProductCreateComponent
  },
  {
    path : 'pets/:id',
    component : HomeComponent
  },
  {
    path : 'pets/:id/edit',
    component : ProductEditComponent
  },
  {
    path : "",
    pathMatch: "full",
    redirectTo: "/pets"
  },
  {
    path: "**",
    component: PageNotFoundComponentComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
