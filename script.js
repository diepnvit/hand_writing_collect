$(document).ready(function () {
  window.canvas = document.getElementById("canvas");
  window.ctx = canvas.getContext("2d");
  window.indexStr = 0;
  window.uuid = uuidv4();
  window.obj = [
    {
      "name": "A",
      "id": "65"
    },
    {
      "name": "B",
      "id": "66"
    },
    {
      "name": "C",
      "id": "67"
    },
    {
      "name": "D",
      "id": "68"
    },
    {
      "name": "E",
      "id": "69"
    },
    {
      "name": "F",
      "id": "70"
    },
    {
      "name": "G",
      "id": "71"
    },
    {
      "name": "H",
      "id": "72"
    },
    {
      "name": "I",
      "id": "73"
    },
    {
      "name": "J",
      "id": "74"
    },
    {
      "name": "K",
      "id": "75"
    },
    {
      "name": "L",
      "id": "76"
    },
    {
      "name": "M",
      "id": "77"
    },
    {
      "name": "N",
      "id": "78"
    },
    {
      "name": "O",
      "id": "79"
    },
    {
      "name": "P",
      "id": "80"
    },
    {
      "name": "Q",
      "id": "81"
    },
    {
      "name": "R",
      "id": "82"
    },
    {
      "name": "S",
      "id": "83"
    },
    {
      "name": "T",
      "id": "84"
    },
    {
      "name": "U",
      "id": "85"
    },
    {
      "name": "V",
      "id": "86"
    },
    {
      "name": "W",
      "id": "87"
    },
    {
      "name": "X",
      "id": "88"
    },
    {
      "name": "Y",
      "id": "89"
    },
    {
      "name": "Z",
      "id": "90"
    },
    {
      "name": "a",
      "id": "97"
    },
    {
      "name": "b",
      "id": "98"
    },
    {
      "name": "c",
      "id": "99"
    },
    {
      "name": "d",
      "id": "100"
    },
    {
      "name": "e",
      "id": "101"
    },
    {
      "name": "f",
      "id": "102"
    },
    {
      "name": "g",
      "id": "103"
    },
    {
      "name": "h",
      "id": "104"
    },
    {
      "name": "i",
      "id": "105"
    },
    {
      "name": "j",
      "id": "106"
    },
    {
      "name": "k",
      "id": "107"
    },
    {
      "name": "l",
      "id": "108"
    },
    {
      "name": "m",
      "id": "109"
    },
    {
      "name": "n",
      "id": "110"
    },
    {
      "name": "o",
      "id": "111"
    },
    {
      "name": "p",
      "id": "112"
    },
    {
      "name": "q",
      "id": "113"
    },
    {
      "name": "r",
      "id": "114"
    },
    {
      "name": "s",
      "id": "115"
    },
    {
      "name": "t",
      "id": "116"
    },
    {
      "name": "u",
      "id": "117"
    },
    {
      "name": "v",
      "id": "118"
    },
    {
      "name": "w",
      "id": "119"
    },
    {
      "name": "x",
      "id": "120"
    },
    {
      "name": "y",
      "id": "121"
    },
    {
      "name": "z",
      "id": "122"
    },
    {
      "name": "À",
      "id": "192"
    },
    {
      "name": "Á",
      "id": "193"
    },
    {
      "name": "Â",
      "id": "194"
    },
    {
      "name": "Ã",
      "id": "195"
    },
    {
      "name": "È",
      "id": "200"
    },
    {
      "name": "É",
      "id": "201"
    },
    {
      "name": "Ê",
      "id": "202"
    },
    {
      "name": "Ì",
      "id": "204"
    },
    {
      "name": "Í",
      "id": "205"
    },
    {
      "name": "Ò",
      "id": "210"
    },
    {
      "name": "Ó",
      "id": "211"
    },
    {
      "name": "Ô",
      "id": "212"
    },
    {
      "name": "Õ",
      "id": "213"
    },
    {
      "name": "Ù",
      "id": "217"
    },
    {
      "name": "Ú",
      "id": "218"
    },
    {
      "name": "Ý",
      "id": "221"
    },
    {
      "name": "à",
      "id": "224"
    },
    {
      "name": "á",
      "id": "225"
    },
    {
      "name": "â",
      "id": "226"
    },
    {
      "name": "ã",
      "id": "227"
    },
    {
      "name": "è",
      "id": "232"
    },
    {
      "name": "é",
      "id": "233"
    },
    {
      "name": "ê",
      "id": "234"
    },
    {
      "name": "ì",
      "id": "236"
    },
    {
      "name": "í",
      "id": "237"
    },
    {
      "name": "ò",
      "id": "242"
    },
    {
      "name": "ó",
      "id": "243"
    },
    {
      "name": "ô",
      "id": "244"
    },
    {
      "name": "õ",
      "id": "245"
    },
    {
      "name": "ù",
      "id": "249"
    },
    {
      "name": "ú",
      "id": "250"
    },
    {
      "name": "ý",
      "id": "253"
    },
    {
      "name": "Ă",
      "id": "258"
    },
    {
      "name": "ă",
      "id": "259"
    },
    {
      "name": "Đ",
      "id": "272"
    },
    {
      "name": "đ",
      "id": "273"
    },
    {
      "name": "Ĩ",
      "id": "296"
    },
    {
      "name": "ĩ",
      "id": "297"
    },
    {
      "name": "Ũ",
      "id": "360"
    },
    {
      "name": "ũ",
      "id": "361"
    },
    {
      "name": "Ơ",
      "id": "416"
    },
    {
      "name": "ơ",
      "id": "417"
    },
    {
      "name": "Ư",
      "id": "431"
    },
    {
      "name": "ư",
      "id": "432"
    },
    {
      "name": "Ạ",
      "id": "7840"
    },
    {
      "name": "ạ",
      "id": "7841"
    },
    {
      "name": "Ả",
      "id": "7842"
    },
    {
      "name": "ả",
      "id": "7843"
    },
    {
      "name": "Ấ",
      "id": "7844"
    },
    {
      "name": "ấ",
      "id": "7845"
    },
    {
      "name": "Ầ",
      "id": "7846"
    },
    {
      "name": "ầ",
      "id": "7847"
    },
    {
      "name": "Ẩ",
      "id": "7848"
    },
    {
      "name": "ẩ",
      "id": "7849"
    },
    {
      "name": "Ẫ",
      "id": "7850"
    },
    {
      "name": "ẫ",
      "id": "7851"
    },
    {
      "name": "Ậ",
      "id": "7852"
    },
    {
      "name": "ậ",
      "id": "7853"
    },
    {
      "name": "Ắ",
      "id": "7854"
    },
    {
      "name": "ắ",
      "id": "7855"
    },
    {
      "name": "Ằ",
      "id": "7856"
    },
    {
      "name": "ằ",
      "id": "7857"
    },
    {
      "name": "Ẳ",
      "id": "7858"
    },
    {
      "name": "ẳ",
      "id": "7859"
    },
    {
      "name": "Ẵ",
      "id": "7860"
    },
    {
      "name": "ẵ",
      "id": "7861"
    },
    {
      "name": "Ặ",
      "id": "7862"
    },
    {
      "name": "ặ",
      "id": "7863"
    },
    {
      "name": "Ẹ",
      "id": "7864"
    },
    {
      "name": "ẹ",
      "id": "7865"
    },
    {
      "name": "Ẻ",
      "id": "7866"
    },
    {
      "name": "ẻ",
      "id": "7867"
    },
    {
      "name": "Ẽ",
      "id": "7868"
    },
    {
      "name": "ẽ",
      "id": "7869"
    },
    {
      "name": "Ế",
      "id": "7870"
    },
    {
      "name": "ế",
      "id": "7871"
    },
    {
      "name": "Ề",
      "id": "7872"
    },
    {
      "name": "ề",
      "id": "7873"
    },
    {
      "name": "Ể",
      "id": "7874"
    },
    {
      "name": "ể",
      "id": "7875"
    },
    {
      "name": "Ễ",
      "id": "7876"
    },
    {
      "name": "ễ",
      "id": "7877"
    },
    {
      "name": "Ệ",
      "id": "7878"
    },
    {
      "name": "ệ",
      "id": "7879"
    },
    {
      "name": "Ỉ",
      "id": "7880"
    },
    {
      "name": "ỉ",
      "id": "7881"
    },
    {
      "name": "Ị",
      "id": "7882"
    },
    {
      "name": "ị",
      "id": "7883"
    },
    {
      "name": "Ọ",
      "id": "7884"
    },
    {
      "name": "ọ",
      "id": "7885"
    },
    {
      "name": "Ỏ",
      "id": "7886"
    },
    {
      "name": "ỏ",
      "id": "7887"
    },
    {
      "name": "Ố",
      "id": "7888"
    },
    {
      "name": "ố",
      "id": "7889"
    },
    {
      "name": "Ồ",
      "id": "7890"
    },
    {
      "name": "ồ",
      "id": "7891"
    },
    {
      "name": "Ổ",
      "id": "7892"
    },
    {
      "name": "ổ",
      "id": "7893"
    },
    {
      "name": "Ỗ",
      "id": "7894"
    },
    {
      "name": "ỗ",
      "id": "7895"
    },
    {
      "name": "Ộ",
      "id": "7896"
    },
    {
      "name": "ộ",
      "id": "7897"
    },
    {
      "name": "Ớ",
      "id": "7898"
    },
    {
      "name": "ớ",
      "id": "7899"
    },
    {
      "name": "Ờ",
      "id": "7900"
    },
    {
      "name": "ờ",
      "id": "7901"
    },
    {
      "name": "Ở",
      "id": "7902"
    },
    {
      "name": "ở",
      "id": "7903"
    },
    {
      "name": "Ỡ",
      "id": "7904"
    },
    {
      "name": "ỡ",
      "id": "7905"
    },
    {
      "name": "Ợ",
      "id": "7906"
    },
    {
      "name": "ợ",
      "id": "7907"
    },
    {
      "name": "Ụ",
      "id": "7908"
    },
    {
      "name": "ụ",
      "id": "7909"
    },
    {
      "name": "Ủ",
      "id": "7910"
    },
    {
      "name": "ủ",
      "id": "7911"
    },
    {
      "name": "Ứ",
      "id": "7912"
    },
    {
      "name": "ứ",
      "id": "7913"
    },
    {
      "name": "Ừ",
      "id": "7914"
    },
    {
      "name": "ừ",
      "id": "7915"
    },
    {
      "name": "Ử",
      "id": "7916"
    },
    {
      "name": "ử",
      "id": "7917"
    },
    {
      "name": "Ữ",
      "id": "7918"
    },
    {
      "name": "ữ",
      "id": "7919"
    },
    {
      "name": "Ự",
      "id": "7920"
    },
    {
      "name": "ự",
      "id": "7921"
    },
    {
      "name": "Ỳ",
      "id": "7922"
    },
    {
      "name": "ỳ",
      "id": "7923"
    },
    {
      "name": "Ỵ",
      "id": "7924"
    },
    {
      "name": "ỵ",
      "id": "7925"
    },
    {
      "name": "Ỷ",
      "id": "7926"
    },
    {
      "name": "ỷ",
      "id": "7927"
    },
    {
      "name": "Ỹ",
      "id": "7928"
    },
    {
      "name": "ỹ",
      "id": "7929"
    },
    {
      "name": "!",
      "id": "33"
    },
    {
      "name": "”",
      "id": "8221"
    },
    {
      "name": "%",
      "id": "37"
    },
    {
      "name": "&",
      "id": "38"
    },
    {
      "name": "’",
      "id": "8217"
    },
    {
      "name": "(",
      "id": "40"
    },
    {
      "name": ")",
      "id": "41"
    },
    {
      "name": "+",
      "id": "43"
    },
    {
      "name": ",",
      "id": "44"
    },
    {
      "name": "-",
      "id": "45"
    },
    {
      "name": ".",
      "id": "46"
    },
    {
      "name": "/",
      "id": "47"
    },
    {
      "name": "0",
      "id": "48"
    },
    {
      "name": "1",
      "id": "49"
    },
    {
      "name": "2",
      "id": "50"
    },
    {
      "name": "3",
      "id": "51"
    },
    {
      "name": "4",
      "id": "52"
    },
    {
      "name": "5",
      "id": "53"
    },
    {
      "name": "6",
      "id": "54"
    },
    {
      "name": "7",
      "id": "55"
    },
    {
      "name": "8",
      "id": "56"
    },
    {
      "name": "9",
      "id": "57"
    },
    {
      "name": ":",
      "id": "58"
    },
    {
      "name": ";",
      "id": "59"
    },
    {
      "name": "=",
      "id": "61"
    },
    {
      "name": "?",
      "id": "63"
    },
    {
      "name": "@",
      "id": "64"
    }
  ];
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