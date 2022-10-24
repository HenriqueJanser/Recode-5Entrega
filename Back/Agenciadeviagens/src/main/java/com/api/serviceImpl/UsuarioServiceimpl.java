package com.api.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.api.service.UsuarioService;
import com.api.model.Usuario;
import com.api.exception.ResourceNotFoundException;
import com.api.repositories.UsuarioRepository;

@Service
public class UsuarioServiceimpl implements UsuarioService {
	
	private BCryptPasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
	
	
	@Autowired
	private UsuarioRepository usuarioRepository;

	@Override
	public Usuario saveUsuario(Usuario usuario) {
		
		usuario.setSenha(passwordEncoder().encode(usuario.getSenha()));
		
		return usuarioRepository.save(usuario);
	}
	
	@Override
	public List<Usuario> getAllUsuarios() { 
		return usuarioRepository.findAll();
	}
	
	@Override
	public Usuario getUsuarioById(long id) { 
		return usuarioRepository.findById(id).orElseThrow(() -> 
				new ResourceNotFoundException("Usuario", "id", id));
	}
	
	@Override
	public Usuario updateUsuario(Usuario usuario, long id) { 
		
		Usuario usuarioExistente = usuarioRepository.findById(id).orElseThrow(
				() -> new ResourceNotFoundException("Usuario", "id", id));
		
		usuarioExistente.setPrimeiroNome(usuario.getPrimeiroNome());
		usuarioExistente.setUltimoNome(usuario.getUltimoNome());
		usuarioExistente.setEmail(usuario.getEmail());
		
		usuarioRepository.save(usuarioExistente);
		return usuarioExistente;
	}
	
	@Override
	public void deleteUsuario(long id) { 
		usuarioRepository.findById(id).orElseThrow(() -> 
				new ResourceNotFoundException("Usuario", "id", id));
		
		usuarioRepository.deleteById(id);
	}

}
