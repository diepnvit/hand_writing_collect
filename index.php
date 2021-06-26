<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>Freehand Drawing</title>
  <link rel="stylesheet" href="./style.css">

</head>

<body>
  <!-- partial:index.partial.html -->

  <div id="iframe">
    <!-- <div class="wrap-canvas"> -->
      <div class="txt"></div>
    <canvas id="canvas" width="400px" height="600px" class="img-canvas"></canvas>
    <img src="./img.png" class="img-canvas">
    <!-- </div> -->
    <div class="group-btn">
      <input type="submit" value="Tiếp theo" id="downloadbutton" class="btn" onclick="downloadImg();">
      <input type="submit" value="Làm lại" id="clearbutton" class="btn" onclick="clearCanvas(canvas,ctx);">
      <input type="submit" value="Tạo bộ mới" id="downloadbutton" class="btn" onclick="resetData();">
    </div>
  </div>

  <!--background-image: url('https://3.bp.blogspot.com/_jFM-Fd8NDFE/TLhmRK1h8AI/AAAAAAAAKcU/NKNPe051PbA/s1600/OldCanvas-5.jpg');-->
  <!-- partial -->
  <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/1.7.1/jquery.min.js'></script>
  <script src="./script.js"></script>

</body>

</html>