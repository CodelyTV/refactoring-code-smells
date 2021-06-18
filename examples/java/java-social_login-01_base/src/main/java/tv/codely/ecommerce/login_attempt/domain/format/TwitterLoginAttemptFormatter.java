package tv.codely.ecommerce.login_attempt.domain.format;

import tv.codely.ecommerce.login_attempt.domain.TwitterLoginAttempt;

import java.util.HashMap;

public final class TwitterLoginAttemptFormatter extends LoginAttemptFormatter<TwitterLoginAttempt> {
    @Override
    public HashMap<String, String> format(TwitterLoginAttempt loginAttempt) {
        return new HashMap<>() {{
            put("ip", loginAttempt.ip());
            put("username", loginAttempt.username());
        }};
    }
}
