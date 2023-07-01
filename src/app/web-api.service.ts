import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebApiService {
  //private countryName: string | null = '';
  
  private url = 'https://api.worldbank.org/v2/country';

  constructor(private http: HttpClient) { }

  //test to make sure that service receives data from statsbox
  /*
  public setCountryName(value: string | null) {
    this.countryName = value;
    console.log(value);
  }
  */

  getCountry(countryName: string | null): Observable<any> {
    const fullUrl = `${this.url}/${countryName}?format=json`
    return this.http.get<any>(fullUrl).pipe(
      //tap(data => console.log('All', JSON.stringify(data))),
        //test to make sure that api works
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(()=>errorMessage);
  }
  
}
