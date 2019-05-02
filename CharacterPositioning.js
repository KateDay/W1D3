function countLetters(given) {

  // var unique = given.split(" ").join("");
  var letterCount = {};

  for (var i = 0; i < given.length; i++) {
    var char = given[i];
    if (letterCount[char] !== undefined) {
      letterCount[char].push([i]);
    } else {
       letterCount[char] = [i] ;
    }

}
return letterCount;
}

console.log(countLetters("lighthouse in the house"));
// console.log(countLetters("hummitzsch"));