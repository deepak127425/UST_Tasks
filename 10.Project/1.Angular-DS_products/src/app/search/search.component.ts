import { Component, OnInit } from '@angular/core';
import { product1, ProductserviceService } from 'src/app/service/productservice.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  products:any;
  productid=String;
  i:product1=new product1(0,"","",0,"",0);
  details: boolean=false;
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
sDetails(): void{
  
  {this.details=!this.details;}


  
}
}
