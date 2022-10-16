package ru.shurupov.blankproject.tasks.domain.dto;

import lombok.Builder;
import lombok.Data;
import ru.shurupov.blankproject.tasks.domain.AssignedTask;
import ru.shurupov.blankproject.tasks.domain.Task;

@Data
@Builder
public class AssignedTaskDto {
    private Long id;
    private Task task;
    private Long userId;
    private AssignedTask.Status status;
}
