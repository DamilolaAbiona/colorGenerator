// Color generator
const colorGenerator = (color) =>{
   if(color) {
    displayColor(color)

}
else{
    const randomColor = Math.floor(Math.random()*1677215).toString(16)
    displayColor(randomColor)

}
}






// Display Color
const displayColor = (color) =>{
 let nameValue = ntc.name(color)
 console.log(nameValue)
 document.body.style.backgroundColor = nameValue[0]
 colorInput.value = nameValue[0]
 colorName.innerHTML = nameValue[1]
  colorValue.innerHTML =nameValue[0]
}
// Event Buttons
genSearch.addEventListener("click", function(){
    colorGenerator(colorInput.value);
} );
genBtn.addEventListener("click", function(){
    colorGenerator();
});