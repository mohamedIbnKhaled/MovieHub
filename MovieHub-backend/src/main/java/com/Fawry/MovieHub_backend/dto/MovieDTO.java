package com.Fawry.MovieHub_backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class MovieDTO {

    private String title;
    private String description;
    private String director;
    private int releaseYear;
    private String genre;
    private double rating;
    private String poster;

}
