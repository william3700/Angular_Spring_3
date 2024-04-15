import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UsuarioComponent } from '../../Modelo/usuario/usuario.component';
import { ServiceService } from '../../Servicio/service.service';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-agregar-usuario',
  standalone: true,
  imports: [RouterLink,FormsModule,CommonModule,HttpClientModule,ReactiveFormsModule],
  templateUrl: './agregar-usuario.component.html',
  styleUrl: './agregar-usuario.component.css'
})

export class AgregarUsuarioComponent {

  formulario:FormGroup=this.fb.group({
    nombre:[],
    apellido:[],
    correo:[],
    contrasenia:[],
    verificarContrasenia:[]
 });


  constructor(private router:Router,private http:HttpClient, private fb:FormBuilder){};

  listarUsuario(){
      this.router.navigate(['administrador']);
   
  }

  save(){
      console.log(this.formulario);
      this.http.post("http://localhost:8080/guardarActualizar",this.formulario.value).subscribe(()=>{}); 
      this.listarUsuario();
  }

  salir(){
    this.router.navigate(['ventanaInicio']);
  }



}
