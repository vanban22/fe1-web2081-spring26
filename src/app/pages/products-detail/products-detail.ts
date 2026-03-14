import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-detail',
  imports: [],
  templateUrl: './products-detail.html',
  styleUrl: './products-detail.css',
})
export class ProductsDetail {
  slug: string | null = null
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.slug = this.route.snapshot.paramMap.get('slug') || '';
  }
}
