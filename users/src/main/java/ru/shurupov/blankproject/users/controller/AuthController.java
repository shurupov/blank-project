package ru.shurupov.blankproject.users.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import ru.shurupov.blankproject.users.domain.User;
import ru.shurupov.blankproject.users.domain.UserDetailsImpl;
import ru.shurupov.blankproject.users.domain.UserRole;
import ru.shurupov.blankproject.users.domain.dto.jwt.JwtResponse;
import ru.shurupov.blankproject.users.domain.dto.jwt.LoginRequest;
import ru.shurupov.blankproject.users.domain.dto.jwt.MessageResponse;
import ru.shurupov.blankproject.users.domain.dto.jwt.SignupRequest;
import ru.shurupov.blankproject.users.service.AuthService;
import ru.shurupov.blankproject.users.service.UserService;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {
    
    private final AuthenticationManager authenticationManager;
    private final UserService userService;
    private final PasswordEncoder encoder;
    private final AuthService authService;

    @PostMapping("/signin")
    public ResponseEntity<?> authenticate(@RequestBody LoginRequest loginRequest) {

        Authentication authentication = authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword())
        );

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = authService.generateJwtToken(authentication);

        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        List<String> roles = userDetails.getAuthorities()
            .stream().map(GrantedAuthority::getAuthority)
            .collect(Collectors.toList());

        return ResponseEntity.ok(
            new JwtResponse(
                jwt,
                userDetails.getId(),
                userDetails.getUsername(),
                userDetails.getPosition(),
                roles
            )
        );
    }

    @PostMapping("/signup")
    public ResponseEntity<?> register(@RequestBody SignupRequest signUpRequest) {

        if (userService.existsByUsername(signUpRequest.getUsername())) {

            return ResponseEntity.badRequest()
                .body(new MessageResponse("Error: Username is already taken!"));
        }

        // Create new employee account
        User user = User.builder()
            .username(signUpRequest.getUsername())
            .password(encoder.encode(signUpRequest.getPassword()))
            .fullname(signUpRequest.getFullName())
            .position(signUpRequest.getPosition())
            .roles(List.of(UserRole.ROLE_EMPLOYEE))
            .build();
        
        userService.save(user);

        return ResponseEntity.ok(new MessageResponse("Employee registered successfully!"));
    }
}
