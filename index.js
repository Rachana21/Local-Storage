var savedColor = localStorage.getItem('color'); //grabs color from local storage

var newColor = $('.color-here');

newColor.css('backgroundColor', savedColor); //sets color of div to  our savedColor

var changeColorBtn = $('.change-color');

changeColorBtn.on("click", changeColor);

function changeColor() {
  var color = $('.color').val();
  localStorage.setItem('color', color) // save current color to local storage
  newColor.css('backgroundColor', color);
}
