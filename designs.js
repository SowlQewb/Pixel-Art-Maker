// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

// Your code goes here!

  const height = $("#input_height").val();
  const width = $("#input_width").val();
  const table = $("#pixel_canvas");

  // Remove previous table
  table.children().remove();

  // Set the table
  for(let r = 0; r < height; r++ ){
    let tr = document.createElement("tr");
    table.append(tr);

  for(let w = 0; w < width; w++){
    let td = document.createElement("td");
    tr.append(td);
    }

  }

  // Submit the form and call function to set the grid
  $("#sizePicker").submit(function(event){
      event.preventDefault();
      makeGrid();
  });

  // Declare clickable mouse event
  let mouseDown = false;

  $("td").mousedown(function(event){
    mouseDown = true;
    const color = $("#colorPicker").val();
    $(this).css("background", color);
    // Mouse drag for drawing
    $("td").mousemove(function(event){
      event.preventDefault();
    // Check if mouse is clicked and being held
    if(mouseDown === true){
      $(this).css("background",color);
    }else{
      mouseDown = false;
  }      
  });
  });

  // Mouse click release
  $("td").mouseup(function(){
    mouseDown = false;
  });

  // Disable dragging when the pointer is outside the table
  $("#pixel_canvas").mouseleave("td",function(){
    mouseDown = false;
  });
}

console.log(makeGrid());