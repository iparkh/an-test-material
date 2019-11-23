import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(
    private firebase: AngularFireDatabase,
    private datePipe: DatePipe) { }

  itemList: AngularFireList<any>;

  form: FormGroup = new FormGroup({

    $key: new FormControl(null),
    name: new FormControl(''),
    address: new FormControl(''),
    contactpersons: new FormControl(''),
    telephone: new FormControl(''),
    filelist: new FormControl(''),
    sitelist: new FormControl(''),
    youtubelist: new FormControl(''),
    content: new FormControl(''),
    comment: new FormControl('')

  });

  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      name: '',
      address: '',
      contactpersons: '',
      telephone: '',
      filelist: '',
      sitelist: '',
      youtubelist: '',
      content: '',
      comment: ''
    });
  }


  getStores() {
    this.itemList = this.firebase.list('stores');
    return this.itemList.snapshotChanges();
  }



  populateForm(store) {
    this.form.setValue(_.omit(store, 'selectionName'));
  }

  insert(store) {
    this.itemList.push({
      name: store.name,
      address: store.address,
      contactpersons: store.contactpersons,
      telephone: store.telephone,
      filelist: store.filelist,
      sitelist: store.sitelist,
      youtubelist: store.youtubelist,
      content: store.content,
      comment: store.comment
    });
  }

  update(store) {

    this.itemList.update(store.$key,
      {
        name: store.name,
        address: store.address,
        contactpersons: store.contactpersons,
        telephone: store.telephone,
        filelist: store.filelist,
        sitelist: store.sitelist,
        youtubelist: store.youtubelist,
        content: store.content,
        comment: store.comment
      });
  }

  delete($key: string) {
    this.itemList.remove($key);
  }

}
