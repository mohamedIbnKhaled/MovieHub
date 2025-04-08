package com.Fawry.MovieHub_backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "movies")
public class Movie {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(nullable = false)
    private String title;
    private String description;
    private String director;
    private String genre;
    @Column(nullable = false)
    private int releaseYear;
    @Column(nullable = false)
    private double rating;


}
