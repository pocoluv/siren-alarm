<?php
define('FILE', 'alertStatus');

$alertStatus = file_get_contents(FILE);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    file_put_contents(FILE, !$alertStatus);
    $alertStatus = !$alertStatus;
}

echo $alertStatus;
?>