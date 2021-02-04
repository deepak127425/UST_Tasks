import { Component, OnInit } from '@angular/core';
import { product1, ProductserviceService } from 'src/app/service/productservice.service';


@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  products:any;
  constructor(private stud:ProductserviceService) { }

  ngOnInit() {
    this.stud.getProduct().subscribe(
      response=>this.handle(response),
    );
  }
  handle(response)
{
  this.products=response;
}
deleteProduct(product: product1): void 
{
  this.stud.deleteProduct(product).subscribe( data => {this.products = this.products.filter(u => u!== product);})
  this.stud.deleteProduct(product).subscribe(data => {alert("Product deleted successfully.");})
};


}
