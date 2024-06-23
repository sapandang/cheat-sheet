# JPA Model

## Sample Model

```java
import io.hypersistence.utils.hibernate.type.json.JsonType;
import jakarta.persistence.*;
import org.hibernate.annotations.Type;

import java.util.List;
import java.util.Map;
import java.util.Objects;

@Entity
@Table(name = "elements",
        uniqueConstraints={
                @UniqueConstraint(columnNames = {"pageName", "elementName"})
        })
public class Pages {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String pageName;

    @Column(nullable = false)
    private String elementName;


    @Column(columnDefinition = "jsonb")
    @Type(JsonType.class)
    private Map<String,Object> locators;

    public Long getId() {
        return id;
    }

    public Pages setId(Long id) {
        this.id = id;
        return this;
    }

    public String getPageName() {
        return pageName;
    }

    public Pages setPageName(String pageName) {
        this.pageName = pageName;
        return this;
    }

    public String getElementName() {
        return elementName;
    }

    public Pages setElementName(String elementName) {
        this.elementName = elementName;
        return this;
    }

    public Map<String, Object> getLocators() {
        return locators;
    }

    public Pages setLocators(Map<String, Object> locators) {
        this.locators = locators;
        return this;
    }
}
```

## storing json Object in postgrs jsonb column
```java
    @Column(columnDefinition = "jsonb")
    @Type(JsonType.class)
    private Map<String,Object> locators;
```
example
```json
{
"xpath":["ass","asas"]
}
```

