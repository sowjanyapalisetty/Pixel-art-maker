  // set variables using const which are global
  const $colorPicker = document.getElementById("colorPicker");
  const $sizePicker = document.getElementById("sizePicker");
  const $table = document.getElementById("pixel_canvas");

  // add EvenLlistener to select size of the grid
  $sizePicker.addEventListener('submit', function() {
    event.preventDefault();
    // get input data for the grid using let 
    let width = document.getElementById("input_width").value;
    let height = document.getElementById("input_height").value;
    makeGrid(width, height);
  })

  // To make grid
  function makeGrid(width, height) {
    $table.innerHTML = '';
    for (let row = 0; row < height; row++) {
      let newRow = $table.insertRow();
        for (let cell= 0; cell < width; cell++ ) {
          let newCell = newRow.insertCell();
          // add new cell with onClick event to change color
          newCell.onclick = changeColor;
        }
    }
  }

  // change the color of the clicked cell to current color
  function changeColor() {
    this.style.background = $colorPicker.value;
  }
