// add function that takes input value
// and applies algorithm to it,
// then if str is a palindrome, add it to array
// and show it for 10 mins

// function to show success/failure
// of palindrome upon pressing button


const array = []
const palChecker = () => {
  let warningMessage, x, y, word

  x = document.getElementById("myText").value
  y = x.toLowerCase()
  word = y.split("").reverse().join("")
  if(y == word && x.length >= 2) {
    // create an <li> with palindrome
    array.push(x)
    document.getElementById("warning").innerHTML
    = `'${x}' is indeed a palindrome! well done!`
    document.getElementById("myText").value=""
    warningMessage = true
  } else if(x.length < 2) {
    document.getElementById("warning").innerHTML
    = `please type more than one character...`
    document.getElementById("myText").value=""
    warningMessage = false
  } else {
    document.getElementById("warning").innerHTML
    = `sorry, '${x}' is not a palindrome! Try again`
    document.getElementById("myText").value=""
    warningMessage = false
  }

  if(warningMessage == false) {
    // color = red
    document.getElementById("warning").style.color = "red";

  } else {
    // color = green
    document.getElementById("warning").style.color = "#73AD21";
  }

  // show array items in ul
  let i, len, text;
    for (i = 0, len = array.length, text = ""; i < len; i++) {
    text += array[i] + "<br>";
}

document.getElementById("palindromes").innerHTML = text;
}
