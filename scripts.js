const changeSquare = function (id) {
  if (document.getElementById(id).textContent == "") {
    document.getElementById(id).textContent = "X"
  } else if (document.getElementById(id).textContent == 'X') {
    document.getElementById(id).textContent = "O"
  } else if (document.getElementById(id).textContent == 'O') {
    document.getElementById(id).textContent = "X"
  }
}




