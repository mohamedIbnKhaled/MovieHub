package com.Fawry.MovieHub_backend.controller;

import com.Fawry.MovieHub_backend.dto.MovieDTO;
import com.Fawry.MovieHub_backend.model.Movie;
import com.Fawry.MovieHub_backend.services.MovieService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/movies")
@RequiredArgsConstructor
public class Moviecontroller {

    private final MovieService movieService;


    @GetMapping
    public ResponseEntity<Page<Movie>> getAllMovies(Pageable pageable) {
        return ResponseEntity.ok(movieService.getAllMovies(pageable));
    }

    @GetMapping("/search")
    public ResponseEntity<Page<Movie>> searchMovies(@RequestParam("title") String title, Pageable pageable) {
        return ResponseEntity.ok(movieService.searchMovies(title, pageable));
    }


    @PostMapping
    public ResponseEntity<String> addMovie(@RequestBody MovieDTO movieDTO) {
        movieService.addMovie(movieDTO);
        return ResponseEntity.ok("Movie added successfully.");
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<String> removeMovie(@PathVariable int id) {
        movieService.removeMovie(id);
        return ResponseEntity.ok("Movie removed successfully.");
    }


    @GetMapping("/{id}")
    public ResponseEntity<?> getMovieDetails(@PathVariable int id) {
        Optional<Movie> movie = movieService.getMovieDetails(id);
        return movie.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }
}
