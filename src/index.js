module.exports = function check(str, bracketsConfig) {
  // your solution
  
  if (str.length%2 != 0) {
    return false;
  }

  let halfLength = str.length/2;
  for (let i = 0; i<halfLength; i++) {
    let sample = [ str[i],str[str.length-1-i] ];
    if ( !checkExternalBrackets(sample,bracketsConfig) ) {
      return false;
    }
  }
  return true;
}

function checkExternalBrackets(sample, bracketsConfig){
  for (let i=0; i< bracketsConfig.length; i++) {
    if ( sample[0] === bracketsConfig[i][0] && sample[1] === bracketsConfig[i][1] ) {
      return true;
    }
  }
  return false;
}