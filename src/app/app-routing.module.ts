import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { E404Component } from './pages/e404/e404.component';

const routes: Routes = [

  // Rota padrão → Página inicial → 'home'
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  // Página 'home'
  {
    path: 'home',
    title: 'Pagina Inicial',
    component: HomeComponent
  },

  // Página 'contacts'
  {
    path: 'contacts',
    title: 'Faça contato',
    component: ContactComponent
  },

  // Página 'about'
  {
    path: 'about',
    title: 'Sobre',
    component: AboutComponent
  },

  // Página 'e404'
  {
    path: 'e404',
    title: 'Erro 404',
    component: E404Component
  },

  // Se uma rota não existe, vai para a página 404.
  {
    path: '**',
    redirectTo: 'e404',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
