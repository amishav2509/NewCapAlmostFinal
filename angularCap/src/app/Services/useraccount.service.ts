import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import {map,catchError} from 'rxjs/operators';
import { UserAccount } from '../UserInterface/user-account';
import { FriendRequestInterface } from '../AllInterface/friend-request-interface';
import { FriendList } from '../AllInterface/friend-list';

@Injectable({
  providedIn: 'root'
})
export class UseraccountService {

  constructor(private httpClient:HttpClient) { }

  public getAllProductsDetails():Observable<string>{
   // return this.httpClient.get<Product[]>('http://localhost:3455/onlineshop/allProductDetails').pipe(catchError(this.handleError));
  return null;
  }
  public acceptUserDetails(firstName:string,lastName:string,emailID:string,dob:string,gender:string,password:string):Observable<string>{
    var data={
        "emailID":emailID,
        "firstName":firstName.toUpperCase,
        "lastName":lastName.toUpperCase,
        "password":password,
        "gender":gender.toUpperCase,
        "dob": dob
      }
      console.log(data);
    return this.httpClient.post<string>("http://localhost:1555/acceptUserDetails",data,{}).pipe(catchError(this.handleError));
    
  }
  public getUserAccountDetails(emailID:string):Observable<UserAccount>{
    let params= new HttpParams();
    params=params.set('emailID',emailID);
    return this.httpClient.get<UserAccount>("http://localhost:1555/getUserDetails",{params:params}).pipe(catchError(this.handleError));
  }
  public remove(emailID:string):Observable<string>{
    let params= new HttpParams();
    params=params.set('emailID',emailID);
    return this.httpClient.delete<string>('http://localhost:3455/onlineshop/deleteProductDetails',{params:params}).pipe(catchError(this.handleError));
  }
  public sendFriendRequest(senderEmailID:string,receiverEmailID:string):Observable<string>{
    var friendRequest={
      "senderEmailID":senderEmailID,
      "userAccount":{
        "emailID":receiverEmailID
      }
    }
     console.log(friendRequest);
   return this.httpClient.post<string>("http://localhost:1555/sendFriendRequest",friendRequest,{}).pipe(catchError(this.handleError));
  }
  public getFriendRequest(emailID:string):Observable<FriendRequestInterface[]>{
    let params= new HttpParams();
    params=params.set('emailID',emailID);
    return this.httpClient.get<FriendRequestInterface[]>("http://localhost:1555/getFriendRequests",{params:params}).pipe(catchError(this.handleError));
  }
  
  public acceptFriendRequest(friendEmailID:string,userEmailID:string):Observable<string>{
    var data={
      "friendEmailID":friendEmailID,
      "userAccount":{
        "emailID":userEmailID
      }
    }
    return this.httpClient.post<string>("http://localhost:1555/acceptFriendRequest",data,{}).pipe(catchError(this.handleError));
  }

  public getFriendList(emailID:string):Observable<FriendList[]>{
    let params= new HttpParams();
    params=params.set('emailID',emailID);
    return this.httpClient.get<FriendList[]>("http://localhost:1555/getFriendList",{params:params}).pipe(catchError(this.handleError));
  }

  public changePassword(emailID:string,newPassword:string):Observable<string>{    
     var userAccount={
      "emailID":emailID,
      "password":newPassword
    } 
    console.log(newPassword);
   return this.httpClient.post<string>("http://localhost:1555/changeUserPassword",userAccount,{}).pipe(catchError(this.handleError));
  }

  private handleError(error:any){
    if(error instanceof ErrorEvent){
      console.error('1 An ErrorEvent occurred:',error.error.message);
      return throwError(error.error.message);
    }else if(error instanceof HttpErrorResponse){
      console.error(`2 Backend returned code ${error.status}, body was: ${error.message}`);
      return throwError(` Backend returned code ${error.status}, body was: ${error.message}`);
    }else if(error instanceof TypeError){
      console.error(`3 TypeError has occured ${error.message}, body was ${error.stack}`);
      return throwError(`TypeError has occured ${error.message}, body was ${error.stack}`);
    }
  }
}
