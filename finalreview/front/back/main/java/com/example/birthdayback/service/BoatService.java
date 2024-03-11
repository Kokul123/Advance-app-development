package com.example.birthdayback.service;

import com.example.birthdayback.dto.BoatDto;
import java.util.List;

public interface BoatService {

    BoatDto createCake(BoatDto cakeDto);

    BoatDto getCakeById(Long cakeId);

    List<BoatDto> getAllCakes();

    BoatDto updateCake(Long cakeId,BoatDto cakeDto);

    void deleteCake(Long cakeId);

}
