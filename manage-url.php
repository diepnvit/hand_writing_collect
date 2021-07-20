<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $url = $_POST["txt-url"];
        $myfile = fopen("url.txt", "w") or die("Unable to open file!");
        fwrite($myfile, $url);
        fclose($myfile);
        header("Location: ./index.php"); 
        exit();
    }
?>