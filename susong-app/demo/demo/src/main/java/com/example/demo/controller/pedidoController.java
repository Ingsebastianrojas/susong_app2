package com.example.demo.controller;

import com.example.demo.model.Pedido;
import com.example.demo.service.PedidoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/pedidos")
@CrossOrigin
public class PedidoController  {

    @Autowired
    private PedidoService pedidoService;

    //  Usuario crea pedido
    @PostMapping
    public Pedido crear(@RequestBody Pedido pedido){
        return pedidoService.crearPedido(pedido);
    }

    //  Cocina ve pedidos pendientes
    @GetMapping("/estado/{estado}")
    public List<Pedido> porEstado(@PathVariable String estado){
        return pedidoService.obtenerPedidosPorEstado(estado);
    }

    //  Cambiar estado (cocina/repartidor)
    @PutMapping("/{id}/estado")
    public Pedido cambiarEstado(@PathVariable Long id, @RequestParam String estado){
        return pedidoService.actualizarEstado(id, estado);
    }

    //  Validar entrega
    @PostMapping("/{id}/validar")
    public boolean validar(@PathVariable Long id, @RequestParam String token){
        return pedidoService.validarEntrega(id, token);
    }
}