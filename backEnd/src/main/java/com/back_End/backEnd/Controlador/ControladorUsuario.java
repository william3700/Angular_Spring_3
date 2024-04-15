package com.back_End.backEnd.Controlador;

import com.back_End.backEnd.Clases.Usuario;
import com.back_End.backEnd.Servicios.ServicioUsuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;


@RestController

public class ControladorUsuario {

    @Autowired
    ServicioUsuario servicioUsuario;

    @GetMapping()
    public String Index(){
        return "Conectado ....";
    }






}

