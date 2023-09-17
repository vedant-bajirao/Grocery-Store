import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  // Adding user start
  postUser(data: any) {
    return this.http.post<any>("http://localhost:3000/posts", data)
      .pipe(map((res: any) => {
        return res;
      }))
  }
  // Adding user end


  // get user start
  getUser() {
    return this.http.get<any>("http://localhost:3000/posts")
      .pipe(map((res: any) => {
        return res;
      }))
  }
  // get user end

// update user start
updateUser(id: number, data: any) {
  return this.http.put<any>("http://localhost:3000/posts/" + id, data)
  .pipe(map((res: any) => {
    return res;
  }))
}
// update user end

// delete user start 
deleteUser(id: number) {
  return this.http.delete<any>("http://localhost:3000/posts/" + id)
  .pipe(map((res: any) => {
    return res;
  }))
}
// delete user end

// This is for product/cart start

getProduct(){
    return this.http.get<any>("httpss://fakestoreapi.com/products")
    .pipe(map((res:any)=>{
      return res;

    }))
}

// This is for product/cart end

}


