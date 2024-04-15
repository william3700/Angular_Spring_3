import { Component,Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ServiceService } from '../../Servicio/service.service';
import { HttpClient } from '@angular/common/http';
import { FormBuilder,FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-registro-usuario',
  standalone: true,
  imports: [RouterLink,FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './registro-usuario.component.html',
  styleUrl: './registro-usuario.component.css'
})
export class RegistroUsuarioComponent {

  formulario:FormGroup=this.fb.group({
    nombre:[],
    apellido:[],
    correo:[],
    contrasenia:[],
    verificarContrasenia:[]
 });


  constructor(private router:Router,private http:HttpClient, private fb:FormBuilder){};

  listarUsuario(){
      this.router.navigate(['ventanaInicio']);
   
  }

  salir(){
    this.router.navigate(['ventanaInicio']);
  }
  
  save(){
      
      console.log(this.formulario);
      this.http.post("http://localhost:8080/guardarActualizar",this.formulario.value).subscribe(()=>{}); 
      this.listarUsuario();

  }

  


}
