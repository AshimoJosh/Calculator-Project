const screen= document.querySelector(".screen")
const buttons= document.querySelectorAll("button")
const SpecialChars= ["%", "*", "/", "+", "-", "=" ]
let output=""

//our calculation function
const calculate = (btnvalue) => {
// to evaluate when equal to is pressed
  if (btnvalue=== "=" && btnvalue !==""){
    output=eval(output.replace("%", "/100"))
  }
//to clear screen
  else if(btnvalue==="AC"){
    output=""
  }
  // to delete an input
  else if (btnvalue=== "DEL" ){
    output=output.toString().slice(0, -1)
  }
  //what to do when only special characters a put in
 else {
  if (output=== "" && SpecialChars.includes(btnvalue)) return
  output += btnvalue;
 }
//outputting the evaluated value which is stored in our output variable to the screen
screen.value=output
}

//now we add the event listner to buttons then call the calculator function we created above
buttons.forEach((button)=>{
  button.addEventListener("click", (e) => calculate(e.target.dataset.value))
})