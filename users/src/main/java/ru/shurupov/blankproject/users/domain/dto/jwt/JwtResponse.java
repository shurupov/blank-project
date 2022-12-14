package ru.shurupov.blankproject.users.domain.dto.jwt;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
public class JwtResponse {
    private String token;
    private Long id;
    private String username;
    private String position;
    private List<String> roles;
}
