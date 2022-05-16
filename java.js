


  function myFunction() {
    document.getElementById("six").classList.toggle("show");
  }
  window.onclick = function(event) {
    if (!event.target.matches('.two')) {
      var ones = document.getElementsByClassName("five");
      var i;
      for (i = 0; i < ones.length; i++) {
        var openone = ones[i];
        if (openone.classList.contains('show')) {
          openone.classList.remove('show');
        }
      }
    }
  }