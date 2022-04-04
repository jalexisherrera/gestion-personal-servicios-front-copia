import { Component, OnInit } from '@angular/core';
import { SolicitudService } from '../solicitud.service';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {

  solicitud: any[] = [];

  constructor(
    private solicitudServices: SolicitudService
  ) { }

  ngOnInit(): void {
    this.solicitudServices.getAll()
    .subscribe((solicitud: any) => {
      console.log('solicitud', solicitud);
      this.solicitud = solicitud._embedded.solicitudes;
    })

  }

}
