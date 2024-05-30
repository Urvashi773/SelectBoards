import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'studentRegistration',
    pathMatch:'full'

  },
  {
    path:'studentRegistration',
    component:StudentRegistrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
