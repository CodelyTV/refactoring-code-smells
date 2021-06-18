package tv.codely.ecommerce.login_attempt.domain.format;

import tv.codely.ecommerce.login_attempt.domain.EmailLoginAttempt;

import java.util.HashMap;

public final class EmailLoginAttemptFormatter extends LoginAttemptFormatter<EmailLoginAttempt> {
    @Override
    public HashMap<String, String> format(EmailLoginAttempt loginAttempt) {
        return new HashMap<>() {{
            put("ip", loginAttempt.ip());
            put("email", loginAttempt.email());
        }};
    }
}
