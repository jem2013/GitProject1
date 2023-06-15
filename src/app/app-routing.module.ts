import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'jfirst',
    loadChildren: () => import('./jfirst/jfirst.module').then( m => m.JfirstPageModule)
  },
  {
    path: 'nehomepage',
    loadChildren: () => import('./nehomepage/nehomepage.module').then( m => m.NEHomepagePageModule)
  },
  {
    path: 'Lincoln',
    loadChildren: () => import('./lincoln/lincoln.module').then( m => m.LincolnPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
