/*
Find More Than the First Match
So far, you have only been able to extract or search a pattern once.

let testStr = "Repeat, Repeat, Repeat";
let ourRegex = /Repeat/;
testStr.match(ourRegex);
Here match would return ["Repeat"].

To search or extract a pattern more than once, you can use the global search flag: g.

let repeatRegex = /Repeat/g;
testStr.match(repeatRegex);
And here match returns the value ["Repeat", "Repeat", "Repeat"]

Using the regex starRegex, find and extract both Twinkle words from the string twinkleStar.

Note
You can have multiple flags on your regex like /search/gi


*/

let twinkleStar ="Twinkle, twinkle, TWINKLE, TwInKlE";
let starRegex = /twinkle/gi;//>>g for all posible and i from no case sensivity;
let result = twinkleStar.match(starRegex);
console.log(result);
// [ 'Twinkle', 'twinkle', 'TWINKLE', 'TwInKlE' ]

