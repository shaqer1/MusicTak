// Modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { SearchpageComponent } from './searchpage/searchpage.component';
import { SongdetailpageComponent } from './songdetailpage/songdetailpage.component';


const routes: Routes = [
  {
    path: 'search',
    component: SearchpageComponent
  },
  {
    path: 'song/:id',
    component: SongdetailpageComponent
  },
  {
    // Default route
    path: '',
    redirectTo: '/search',
    pathMatch: 'full'
  },
  {
    // Wildcard route
    // TODO: Add 404 page
    path: '**',
    redirectTo: '/search'
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
