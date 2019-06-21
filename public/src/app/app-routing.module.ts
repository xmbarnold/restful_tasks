import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {path: '', component: AppComponent, children: [
    {path: 'details', component: DetailsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
