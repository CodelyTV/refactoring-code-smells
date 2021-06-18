package tv.codely.ecommerce.login_attempt.infrastructure;

import tv.codely.ecommerce.login_attempt.domain.EmailLoginAttempt;
import tv.codely.ecommerce.login_attempt.domain.LoginAttempt;
import tv.codely.ecommerce.login_attempt.domain.LoginAttemptRepository;
import tv.codely.ecommerce.login_attempt.domain.TwitterLoginAttempt;
import tv.codely.ecommerce.login_attempt.domain.format.EmailLoginAttemptFormatter;
import tv.codely.ecommerce.login_attempt.domain.format.LoginAttemptFormatter;
import tv.codely.ecommerce.login_attempt.domain.format.TwitterLoginAttemptFormatter;

import java.util.HashMap;

public final class SdkAuth0LoginAttemptRepository implements LoginAttemptRepository {
    @Override
    public HashMap<String, String> save(LoginAttempt loginAttempt) throws Exception {
        LoginAttemptFormatter formatter;

        if (loginAttempt instanceof TwitterLoginAttempt) {
            formatter = new TwitterLoginAttemptFormatter();
        } else if (loginAttempt instanceof EmailLoginAttempt) {
            formatter = new EmailLoginAttemptFormatter();
        } else {
            throw new Exception("There are no formatters for that attempt");
        }

        return formatter.format(loginAttempt);
    }
}
