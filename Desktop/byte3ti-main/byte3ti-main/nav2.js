fetch('nav.html')
  .then(res => res.text())
  .then(text => {
    let oldelem = document.querySelector('script#replace_with_nav')
    let newelem = document.createElement('div')
    newelem.innerHTML = text
    oldelem.parentNode.replaceChild(newelem, oldelem)
    document.getElementById("navbar").style.padding = "3px";
    document.getElementById("navbar").style.background = "#ffffff";
  })