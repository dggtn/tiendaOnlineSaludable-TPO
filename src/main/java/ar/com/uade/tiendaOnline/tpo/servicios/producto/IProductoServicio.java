package ar.com.uade.tiendaOnline.tpo.servicios.producto;

import ar.com.uade.tiendaOnline.tpo.entidad.Producto;
import ar.com.uade.tiendaOnline.tpo.excepciones.ProductoDuplicateExcepcion;

import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface IProductoServicio {
    List<Producto> obtenerTodosLosProductos();

    void crearProducto(Producto producto) throws ProductoDuplicateExcepcion;     

    List<Producto> obtenerProductosXCategoria(String categoria);

    void eliminarProducto(Long id);

    Producto obtenerProductoPorId(Long id);

    Producto guardarImagen(Producto producto, MultipartFile file)throws IOException;

}