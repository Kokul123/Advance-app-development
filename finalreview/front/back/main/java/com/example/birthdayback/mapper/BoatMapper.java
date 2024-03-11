package com.example.birthdayback.mapper;

import com.example.birthdayback.dto.BoatDto;
import com.example.birthdayback.entity.Boat;

public class BoatMapper {
    
    public static BoatDto mapToboatDto(Boat boat)
    {
        return new  BoatDto(
            boat.getId(),
            boat.getName(),
            boat.getAmount(),
            boat.getFlavour(),
            boat.getTheme(),
            boat.getQuantity(),
            boat.getImageUrl()
        );
    }

    public static Boat mapToboat(BoatDto boatDto)
    {
        return new Boat(
            boatDto.getId(),
            boatDto.getName(),
            boatDto.getAmount(),
            boatDto.getFlavour(),
            boatDto.getTheme(),
            boatDto.getQuantity(),
            boatDto.getImageUrl()
        );
    }

    public static Boat mapToBoat(BoatDto cakeDto) {
        return new Boat(
            cakeDto.getId(),
            cakeDto.getName(),
            cakeDto.getAmount(),
            cakeDto.getFlavour(),
            cakeDto.getTheme(),
            cakeDto.getQuantity(),
            cakeDto.getImageUrl()
        );
    }
}
