package ar.com.uade.tiendaOnline.tpo.entidad.dto;
import lombok.Data;


import java.util.Date;

@Data
public class DetalleDeCompraDTO {
    private double montoTotal;
    private long id;
    private Date fecha;
}
