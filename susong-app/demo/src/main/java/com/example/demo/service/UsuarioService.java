Package com.example.demo.service
import com.example.demo.model.Usuario;
import com.example.demo.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.Springframework.stereotype.Service;
import java.util.Optional;

@Service
public class UsuarioService {
    @Autowired
    private UsuarioRespotory usuarioRepository;

    public Usuario Registrar(Usuario usuario){
        return usuarioRepository.save(usuario)
    }
    public Optional<Usuario> login(String email,String password){
        Optional<Usuario> usuario = usuarioRepository.findbyEmail(email);

        if(usuario.isPresent() && usuario.get().getPassword().equals(password)){
            return usuario;
        }
        return Optional.empty();
     }
}