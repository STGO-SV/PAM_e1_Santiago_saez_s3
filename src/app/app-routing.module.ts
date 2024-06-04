import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'pizzas',
    loadChildren: () => import('./pizzas/pizzas.module').then(m => m.PizzasPageModule)
  },
  {
    path: 'acompaniamientos',
    loadChildren: () => import('./acompanamientos/acompanamientos.module').then(m => m.AcompanamientosPageModule)
  },
  {
    path: 'postres',
    loadChildren: () => import('./postres/postres.module').then(m => m.PostresPageModule)
  },
  {
    path: 'bebidas',
    loadChildren: () => import('./bebidas/bebidas.module').then(m => m.BebidasPageModule)
  },
  {
    path: 'extras',
    loadChildren: () => import('./extras/extras.module').then(m => m.ExtrasPageModule)
  },
  {
    path: 'mi-pedido',
    loadChildren: () => import('./mi-pedido/mi-pedido.module').then(m => m.MiPedidoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }