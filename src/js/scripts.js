/* Open when someone clicks on the span element */
    function openNav() {
    document.getElementById("myNav").style.width = "100%";
    document.getElementById("OpenBtn").style.visibility = "hidden";
    document.body.style.overflowY = "hidden";
  }

  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    document.getElementById("OpenBtn").style.visibility = "visible";
    document.body.style.overflowY = "auto";
  } 