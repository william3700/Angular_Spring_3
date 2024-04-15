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
  selector: 'app-ventana-inicio',
  standalone: true,
  imports: [RouterLink,FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './ventana-inicio.component.html',
  styleUrl: './ventana-inicio.component.css'
})
export class VentanaInicioComponent {

  constructor(private router:Router){}

  moduloRegistro(){
    this.router.navigate(['registroUsuario']);
  }




}
