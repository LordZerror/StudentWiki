// Get the modal
var modal = document.getElementById('id01');
// When the user clicks anywhere outside of the login page, the login page gets closed
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}