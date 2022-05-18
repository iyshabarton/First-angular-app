import { Component, Input, OnInit } from '@angular/core';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(
    public activeModal: NgbActiveModal,
    private modalService: NgbModal
    ) { }
    open() {
      const modalRef = this.modalService.open(ModalComponent);
      modalRef.componentInstance.name = 'World';
    }

  ngOnInit(): void {
  }

}


