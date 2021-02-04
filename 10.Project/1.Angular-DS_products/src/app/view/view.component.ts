import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from 'src/app/service/productservice.service';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
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



}
