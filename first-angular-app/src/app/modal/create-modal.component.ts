import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-modal',
  templateUrl: './create-modal.component.html',
  styleUrls: ['./create-modal.component.css'],
})
export class CreateModalComponent implements OnInit {
  profileForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    imageUrl: new FormControl(''),
    price: new FormControl(''),
  });
  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {}
  save(
    name: string,
    description: string,
    imageUrl: string,
    price: string
  ): void {
    this.activeModal.close(name);
    console.warn(this.profileForm.value);
  }
  private hello(
    name: string,
    description: string,
    imageUrl: string,
    price: string
  ): string {
    return `hello ${name}, ${description}, ${imageUrl}, ${price}`;
  }
}
