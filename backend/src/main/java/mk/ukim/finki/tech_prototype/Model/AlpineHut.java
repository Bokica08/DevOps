package mk.ukim.finki.tech_prototype.Model;

import javax.persistence.*;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Entity
@EqualsAndHashCode(callSuper = true)
@Data
@NoArgsConstructor
public class AlpineHut extends Location {
    @Column(nullable = false)
    @NotNull(message = "The location must have info about the altitude")
    @Min(0)
    private int elevation;
    public AlpineHut(Double x, Double y, String name, String city, String street, String houseNumber, int elevation) {
        super(x, y, name, city, street, houseNumber);
        this.elevation=elevation;
    }
}
