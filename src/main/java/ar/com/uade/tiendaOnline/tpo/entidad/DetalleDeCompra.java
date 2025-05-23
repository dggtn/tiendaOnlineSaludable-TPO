package ar.com.uade.tiendaOnline.tpo.entidad;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;

@Data
@Entity
public class DetalleDeCompra {
    @Column
    private Date fecha;
    @Column
    private double montoTotal;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ManyToOne
    @JoinColumn(name = "usuario_id", referencedColumnName = "id")
    private Usuario usuario;
    @ManyToOne
    @JoinColumn(name = "pedido_id")
    private Pedido pedido;

    @ManyToOne
    @JoinColumn(name = "producto_id")
    private Producto producto;

    public DetalleDeCompra(double montoTotal, long id, Usuario usuario) {
        this.montoTotal = montoTotal;
        this.id = id;
        this.usuario = usuario;

    }

    public DetalleDeCompra() {
    }

}



