# greenDAO: Android ORM for your SQLite database

## Create DB Table
Rebuild the project and it will generate the code
```java
@Entity(indexes = {
    @Index(value = "text, date DESC", unique = true)
})
public class Note {

    @Id
    private Long id;

    @NotNull
    private String text;
    private Date date;
    ...
```    
