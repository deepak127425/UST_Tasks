import { Component, OnInit } from '@angular/core';
import { product1, ProductserviceService } from 'src/app/service/productservice.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  user:product1=new product1(0,"","",0,"",0);
  constructor(private stud:ProductserviceService) { }

  ngOnInit() {
  }
  createProduct(): void{
    if(this.user.productid==0 && this.user.productname=="" && this.user.productcategory=="" && this.user.productprice==0 && this.user.available=="" && this.user.productrating==0)
    {
      alert("Field empty");
    }
    else 
    {      
    this.stud.createProduct(this.user)
    .subscribe(data =>{alert("Product created successfully.");});
    }
  }

}
