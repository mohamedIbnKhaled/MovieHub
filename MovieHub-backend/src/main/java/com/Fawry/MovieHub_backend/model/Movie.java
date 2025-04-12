package com.Fawry.MovieHub_backend.model;

import com.fasterxml.jackson.annotation.JsonProperty;
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

    @JsonProperty("imdbID")
    @Column(nullable = false, unique = true)
    private String imdbID;

    @JsonProperty("Title")
    @Column(nullable = false)
    private String title;

    @JsonProperty("Year")
    @Column(nullable = false)
    private String year;

    @JsonProperty("Poster")
    private String poster;

    @JsonProperty("Type")
    private String type;

}
