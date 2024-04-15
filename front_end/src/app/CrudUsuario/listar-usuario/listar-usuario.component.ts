import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ServiceService } from '../../Servicio/service.service';
import { UsuarioComponent } from '../../Modelo/usuario/usuario.component';

@Component({
  selector: 'app-listar-usuario',
  standalone: true,
  imports: [RouterLink,FormsModule,CommonModule,HttpClientModule],
  templateUrl: './listar-usuario.component.html',
  styleUrl: './listar-usuario.component.css'
})
export class ListarUsuarioComponent {

  descripcion: any[]=[];
  constructor(private router:Router, private http:HttpClient, private Servicio:ServiceService){};

  ngOnInit(): void{
    this.http.get("http://localhost:8080/listaPersonas").subscribe((respuesta:any)=>{
      this.descripcion=respuesta;
    });
  }

  listarUsuario(){
    this.router.navigate(['agregarUsuario']);
  }

  editarUsuario(id:string){
    this.Servicio.newDatosId(id);
    this.router.navigate(['editarUsuario']);
  }

 borrarUsuario(id:string){
      this.http.delete("http://localhost:8080/eliminarUsuario/"+id).subscribe(()=>{});
      
     this.http.get("http://localhost:8080/listaPersonas").subscribe((respuesta:any)=>{
        this.descripcion=respuesta;
      }); 
      this.router.navigate(['listarUsuario']); 
  }

   regresar(){
    this.router.navigate(['administrador']);
   }



}
