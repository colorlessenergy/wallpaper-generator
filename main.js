/*
  Generate a wall paper that uses canvas
*/

let canvas = document.createElement('canvas');
let context = canvas.getContext('2d');

let textToDisplayForm = document.querySelector('#textToDisplay');

// get height and width of the screen
let width = window.innerWidth;
let height = window.innerHeight;
canvas.width = width;
canvas.height = height;
context.fillRect(0,0,width,height);

// styles for the way the text will appear
context.font = "25px Arial";
context.fillStyle = "white";


textToDisplayForm.addEventListener("submit", function (event) {
  event.preventDefault();
  // my name and phone number
  context.fillText(textToDisplayForm.display1.value, 10, height - 50);

  // convert the canvas to an image
  let image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");

  // link the image to the a tag so it is downloadable
  let a = document.querySelector('a');
  a.href = image;
});

