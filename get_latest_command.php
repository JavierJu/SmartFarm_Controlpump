<?php
// MySQL 데이터베이스에 연결
$servername = "localhost";
$username = "javier";  // 사용자의 DB 정보
$password = "@Javierju12";  // 사용자의 DB 비밀번호
$dbname = "smartfarm_sensordata";  // DB 이름

// 연결 생성
$conn = new mysqli($servername, $username, $password, $dbname);

// 연결 확인
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// 최신 명령 조회
$sql = "SELECT command FROM pump_commands ORDER BY id DESC LIMIT 1";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // 최신 명령 출력
    $row = $result->fetch_assoc();
    echo $row['command'];  // "ON" 또는 "OFF" 반환
} else {
    echo "No order";
}

$conn->close();
