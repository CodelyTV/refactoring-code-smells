package tv.codely.ecommerce.login_attempt.infrastructure;

import tv.codely.ecommerce.login_attempt.domain.LoginAttempt;
import tv.codely.ecommerce.login_attempt.domain.LoginAttemptRepository;

import java.util.HashMap;

public final class SdkAuth0LoginAttemptRepository implements LoginAttemptRepository {
    @Override
    public HashMap<String, String> save(LoginAttempt loginAttempt) throws Exception {
        return loginAttempt.format();
    }
}
