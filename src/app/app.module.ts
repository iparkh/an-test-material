import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { DatePipe } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeService } from './shared/employee.service';
import { EmployeeComponent } from './employees/employee/employee.component';
import { environment } from '../environments/environment';
import { DepartmentService } from './shared/department.service';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { GrapesComponent } from './grapes/grapes.component';
import { GrapeComponent } from './grapes/grape/grape.component';
import { GrapeListComponent } from './grapes/grape-list/grape-list.component';

import { HttpClientModule } from '@angular/common/http';
import { StoresComponent } from './stores/stores.component';
import { StoreComponent } from './stores/store/store.component';
import { StoreListComponent } from './stores/store-list/store-list.component';
import { BasketComponent } from './basket/basket.component';
import { UploadComponent } from './upload/upload.component';
import { PriceComponent } from './price/price.component';
import { PriceListComponent } from './price/price-list/price-list.component';
import { BacketGoodComponent } from './basket/backet-good/backet-good.component';
import { BacketGoodListComponent } from './basket/backet-good-list/backet-good-list.component';
import { ImagesComponent } from './images/images.component';
import { ImageListComponent } from './images/image-list/image-list.component';
import { ImageComponent } from './images/image/image.component';
import { FormUploadComponent } from './upload/form-upload/form-upload.component';
import { ListUploadComponent } from './upload/list-upload/list-upload.component';
import { DetailsUploadComponent } from './upload/details-upload/details-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeComponent,
    EmployeeListComponent,
    GrapesComponent,
    GrapeComponent,
    GrapeListComponent,
    StoresComponent,
    StoreComponent,
    StoreListComponent,
    BasketComponent,
    UploadComponent,
    ImageComponent,
    PriceComponent,
    PriceListComponent,
    BacketGoodComponent,
    BacketGoodListComponent,
    ImagesComponent,
    ImageListComponent,
    FormUploadComponent,
    ListUploadComponent,
    DetailsUploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FormsModule,
    HttpClientModule
  ],
  providers: [
    EmployeeService,
    DepartmentService,
    DatePipe
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    EmployeeComponent,
    GrapeComponent,
    StoreComponent
  ]
})
export class AppModule { }
