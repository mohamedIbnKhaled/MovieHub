package com.Fawry.MovieHub_backend.services;

import com.Fawry.MovieHub_backend.dto.MovieDTO;
import com.Fawry.MovieHub_backend.model.Movie;
import com.Fawry.MovieHub_backend.repositories.MovieRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class MovieService {

    private final MovieRepository movieRepository;

    public List<Movie> getAllMovies() {
        return movieRepository.findAll();
    }

    public List<Movie> searchMovies(String title) {
        return movieRepository.findByTitleContainingIgnoreCase(title);
    }

    public void addMovie(Movie movie) {
        movieRepository.save(movie);
    }

    public void removeMovie(int id) {
        movieRepository.deleteById(id);
    }

    public Optional<Movie> getMovieDetails(int id) {
        return movieRepository.findById(id);
    }
}
