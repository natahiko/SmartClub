<?php
$folder = $_REQUEST["folder"];

if ($dir = opendir($folder)) {
    while (false !== ($file = readdir($dir))) {
        echo $file,' ';
    }
}
?>
