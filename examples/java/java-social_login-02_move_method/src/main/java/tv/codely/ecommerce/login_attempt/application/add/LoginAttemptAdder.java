package tv.codely.ecommerce.login_attempt.application.add;

import tv.codely.ecommerce.login_attempt.domain.LoginAttempt;
import tv.codely.ecommerce.login_attempt.domain.LoginAttemptRepository;

public final class LoginAttemptAdder {
    private final LoginAttemptRepository repository;

    public LoginAttemptAdder(LoginAttemptRepository repository) {
        this.repository = repository;
    }

    public void add(LoginAttempt loginAttempt) throws Exception {
        this.repository.save(loginAttempt);
    }
}
