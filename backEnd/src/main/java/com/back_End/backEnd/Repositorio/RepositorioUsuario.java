package com.back_End.backEnd.Repositorio;

import com.back_End.backEnd.Clases.Usuario;
import org.springframework.data.repository.Repository;
import java.util.List;
public interface RepositorioUsuario extends Repository<Usuario, Long> {

List<Usuario>findAll();

Usuario save(Usuario usu);

void delete(Usuario usu);



}
