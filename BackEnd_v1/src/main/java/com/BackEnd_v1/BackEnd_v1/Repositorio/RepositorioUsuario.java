package com.BackEnd_v1.BackEnd_v1.Repositorio;

import com.BackEnd_v1.BackEnd_v1.Modelo.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RepositorioUsuario extends JpaRepository<Usuario, Long> {
}
