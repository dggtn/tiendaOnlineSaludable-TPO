package ar.com.uade.tiendaOnline.tpo.entidad;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class Categoria {
    public Categoria(String descripcion) {
        this.descripcion = descripcion;
    }

    public Categoria() {
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String descripcion;

    public Categoria(Long id, String descripcion) {
        this.id = id;
        this.descripcion = descripcion;
    }
}
