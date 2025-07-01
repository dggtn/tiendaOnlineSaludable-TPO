package ar.com.uade.tiendaOnline.tpo.servicios.producto;

import ar.com.uade.tiendaOnline.tpo.entidad.Categoria;
import ar.com.uade.tiendaOnline.tpo.entidad.Imagen;
import ar.com.uade.tiendaOnline.tpo.entidad.Producto;
import ar.com.uade.tiendaOnline.tpo.entidad.dto.ProductoRequestDTO;
import ar.com.uade.tiendaOnline.tpo.entidad.dto.ProductoResponseDTO;
import ar.com.uade.tiendaOnline.tpo.excepciones.ProductoInexistenteExcepcion;
import ar.com.uade.tiendaOnline.tpo.repositorio.ImagenRepositorio;
import ar.com.uade.tiendaOnline.tpo.repositorio.ProductoRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ProductoServicio implements IProductoServicio {
    @Autowired
    private ProductoRepositorio productoRepositorio;

    @Autowired
    private ImagenRepositorio imagenRepositorio;

    @Override
    public List<ProductoResponseDTO> obtenerTodosLosProductosDTO() {
        List<Producto> productos = productoRepositorio.obtenerProductos();
        List<ProductoResponseDTO> dtos = new ArrayList<>();

        for (Producto p : productos) {
            ProductoResponseDTO prdto = new ProductoResponseDTO();
            prdto.setNombre(p.getNombre());
            prdto.setCantidad(p.getCantidad());
            prdto.setPrecio(p.getPrecio());
            prdto.setCategoria(p.getCategoria().getDescripcion());
            prdto.setId((p.getId()));
            prdto.setDescripcion((p.getDescripcion()));
            dtos.add(prdto);
        }

        return dtos;
    }

    @Transactional(rollbackFor = Throwable.class)
    public void crearProducto(Producto producto) {
        if (producto.getPrecio() <= 0) {
            throw new IllegalArgumentException("El precio debe ser mayor a 0.");
        }
        if (producto.getCantidad() < 0) {
            throw new IllegalArgumentException("La cantidad (stock) no puede ser negativa.");
        }
        productoRepositorio.save(producto);
    }

    @Override
    public List<ProductoResponseDTO> obtenerProductosDTOporCategoria(String categoria) {
        List<Producto> productos = productoRepositorio.findByCategoria(categoria);
        List<ProductoResponseDTO> dtos = new ArrayList<>();

        for (Producto p : productos) {

            ProductoResponseDTO prdto = new ProductoResponseDTO();
            prdto.setId(p.getId());
            prdto.setNombre(p.getNombre());
            prdto.setCantidad(p.getCantidad());
            prdto.setPrecio(p.getPrecio());
            prdto.setCategoria(p.getCategoria().getDescripcion());
            dtos.add(prdto);
        }

        return dtos;
    }

    @Transactional
    @Override
    public void eliminarProducto(Long id) {
        Optional<Producto> productoBuscado = productoRepositorio.obtenerPoId(id);
        Producto producto = productoBuscado.orElseThrow(ProductoInexistenteExcepcion::new);
        producto.setEliminado(true);
    }

    @Override
    public Producto obtenerProductoPorId(Long id) {
        // Objeto opcional envuelve otro,ayuda a que no hayan nullPointerExceptions
        // Te ahorras de preguntar si existe o no .
        Optional<Producto> productoBuscado = productoRepositorio.obtenerPoId(id);
        return productoBuscado.orElseThrow(ProductoInexistenteExcepcion::new);
    }

    @Override
    public void subirImagen(Producto producto, MultipartFile file) throws IOException {
        Optional<Producto> productoBuscado = productoRepositorio.obtenerPoId(producto.getId());
        Producto p = productoBuscado.orElseThrow(ProductoInexistenteExcepcion::new);
        Imagen i = new Imagen();
        i.setProducto(p);
        i.setImagenNombre(file.getOriginalFilename());
        i.setImagenData(file.getBytes());
        imagenRepositorio.save(i);
    }

    @Override
    public ArrayList<Imagen> obtenerImagenes(Long id) {
        return imagenRepositorio.obtenerImagenesDeUnProducto(id);
    }

    @Override
    @Transactional(rollbackFor = Throwable.class)
    public void actualizarProducto(Long id, ProductoRequestDTO productoRequestDTO) throws ProductoInexistenteExcepcion {

        if (id == null || productoRequestDTO == null) {
            throw new IllegalArgumentException("Parámetros inválidos para actualizar producto");
        }

        Producto productoExistente = productoRepositorio.findById(id)
                .orElseThrow(ProductoInexistenteExcepcion::new);

        if (productoExistente.isEliminado()) {
            throw new ProductoInexistenteExcepcion();
        }

        if (productoRequestDTO.getNombre() != null && !productoRequestDTO.getNombre().trim().isEmpty()
                && !productoRequestDTO.getNombre().equals(productoExistente.getNombre())) {

            if (existeProductoConNombre(productoRequestDTO.getNombre())) {
                throw new IllegalArgumentException(
                        "Ya existe un producto con el nombre: " + productoRequestDTO.getNombre());
            }
            productoExistente.setNombre(productoRequestDTO.getNombre());
        }

        if (productoRequestDTO.getCategoria_id() != null) {
            Categoria nuevaCategoria = new Categoria();
            nuevaCategoria.setId(productoRequestDTO.getCategoria_id());
            productoExistente.setCategoria(nuevaCategoria);
        }

        if (productoRequestDTO.getCantidad() < 0) {
            throw new IllegalArgumentException("La cantidad no puede ser negativa.");
        }

        if (productoRequestDTO.getPrecio() <= 0) {
            throw new IllegalArgumentException("El precio debe ser mayor a 0.");
        }

        if (productoRequestDTO.getDescripcion() != null) {
            productoExistente.setDescripcion(productoRequestDTO.getDescripcion());
        }

        productoExistente.setCantidad(productoRequestDTO.getCantidad());
        productoExistente.setPrecio(productoRequestDTO.getPrecio());

    }

    private boolean existeProductoConNombre(String nombre) {
        return !productoRepositorio.findByNombre(nombre).isEmpty();
    }

}
