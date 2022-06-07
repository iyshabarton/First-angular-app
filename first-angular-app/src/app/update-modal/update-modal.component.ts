import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../products/product';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

@Component({
  selector: 'app-update-modal',
  templateUrl: './update-modal.component.html',
  styleUrls: ['./update-modal.component.css'],
})
export class UpdateModalComponent implements OnInit {
  product: Product | undefined;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    public activeModal: NgbActiveModal
  ) {}

  ngOnInit(): void {}

  getProduct(product: Product): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService
      .getProduct(id)
      .subscribe((product) => (this.product = product));
    console.log(product);
  }
  save(): void {
    this.activeModal.close(this.updateForm.value);
    if (this.product) {
      this.productService.updateProduct(this.product).subscribe();
    }
  }
}
