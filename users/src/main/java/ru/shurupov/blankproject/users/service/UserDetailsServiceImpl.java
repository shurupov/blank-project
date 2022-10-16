package ru.shurupov.blankproject.users.service;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import ru.shurupov.blankproject.users.domain.User;
import ru.shurupov.blankproject.users.domain.UserDetailsImpl;
import ru.shurupov.blankproject.users.repository.UserRepository;

@RequiredArgsConstructor
@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    private final UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.getByUsername(username)
            .orElseThrow(() -> new UsernameNotFoundException(" User Not Found with username: " + username));

        return UserDetailsImpl.build(user);
    }
}
