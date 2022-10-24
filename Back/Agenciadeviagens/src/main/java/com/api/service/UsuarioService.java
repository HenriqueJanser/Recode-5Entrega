package com.api.service;

import java.util.List;

import com.api.model.Usuario;

public interface UsuarioService {
	
	Usuario saveUsuario(Usuario usuario);
	List<Usuario> getAllUsuarios();
	Usuario getUsuarioById(long id);
	Usuario updateUsuario(Usuario usuario, long id);
	void deleteUsuario(long id);
}
