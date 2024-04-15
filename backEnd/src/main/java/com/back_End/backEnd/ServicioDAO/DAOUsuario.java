package com.back_End.backEnd.ServicioDAO;

import com.back_End.backEnd.Clases.Usuario;
import com.back_End.backEnd.Repositorio.RepositorioUsuario;
import com.back_End.backEnd.Servicios.ServicioUsuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DAOUsuario implements ServicioUsuario {
    @Autowired
    private RepositorioUsuario repositorioUsuario;

    @Override
    public List<Usuario> Listar() {
        return repositorioUsuario.findAll();
    }

    @Override
    public Usuario Agregar(Usuario usu1) {
        return null;
    }

    @Override
    public Usuario Actualizar(Usuario usu1) {
        return null;
    }

    @Override
    public Usuario Borrar(int id) {
        return null;
    }
}
