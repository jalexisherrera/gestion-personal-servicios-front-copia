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

  update(id: number, solicitud: any){
    return this.http.put('http://localhost:8080/api/solicitudes/' + id, solicitud);

  }

  delete(id: number){
    return this.http.delete('http://localhost:8080/api/solicitudes' + id);

  }
}
