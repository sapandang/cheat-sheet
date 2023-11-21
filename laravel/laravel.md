---
title: "laravel cheatsheet"
description: laravel cheatsheet
---


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

## sending fille as response
```


Route::get('/greeting', function () {
    // return 'Hello World';
    return response()->file('/app/routes/console.php');

});

Route::get('/art/{id}', function ($id) {
    // return 'Hello World';
    return response()->file('/app/assets/articles/'.$id.'.md');

});
```
