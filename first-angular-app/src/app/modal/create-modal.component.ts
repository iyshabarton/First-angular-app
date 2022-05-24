import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-modal',
  templateUrl: './create-modal.component.html',
  styleUrls: ['./create-modal.component.css'],
})
export class CreateModalComponent implements OnInit {
  //Created a Form called profileForm
  profileForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    imageUrl: new FormControl(''),
    price: new FormControl(''),
  });
  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {}
  save(): void {
    this.activeModal.close(this.profileForm.value);
  }
}
// putting the data into a form, this form is expecting to recieve data from the user
//the fucntion save will save all the new data into their correct form holders
