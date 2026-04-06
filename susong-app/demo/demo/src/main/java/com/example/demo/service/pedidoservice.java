package com.example.demo.service;

import com.example.demo.model.Pedido;
import com.example.demo.repository.PedidoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class PedidoService {

    @Autowired
    private PedidoRepository pedidoRepository;

    public Pedido crearPedido(Pedido pedido){
        pedido.setEstado("PENDIENTE");
        pedido.setTokenEntrega(UUID.randomUUID().toString().substring(0,6));
        return pedidoRepository.save(pedido);
    }

    public List<Pedido> obtenerPedidosPorEstado(String estado){
        return pedidoRepository.findByEstado(estado);
    }

    public Pedido actualizarEstado(Long id, String estado){
        Pedido pedido = pedidoRepository.findById(id).orElseThrow();
        pedido.setEstado(estado);
        return pedidoRepository.save(pedido);
    }

    public boolean validarEntrega(Long id, String token){
        Pedido pedido = pedidoRepository.findById(id).orElseThrow();
        return pedido.getTokenEntrega().equals(token);
    }
}