package com.Fawry.MovieHub_backend.repositories;

import com.Fawry.MovieHub_backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
@Repository
public interface UserRepository extends JpaRepository<User,Integer> {
    Optional<User>findById(int id);
    Optional<User>findByUsername(String username);
}
