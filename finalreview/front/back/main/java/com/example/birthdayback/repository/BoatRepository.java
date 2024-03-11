package com.example.birthdayback.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.birthdayback.entity.Boat;

@Repository
public interface BoatRepository extends JpaRepository<Boat,Long> {

}
