import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicGridComponent } from './basic-grid/basic-grid.component';
// import { SigninComponent } from './signin/signin.component';
// import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
    {
        path: '',
        children: [
          {
            path: 'basic-grid',
            component: BasicGridComponent
          },
        //   {
        //     path: 'signup',
        //     component: SignupComponent
        //   }
        
        ],
      },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgGridLearningRoutingModule { }
