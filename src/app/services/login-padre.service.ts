import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginPadreService {
  ruta:string='http://20.226.81.202:8080/security/'+'auth/login/usuario'

  constructor(private http:HttpClient) { }

  login(credenciales:Usuario):Observable<any>{

    return this.http.post(this.ruta,credenciales);
  }
}