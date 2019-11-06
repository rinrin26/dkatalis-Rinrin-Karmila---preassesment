

var inputWords = [ 'Apple','Banana' ,'Durian']


function countWords(inputWords){
    return inputWords.reduce(function(wordCount, currentValue){
      if (!wordCount[currentValue]){
        wordCount[currentValue] = 1;
      } else {
        wordCount[currentValue] = wordCount[currentValue] + 1;
      }
      return wordCount;
    },{});
  }
  
  module.exports = countWords;

console.log(countWords(inputWords))