# commands using my docker laravel dev env


## install laravel
```
composer create-project laravel/laravel ./
```

## nginx setup
* laravel should point to public dir
```
root /app/public;
```

## running php artisian serve
```
php artisan serve --host=0.0.0.0 --port=8080
```
> host should be 0.0.0.0 when running inside docker
