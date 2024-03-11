package com.example.birthdayback.service.Implementation;

import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.example.birthdayback.dto.BoatDto;
import com.example.birthdayback.entity.Boat;
import com.example.birthdayback.exception.ResourceNotFoundException;
import com.example.birthdayback.mapper.BoatMapper;
import com.example.birthdayback.repository.BoatRepository;
import com.example.birthdayback.service.BoatService;

import lombok.AllArgsConstructor;
import  java.util.List;

@Service
@AllArgsConstructor
public class BoatServiceImpl implements BoatService {
    
    private final  BoatRepository BoatRepository;

    @Override
     public BoatDto createBoat(BoatDto boatDto) {
        Boat Boat = BoatMapper.mapToBoat(boatDto);
        Boat savedBoat = BoatRepository.save(Boat);
        return BoatMapper.mapToboatDto(savedBoat);
    }

    @Override
    public BoatDto getBoatById(Long BoatId) {
        Boat Boat = BoatRepository.findById(BoatId)
                .orElseThrow(() -> new ResourceNotFoundException("Boat not found with id: " + BoatId));
        return BoatMapper.mapToboatDto(Boat);
    }

    @Override
    public List<BoatDto> getAllBoats() {
        List<Boat> Boats = BoatRepository.findAll();
        return Boats.stream().map(BoatMapper::mapToboatDto).collect(Collectors.toList());
    }

    @Override
    public BoatDto updateboat(Long boatId, BoatDto boatDto) {
        Boat existingBoat = BoatRepository.findById(BoatId)
                .orElseThrow(() -> new ResourceNotFoundException("Boat not found with id: " + BoatId));
        Boat updatedBoat = BoatMapper.mapToBoat(boatDto);
        updatedBoat.setId(existingBoat.getId());
        Boat savedBoat = BoatRepository.save(updatedBoat);
        return BoatMapper.mapToboatDto(savedBoat);
    }

    @Override
    public void deleteBoat(Long boatId) {
        BoatRepository.deleteById(boatId);
    }
}
