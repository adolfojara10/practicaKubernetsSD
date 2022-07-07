import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pagoS } from '../domain/Pago';

@Injectable({
  providedIn: 'root'
})
export class PagoServicioService {

  private pagoURL: string = "";

  constructor(private http: HttpClient) { }

  pagar(pago: pagoS){
    this.pagoURL = 'http://localhost:8080/pago';

    



    return this.http.post<any>(this.pagoURL, pago);
  }
}
