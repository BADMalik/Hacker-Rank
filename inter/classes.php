<?php

interface iPerson {
    function speak ();
}

Class Person implements iPerson{
    function speak () {
        echo "Hello";
    }
}

Class Student implements iPerson {
    function speak () {
        echo "Hi";
    }
}

function animalSound(iPerson $animal) {
    return $animal->makeSound();
}

echo animalSound(new Person());

?>