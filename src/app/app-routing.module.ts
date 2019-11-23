import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GrapeListComponent } from '../app/grapes/grape-list/grape-list.component';
import { StoreListComponent } from '../app/stores/store-list/store-list.component';
import { ImagesComponent } from './images/images.component';
import { ImageComponent } from './images/image/image.component';
import { ImageListComponent } from './images/image-list/image-list.component';


const routes: Routes = [
  { path: '', redirectTo: 'image/upload', pathMatch: 'full' },
  { path: 'grapes', component: GrapeListComponent },
  { path: 'stores', component: StoreListComponent },
  {
    path: 'image', component: ImagesComponent, children: [
      { path: 'upload', component: ImageComponent },
      { path: 'list', component: ImageListComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
