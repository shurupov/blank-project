package ru.shurupov.blankproject.users.domain.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class UserDto {
    private Long id;
    private String fullName;
    private String position;
}
