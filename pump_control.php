<?php
$servername = "localhost"; // 데이터베이스 서버
$username = "javier"; // MySQL 사용자 이름
$password = "@Javierju12"; // MySQL 비밀번호
$dbname = "smartfarm_sensordata"; // 사용할 데이터베이스 이름

// 데이터베이스 연결
$conn = new mysqli($servername, $username, $password, $dbname);

// 연결 체크
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if (isset($_GET['command'])) {
    $command = $_GET['command'];

    // pump_commands 테이블에 명령 기록
    $stmt = $conn->prepare("INSERT INTO pump_commands (command) VALUES (?)");
    $stmt->bind_param("s", $command);
    $stmt->execute();

    echo "Relay status updated to: " . $command;
} else {
    // 가장 최근 명령어 읽기
    $result = $conn->query("SELECT command FROM pump_commands ORDER BY created_at DESC LIMIT 1");
    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        echo $row['command'];
    } else {
        echo "No order";
    }
}

// 데이터베이스 연결 종료
$conn->close();
