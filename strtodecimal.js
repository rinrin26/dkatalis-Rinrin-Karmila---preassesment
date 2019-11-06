
var num = (["33%", "98.1%", "56.44%", "100%"])

var convertToDecimal = function convertToDecimal(num) {
    var result = num //
    for (let i=0; i<num.length; i++){
      result [i] = parseDouble(num[i])/100;
    }
      return result
  }
  
  console.log(convertToDecimal(["33%", "98.1%", "56.44%", "100%"]))