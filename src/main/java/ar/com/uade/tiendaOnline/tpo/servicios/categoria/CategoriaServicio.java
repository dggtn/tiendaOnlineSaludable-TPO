package ar.com.uade.tiendaOnline.tpo.servicios.categoria;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import ar.com.uade.tiendaOnline.tpo.entidad.Categoria;
import ar.com.uade.tiendaOnline.tpo.excepciones.CategoriaDuplicateExcepcion;
import ar.com.uade.tiendaOnline.tpo.repositorio.CategoriaRepositorio;

@Service
public class CategoriaServicio implements ICategoriaServicio {
        @Autowired
        private CategoriaRepositorio categoriaRepositorio;

        public Page<Categoria> getCategorias(PageRequest pageable) {

            return categoriaRepositorio.findAll(pageable);
        }

        public Optional<Categoria> getCategoriaById(Long categoryId) {
            return categoriaRepositorio.findById(categoryId);
        }

        public Categoria crearCategoria(String descripcion) throws CategoriaDuplicateExcepcion {
            List<Categoria> categorias = categoriaRepositorio.findByDescripcion(descripcion);
            if (categorias.isEmpty())
                return categoriaRepositorio.save(new Categoria(descripcion));
            throw new CategoriaDuplicateExcepcion();
        }

        public Optional<Categoria> actualizarCategoria(Long categoriaId, String descripcion) {
            Optional<Categoria> categoriaExistente = categoriaRepositorio.findById(categoriaId);
            if (categoriaExistente.isPresent()) {
                Categoria categoria = categoriaExistente.get();
                categoria.setDescripcion(descripcion);
                return Optional.of(categoriaRepositorio.save(categoria));
            } else {
                return Optional.empty();
            }
        }
        public void eliminarCategoria(Long categoriaId) {
            categoriaRepositorio.deleteById(categoriaId);
        }

}