package com.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.api.model.Usuario;
import com.api.service.UsuarioService;

@RestController
@RequestMapping("/usuario")
public class UsuarioController {
	
	@Autowired
	UsuarioService usuarioService;
	
	@GetMapping
	public String helloWorld () {
		return "oi";
	}
	
	
	@PostMapping("/create")
	public Usuario saveUsuario(@RequestBody Usuario usuario){
		return usuarioService.saveUsuario(usuario);
	}
	
}
