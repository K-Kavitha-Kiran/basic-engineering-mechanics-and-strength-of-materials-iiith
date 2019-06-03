function xa() {
  var elem = document.getElementById("xabox");   
  var pos = 167;
  var id = setInterval(frame, 150);
  function frame() {
    if (pos == 112) {
      clearInterval(id);
    } else {
      pos--; 
      elem.style.top = pos + 'px'; 
       }
  }
}
function xb() {
  var elem = document.getElementById("xbbox");   
  var pos = 222;
  var id = setInterval(frame, 150);
  function frame() {
    if (pos == 167) {
      clearInterval(id);
    } else {
      pos--; 
      elem.style.top = pos + 'px'; 
         }
  }
}
function xc() {
  var elem = document.getElementById("xcbox");   
  var pos = 260;
  var id = setInterval(frame, 150);
  function frame() {
    if (pos == 205) {
      clearInterval(id);
    } else {
      pos--; 
      elem.style.top = pos + 'px'; 
         }
  }
}
    function ya() {
  var elem = document.getElementById("yabox");   
  var pos = 476;
  var id = setInterval(frame, 150);
  function frame() {
    if (pos == 531) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + 'px'; 
       }
  }
}
function yb() {
  var elem = document.getElementById("ybbox");   
  var pos = 438;
  var id = setInterval(frame, 150);
  function frame() {
    if (pos == 493) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + 'px'; 
         }
  }
}
function yc() {
  var elem = document.getElementById("ycbox");   
  var pos = 300;
  var id = setInterval(frame, 150);
  function frame() {
    if (pos == 355) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + 'px'; 
         }
  }
}
