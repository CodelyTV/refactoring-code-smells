package tv.codely.ecommerce.sign_up.domain;

public final class FacebookSignUpProvider extends SignUpProvider {
    private final String email;
    private final String hash;

    public FacebookSignUpProvider(String email, String hash) {
        super("facebook");

        this.email = email;
        this.hash  = hash;
    }
}
