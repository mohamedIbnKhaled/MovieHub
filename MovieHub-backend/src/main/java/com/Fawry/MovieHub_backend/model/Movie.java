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
    private String poster;

    public Movie(String title, String description, String director, String genre, int releaseYear, double rating, String poster) {
        this.title = title;
        this.description = description;
        this.director = director;
        this.genre = genre;
        this.releaseYear = releaseYear;
        this.rating = rating;
        this.poster = poster;
    }
}
