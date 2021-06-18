package tv.codely.ecommerce.sign_up.domain;

public final class GitHubSignUpProvider extends SignUpProvider {
    private final String username;
    private final String secretKey;

    public GitHubSignUpProvider(String username, String secretKey) {
        super("github");

        this.username  = username;
        this.secretKey = secretKey;
    }
}
