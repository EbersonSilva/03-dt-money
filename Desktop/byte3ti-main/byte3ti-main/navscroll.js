// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 1) {
    document.getElementById("navbar").style.padding = "3px";
    document.getElementById("navbar").style.background = "#1d01c3";
  } else {
    document.getElementById("navbar").style.padding = "20px";
    document.getElementById("navbar").style.background = "transparent";
  }
}

function navhambClick() {
  document.getElementById("navbar").style.padding = "3px";
  document.getElementById("navbar").style.background = "#1d01c3";
}