package tv.codely.ecommerce.login_attempt.domain;

import java.util.HashMap;

public interface LoginAttemptRepository {
    HashMap<String, String> save(LoginAttempt loginAttempt) throws Exception;
}
