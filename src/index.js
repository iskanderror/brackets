module.exports = function check(str, bracketsConfig) {
  // your solution
  
  if (str.length%2 != 0) {
    return false;
  }

  let halfLength = str.length/2;
  let bracketsStack = [];
  for (let i=0; i<str.length; i++) {
    let lastStackSign = bracketsStack[bracketsStack.length-1];
    let sample = [lastStackSign, str[i]];
    if (checkBrackets(sample,bracketsConfig)){
      bracketsStack.pop();
    } else {
      bracketsStack.push(str[i]);
    }
  }
  if (bracketsStack.length > 0){
    return false
  }
  return true;
}

function checkBrackets(sample, bracketsConfig){
  for (let i=0; i< bracketsConfig.length; i++) {
    if ( sample[0] === bracketsConfig[i][0] && sample[1] === bracketsConfig[i][1] ) {
      return true;
    }
  }
  return false;
}
