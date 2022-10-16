package ru.shurupov.blankproject.users.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.shurupov.blankproject.users.domain.User;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> getByUsername(String username);

    boolean existsByUsername(String username);
}