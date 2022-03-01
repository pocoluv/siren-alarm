<?php
define('FILE', 'alertStatus');

$alertStatus = file_get_contents(FILE);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    file_put_contents(FILE, !$alertStatus);
<<<<<<< HEAD
    $alertStatus = !$alertStatus;
}

echo $alertStatus;
?>
=======
    echo !$alertStatus;
}

?>
>>>>>>> e3388aae4061b5c3d6bbbb895c6fc5b912ecd42a
