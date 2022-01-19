import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsDataBindingComponent } from './components-data-binding/components-data-binding.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { RecipeComponent } from './recipe/recipe.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const routes: Routes = [
  {path: 'reactive-form', component:ReactiveFormComponent},
  {path: 'recepie', component:RecipeComponent},
  {path: 'shopping-list', component:ShoppingListComponent},
  {path: 'componenets-data-binding', component:ComponentsDataBindingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
