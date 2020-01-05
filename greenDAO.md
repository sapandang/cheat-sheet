# greenDAO: Android ORM for your SQLite database

## Create DB Table
> Rebuild the project and it will generate the code
```java
@Entity(indexes = {
    @Index(value = "text, date DESC", unique = true)
})
public class FormSchemaModel {

    @Id
    private Long id;

    @NotNull
    private String text;
    private Date date;
    ...
```    

## Creating session
> initalising session in `Application` class i.e `public class App extends Application`
```java
DaoMaster.DevOpenHelper helper = new DaoMaster.DevOpenHelper(this, ENCRYPTED ? "DBNAME-encrypted" : "DBNAME");
Database db = ENCRYPTED ? helper.getEncryptedWritableDb("super-secret") : helper.getWritableDb();
DaoSession daoSession = new DaoMaster(db).newSession();
Global.daoSession=daoSession; //store in global
```

## Running select query
```java
    private ArrayList<FormSchemaModel> isFormRegistered(String formCode)
    {
        DaoSession daoSession = Global.daoSession;
        FormSchemaModelDao mFormSchemaModelDao = daoSession.getFormSchemaModelDao();
        QueryBuilder<FormSchemaModel> qb = mFormSchemaModelDao.queryBuilder();
        qb.where(FormSchemaModelDao.Properties.FormCode.eq(formCode));
        return  (ArrayList<FormSchemaModel>) qb.list();

    }
```    
