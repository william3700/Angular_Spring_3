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
  selector: 'app-editar-usuario',
  standalone: true,
  imports: [RouterLink,FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './editar-usuario.component.html',
  styleUrl: './editar-usuario.component.css'
})

export class EditarUsuarioComponent {
  nombre1:string='';
  apellido1:string='';
  correo1:string='';
  contrasenia1:string='';

  formulario:FormGroup=this.fb.group({
    nombre:[],
    apellido:[],
    correo:[],
    contrasenia:[]
 });


  idBusqueda=this.Servicio.getDatosId();
  lista1: any[]=[];
  variable:string='';
  planets: Array<string> = [];
  constructor(private router:Router, private Servicio:ServiceService, private http:HttpClient, private fb:FormBuilder){};

  ngOnInit(): void{
    this.encontrar();
  }
  
  listarUsuario(){
    this.router.navigate(['administrador']);
  }

  encontrar(){
    this.variable=this.idBusqueda;
    this.http.get("http://localhost:8080/encontrar/"+this.variable).subscribe((respuesta:any)=>{
      this.lista1=respuesta;
    });
    console.log(this.lista1);
    for(let x in this.lista1){
        console.log(x,this.lista1[x]);
        this.planets.push(this.lista1[x]);
        this.nombre1=this.planets[1];
        this.apellido1=this.planets[2];
        this.correo1=this.planets[3];
        this.contrasenia1=this.planets[4];
    }
    this.formulario.setValue({nombre:this.nombre1,apellido:this.apellido1,correo:this.correo1,contrasenia:this.contrasenia1})
  }

  actualizar(){
    this.variable=this.idBusqueda;
    this.http.put("http://localhost:8080/actualizar/"+this.variable,this.formulario.value).subscribe(()=>{ 
    });
    this.router.navigate(['administrador']); 
  }







}
