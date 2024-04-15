import { Routes } from '@angular/router';
import { AgregarUsuarioComponent } from './CrudUsuario/agregar-usuario/agregar-usuario.component';
import { EditarUsuarioComponent } from './CrudUsuario/editar-usuario/editar-usuario.component';
import { ListarUsuarioComponent } from './CrudUsuario/listar-usuario/listar-usuario.component';
import { VentanaInicioComponent } from './CrudUsuario/ventana-inicio/ventana-inicio.component';
import { RegistroUsuarioComponent } from './CrudUsuario/registro-usuario/registro-usuario.component';
import { AdministradorComponent } from './CrudUsuario/administrador/administrador.component';

export const routes: Routes = [
    { path: 'agregarUsuario', component: AgregarUsuarioComponent },
    { path: 'editarUsuario', component: EditarUsuarioComponent },
    { path: 'listarUsuario', component: ListarUsuarioComponent },
    { path: 'ventanaInicio', component:VentanaInicioComponent},
    { path: 'registroUsuario',component:RegistroUsuarioComponent},
    { path: '',   redirectTo: 'ventanaInicio', pathMatch: 'full' },
    { path:'administrador',component:AdministradorComponent}
];
