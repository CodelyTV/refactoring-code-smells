package tv.codely.ecommerce.login_attempt.domain;

import java.util.HashMap;

public final class TwitterLoginAttempt extends LoginAttempt {
    private final String username;

    public TwitterLoginAttempt(String ip, String username) {
        super(ip);

        this.username = username;
    }

    @Override
    public HashMap<String, String> format() {
        return new HashMap<>() {{
            put("ip", ip());
            put("username", username());
        }};
    }

    public String username() {
        return username;
    }
}
