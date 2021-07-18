import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  productId: number;
  productName: any;
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.productId = this.activatedRoute.snapshot.params['id'];
    this.productName = this.activatedRoute.snapshot.params['name'];
  }
}
