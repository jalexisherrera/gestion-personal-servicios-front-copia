import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  constructor(
    private http: HttpClient
  ) { }

  getAll(){
    return this.http.get('http://localhost:8080/api/solicitudes');

  }

  create(solicitud: any){
    return this.http.post('http://localhost:8080/api/solicitudes', solicitud);

  }

  update(href: string, solicitud: any){
    return this.http.put(href, solicitud);

  }

  delete(href: string){
    return this.http.delete(href);

  }
}
