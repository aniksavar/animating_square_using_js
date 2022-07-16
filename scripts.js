const square = document.getElementById("square");
let positionTop = 50; // Initial Top Position
let positionLeft = 0; // Initial Left Position
let movingDirection = 1; // Conditional Variable to Move the Square According to it's Position. Default Value 1 Means it Will Start with the Given Condition.

setInterval(moveSquare, 100); // Moving the Square in Every 1 Second

// Moving Square Function Starts Here
function moveSquare() {
  let w = window.innerWidth; // Determining the Inner Width of the Browser (To Make Sure the Square Continues Moving Accordingly Even if the Browser's Width Changes)
  let h = window.innerHeight; // Determining the Inner Height of the Browser (To Make Sure the Square Continues Moving Accordingly Even if the Browser's Height Changes)
  // If the Square is Moving Towards Right and Downward
  if (movingDirection == 1) {
    positionLeft += 10;
    positionTop += 10;
    if ((positionTop + 100) >= h) {
      movingDirection = 2;
    }
    if ((positionLeft + 100) >= w) {
      movingDirection = 4;
    }
  }
  // If the Square is Moving Towards Right and Upward
  else if (movingDirection == 2) {
    positionLeft += 10;
    positionTop -= 10;
    if((positionTop - 0) <= 0) {  // To Keep 50px Margin from the While Moving Top (positionTop - 50) can be Used Here.
      movingDirection = 1;
    }
    if ((positionLeft + 100) >= w) {
      movingDirection = 3;
    }
  }
  // If the Square is Moving Towards Left and Upward
  else if (movingDirection == 3) {
    positionLeft -= 10;
    positionTop -= 10;
    if ((positionTop - 0) <= 0) {  // To Keep 50px Margin from the While Moving Top (positionTop - 50) can be Used Here.
      movingDirection = 4;
    }
    else if (positionLeft <= 0) {
      movingDirection = 2;
    }
  }
  // If the Square is Moving Towards Left and Downward
  else if (movingDirection == 4) {
    positionLeft -= 10;
    positionTop += 10;
    if ((positionTop + 100) >= h) {
      movingDirection = 3;
    }
    if (positionLeft <= 0) {
      movingDirection = 1;
    }
  }

  square.style.left = positionLeft + "px"; // Set Left Position After Applying the Moving Condition
  square.style.top = positionTop + "px"; // Set Top Position After Applying the Moving Condition
  
}
// Moving Square Function Ends Here