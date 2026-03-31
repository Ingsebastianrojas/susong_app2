package com.example.demo.controller;

import com.example.demo.model.Usuario;
import com.example.demo.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.anotation.*;
@RestController
@RequestMapping("/auth")
@CorissOriginin
public  class AuthController {
    @Autowired
    private UsuarioService usuarioService;
    @PostMapping("/registrar")
    public Usuario registrar(@RequesBody Usuario usuario){
        return usuarioService.registrar(usuario);
    }
    @PostMapping("/Login")
    public optional<Usuario>Login(@RequestBody Usuario usuario    {
        return usuarioService.logion(usuario.getEmail(),usuario.getPassword());
    }
}