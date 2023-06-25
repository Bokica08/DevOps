package mk.ukim.finki.tech_prototype.Service.Impl;

import mk.ukim.finki.tech_prototype.Model.DTO.HotelDTO;
import mk.ukim.finki.tech_prototype.Model.Exception.InvalidArgumentsException;
import mk.ukim.finki.tech_prototype.Model.Hotel;
import mk.ukim.finki.tech_prototype.Repository.HotelRepository;
import mk.ukim.finki.tech_prototype.Service.HotelService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class HotelServiceImpl implements HotelService {
    private final HotelRepository hotelRepository;

    public HotelServiceImpl(HotelRepository hotelRepository) {
        this.hotelRepository = hotelRepository;
    }

    @Override
    public Optional<Hotel> post(Double x, Double y, String name, String city, String street, String houseNumber, String website, String phoneNumber, int stars) {
        return Optional.of(hotelRepository.save(new Hotel(x, y, name, city, street, houseNumber, website, phoneNumber, stars)));
    }

    @Override
    public Optional<Hotel> post(HotelDTO hotelDTO) {
        Hotel hotel = new Hotel(hotelDTO.getX(), hotelDTO.getY(), hotelDTO.getName(), hotelDTO.getCity(), hotelDTO.getStreet(), hotelDTO.getHouseNumber(), hotelDTO.getWebsite(), hotelDTO.getPhoneNumber(), hotelDTO.getStars());
        if(hotelDTO.getDescription()!=null && !hotelDTO.getDescription().isEmpty())
        {
            hotel.setDescription(hotelDTO.getDescription());
        }
        if(hotelDTO.getImagePath()!=null && !hotelDTO.getImagePath().isEmpty())
        {
            hotel.setImagePath(hotelDTO.getImagePath());
        }
        return Optional.of(hotelRepository.save(hotel));
    }

    @Override
    public List<Hotel> findAll() {
        return hotelRepository.findAll();
    }

    @Override
    public Optional<Hotel> findById(Long id) {
        return hotelRepository.findById(id);
    }

    @Override
    public Optional<Hotel> edit(Long id, Double x, Double y, String name, String city, String street, String houseNumber, String website, String phoneNumber, int stars, String description, String imagePath) {
        Hotel hotel = hotelRepository.findById(id).orElseThrow(InvalidArgumentsException::new);
        hotel.setX(x);
        hotel.setY(y);
        hotel.setName(name);
        hotel.setCity(city);
        hotel.setStreet(street);
        hotel.setHouseNumber(houseNumber);
        hotel.setWebsite(website);
        hotel.setPhoneNumber(phoneNumber);
        hotel.setStars(stars);
        if(description!=null && !description.isEmpty())
        {
            hotel.setDescription(description);
        }
        if(imagePath!=null && !imagePath.isEmpty())
        {
            hotel.setImagePath(imagePath);
        }
        return Optional.of(hotelRepository.save(hotel));
    }

    @Override
    public Optional<Hotel> edit(Long id, HotelDTO hotelDTO) {
        Hotel hotel = hotelRepository.findById(id).orElseThrow(InvalidArgumentsException::new);
        hotel.setX(hotelDTO.getX());
        hotel.setY(hotelDTO.getY());
        hotel.setName(hotelDTO.getName());
        hotel.setCity(hotelDTO.getCity());
        hotel.setStreet(hotelDTO.getStreet());
        hotel.setHouseNumber(hotelDTO.getHouseNumber());
        hotel.setWebsite(hotelDTO.getWebsite());
        hotel.setPhoneNumber(hotelDTO.getPhoneNumber());
        hotel.setStars(hotelDTO.getStars());
        if(hotelDTO.getDescription()!=null && !hotelDTO.getDescription().isEmpty())
        {
            hotel.setDescription(hotelDTO.getDescription());
        }
        if(hotelDTO.getImagePath()!=null && !hotelDTO.getImagePath().isEmpty())
        {
            hotel.setImagePath(hotelDTO.getImagePath());
        }
        return Optional.of(hotelRepository.save(hotel));
    }

    @Override
    public Optional<Hotel> findByName(String name) {
        return hotelRepository.findHotelByNameIgnoreCase(name);
    }

    @Override
    public List<Hotel> findAllContainingName(String name) {
        return hotelRepository.findHotelsByNameContainingIgnoreCase(name);
    }

    @Override
    public List<Hotel> findByCity(String city) {
        return hotelRepository.findHotelsByCityIgnoreCase(city);
    }

    @Override
    public List<Hotel> findByStars(int stars) {
        return hotelRepository.findHotelsByStars(stars);
    }
}
