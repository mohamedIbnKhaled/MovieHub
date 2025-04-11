package com.Fawry.MovieHub_backend.repositories;

import com.Fawry.MovieHub_backend.model.Movie;
import com.Fawry.MovieHub_backend.model.Rating;
import com.Fawry.MovieHub_backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RatingRepository extends JpaRepository<Rating,Integer> {
    Optional<Rating> findByUserAndMovie(User user, Movie movie);
}
