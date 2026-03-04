import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../shared/models/product';
import { ShopService } from '../../../core/services/shop.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'; // needed for <input matInput>
import { MatSelectModule } from '@angular/material/select'; // needed for <mat-select>
import { MatDividerModule } from '@angular/material/divider';
import { CurrencyPipe } from '@angular/common';


@Component({
  selector: 'app-product-details',
  imports: [MatIconModule, MatButtonModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatDividerModule, CurrencyPipe],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent implements OnInit {
  private shopService = inject(ShopService);
  private activatedRoute = inject(ActivatedRoute);
  product?: Product;

  ngOnInit(): void {
    this.loadProduct()
  }

  loadProduct(){
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if(!id) return;
    this.shopService.getProduct(+id).subscribe({
      next: product => this.product = product,
      error: error => console.log(error)
    })
  }
}
