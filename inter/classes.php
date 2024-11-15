<?php

interface iPerson
{
    function speak();
}

class Person implements iPerson
{
    function speak()
    {
        echo "Hello";
    }
}

class Student implements iPerson
{
    function speak()
    {
        echo "Hi";
    }
}

function animalSound(iPerson $animal)
{
    return $animal->speak();
}

echo animalSound(new Person());
