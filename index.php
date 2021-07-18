<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>Freehand Drawing</title>
  <link rel="stylesheet" href="./style.css">
  <script src="https://accounts.google.com/gsi/client" async defer></script>
  <script src="https://apis.google.com/js/platform.js" async defer></script>
  <meta name="google-signin-client_id" content="571039068278-432k0e6km71s2qjqmskvjsvttk9f79n0.apps.googleusercontent.com">


  <script>
  window.onload = function () {
    google.accounts.id.initialize({
      client_id: '571039068278-432k0e6km71s2qjqmskvjsvttk9f79n0.apps.googleusercontent.com',
      callback: handleCredentialResponse,
      cancel_on_tap_outside: false
    });
    google.accounts.id.prompt();
  }
  function handleCredentialResponse(res) {
    console.log(res);
    let dataRes = parseJwt(res.credential);
    let emailLogin = dataRes.email;
    window.emailLog = emailLogin;
  }
  function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
  };
</script>
</head>

<body>
  <!-- partial:index.partial.html -->

  <div id="iframe">
    <!-- <div class="wrap-canvas"> -->
      <div class="txt"></div>
      <div class="txt-pc"></div>
    <canvas id="canvas" width="400px" height="600px" class="img-canvas"></canvas>
    <img src="./img.png" class="img-canvas">
    <!-- </div> -->
    <div class="group-btn">
      <input type="submit" value="Tiếp theo" id="downloadbutton" class="btn btn-next" onclick="window.emailLog ? downloadImg() : alert('Login, please')">
      <input type="submit" value="Trở lại" id="backbutton" class="btn btn-back" onclick="window.emailLog ? back()  : alert('Login, please')">
      <input type="submit" value="Làm lại" id="clearbutton" class="btn btn-reset" onclick="window.emailLog ? clearCanvas(canvas,ctx) : alert('Login, please')">
      <input type="submit" value="Tạo bộ mới" id="resetbutton" class="btn btn-new" onclick="window.emailLog ? resetData() : alert('Login, please')">
    </div>
  </div>
  <div class="g-signin2 custom-google-btn" data-onsuccess="onSignIn"></div>

  <!--background-image: url('https://3.bp.blogspot.com/_jFM-Fd8NDFE/TLhmRK1h8AI/AAAAAAAAKcU/NKNPe051PbA/s1600/OldCanvas-5.jpg');-->
  <!-- partial -->
  <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/1.7.1/jquery.min.js'></script>
  <script src="./script.js"></script>

</body>

</html>