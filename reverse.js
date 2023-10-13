var string = "Sivani Is a Good Girl";
console.log(string);

var reverseallstrings = reverseWord(string,"");

var output = reverseWord(reverseallstrings," ");
console.log(output);

function reverseWord(string,separator){
  return string.split(separator).reverse().join(separator);
}
