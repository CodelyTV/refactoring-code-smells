package tv.codely.ecommerce.login_attempt.domain;

public final class TwitterLoginAttempt extends LoginAttempt {
    private final String username;

    public TwitterLoginAttempt(String ip, String username) {
        super(ip);

        this.username = username;
    }

    public String username() {
        return username;
    }
}
