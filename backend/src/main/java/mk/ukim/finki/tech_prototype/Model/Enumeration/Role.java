package mk.ukim.finki.tech_prototype.Model.Enumeration;

import org.springframework.security.core.GrantedAuthority;

public enum Role implements GrantedAuthority {
    ROLE_ADMIN, ROLE_USER, ROLE_PENDING_ADMIN;

    @Override
    public String getAuthority() {
        return name();
    }
}
