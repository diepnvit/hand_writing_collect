<?php
	// requires php5
	define('UPLOAD_DIR', 'images/');
	$img = $_POST['imgBase64'];
    $fileName = $_POST['fileName'];
    $userId = $_POST['userId'];
	$img = str_replace('data:image/png;base64,', '', $img);
	$img = str_replace(' ', '_', $img);
	$data = base64_decode($img);
	
    if (!is_dir('images/' . $userId)) {
        // dir doesn't exist, make it
        mkdir('images/' . $userId);
    }
    $file = UPLOAD_DIR . $userId . '/' . $fileName . '.png';
	$success = file_put_contents($file, $data);
	print $success ? $file : 'Unable to save the file.';
?>