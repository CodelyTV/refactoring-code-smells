package tv.codely.ecommerce.login_attempt.domain;

public final class EmailLoginAttempt extends LoginAttempt {
    private final String email;

    public EmailLoginAttempt(String ip, String email) {
        super(ip);

        this.email = email;
    }

    public String email() {
        return email;
    }
}
