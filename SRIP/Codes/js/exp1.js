function move() {
		xa();
		xb();
		xc();
		xd();
		ya();
		yb();
		yc();
		yd();
		w1();
		w2();
	}
	function xa() {
  var elem = document.getElementById("xabox");   
  var pos = 167;
  var id = setInterval(frame, 200);
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
  var id = setInterval(frame, 200);
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
  var id = setInterval(frame, 200);
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
  var id = setInterval(frame, 200);
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
  var id = setInterval(frame, 200);
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
  var pos = 340;
  var id = setInterval(frame, 200);
  function frame() {
    if (pos == 395) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + 'px'; 
         }
  }
}
	function xd() {
  var elem = document.getElementById("xdt");   
  var pos = 360;
  var id = setInterval(frame, 200);
  function frame() {
    if (pos == 305) {
      clearInterval(id);
    } else {
      pos--; 
      elem.style.top = pos + 'px'; 
         }
  }
}
	function yd() {
  var elem = document.getElementById("ydt");   
  var pos = 290;
  var id = setInterval(frame, 200);
  function frame() {
    if (pos == 345) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + 'px'; 
         }
  }
}
	 
	function w1() {
  var elem = document.getElementById("dot1");   
  var pos = 393;
 var id = setInterval(frame, 213);
  function frame() {
    if (pos == 341) {
      clearInterval(id);
    } else {
      pos--; 
	elem.style.top = pos + 'px'; 
       }
  }
}
	function w2() {
  var elem = document.getElementById("dot2");   
  var pos = 320;
 var id = setInterval(frame, 353);
  function frame() {
    if (pos == 351) {
      clearInterval(id);
    } else {
      pos++; 
	elem.style.top = pos + 'px'; 
       }
  }
}
