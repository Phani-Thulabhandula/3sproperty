import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomLayoutComponent } from './custom-layout/custom-layout.component';

const routes: Routes = [
  {
    path: '',
    component: CustomLayoutComponent,
    children: [
      { path: '', loadChildren: () => import('./board/board.module').then(m => m.BoardModule) },
      { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
      { path: 'chat', loadChildren: () => import('./chat/chat.module').then(m => m.ChatModule) },
    ]
  },
  {
    path: '**',
    component: CustomLayoutComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // preloadingStrategy: PreloadAllModules,
    scrollPositionRestoration: 'enabled',
    relativeLinkResolution: 'corrected',
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
