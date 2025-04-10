package ar.com.uade.tiendaOnline.tpo.servicios.producto;

import ar.com.uade.tiendaOnline.tpo.entidad.Categoria;
import ar.com.uade.tiendaOnline.tpo.entidad.Producto;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface IProductoServicio {
    List<Producto> obtenerTodosLosProductos();

     void crearProducto(Producto producto) ;


    List<Producto> obtenerProductosXCategoria(String categoria);

    void eliminarProducto(Producto producto);

    Producto obtenerProductoPorId(Long id);

    Producto saveProductWithImage(Producto producto, MultipartFile file)throws IOException;
}
