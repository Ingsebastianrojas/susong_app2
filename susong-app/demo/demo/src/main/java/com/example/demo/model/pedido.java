package com.example.demo.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Pedido {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String descripcion;

    private String estado;
    // PENDIENTE, EN_PREPARACION, LISTO, EN_CAMINO, ENTREGADO

    private String direccion;

    private String tokenEntrega; // código para validar entrega
}