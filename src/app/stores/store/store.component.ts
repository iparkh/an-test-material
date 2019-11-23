import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { NotificationService } from '../../shared/notification.service';
import { StoreService } from '../../shared/store.service';
@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  constructor(
    private service: StoreService,
    public dialogRef: MatDialogRef<StoreComponent>,
    private notificationService: NotificationService

  ) { }

  ngOnInit() {
    this.service.getStores();
  }

  onSubmit() {
    if (this.service.form.valid) {
      //console.log('this.service.form.get($key)', this.service.form)

      if (!this.service.form.get('$key').value)
        this.service.insert(this.service.form.value);
      else
        this.service.update(this.service.form.value);

      this.service.form.reset();
      // this.service.initializeFormGroup();
      this.notificationService.success(':: Submitted successfully');
      this.onClose();


    }
  }

  onClear() {
    //this.service.form.reset();
    // this.service.initializeFormGroup();
    //this.notificationService.success(':: Submitted successfully');
  }

  onClose() {
    this.service.form.reset();
    // this.service.initializeFormGroup();
    this.dialogRef.close();
  }
}
