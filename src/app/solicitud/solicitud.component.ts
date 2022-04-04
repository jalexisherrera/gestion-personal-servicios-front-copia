import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SolicitudService } from '../solicitud.service';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {

  solicitud: any[] = [];
  formulario: FormGroup = this.fb.group({
    descripcion: [],
    estado: [false]
  });
  solicitudEnEdicion: any;

  constructor(
    private solicitudServices: SolicitudService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.getAll();
    
    }

  getAll(){
    this.solicitudServices.getAll()
    .subscribe((solicitud: any) => {
      console.log('solicitud', solicitud);
      this.solicitud = solicitud._embedded.solicitudes;
    })
  }

  save(){
    const values = this.formulario.value;

    console.log('values', values);

    let request;

    if(this.solicitudEnEdicion){
      
      request = this.solicitudServices.update(this.solicitudEnEdicion._links.self.href, values)

    }else{
      
      request = this.solicitudServices.create(values);

    }

    request
      .subscribe({
        next: () => {
          this.getAll();
          this.solicitudEnEdicion = null;
          this.formulario.setValue({
            descripcion: '',
            estado: false
          })
        },
        error: () => {

        }
        
      })

    
  }

  editar(solicitud: any){
    this.solicitudEnEdicion = solicitud;

    this.formulario.setValue({
      descripcion: solicitud.descripcion,
      estado: solicitud.estado
    })
  }

  eliminar(solicitud: any){
    const ok = confirm('¿Estás seguro de eliminar esta tarea?');
    if(ok){
      this.solicitudServices.delete(solicitud._links.self.href)
      .subscribe(() =>{
        this.getAll();
      });
    }

  }

}
