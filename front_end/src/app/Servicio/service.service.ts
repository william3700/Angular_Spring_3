import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioComponent } from '../Modelo/usuario/usuario.component';
import { url } from 'inspector';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private datoId:string='';

  constructor() { }

  public getDatosId(){
    return this.datoId;
  }

  public newDatosId(m:string){
      return this.datoId=m;
  }
 
  








}
