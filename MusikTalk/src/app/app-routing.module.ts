// Modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { SearchpageComponent } from './searchpage/searchpage.component';
import { SongdetailpageComponent } from './songdetailpage/songdetailpage.component';
import { LoginCompComponent } from './login-comp/login-comp.component';
import { AuthGuard } from './core/auth.guard';
import { AddSongFormComponent } from './add-song-form/add-song-form.component';

const routes: Routes = [
  {
    path: 'search',
    component: SearchpageComponent
  },
  {
    path: 'song/:id',
    component: SongdetailpageComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'add-song',
    component: AddSongFormComponent
  },
  {
    // Default route
    path: '',
    redirectTo: '/search',
    pathMatch: 'full'
  },
  {
     path: 'login',
     component: LoginCompComponent
     //,canActivate: [AuthGuard] for comps which require auth
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
