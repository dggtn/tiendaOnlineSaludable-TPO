package ar.com.uade.tiendaOnline.tpo.controllers;

import java.net.URI;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import ar.com.uade.tiendaOnline.tpo.entidad.Categoria;
import ar.com.uade.tiendaOnline.tpo.entidad.dto.CategoriaDTO;
import ar.com.uade.tiendaOnline.tpo.excepciones.CategoriaDuplicateExcepcion;
import ar.com.uade.tiendaOnline.tpo.servicios.categoria.CategoriaServicio;


@RestController
@RequestMapping("categorias")
public class CategoriaController {

        @Autowired
        private CategoriaServicio categoriaServicio;

        @GetMapping
        public ResponseEntity<Page<Categoria>> getCategorias(
                @RequestParam(required = false) Integer page,
                @RequestParam(required = false) Integer size) {
            if (page == null || size == null)
                return ResponseEntity.ok(categoriaServicio.getCategorias(PageRequest.of(0, Integer.MAX_VALUE)));
            return ResponseEntity.ok(categoriaServicio.getCategorias(PageRequest.of(page, size)));
        }

        @GetMapping("/{categoriaId}")
        public ResponseEntity<Categoria> getCategoriaById(@PathVariable Long categoriaId) {
            Optional<Categoria> result = categoriaServicio.getCategoriaById(categoriaId);
            return result.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.noContent().build());

        }

        @PostMapping
        public ResponseEntity<Object> crearCategoria(@RequestBody CategoriaDTO categoriaRequest)
                throws CategoriaDuplicateExcepcion {
            Categoria result = categoriaServicio.crearCategoria(categoriaRequest.getDescripcion());
            return ResponseEntity.created(URI.create("/categorias/" + result.getId())).body(result);
        }

        @PutMapping("/{categoriaId}")
        public ResponseEntity<Categoria> actualizarCategoria(@PathVariable Long categoriaId,
                                                             @RequestBody CategoriaDTO categoriaRequest) {
            Optional<Categoria> result = categoriaServicio.actualizarCategoria(categoriaId, categoriaRequest.getDescripcion());
            return result.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.noContent().build());
        }

        @DeleteMapping("/{categoriaId}")
        public ResponseEntity<Void> eliminarCategoria(@PathVariable Long categoriaId) {
            categoriaServicio.eliminarCategoria(categoriaId);
            return ResponseEntity.noContent().build();
        }
    }

