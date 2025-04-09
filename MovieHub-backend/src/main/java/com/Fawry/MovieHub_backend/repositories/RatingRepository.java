package com.Fawry.MovieHub_backend.repositories;

import com.Fawry.MovieHub_backend.model.Rating;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RatingRepository extends JpaRepository<Rating,Integer> {
}
