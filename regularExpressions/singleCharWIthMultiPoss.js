/*
Match Single Character with Multiple Possibilities
You learned how to match literal patterns (/literal/) and wildcard character (/./). Those are the extremes of regular expressions, where one finds exact matches and the other matches everything. There are options that are a balance between the two extremes.

You can search for a literal pattern with some flexibility with character classes. Character classes allow you to define a group of characters you wish to match by placing them inside square ([ and ]) brackets.

For example, you want to match bag, big, and bug but not bog. You can create the regex /b[aiu]g/ to do this. The [aiu] is the character class that will only match the characters a, i, or u.

let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
bigStr.match(bgRegex);
bagStr.match(bgRegex);
bugStr.match(bgRegex);
bogStr.match(bgRegex);
In order, the four match calls would return the values ["big"], ["bag"], ["bug"], and null.

Use a character class with vowels (a, e, i, o, u) in your regex vowelRegex to find all the vowels in the string quoteSample.

Note: Be sure to match both upper- and lowercase vowels.


*/

let myStr = "i have a CAR of Nine LANKHS On ROAD price";
let myRegex = /[aeiou]/gi;
let result = myStr.match(myRegex);
console.log(result);
/*
[
  'i', 'a', 'e', 'a',
  'A', 'o', 'i', 'e',
  'A', 'O', 'O', 'A',
  'i', 'e'
]
*/