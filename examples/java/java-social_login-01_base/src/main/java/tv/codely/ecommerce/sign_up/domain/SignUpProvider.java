package tv.codely.ecommerce.sign_up.domain;

public abstract class SignUpProvider {
    private String provider;

    public SignUpProvider(String provider) {
        this.provider = provider;
    }
}
