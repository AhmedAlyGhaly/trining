// import * as React from 'react';

import { Button } from "@mui/material";


export default function DogYears() {
  const newDate = new Date().getFullYear();
  const myBirth = 1996;
  const myAge = newDate - myBirth;

  let earlyYears = 2;
  let laterYears = myAge - earlyYears;

  earlyYears = 10.5;
  laterYears = laterYears * 4;

  const myAgeInDogYears = laterYears + earlyYears;

  const myName = "Ahmed".toLowerCase();

  function handleClick() {
    console.log(
      `My name is ${myName}. I am  ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`
    );
  }

  return (
    <>
    <Button variant="text">Text</Button>
    <Button onClick={handleClick}>My Dog year </Button>
    </>
  )
}
