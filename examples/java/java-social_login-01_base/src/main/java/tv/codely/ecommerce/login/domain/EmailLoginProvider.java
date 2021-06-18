package tv.codely.ecommerce.login.domain;

public final class EmailLoginProvider extends LoginProvider {
    private final String email;
    private final String password;

    public EmailLoginProvider(String email, String password, String ip) {
        super("email", ip);

        this.email    = email;
        this.password = password;
    }
}
