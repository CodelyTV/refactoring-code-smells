package tv.codely.ecommerce.sign_up.domain;

public final class TwitterSignUpProvider extends SignUpProvider {
    private String username;
    private String token;

    public TwitterSignUpProvider(String username, String token) {
        super("twitter");

        this.username = username;
        this.token    = token;
    }
}
