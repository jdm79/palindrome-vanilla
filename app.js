// add function that takes input value
// and applies algorithm to it,
// then if str is a palindrome, add it to array
// and show it for 10 mins

// function to show success/failure
// of palindrome upon pressing button



const onClick = () => {
  let warningMessage
  let x = document.getElementById("myText").value
  let array = []
  let word = x.split("").reverse().join("")
  if(x == word ) {
    //console.log(`${x} is a palindrome`)
    // create an <li> with palindrome
    //document.getElementById("string").innerHTML = x
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
}
