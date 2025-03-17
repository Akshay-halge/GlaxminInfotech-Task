import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './component/counter/counter.component';
import { ItemlistsComponent } from './component/itemlists/itemlists.component';
import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler';
import { EmicalculatorComponent } from './component/emicalculator/emicalculator.component';
import { NavbarComponent } from './component/navbar/navbar.component';

const routes: Routes = [
  {
    path:'counter',
    component:CounterComponent
  },
  {
    path:'navbar',
    component:NavbarComponent
  },
  {
    path:'itemlists',
    component:ItemlistsComponent
  },
  {
    path:'emicalculator',
    component:EmicalculatorComponent
  },
  {
    path: '',
    redirectTo: 'counter',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
