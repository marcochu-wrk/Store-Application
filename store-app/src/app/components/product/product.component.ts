import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../types';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RatingModule, FormsModule, CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
 @Input() product!: Product;

 @Output() productOutput: EventEmitter<Product> = new EventEmitter<Product>();

 ngOnInit(){
  console.log("Product in product component:", this.product);
  console.log("Product in product component Output:", this.productOutput);
  this.productOutput.emit(this.product);
 }
}
