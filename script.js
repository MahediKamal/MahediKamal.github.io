
// ..........popup functions for "My project " section
function myFunctionGre() {
    var popup = document.getElementById("myPopupGre");
    popup.classList.toggle("show");
}
function myFunctionPuzzle() {
    var popup = document.getElementById("myPopupPuzzle");
    popup.classList.toggle("show");
}
function myFunctionSocket() {
    var popup = document.getElementById("myPopupSocket");
    popup.classList.toggle("show");
}
function myFunctionGword() {
    var popup = document.getElementById("myPopupGword");
    popup.classList.toggle("show");
}
function myFunction3Dcar(){
    var popup = document.getElementById("myPopup3Dcar");
    popup.classList.toggle("show");
}

//................ for navigation bar section
function openPage(pageName, elmnt, color) {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
  
    // Show the specific tab content
    document.getElementById(pageName).style.display = "block";
  
    // Add the specific color to the button used to open the tab content
    elmnt.style.backgroundColor = color;
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();
  