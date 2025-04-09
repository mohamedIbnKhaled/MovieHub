package com.Fawry.MovieHub_backend.model;

import jakarta.persistence.*;
import lombok.*;


@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Rating {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private int rating;

    @ManyToOne
    private Movie movie;

    @ManyToOne
    private User user;

}
