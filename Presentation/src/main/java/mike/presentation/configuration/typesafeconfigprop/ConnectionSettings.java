package mike.presentation.configuration.typesafeconfigprop;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;
import org.springframework.validation.annotation.Validated;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import java.net.InetAddress;

@Component
@Validated
@ConfigurationProperties(prefix="connection")
public class ConnectionSettings {
    private String username;

//    @Valid
//    @NotNull
    private InetAddress remoteAddress;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public InetAddress getRemoteAddress() {
        return remoteAddress;
    }

    public void setRemoteAddress(InetAddress remoteAddress) {
        this.remoteAddress = remoteAddress;
    }

    @Override
    public String toString() {
        return "ConnectionSettings{" +
                "username='" + username + '\'' +
                ", remoteAddress=" + remoteAddress.toString() +
                '}';
    }
}
