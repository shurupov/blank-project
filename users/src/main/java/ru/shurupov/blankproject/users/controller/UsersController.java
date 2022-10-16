package ru.shurupov.blankproject.users.controller;

import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.shurupov.blankproject.users.domain.dto.UserDto;
import ru.shurupov.blankproject.users.service.UserService;
import ru.shurupov.blankproject.users.config.OpenApiConfig;

import java.util.List;

@RestController
@RequestMapping("/api/users")
@SecurityRequirement(name = OpenApiConfig.BEARER_TOKEN_SECURITY_SCHEME)
@RequiredArgsConstructor
public class UsersController {

    private final UserService userService;

    @GetMapping
    public List<UserDto> getUsers() {
        return userService.getAll();
    }

    @GetMapping("/{id}")
    public UserDto getUser(@PathVariable Long id) {
        return userService.getById(id);
    }
}
