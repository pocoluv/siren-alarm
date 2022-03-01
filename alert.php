<?php
define('FILE', 'alertStatus');

$alertStatus = file_get_contents(FILE);

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    echo $alertStatus;
} elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
    file_put_contents(FILE, !$alertStatus);
    echo !$alertStatus;
}

?>
