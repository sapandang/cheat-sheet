---
title: "php cheatsheet"
description: php cheatsheet
---

# Parse the JSON from POST request

```php
<?php

//GET the JSON DATA
$data = json_decode(file_get_contents('php://input'), true);
$encodedJson = json_encode($data);		
if($encodedJson=="null")
{
    http_response_code(500);
    echo "error parsing request";
    return;
}else{
    //Encoding success
    //echo "==>".$encodedJson;
}
//json parsing success
$encodedJson = json_decode($encodedJson,true);

//fetch the parameter
$loginId=$encodedJson['loginId'];
$loginType=$encodedJson['type'];
$loginPass=$encodedJson['pass'];

?>
```

