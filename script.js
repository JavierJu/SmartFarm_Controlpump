// 릴레이제어
function controlRelay(command) {
    const url = `http://13.208.254.200/Controlpump/pump_control.php?command=${command}`;
    fetch(url)
        .then(response => response.text())
        .then(data => {
            alert(`Relay command ${command} executed. Server response: ${data}`);
            updateRelayStatus(command);  // 명령 후 상태 표시 업데이트
        })
        .catch(error => {
            alert("Error executing command: " + error);
        });
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