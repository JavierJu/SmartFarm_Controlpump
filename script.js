// 릴레이제어
function controlRelay(command) {
    const url = `http://13.208.254.200/Controlpump/pump_control.php?command=${command}`;
    fetch(url)
        .then(response => response.text())
        .then(data => {
            alert(`Relay command ${command} executed. Server response: ${data}`);
            updateRelayStatus(command);  // 명령 후 상태 표시 업데이트

            if (command === 'ON') {
                startTimer(); // ON 버튼을 누르면 타이머 시작
            } else {
                stopTimer();  // OFF 버튼을 누르면 타이머 종료
            }

        })
        .catch(error => {
            alert("Error executing command: " + error);
        });
}

// 타이머 시작 함수
function startTimer() {
    seconds = 0; // 초기화
    updateTimerDisplay();
    timer = setInterval(() => {
        seconds++;
        updateTimerDisplay();
    }, 1000); // 1초마다 업데이트
}

// 타이머 종료 함수
function stopTimer() {
    clearInterval(timer); // 타이머 중지
    document.getElementById("timerDisplay").innerText = "Timer: Stopped"; // 타이머 종료 메시지
}

// 타이머 표시 업데이트
function updateTimerDisplay() {
    document.getElementById("timerDisplay").innerText = `Timer: ${seconds} seconds`;
}

function updateRelayStatus(status) {
    document.getElementById("relayStatus").innerText = `Current Relay Status: ${status}`;
}

function fetchInitialRelayStatus() {
    fetch("http://13.208.254.200/Controlpump/get_latest_command.php")
        .then(response => response.text())  // 텍스트로 응답 파싱
        .then(status => {
            updateRelayStatus(status.trim()); // 데이터 표시
        })
        .catch(error => {
            console.error("Error fetching initial relay status:", error);
        });
}

window.onload = fetchInitialRelayStatus;  // 페이지 로드시 초기 상태 불러오기