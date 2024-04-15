package com.BackEnd_v1.BackEnd_v1.Servicios;

import com.BackEnd_v1.BackEnd_v1.Modelo.Usuario;
import com.BackEnd_v1.BackEnd_v1.Repositorio.RepositorioUsuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ServiciosUsuario {
    @Autowired
    RepositorioUsuario repositorioUsuario;

    public List<Usuario> listarUsuarios(){
        return repositorioUsuario.findAll();
    }

    public Optional<Usuario> encontrarUsuario(long id){
         return repositorioUsuario.findById(id);
    }

    public void guardarActualizar(Usuario p){
        repositorioUsuario.save(p);
    }

    public void eliminarUsuario(long id){
        repositorioUsuario.deleteById(id);
    }

    public Usuario actualizar(long id){return repositorioUsuario.findById(id).get();}


}
