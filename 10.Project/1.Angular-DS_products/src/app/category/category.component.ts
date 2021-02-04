import { Component, OnInit } from '@angular/core';
import { product1, ProductserviceService } from 'src/app/service/productservice.service';
import { AuthenticationService } from '../service/authentication.service';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
products:any
  constructor(private stud:ProductserviceService,private loginService:AuthenticationService) { }

  ngOnInit() {
    this.stud.getProduct().subscribe(
      response=>this.handle(response),
    );
  }
  handle(response)
{
  this.products=response;
}
// deleteProduct(product: product1): void {
//   this.stud.deleteProduct(product)
//     .subscribe( data => {
//       this.products = this.products.filter(u => u!== product);
//     })
// };

}
