// Function to change the background color to light blue
function changeColor() {
    chrome.tabs.executeScript({
      code: 'document.body.style.backgroundColor = "lightblue";'
    });
  }
  
  // Function to undo the background color change
  function undoColor() {
    chrome.tabs.executeScript({
      code: 'document.body.style.backgroundColor = "";'
    });
  }
  
  document.getElementById('changeColor').addEventListener('click', function() {
    changeColor();
  });
  
  document.getElementById('undoColor').addEventListener('click', function() {
    undoColor();
  });
  