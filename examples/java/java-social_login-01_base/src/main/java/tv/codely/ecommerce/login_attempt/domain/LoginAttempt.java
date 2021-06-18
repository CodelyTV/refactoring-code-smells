package tv.codely.ecommerce.login_attempt.domain;

public abstract class LoginAttempt {
    private final String ip;

    public LoginAttempt(String ip) {
        this.ip = ip;
    }

    public String ip() {
        return ip;
    }
}
