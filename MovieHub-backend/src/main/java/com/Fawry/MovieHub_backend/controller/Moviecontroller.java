package com.Fawry.MovieHub_backend.controller;

import com.Fawry.MovieHub_backend.dto.MovieDTO;
import com.Fawry.MovieHub_backend.model.Movie;
import com.Fawry.MovieHub_backend.services.MovieService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/movies")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class Moviecontroller {

    private final MovieService movieService;


    @GetMapping
    public ResponseEntity<List<Movie>> getAllMovies() {
        return ResponseEntity.ok(movieService.getAllMovies());
    }

    @GetMapping("/search")
    public ResponseEntity<List<Movie>> searchMovies(@RequestParam("Title") String title) {
        return ResponseEntity.ok(movieService.searchMovies(title));
    }


    @PostMapping
    public ResponseEntity<Movie> addMovie(@RequestBody Movie movie) {
        movieService.addMovie(movie);
        return ResponseEntity.ok(movie);
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
