package com.back_End.backEnd.Servicios;

import com.back_End.backEnd.Clases.Usuario;

import java.util.List;

public interface ServicioUsuario {


    List<Usuario>Listar();

    Usuario Agregar(Usuario usu1);
    Usuario Actualizar(Usuario usu1);
    Usuario Borrar(int id);
}
