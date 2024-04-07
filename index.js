function isPalindrome(word) {
  const newpal=word.toLowerCase();
  const charachters=newpal.split('');
  const inverseWord=charachters.reverse();
  const bind=inverseWord.join('')
  const latepal=bind;
  if(newpal===latepal){
    return true;
  }else{
    return false;
  }

}


 
/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;