---
title: Anti ads blocker for blogger.com website
description: Show popup when adblocker are enabled in the blogger.com website
tags: adblock,blogger.com
---


# Anti ad Block for blogger.com website

* Place inside <head></head>

```html
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```


* Style place inside <head> </head>
```css
<style>
/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

/* Modal Content */
.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
    width:660px; 
    z-index:41;
    padding:30px; 
    -webkit-box-shadow:0 0 10px rgba(0,0,0,0.4);
    -moz-box-shadow:0 0 10px rgba(0,0,0,0.4); 
    box-shadow:0 0 10px rgba(0,0,0,0.4);
}
</style>
```

* Body place inside <body> </body>
```html
<!-- The Modal -->
<div id="myModal" class="modal">

  <!-- Modal content -->
  <div class="modal-content">
     <img src="https://github.com/sapandang/ISTQB/raw/master/how_to_disable.gif" />
  </div>

</div>

<script>
// Get the modal
var modal = document.getElementById("myModal");
axios.get('https://raw.githubusercontent.com/sapandang/ISTQB/master/ads.txt')
    .then(function (response) {
  
    })
    .catch(function (error) {
       modal.style.display = "block";
    });  
</script>
```


