function countLetters(given) {

  var unique = given.split(" ").join("");
  var letterCount = {};

  for (var i = 0; i < unique.length; i++) {
    var char = unique[i];
    if (letterCount[char] === undefined) {
      letterCount[char] = 1;
    } else {
      letterCount[char]++ ;
    }

}
return letterCount;
}

console.log(countLetters("lighthouse in the house"));
console.log(countLetters("hummitzsch"));