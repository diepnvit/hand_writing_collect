$(document).ready(function () {
  window.canvas = document.getElementById("canvas");
  window.ctx = canvas.getContext("2d");
  window.indexStr = 0;
  window.uuid = uuidv4();
  const abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZĐƠƯÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚÝĂĨŨẢẤẦẨẪẮẰẲẴẺẼẾỀỂỄỈỎỐỒỔỖỚỜỞỠỦỨỪỬỮỲỶỸẬẶỆỘỰỴỊỢẠẸỌỤaceimnorsuvwxzbdhkltđàáâãèéêìíòóôõùúăĩũơưảấầẩẫắằẳẵẻẽếềểễỏốồổỗớờởỡủứừửữỳỷỹýạẹợụọựậặệỉịộjfgpqỵy!”%’()=,-;./0123456789&+:?@";
  let arr = [];
  for (var i = 1; i < abc.length + 1; i++) {
    let obj = {};
    obj['id'] = i;
    obj['name'] = abc[i-1];
    arr.push(obj)
  }
  window.obj = arr;
  console.log(window.obj);
  $('.txt')[0].innerText = obj[window.indexStr].name;
  if (/Mobi|Android/i.test(navigator.userAgent)) {
    
    $('#canvas').attr('width', '600px');
    $('#canvas').attr('height', '900px')
    $('.img-canvas').css({'width': '600px', 'height': '900px'});
    $('.group-btn').css({'bottom': '100px','left': '25%'});
    
  }
  initialize();
});

// works out the X, Y position of the click inside the canvas from the X, Y position on the page

function getPosition(mouseEvent, sigCanvas) {
  var rect = sigCanvas.getBoundingClientRect();
  return {
    X: mouseEvent.clientX - rect.left,
    Y: mouseEvent.clientY - rect.top
  };
}

/*function getPosition(mouseEvent, sigCanvas) {
  var x, y;
  if (mouseEvent.pageX != undefined && mouseEvent.pageY != undefined) {
    x = mouseEvent.pageX;
    y = mouseEvent.pageY;

  } else {
    x = mouseEvent.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
    y = mouseEvent.clientY + document.body.scrollTop + document.documentElement.scrollTop;
  }

  return {
    X: x - sigCanvas.offsetLeft,
    Y: y - sigCanvas.offsetTop
  };
}*/

function initialize() {
  // get references to the canvas element as well as the 2D drawing context
  var sigCanvas = document.getElementById("canvas");
  var context = sigCanvas.getContext("2d");
  // context.strokeStyle = "#f8920f";
  context.lineJoin = "round";
  context.lineWidth = 30;

  // Add background image to canvas - remove for blank white canvas
  // var background = new Image();
  // background.src = "./img.png";
  // Make sure the image is loaded first otherwise nothing will draw.
  // background.onload = function () {
  //   context.drawImage(background, 0, 0);
  // }

  // This will be defined on a TOUCH device such as iPad or Android, etc.
  var is_touch_device = 'ontouchstart' in document.documentElement;

  if (is_touch_device) {
    // create a drawer which tracks touch movements
    var drawer = {
      isDrawing: false,
      touchstart: function (coors) {
        context.beginPath();
        context.moveTo(coors.x, coors.y);
        this.isDrawing = true;
      },
      touchmove: function (coors) {
        if (this.isDrawing) {
          context.lineTo(coors.x, coors.y);
          context.stroke();
        }
      },
      touchend: function (coors) {
        if (this.isDrawing) {
          this.touchmove(coors);
          this.isDrawing = false;
        }
      }
    };

    // create a function to pass touch events and coordinates to drawer
    function draw(event) {

      // get the touch coordinates.  Using the first touch in case of multi-touch
      var coors = {
        x: event.targetTouches[0].pageX,
        y: event.targetTouches[0].pageY
      };

      // Now we need to get the offset of the canvas location
      var obj = sigCanvas;

      if (obj.offsetParent) {
        // Every time we find a new object, we add its offsetLeft and offsetTop to curleft and curtop.
        do {
          coors.x -= obj.offsetLeft;
          coors.y -= obj.offsetTop;
        }
        // The while loop can be "while (obj = obj.offsetParent)" only, which does return null
        // when null is passed back, but that creates a warning in some editors (i.e. VS2010).
        while ((obj = obj.offsetParent) != null);
      }

      // pass the coordinates to the appropriate handler
      drawer[event.type](coors);
    }

    // attach the touchstart, touchmove, touchend event listeners.
    sigCanvas.addEventListener('touchstart', draw, false);
    sigCanvas.addEventListener('touchmove', draw, false);
    sigCanvas.addEventListener('touchend', draw, false);

    // prevent elastic scrolling
    sigCanvas.addEventListener('touchmove', function (event) {
      event.preventDefault();
    }, false);
  } else {

    // start drawing when the mousedown event fires, and attach handlers to
    // draw a line to wherever the mouse moves to
    $("#canvas").mousedown(function (mouseEvent) {
      var position = getPosition(mouseEvent, sigCanvas);
      context.moveTo(position.X, position.Y);
      context.beginPath();

      // attach event handlers
      $(this).mousemove(function (mouseEvent) {
        drawLine(mouseEvent, sigCanvas, context);
      }).mouseup(function (mouseEvent) {
        finishDrawing(mouseEvent, sigCanvas, context);
      }).mouseout(function (mouseEvent) {
        finishDrawing(mouseEvent, sigCanvas, context);
      });
    });

  }
}

// draws a line to the x and y coordinates of the mouse event inside
// the specified element using the specified context
function drawLine(mouseEvent, sigCanvas, context) {

  var position = getPosition(mouseEvent, sigCanvas);

  context.lineTo(position.X, position.Y);
  context.stroke();
}

// draws a line from the last coordiantes in the path to the finishing
// coordinates and unbind any event handlers which need to be preceded
// by the mouse down event
function finishDrawing(mouseEvent, sigCanvas, context) {
  // draw the line to the finishing coordinates
  drawLine(mouseEvent, sigCanvas, context);

  context.closePath();

  // unbind any events which could draw
  $(sigCanvas).unbind("mousemove")
    .unbind("mouseup")
    .unbind("mouseout");
}

// Clear the canvas context using the canvas width and height
function clearCanvas(canvas, ctx) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function downloadImg() {
  window.indexStr++;
  $('.txt')[0].innerText = window.obj[window.indexStr].name;
  // var img = canvas.toDataURL("image/png"); 
  var img = canvas.toDataURL(); 
  $.ajax({
    type: "POST",
    url: "server.php",
    data: { 
       imgBase64: img,
       fileName: window.obj[window.indexStr - 1].name === '/' ? 'gach_cheo' : window.obj[window.indexStr - 1].name +'_'+window.obj[window.indexStr - 1].id,
       userId: window.uuid
    }
  }).done(function(o) {
    console.log('saved'); 
    // If you want the file to be visible in the browser 
    // - please modify the callback in javascript. All you
    // need is to return the url to the file, you just saved 
    // and than put the image in your browser.
  });



  // var a = $("<a>")
  //   .attr("href", img)
  //   .attr("download", "img.png")
  //   .appendTo("body");

  // a[0].click();

  // a.remove();

  clearCanvas(canvas, ctx);
}

function resetData() {
  window.indexStr = 0;
  $('.txt')[0].innerText = window.str[window.indexStr];
  window.userId = uuidv4();
}

function uuidv4() {
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  );
}