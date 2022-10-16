package ru.shurupov.blankproject.tasks.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.shurupov.blankproject.tasks.domain.Task;

public interface TaskRepository extends JpaRepository<Task, Long> {
}
