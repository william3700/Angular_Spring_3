import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsuarioComponent } from './Modelo/usuario/usuario.component';
import { AgregarUsuarioComponent } from './CrudUsuario/agregar-usuario/agregar-usuario.component';
import { EditarUsuarioComponent } from './CrudUsuario/editar-usuario/editar-usuario.component';
import { ListarUsuarioComponent } from './CrudUsuario/listar-usuario/listar-usuario.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import {CommonModule} from '@angular/common';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,RouterLink,RouterOutlet,HttpClientModule,FormsModule,AgregarUsuarioComponent,ListarUsuarioComponent,EditarUsuarioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'front_end';

  constructor(private router:Router){};

  agregarUsuario(){
    this.router.navigate(['agregarUsuario']);
  }
  



}
