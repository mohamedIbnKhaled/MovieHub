package com.Fawry.MovieHub_backend.repositories;

import com.Fawry.MovieHub_backend.model.Movie;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MovieRepository extends JpaRepository<Movie,Integer> {
    List<Movie> findByTitleContainingIgnoreCase(String title);
}
