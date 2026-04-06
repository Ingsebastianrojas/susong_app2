package com.example.demo.controller;

import com.example.demo.model.Usuario;
import com.example.demo.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.Optional;

@RestController
@RequestMapping("/auth")
@CrossOrigin
public class AuthController {
    @Autowired
    private UsuarioService usuarioService;
    
    @PostMapping("/registrar")
    public Usuario registrar(@RequestBody Usuario usuario){
        return usuarioService.registrar(usuario);
    }
    
    @PostMapping("/login")
    public Optional<Usuario> login(@RequestBody Usuario usuario) {
        return usuarioService.login(usuario.getEmail(), usuario.getPassword());
    }
}