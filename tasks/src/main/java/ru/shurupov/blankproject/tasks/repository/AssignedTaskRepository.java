package ru.shurupov.blankproject.tasks.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.shurupov.blankproject.tasks.domain.AssignedTask;

import java.util.List;

public interface AssignedTaskRepository extends JpaRepository<AssignedTask, Long> {

    List<AssignedTask> findByUserId(Long userId);

    AssignedTask findTopByUserIdAndId(Long userId, Long id);
}
