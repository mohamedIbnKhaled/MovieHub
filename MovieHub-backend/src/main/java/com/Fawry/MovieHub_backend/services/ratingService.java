package com.Fawry.MovieHub_backend.services;

import com.Fawry.MovieHub_backend.repositories.MovieRepository;
import com.Fawry.MovieHub_backend.repositories.RatingRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ratingService {
    private final RatingRepository ratingRepository;
    private final MovieRepository movieRepository;
//    public void rateMovie(User user,)

}
