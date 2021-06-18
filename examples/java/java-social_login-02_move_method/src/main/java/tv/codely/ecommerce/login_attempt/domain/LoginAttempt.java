package tv.codely.ecommerce.login_attempt.domain;

import java.util.HashMap;

public abstract class LoginAttempt {
    private final String ip;

    public LoginAttempt(String ip) {
        this.ip = ip;
    }

    public abstract HashMap<String, String> format();

    public String ip() {
        return ip;
    }
}
