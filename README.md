# Mind Melting IIFE, XHR & CallBacks

### Description
1. Create two JSON files. One should contain an array of carnivores, and the other should contain an array of herbivores.
1. Create an IIFE with the name of `Predator`.
1. Predator should have two private arrays to store carnivores and herbivores.
1. Predator should expose two public functions to load each JSON files and stores the array of animals in the appropriate private array. Each of those functions should accept one argument that will store the callback function to be executed.
1. In the `iife-xhr.js` file, define two functions that will be executed after each type of animal is loaded to then display those animals in your DOM. Example given below.
1. In the Predator IIFE, invoke the callback function, passed in from `iife-xhr.js`, after each file is loaded.



### Screenshots
![Screenshot](/img/melting.png)




### How to run:
```

http-server -p 8080
```

This will show at:
'http://localhost:8080'

### Contributors:
-[Bradley Guthrie](https://github.com/guthb)