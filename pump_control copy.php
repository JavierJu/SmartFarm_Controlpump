<?php
// if (isset($_GET['command'])) {
//     $command = $_GET['command'];

//     // 기존 파일의 명령을 읽음
//     $file = '/var/www/html/Controlpump/pump_control.txt';
//     $currentCommand = file_get_contents($file);

//     // 파일의 기존 내용과 새로운 명령이 다를 때만 파일을 갱신
//     if ($currentCommand !== $command) {
//         file_put_contents($file, $command, LOCK_EX);
//         echo "Relay status updated to: " . $command;
//     } else {
//         echo "Relay status is already: " . $command;
//     }
// } else {
//     echo "No command received.";
// }
