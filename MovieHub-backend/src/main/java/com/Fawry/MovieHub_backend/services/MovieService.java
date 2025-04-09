package com.Fawry.MovieHub_backend.services;

import com.Fawry.MovieHub_backend.dto.MovieDTO;
import com.Fawry.MovieHub_backend.model.Movie;
import com.Fawry.MovieHub_backend.repositories.MovieRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class MovieService {
    private final MovieRepository movieRepository;

    public Page<Movie> getAllMovies(Pageable pageable) {
        return movieRepository.findAll(pageable);
    }

    public Page<Movie> searchMovies(String title, Pageable pageable) {
        return movieRepository.findByTitleContainingIgnoreCase(title, pageable);
    }

    public void addMovie(MovieDTO dto) {
        Movie movie = new Movie(dto.getTitle(), dto.getDescription(), dto.getDirector(), dto.getGenre(), dto.getReleaseYear(), dto.getRating(), dto.getPoster());
        movieRepository.save(movie);
    }

    public void removeMovie(int id) {
        movieRepository.deleteById(id);
    }


    public Optional<Movie> getMovieDetails(int id) {
        return movieRepository.findById(id);
    }
}
