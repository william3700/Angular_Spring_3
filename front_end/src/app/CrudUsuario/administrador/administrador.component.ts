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
  selector: 'app-administrador',
  standalone: true,
  imports: [RouterLink,FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './administrador.component.html',
  styleUrl: './administrador.component.css'
})
export class AdministradorComponent {

constructor(private router:Router){};

agregarUsu(){
  this.router.navigate(['listarUsuario']);
}  

registrarUsu(){
  this.router.navigate(['agregarUsuario']);
}

salir(){
  this.router.navigate(['ventanaInicio']);
}



}
