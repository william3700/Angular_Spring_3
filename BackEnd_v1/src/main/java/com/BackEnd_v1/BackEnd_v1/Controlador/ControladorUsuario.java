package com.BackEnd_v1.BackEnd_v1.Controlador;

import com.BackEnd_v1.BackEnd_v1.Modelo.Usuario;
import com.BackEnd_v1.BackEnd_v1.Repositorio.RepositorioUsuario;
import com.BackEnd_v1.BackEnd_v1.Servicios.ServiciosUsuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
public class ControladorUsuario {

    @Autowired
    ServiciosUsuario serviciosUsuario;

    @GetMapping()
    public String EstadoConexion(){
        return "Conectado";
    }

    @GetMapping("listaPersonas")
    public List<Usuario> listarUsuarios(){
        return serviciosUsuario.listarUsuarios();
    }

    @GetMapping("encontrar/{id}")
    public Optional<Usuario> encontrarUsuario(@PathVariable long id){
        return serviciosUsuario.encontrarUsuario(id);
    }

    @PostMapping("guardarActualizar")
    public String guardarActualizar(@RequestBody Usuario p){
        serviciosUsuario.guardarActualizar(p);
        return "Guardado o actualizado con éxito !!";
    }

    @PutMapping("actualizar/{id}")
    public String Actualizar(@PathVariable long id,@RequestBody Usuario p){
        Usuario usu=serviciosUsuario.actualizar(id);
        usu.setNombre(p.getNombre());
        usu.setApellido(p.getApellido());
        usu.setCorreo(p.getCorreo());
        usu.setContrasenia(p.getContrasenia());
        serviciosUsuario.guardarActualizar(usu);
        return "Actualizado con éxito !!";
    }

    @DeleteMapping("eliminarUsuario/{eid}")
    public String eliminarUsuario(@PathVariable("eid") long eid){
        serviciosUsuario.eliminarUsuario(eid);
        return "Eliminado con éxito";
    }







}
