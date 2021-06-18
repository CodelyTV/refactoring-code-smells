package tv.codely.ecommerce.login_attempt.domain;

import java.util.HashMap;

public final class EmailLoginAttempt extends LoginAttempt {
    private final String email;

    public EmailLoginAttempt(String ip, String email) {
        super(ip);

        this.email = email;
    }

    @Override
    public HashMap<String, String> format() {
        return new HashMap<>() {{
            put("ip", ip());
            put("email", email());
        }};
    }

    public String email() {
        return email;
    }
}
