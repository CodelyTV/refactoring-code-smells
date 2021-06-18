package tv.codely.ecommerce.login.domain;

public final class GitHubLoginProvider extends LoginProvider {
    private final String username;
    private final String secretKey;

    public GitHubLoginProvider(String username, String secretKey, String ip) {
        super("github", ip);

        this.username  = username;
        this.secretKey = secretKey;
    }
}
