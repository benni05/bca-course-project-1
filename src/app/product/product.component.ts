import { FeedService } from './../feed.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Item } from '../item.interface';
import { ActivatedRoute, Params, Data } from '@angular/router';
import { tap } from 'rxjs/operators';
import { Observable, timer, Subscription } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {


  item: Item;

  sub: Subscription;

  constructor(
    private feedService: FeedService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

    // this.sub = this.route.params.subscribe((params: Params) => {
    //   this.feedService.getProductById(params.id).subscribe(
    //     (item: Item) => this.item = item
    //   );
    // });

    this.route.data.subscribe((data: Data) => {
      this.item = data.product;
    });

    this.route.queryParams.subscribe(console.log);


  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
