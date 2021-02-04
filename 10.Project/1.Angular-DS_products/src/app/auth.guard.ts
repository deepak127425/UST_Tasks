// import { Injectable } from "@angular/core";
// import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
// import { Observable } from "rxjs";
// import { ProductserviceService } from "./productservice.service";

// @Injectable()
// export class AuthGuard implements  CanActivate{

//     constructor(private authService:ProductserviceService, private route:Router){
        
//     }
//     canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean > {

//         return this.authService.authInfo$.map((authInfo: { login: () => any; })  => authInfo.login())
//         .take(1).do((allowed: any) => {
//             if(!allowed){
//                 this.route.navigate(['/login']);
//             }
//         });
//     }
    
// }