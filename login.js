/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunctionTwo() {
  document.getElementById("myDropdownTwo").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtnTwo')) {
    var dropdownsTwo = document.getElementsByClassName("dropdown-contentTwo");
    var i;
    for (i = 0; i < dropdownsTwo.length; i++) {
      var openDropdownTwo = dropdownsTwo[i];
      if (openDropdownTwo.classList.contains('show')) {
        openDropdownTwo.classList.remove('show');
      }
    }
  }
}