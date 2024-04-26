<?php
declare(strict_types = 1);

session_start();

$post = $_SESSION['naam'] ?? "empty";

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta charset="UTF-8">
    <script type="module" src="ajax.js" defer></script>
    <title>front end</title>
</head>
<body>
<input type="text" id="name" placeholder="Schrijf hier je naam"/>
<button type="button" id="send">Verstuur</button>

<pre>
    <?php print_r($post); ?>
</pre>
</body>
</html>