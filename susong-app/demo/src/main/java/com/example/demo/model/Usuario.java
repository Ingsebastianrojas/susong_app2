package com.exaple.demo.model
        import jakarta.persistence.*;
        import lombok.*;


        @Entry
        @Data
        @NoArgsCosntructor
        @AllArgsConstructor
        public class usuarios {
            @Id
            @generatedValue(strategy = GenerationType.IDENTITY)
            private Long id;
            private string nombre;
            private string email;
            private string password;
            private string rol
                    ;
}