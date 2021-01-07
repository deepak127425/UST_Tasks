package com.ust.flightreservation.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ust.flightreservation.entities.Role;

public interface RoleRepository extends JpaRepository<Role, Long> {

}
