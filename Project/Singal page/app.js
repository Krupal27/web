const targetimage=document.getElementById("mainproduct")

let children = document.getElementsByClassName("multiimg");
 function handleClick(event) {
    console.log(event.target.tagName);
    if (event.target.tagName.toLowerCase() === 'img') {
      var srcPath = event.target.src;
      targetimage.setAttribute("src",srcPath)
    }
  }

  for (var i = 0; i < children.length; i++) {
    children[i].addEventListener('click', handleClick);
  }