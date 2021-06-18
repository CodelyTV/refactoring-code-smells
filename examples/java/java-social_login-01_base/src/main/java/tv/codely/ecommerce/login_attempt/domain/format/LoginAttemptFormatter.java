package tv.codely.ecommerce.login_attempt.domain.format;

import tv.codely.ecommerce.login_attempt.domain.LoginAttempt;

import java.util.HashMap;

public abstract class LoginAttemptFormatter<T extends LoginAttempt> {
    public abstract HashMap<String, String> format(T loginAttempt);
}
