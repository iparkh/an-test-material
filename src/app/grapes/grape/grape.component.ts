import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

import { NotificationService } from '../../shared/notification.service';
// import { DepartmentService } from '../../shared/department.service';
import { GrapeService } from '../../shared/grape.service';


@Component({
  selector: 'app-grape',
  templateUrl: './grape.component.html',
  styleUrls: ['./grape.component.scss']
})
export class GrapeComponent implements OnInit {

  constructor(
    private service: GrapeService,
    private notificationService: NotificationService,
    public dialogRef: MatDialogRef<GrapeComponent>
  ) { }



  ngOnInit() {
    this.service.getGrapes();
  }

  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.notificationService.success(':: Submitted successfully');
  }
  onSubmitTest() {
    console.log('this.service.form.get($key)', this.service.form)
    if (!this.service.form.get('$key').value) {
      console.log('insert')
      this.service.insertGrape(this.service.form.value);
    } else {
      console.log('update')
      this.service.updateGrape(this.service.form.value);
    }
  }
  onSubmit() {
    if (this.service.form.valid) {
      console.log('this.service.form.get($key)', this.service.form)

      if (!this.service.form.get('$key').value)
        this.service.insertGrape(this.service.form.value);
      else
        this.service.updateGrape(this.service.form.value);

      this.service.form.reset();
      this.service.initializeFormGroup();
      this.notificationService.success(':: Submitted successfully');
      this.onClose();


    }
  }

  onClose() {
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.dialogRef.close();
  }

}
