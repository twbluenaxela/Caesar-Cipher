
function rot13(str) {
    console.log("------------------------------------------")
    console.log("ORIGINAL STRING")
    console.log(str)
    let abc = ['A','B','C','D','E','F','G','H','I','J','K',
  'L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  let newStr = []
  let splitStr = str.split("")
  console.log(splitStr)
  let result = splitStr.map(function(word){
    let nonAlpha = /[\s?.!]/
    if(abc.indexOf(word) >= 13 && nonAlpha.test(word) == false){
      let remainder = abc.indexOf(word) - 13
      console.log(remainder)
      return abc[remainder]
    }else if(abc.indexOf(word) <= 13 && nonAlpha.test(word) == false){
      let remainder = abc.indexOf(word) + 13
      return abc[remainder]
    }else if(nonAlpha.test(word) == true){
      let remainder = word.match(nonAlpha)
      return word
    }
  })
  let final = result.join("")
    console.log("FINAL RESULT: ")
  console.log(final)
    return final;
  }
  
  rot13("SERR PBQR PNZC");