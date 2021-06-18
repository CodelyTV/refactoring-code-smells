package tv.codely.ecommerce.login_attempt.infrastructure;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import tv.codely.ecommerce.login_attempt.domain.EmailLoginAttempt;
import tv.codely.ecommerce.login_attempt.domain.LoginAttempt;
import tv.codely.ecommerce.login_attempt.domain.TwitterLoginAttempt;

import java.util.HashMap;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

final class SdkAuth0LoginAttemptRepositoryShould {
    private SdkAuth0LoginAttemptRepository repository;

    @BeforeEach
    protected void setUp() {
        repository = new SdkAuth0LoginAttemptRepository();
    }

    @Test
    void add_an_email_login_attempt() throws Exception {
        EmailLoginAttempt loginAttempt = new EmailLoginAttempt("192.168.1.1", "some@demo.tv");
        HashMap<String, String> expected = new HashMap<>() {{
            put("ip", "192.168.1.1");
            put("email", "some@demo.tv");
        }};

        assertEquals(expected, repository.save(loginAttempt));
    }

    @Test
    void add_a_twitter_login_attempt() throws Exception {
        TwitterLoginAttempt loginAttempt = new TwitterLoginAttempt("192.168.1.2", "codelytv");
        HashMap<String, String> expected = new HashMap<>() {{
            put("ip", "192.168.1.2");
            put("username", "codelytv");
        }};

        assertEquals(expected, repository.save(loginAttempt));
    }

    @Test
    void throw_an_exception_with_an_unknown_login_attempt() {
        LoginAttempt loginAttempt = new LoginAttempt("192.168.1.3") {
            public String name() {
                return "unknown";
            }
        };

        assertThrows(Exception.class, () -> repository.save(loginAttempt));
    }
}
