var natural = require('natural');
var tokenizer = new natural.WordTokenizer();
var tokens1=tokenizer.tokenize("We are animals and person");
var tokens2=tokenizer.tokenize("lots of geese and a penguin");
var tokens3=tokenizer.tokenize("penguins are great");

var nounInflector= new natural.NounInflector();
console.log("animals in singular form is: "+nounInflector.singularize(tokens1[2]));
console.log("person in plural form is: "+nounInflector.pluralize(tokens1[4]));

console.log(tokens2[2]+" in singular form is: "+nounInflector.singularize(tokens2[2]));
console.log(tokens2[5]+" in plural form is: "+nounInflector.pluralize(tokens2[5]));

for(i=0;i<2;i++){
    if(tokens3[i].includes("s")) {
     console.log("there is/are 's' in the array. Might have plural "+
     "words in it. but this is not a good way to check at all.");
    }
}




