<?php
// backend.php
declare(strict_types = 1);

$postData = file_get_contents("php://input");
$data     = json_decode($postData, true);

if ($data !== null) {
    session_start();
    $_SESSION['naam'] = $data['naam'];
}
