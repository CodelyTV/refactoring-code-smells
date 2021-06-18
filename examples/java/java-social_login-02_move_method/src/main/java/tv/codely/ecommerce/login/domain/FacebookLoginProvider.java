package tv.codely.ecommerce.login.domain;

public final class FacebookLoginProvider extends LoginProvider {
    private final String email;
    private final String hash;

    public FacebookLoginProvider(String email, String hash, String ip) {
        super("facebook", ip);

        this.email = email;
        this.hash  = hash;
    }
}
