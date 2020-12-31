function displayNavMenu() {
    var x = document.getElementById("nav-header");
    if (x.className === null) {
      x.className = "responsive";
    } else {
      x.className = null;
    }
  }

function add5(x){return x + 5}