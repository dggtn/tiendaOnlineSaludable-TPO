package ar.com.uade.tiendaOnline.tpo.controllers;

import ar.com.uade.tiendaOnline.tpo.entidad.Imagen;
import ar.com.uade.tiendaOnline.tpo.entidad.Producto;
import ar.com.uade.tiendaOnline.tpo.entidad.dto.ProductoRequestDTO;
import ar.com.uade.tiendaOnline.tpo.entidad.dto.ProductoResponseDTO;
import ar.com.uade.tiendaOnline.tpo.excepciones.ProductoInexistenteExcepcion;
import ar.com.uade.tiendaOnline.tpo.servicios.producto.IProductoServicio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
@CrossOrigin
@RestController
@RequestMapping("/productos")

public class ProductoController {
    @Autowired
    private IProductoServicio productoServicio;


    @GetMapping
    public List<ProductoResponseDTO> obtenerProductosXcategoria(@RequestParam(required = false) String categoria) {
        if (categoria != null) {
            return productoServicio.obtenerProductosDTOporCategoria(categoria);
        }
        return productoServicio.obtenerTodosLosProductosDTO();
    }


    @PostMapping("{id}/imagen")
    public ResponseEntity<String> subirImagen(@PathVariable Long id, @RequestParam("file") MultipartFile file) {
        try {
            Producto producto = new Producto();
            producto.setId(id);
            productoServicio.subirImagen(producto, file);
            return new ResponseEntity<>("Imagen cargada con exito", HttpStatus.OK);
        } catch (IOException e) {
            return new ResponseEntity<>("No se pudo cargar la imagen", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping
    public void crearProducto(@RequestBody Producto producto) {
        productoServicio.crearProducto(producto);

    }
    

    @GetMapping("/{id}")
    public Producto clickEnUnProducto(@PathVariable Long id) {

        return productoServicio.obtenerProductoPorId(id);
    }

    @GetMapping("/{id}/imagenes")
    public ArrayList<Imagen> obtenerImagenesDeUnProducto(@PathVariable Long id) {

        return productoServicio.obtenerImagenes(id);
    }


    @DeleteMapping("/{id}")
    public void eliminarProducto(@PathVariable Long id) {

        productoServicio.eliminarProducto(id);

    }


    @PutMapping("/{id}")
    public ResponseEntity<Void> actualizarProducto(@PathVariable Long id, @RequestBody ProductoRequestDTO productoRequestDTO) {
        try {
            productoServicio.actualizarProducto(id, productoRequestDTO);
            return ResponseEntity.ok().build();
        } catch (ProductoInexistenteExcepcion e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }


}