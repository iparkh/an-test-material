import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as _ from 'lodash';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class GrapeService {

  constructor(
    private firebase: AngularFireDatabase,
    private datePipe: DatePipe) { }

  grapeList: AngularFireList<any>;

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    name: new FormControl('', Validators.required),
    image: new FormControl(''),
    selection: new FormControl('', Validators.required),
    daysreach: new FormControl('', Validators.required),
    weighbunch: new FormControl('', Validators.required),
    weighberry: new FormControl('', [Validators.required]),
    colorberry: new FormControl('', [Validators.required]),
    formberry: new FormControl('', [Validators.required]),
    frost: new FormControl(''),
    taste: new FormControl(''),
    urls: new FormControl(''),
    comment: new FormControl('')
  });

  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      name: '',
      image: '',
      selection: '',
      daysreach: '0',
      weighbunch: '0',
      weighberry: '0',
      colorberry: '',
      formberry: '',
      frost: '0',
      taste: '',
      urls: '',
      comment: '',
    });
  }


  getGrapes() {
    this.grapeList = this.firebase.list('grapes');
    return this.grapeList.snapshotChanges();
  }

  insertGrape(grape) {
    this.grapeList.push({
      name: grape.name,
      image: grape.image,
      selection: grape.selection,
      daysreach: grape.daysreach,
      weighbunch: grape.weighbunch,
      weighberry: grape.weighberry,
      colorberry: grape.colorberry,
      formberry: grape.formberry,
      frost: grape.frost,
      taste: grape.taste,
      urls: grape.urls,
      comment: grape.comment
    });
  }

  updateGrape(grape) {

    this.grapeList.update(grape.$key,
      {
        name: grape.variety,
        image: grape.image,
        selection: grape.selection,
        daysreach: grape.daysreach,
        weighbunch: grape.weighbunch,
        weighberry: grape.weighberry,
        colorberry: grape.colorberry,
        formberry: grape.formberry,
        frost: grape.frost,
        taste: grape.taste,
        urls: grape.urls,
        comment: grape.comment
      });
  }

  deleteGrape($key: string) {
    this.grapeList.remove($key);
  }

  populateForm(grape) {
    this.form.setValue(_.omit(grape, 'selectionName'));
  }
}
