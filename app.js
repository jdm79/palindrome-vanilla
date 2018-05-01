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
  if(y == word ) {
    // create an <li> with palindrome
    array.push(x)
    document.getElementById("warning").innerHTML
    = `'${x}' is indeed a palindrome! well done!`
    document.getElementById("myText").value=""
    warningMessage = true
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
    document.getElementById("warning").style.color = "green";
  }

  console.log(array);
}
