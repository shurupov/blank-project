package ru.shurupov.blankproject.users.controller;

import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.shurupov.blankproject.users.domain.dto.ProfileDto;
import ru.shurupov.blankproject.users.service.AuthService;
import ru.shurupov.blankproject.users.config.OpenApiConfig;

@RestController
@RequestMapping("/api/profile")
@SecurityRequirement(name = OpenApiConfig.BEARER_TOKEN_SECURITY_SCHEME)
@RequiredArgsConstructor
public class ProfileController {

    private final AuthService authService;

    @GetMapping
    public ProfileDto getProfile() {
        return authService.getCurrentProfile();
    }
}
