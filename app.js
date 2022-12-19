/* Global Variables */
const generate = document.querySelector("#generate");
const zip = document.querySelector("#zip");
const feelings = document.querySelector("#feelings");
const feeling = document.querySelector(".feeling");
const temp = document.querySelector("#temp")
const d = new Date();
const date = d.toDateString();

const weatherMap = "api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}";
const baseURI = "api.openweathermap.org/data/2.5/weather?lat=";
const key = "57b5fc8ab58ad72513f754322b4313dd";

generate.addEventListener("click", (event) => {
    e.preventDefault();
   // const madeURI = 
});


// Create a new date instance dynamically with JS
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();