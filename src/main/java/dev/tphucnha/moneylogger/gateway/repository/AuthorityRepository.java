package dev.tphucnha.moneylogger.gateway.repository;

import dev.tphucnha.moneylogger.gateway.domain.Authority;
import org.springframework.data.r2dbc.repository.R2dbcRepository;

/**
 * Spring Data R2DBC repository for the {@link Authority} entity.
 */
public interface AuthorityRepository extends R2dbcRepository<Authority, String> {}
