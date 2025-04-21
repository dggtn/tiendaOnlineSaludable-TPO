package ar.com.uade.tiendaOnline.tpo.entidad;

import jakarta.persistence.*;
import lombok.*;


import java.util.List;
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

