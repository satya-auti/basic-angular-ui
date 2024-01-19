import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'authentication',
        loadChildren: () =>
          import('./authentication/authentication.module').then((e) => e.AuthenticationModule),
      },
      {
        path: 'auth',
        loadChildren: () =>
          import('./layout/layout.module').then((e) => e.LayoutModule),
      },
      // {
      //   path: 'customer',
      //   loadChildren: () =>
      //     import('./customer/customer.module').then((e) => e.CustomerModule),
      // },
      // {
      //   // path: 'error',
      //   // loadChildren: () => import('./error/error.module').then(e => e.ErrorModule)
      // },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
