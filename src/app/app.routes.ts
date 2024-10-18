import { Routes } from '@angular/router';
import { AuthGuard } from './shared/AuthGuard';
import { MainLayoutComponent } from './shared/layouts/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.routes').then(m => m.authRoutes)
  },
  {
    path: '',
    component: MainLayoutComponent,
    loadChildren: () => import('./features/dashboard/dashboard.routes').then(m => m.authRoutes),
    // canActivate: [AuthGuard] 
  }
];
