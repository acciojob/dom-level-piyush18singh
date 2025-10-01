// Get the element with id "level"
const element = document.getElementById("level");

// Function to calculate DOM level
function getDomLevel(el) {
  let level = 0;
  let current = el;

  // Go up through all parents until <html>
  while (current) {
    level++;
    current = current.parentElement;
  }

  return level;
}

// Calculate level
const domLevel = getDomLevel(element);

// Show result in alert
alert(`The level of the element is: ${domLevel}`);
