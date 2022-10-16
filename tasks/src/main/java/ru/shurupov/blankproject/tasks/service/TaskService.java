package ru.shurupov.blankproject.tasks.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ru.shurupov.blankproject.tasks.repository.TaskRepository;
import ru.shurupov.blankproject.tasks.domain.Task;

import javax.persistence.EntityNotFoundException;
import java.util.List;

@Service
@RequiredArgsConstructor
public class TaskService {

    private final TaskRepository taskRepository;

    @Transactional(readOnly = true)
    public List<Task> getAll() {
        return taskRepository.findAll();
    }

    @Transactional
    public Task getById(Long id) {
        return taskRepository.findById(id).orElseThrow(EntityNotFoundException::new);
    }

}
