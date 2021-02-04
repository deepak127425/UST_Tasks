import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
export class product1
{
  constructor(public productid:number,public productname:string,public productcategory:string,public productprice:number,public available:string,public productrating:number)
  {

  }
}
@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {
  authInfo$: any;


  constructor(private httpClient:HttpClient) { 
    
  }
  getProduct()
  {
    console.log("test call")
    return this.httpClient.get<product1>("http://localhost:8102/Products");
  }
  public createProduct(product){
    return this.httpClient.post<product1>("http://localhost:8102/Products",product);
  }
  
  public deleteProduct(product)
  {
    return this.httpClient.delete<product1>("http://localhost:8102/Products"+"/"+product.productid);
  }
  public updateProduct(product)
  {
    return this.httpClient.put<product1>("http://localhost:8102/Products/updateProduct",product);
  }

}

