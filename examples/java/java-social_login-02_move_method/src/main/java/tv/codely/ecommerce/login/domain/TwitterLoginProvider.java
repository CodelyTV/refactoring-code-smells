package tv.codely.ecommerce.login.domain;

public final class TwitterLoginProvider extends LoginProvider {
    private String username;
    private String token;

    public TwitterLoginProvider(String username, String token, String ip) {
        super("twitter", ip);

        this.username = username;
        this.token    = token;
    }
}
