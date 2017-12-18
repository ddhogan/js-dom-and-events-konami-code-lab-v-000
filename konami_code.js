const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  let index = 0;
  document.body.addEventListener('keydown', function(e) {
    const key = parseInt(e.which || e.detail);

    if (key === code[index]) {
      // console.log("correct")
      index++;

      if (index === code.length) {
        alert('KONAMI!');
        index = 0;
      }
    } else {
      // console.log("no konami, try again")
      index = 0;
    }
  });
}