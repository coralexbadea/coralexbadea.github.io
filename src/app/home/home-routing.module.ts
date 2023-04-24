import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES_CONST } from '../shared/constants/routes';
import { HomeComponent } from './home.component';
import { WriteCodeComponent } from './pages/write-code/write-code.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: ROUTES_CONST.writeCodePage,
        component: WriteCodeComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
