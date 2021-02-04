import { Component, OnInit } from '@angular/core';
import { product1, ProductserviceService } from 'src/app/service/productservice.service';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
products:any;
user:product1=new product1(0,"","",0,"",0);

isUpdate:boolean = false;
  constructor(private stud:ProductserviceService){ }

  ngOnInit() {
    this.stud.getProduct().subscribe(response=>this.handle(response),);
  }
  handle(response)
  {
    this.products=response;
  }
  updateProduct(product:product1):void{
    this.user = product;
this.isUpdate = true;    
  };
  updateSelectedProduct(edited:product1):void{
   this.stud.updateProduct(edited).subscribe(data=>
    {this.products= data})
    this.isUpdate = false;
    this.stud.updateProduct(edited).subscribe(data=>{alert("Product updated successfully.");})
    

  };
}
